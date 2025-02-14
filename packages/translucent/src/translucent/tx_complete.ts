import { C, CTransaction } from "../core/mod";
import type {
  PrivateKey,
  Transaction,
  TransactionWitnesses,
  TxHash,
} from "../types/mod";
import { Translucent } from "./translucent";
import { TxSigned } from "./tx_signed";
import { fromHex, toHex } from "../utils/mod";

export class TxComplete {
  txComplete: CTransaction;
  witnessSetBuilder;
  private tasks: (() => Promise<void>)[];
  private translucent: Translucent;
  fee: number;
  exUnits: { cpu: number; mem: number } | null = null;

  constructor(translucent: Translucent, tx: CTransaction) {
    this.translucent = translucent;
    this.txComplete = tx;
    this.witnessSetBuilder = C.TransactionWitnessSetBuilder.new();
    this.tasks = [];

    this.fee = parseInt(tx.body().fee().to_str());
    const redeemers = tx.witness_set().redeemers();
    if (redeemers) {
      const exUnits = { cpu: 0, mem: 0 };
      for (let i = 0; i < redeemers.len(); i++) {
        const redeemer = redeemers.get(i);
        exUnits.cpu += parseInt(redeemer.ex_units().steps().to_str());
        exUnits.mem += parseInt(redeemer.ex_units().mem().to_str());
      }
      this.exUnits = exUnits;
    }
  }
  sign(): TxComplete {
    this.tasks.push(async () => {
      const witnesses = await this.translucent.wallet.signTx(this.txComplete);
      this.witnessSetBuilder.add_existing(witnesses);
    });
    return this;
  }

  /** Add an extra signature from a private key. */
  signWithPrivateKey(privateKey: PrivateKey): TxComplete {
    const priv = C.PrivateKey.from_bech32(privateKey);
    const witness = C.make_vkey_witness(
      C.hash_transaction(this.txComplete.body()),
      priv,
    );
    this.witnessSetBuilder.add_vkey(witness);
    return this;
  }

  /** Sign the transaction and return the witnesses that were just made. */
  async partialSign(): Promise<TransactionWitnesses> {
    const witnesses = await this.translucent.wallet.signTx(this.txComplete);
    this.witnessSetBuilder.add_existing(witnesses);
    return toHex(witnesses.to_bytes());
  }

  /**
   * Sign the transaction and return the witnesses that were just made.
   * Add an extra signature from a private key.
   */
  partialSignWithPrivateKey(privateKey: PrivateKey): TransactionWitnesses {
    const priv = C.PrivateKey.from_bech32(privateKey);
    const witness = C.make_vkey_witness(
      C.hash_transaction(this.txComplete.body()),
      priv,
    );
    this.witnessSetBuilder.add_vkey(witness);
    const witnesses = C.TransactionWitnessSetBuilder.new();
    witnesses.add_vkey(witness);
    return toHex(witnesses.build().to_bytes());
  }

  /** Sign the transaction with the given witnesses. */
  assemble(witnesses: TransactionWitnesses[]): TxComplete {
    witnesses.forEach((witness) => {
      const witnessParsed = C.TransactionWitnessSet.from_bytes(
        fromHex(witness),
      );
      this.witnessSetBuilder.add_existing(witnessParsed);
    });
    return this;
  }

  async complete(options?: { hasPlutusData?: boolean }): Promise<TxSigned> {
    for (const task of this.tasks) {
      await task();
    }
    const witnessSet = this.txComplete.witness_set();
    this.witnessSetBuilder.add_existing(witnessSet);

    // FIX CML
    if (options?.hasPlutusData) {
      const plutusData = witnessSet.plutus_data();
      if (plutusData && plutusData.len() > 0) {
        for (let i = 0; i < plutusData.len(); i++) {
          this.witnessSetBuilder.add_plutus_datum(plutusData.get(i));
        }
      }
    }

    const signedTx = C.Transaction.new(
      this.txComplete.body(),
      this.witnessSetBuilder.build(),
      this.txComplete.auxiliary_data(),
    );
    return new TxSigned(this.translucent, signedTx);
  }

  /** Return the transaction in Hex encoded Cbor. */
  toString(): Transaction {
    return toHex(this.txComplete.to_bytes());
  }

  /** Return the transaction hash. */
  toHash(): TxHash {
    return C.hash_transaction(this.txComplete.body()).to_hex();
  }
}
