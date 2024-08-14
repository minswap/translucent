import { Address, Credential, Datum, DatumHash, Delegation, OutRef, ProtocolParameters, Provider, RewardAddress, Transaction, TxHash, Unit, UTxO } from "../mod";

export class Blockfrost implements Provider {
  url: string;
  projectId: string;

  constructor(url: string, projectId?: string) {
    this.url = url;
    this.projectId = projectId || "";
  }
  getUtxos(addressOrCredential: Address | Credential): Promise<UTxO[]> {
    throw new Error("Method not implemented.");
  }
  getUtxosWithUnit(addressOrCredential: Address | Credential, unit: Unit): Promise<UTxO[]> {
    throw new Error("Method not implemented.");
  }
  getUtxoByUnit(unit: Unit): Promise<UTxO> {
    throw new Error("Method not implemented.");
  }
  getUtxosByOutRef(outRefs: Array<OutRef>): Promise<UTxO[]> {
    throw new Error("Method not implemented.");
  }
  getDelegation(rewardAddress: RewardAddress): Promise<Delegation> {
    throw new Error("Method not implemented.");
  }
  getDatum(datumHash: DatumHash): Promise<Datum> {
    throw new Error("Method not implemented.");
  }
  awaitTx(txHash: TxHash, checkInterval?: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  submitTx(tx: Transaction): Promise<TxHash> {
    throw new Error("Method not implemented.");
  }
  getCurrentSlot(): Promise<number> {
    throw new Error("Method not implemented.");
  }

  async getProtocolParameters(): Promise<ProtocolParameters> {
    const result = await fetch(`${this.url}/epochs/latest/parameters`, {
      headers: { project_id: this.projectId },
    }).then((res) => res.json());

    // Decimal numbers in Maestro are given as ratio of two numbers represented by string of format "firstNumber/secondNumber".
    const rationalFromRationalString = (str: string): [bigint, bigint] => {
      const forwardSlashIndex = str.indexOf("/");
      return [
        BigInt(str.slice(0, forwardSlashIndex)),
        BigInt(str.slice(forwardSlashIndex + 1)),
      ];
    };

    return {
      minFeeA: parseInt(result.min_fee_a),
      minFeeB: parseInt(result.min_fee_b),
      maxTxSize: parseInt(result.max_tx_size),
      maxValSize: parseInt(result.max_val_size),
      keyDeposit: BigInt(result.key_deposit),
      poolDeposit: BigInt(result.pool_deposit),
      priceMem: rationalFromRationalString(result.price_mem),
      priceStep: rationalFromRationalString(result.price_step),
      maxTxExMem: BigInt(result.max_tx_ex_mem),
      maxTxExSteps: BigInt(result.max_tx_ex_steps),
      coinsPerUtxoByte: BigInt(result.coins_per_utxo_size),
      collateralPercentage: parseInt(result.collateral_percent),
      maxCollateralInputs: parseInt(result.max_collateral_inputs),
      costModels: result.cost_models,
    };
  }
}

