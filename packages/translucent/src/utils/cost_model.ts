import { C } from "../core/mod";
import type { CostModels } from "../mod";
import type { ProtocolParameters } from "../types/types";

export function createCostModels(costModels: CostModels) {
  const costmdls = C.Costmdls.new();

  // add plutus v1
  const costmdlV1 = C.CostModel.empty_model(C.Language.new_plutus_v1());
  Object.values(costModels.PlutusV1).forEach((cost, index) => {
    costmdlV1.set(index, C.Int.new(C.BigNum.from_str(cost.toString())));
  });
  costmdls.insert(costmdlV1);

  // add plutus v2
  const costmdlV2 = C.CostModel.empty_model(C.Language.new_plutus_v2());
  Object.values(costModels.PlutusV2 || []).forEach((cost, index) => {
    costmdlV2.set(index, C.Int.new(C.BigNum.from_str(cost.toString())));
  });
  costmdls.insert(costmdlV2);

  return costmdls;
}

export const PROTOCOL_PARAMETERS_DEFAULT: ProtocolParameters = {
  minFeeA: 44,
  minFeeB: 155381,
  maxTxSize: 16384,
  maxValSize: 5000,
  keyDeposit: 2000000n,
  poolDeposit: 500000000n,
  priceMem: [577n, 10000n],
  priceStep: [721n, 10_000_000n],
  maxTxExMem: 14000000n,
  maxTxExSteps: 10000000000n,
  coinsPerUtxoByte: 4310n,
  collateralPercentage: 150,
  maxCollateralInputs: 3,
  costModels: {
    PlutusV1: {
      "addInteger-cpu-arguments-intercept": 205665,
      "addInteger-cpu-arguments-slope": 812,
      "addInteger-memory-arguments-intercept": 1,
      "addInteger-memory-arguments-slope": 1,
      "appendByteString-cpu-arguments-intercept": 1000,
      "appendByteString-cpu-arguments-slope": 571,
      "appendByteString-memory-arguments-intercept": 0,
      "appendByteString-memory-arguments-slope": 1,
      "appendString-cpu-arguments-intercept": 1000,
      "appendString-cpu-arguments-slope": 24177,
      "appendString-memory-arguments-intercept": 4,
      "appendString-memory-arguments-slope": 1,
      "bData-cpu-arguments": 1000,
      "bData-memory-arguments": 32,
      "blake2b_256-cpu-arguments-intercept": 117366,
      "blake2b_256-cpu-arguments-slope": 10475,
      "blake2b_256-memory-arguments": 4,
      "cekApplyCost-exBudgetCPU": 23000,
      "cekApplyCost-exBudgetMemory": 100,
      "cekBuiltinCost-exBudgetCPU": 23000,
      "cekBuiltinCost-exBudgetMemory": 100,
      "cekConstCost-exBudgetCPU": 23000,
      "cekConstCost-exBudgetMemory": 100,
      "cekDelayCost-exBudgetCPU": 23000,
      "cekDelayCost-exBudgetMemory": 100,
      "cekForceCost-exBudgetCPU": 23000,
      "cekForceCost-exBudgetMemory": 100,
      "cekLamCost-exBudgetCPU": 23000,
      "cekLamCost-exBudgetMemory": 100,
      "cekStartupCost-exBudgetCPU": 100,
      "cekStartupCost-exBudgetMemory": 100,
      "cekVarCost-exBudgetCPU": 23000,
      "cekVarCost-exBudgetMemory": 100,
      "chooseData-cpu-arguments": 19537,
      "chooseData-memory-arguments": 32,
      "chooseList-cpu-arguments": 175354,
      "chooseList-memory-arguments": 32,
      "chooseUnit-cpu-arguments": 46417,
      "chooseUnit-memory-arguments": 4,
      "consByteString-cpu-arguments-intercept": 221973,
      "consByteString-cpu-arguments-slope": 511,
      "consByteString-memory-arguments-intercept": 0,
      "consByteString-memory-arguments-slope": 1,
      "constrData-cpu-arguments": 89141,
      "constrData-memory-arguments": 32,
      "decodeUtf8-cpu-arguments-intercept": 497525,
      "decodeUtf8-cpu-arguments-slope": 14068,
      "decodeUtf8-memory-arguments-intercept": 4,
      "decodeUtf8-memory-arguments-slope": 2,
      "divideInteger-cpu-arguments-constant": 196500,
      "divideInteger-cpu-arguments-model-arguments-intercept": 453240,
      "divideInteger-cpu-arguments-model-arguments-slope": 220,
      "divideInteger-memory-arguments-intercept": 0,
      "divideInteger-memory-arguments-minimum": 1,
      "divideInteger-memory-arguments-slope": 1,
      "encodeUtf8-cpu-arguments-intercept": 1000,
      "encodeUtf8-cpu-arguments-slope": 28662,
      "encodeUtf8-memory-arguments-intercept": 4,
      "encodeUtf8-memory-arguments-slope": 2,
      "equalsByteString-cpu-arguments-constant": 245000,
      "equalsByteString-cpu-arguments-intercept": 216773,
      "equalsByteString-cpu-arguments-slope": 62,
      "equalsByteString-memory-arguments": 1,
      "equalsData-cpu-arguments-intercept": 1060367,
      "equalsData-cpu-arguments-slope": 12586,
      "equalsData-memory-arguments": 1,
      "equalsInteger-cpu-arguments-intercept": 208512,
      "equalsInteger-cpu-arguments-slope": 421,
      "equalsInteger-memory-arguments": 1,
      "equalsString-cpu-arguments-constant": 187000,
      "equalsString-cpu-arguments-intercept": 1000,
      "equalsString-cpu-arguments-slope": 52998,
      "equalsString-memory-arguments": 1,
      "fstPair-cpu-arguments": 80436,
      "fstPair-memory-arguments": 32,
      "headList-cpu-arguments": 43249,
      "headList-memory-arguments": 32,
      "iData-cpu-arguments": 1000,
      "iData-memory-arguments": 32,
      "ifThenElse-cpu-arguments": 80556,
      "ifThenElse-memory-arguments": 1,
      "indexByteString-cpu-arguments": 57667,
      "indexByteString-memory-arguments": 4,
      "lengthOfByteString-cpu-arguments": 1000,
      "lengthOfByteString-memory-arguments": 10,
      "lessThanByteString-cpu-arguments-intercept": 197145,
      "lessThanByteString-cpu-arguments-slope": 156,
      "lessThanByteString-memory-arguments": 1,
      "lessThanEqualsByteString-cpu-arguments-intercept": 197145,
      "lessThanEqualsByteString-cpu-arguments-slope": 156,
      "lessThanEqualsByteString-memory-arguments": 1,
      "lessThanEqualsInteger-cpu-arguments-intercept": 204924,
      "lessThanEqualsInteger-cpu-arguments-slope": 473,
      "lessThanEqualsInteger-memory-arguments": 1,
      "lessThanInteger-cpu-arguments-intercept": 208896,
      "lessThanInteger-cpu-arguments-slope": 511,
      "lessThanInteger-memory-arguments": 1,
      "listData-cpu-arguments": 52467,
      "listData-memory-arguments": 32,
      "mapData-cpu-arguments": 64832,
      "mapData-memory-arguments": 32,
      "mkCons-cpu-arguments": 65493,
      "mkCons-memory-arguments": 32,
      "mkNilData-cpu-arguments": 22558,
      "mkNilData-memory-arguments": 32,
      "mkNilPairData-cpu-arguments": 16563,
      "mkNilPairData-memory-arguments": 32,
      "mkPairData-cpu-arguments": 76511,
      "mkPairData-memory-arguments": 32,
      "modInteger-cpu-arguments-constant": 196500,
      "modInteger-cpu-arguments-model-arguments-intercept": 453240,
      "modInteger-cpu-arguments-model-arguments-slope": 220,
      "modInteger-memory-arguments-intercept": 0,
      "modInteger-memory-arguments-minimum": 1,
      "modInteger-memory-arguments-slope": 1,
      "multiplyInteger-cpu-arguments-intercept": 69522,
      "multiplyInteger-cpu-arguments-slope": 11687,
      "multiplyInteger-memory-arguments-intercept": 0,
      "multiplyInteger-memory-arguments-slope": 1,
      "nullList-cpu-arguments": 60091,
      "nullList-memory-arguments": 32,
      "quotientInteger-cpu-arguments-constant": 196500,
      "quotientInteger-cpu-arguments-model-arguments-intercept": 453240,
      "quotientInteger-cpu-arguments-model-arguments-slope": 220,
      "quotientInteger-memory-arguments-intercept": 0,
      "quotientInteger-memory-arguments-minimum": 1,
      "quotientInteger-memory-arguments-slope": 1,
      "remainderInteger-cpu-arguments-constant": 196500,
      "remainderInteger-cpu-arguments-model-arguments-intercept": 453240,
      "remainderInteger-cpu-arguments-model-arguments-slope": 220,
      "remainderInteger-memory-arguments-intercept": 0,
      "remainderInteger-memory-arguments-minimum": 1,
      "remainderInteger-memory-arguments-slope": 1,
      "sha2_256-cpu-arguments-intercept": 806990,
      "sha2_256-cpu-arguments-slope": 30482,
      "sha2_256-memory-arguments": 4,
      "sha3_256-cpu-arguments-intercept": 1927926,
      "sha3_256-cpu-arguments-slope": 82523,
      "sha3_256-memory-arguments": 4,
      "sliceByteString-cpu-arguments-intercept": 265318,
      "sliceByteString-cpu-arguments-slope": 0,
      "sliceByteString-memory-arguments-intercept": 4,
      "sliceByteString-memory-arguments-slope": 0,
      "sndPair-cpu-arguments": 85931,
      "sndPair-memory-arguments": 32,
      "subtractInteger-cpu-arguments-intercept": 205665,
      "subtractInteger-cpu-arguments-slope": 812,
      "subtractInteger-memory-arguments-intercept": 1,
      "subtractInteger-memory-arguments-slope": 1,
      "tailList-cpu-arguments": 41182,
      "tailList-memory-arguments": 32,
      "trace-cpu-arguments": 212342,
      "trace-memory-arguments": 32,
      "unBData-cpu-arguments": 31220,
      "unBData-memory-arguments": 32,
      "unConstrData-cpu-arguments": 32696,
      "unConstrData-memory-arguments": 32,
      "unIData-cpu-arguments": 43357,
      "unIData-memory-arguments": 32,
      "unListData-cpu-arguments": 32247,
      "unListData-memory-arguments": 32,
      "unMapData-cpu-arguments": 38314,
      "unMapData-memory-arguments": 32,
      "verifyEd25519Signature-cpu-arguments-intercept": 9462713,
      "verifyEd25519Signature-cpu-arguments-slope": 1021,
      "verifyEd25519Signature-memory-arguments": 10,
    },
    PlutusV2: {
      "addInteger-cpu-arguments-intercept": 205665,
      "addInteger-cpu-arguments-slope": 812,
      "addInteger-memory-arguments-intercept": 1,
      "addInteger-memory-arguments-slope": 1,
      "appendByteString-cpu-arguments-intercept": 1000,
      "appendByteString-cpu-arguments-slope": 571,
      "appendByteString-memory-arguments-intercept": 0,
      "appendByteString-memory-arguments-slope": 1,
      "appendString-cpu-arguments-intercept": 1000,
      "appendString-cpu-arguments-slope": 24177,
      "appendString-memory-arguments-intercept": 4,
      "appendString-memory-arguments-slope": 1,
      "bData-cpu-arguments": 1000,
      "bData-memory-arguments": 32,
      "blake2b_256-cpu-arguments-intercept": 117366,
      "blake2b_256-cpu-arguments-slope": 10475,
      "blake2b_256-memory-arguments": 4,
      "cekApplyCost-exBudgetCPU": 23000,
      "cekApplyCost-exBudgetMemory": 100,
      "cekBuiltinCost-exBudgetCPU": 23000,
      "cekBuiltinCost-exBudgetMemory": 100,
      "cekConstCost-exBudgetCPU": 23000,
      "cekConstCost-exBudgetMemory": 100,
      "cekDelayCost-exBudgetCPU": 23000,
      "cekDelayCost-exBudgetMemory": 100,
      "cekForceCost-exBudgetCPU": 23000,
      "cekForceCost-exBudgetMemory": 100,
      "cekLamCost-exBudgetCPU": 23000,
      "cekLamCost-exBudgetMemory": 100,
      "cekStartupCost-exBudgetCPU": 100,
      "cekStartupCost-exBudgetMemory": 100,
      "cekVarCost-exBudgetCPU": 23000,
      "cekVarCost-exBudgetMemory": 100,
      "chooseData-cpu-arguments": 19537,
      "chooseData-memory-arguments": 32,
      "chooseList-cpu-arguments": 175354,
      "chooseList-memory-arguments": 32,
      "chooseUnit-cpu-arguments": 46417,
      "chooseUnit-memory-arguments": 4,
      "consByteString-cpu-arguments-intercept": 221973,
      "consByteString-cpu-arguments-slope": 511,
      "consByteString-memory-arguments-intercept": 0,
      "consByteString-memory-arguments-slope": 1,
      "constrData-cpu-arguments": 89141,
      "constrData-memory-arguments": 32,
      "decodeUtf8-cpu-arguments-intercept": 497525,
      "decodeUtf8-cpu-arguments-slope": 14068,
      "decodeUtf8-memory-arguments-intercept": 4,
      "decodeUtf8-memory-arguments-slope": 2,
      "divideInteger-cpu-arguments-constant": 196500,
      "divideInteger-cpu-arguments-model-arguments-intercept": 453240,
      "divideInteger-cpu-arguments-model-arguments-slope": 220,
      "divideInteger-memory-arguments-intercept": 0,
      "divideInteger-memory-arguments-minimum": 1,
      "divideInteger-memory-arguments-slope": 1,
      "encodeUtf8-cpu-arguments-intercept": 1000,
      "encodeUtf8-cpu-arguments-slope": 28662,
      "encodeUtf8-memory-arguments-intercept": 4,
      "encodeUtf8-memory-arguments-slope": 2,
      "equalsByteString-cpu-arguments-constant": 245000,
      "equalsByteString-cpu-arguments-intercept": 216773,
      "equalsByteString-cpu-arguments-slope": 62,
      "equalsByteString-memory-arguments": 1,
      "equalsData-cpu-arguments-intercept": 1060367,
      "equalsData-cpu-arguments-slope": 12586,
      "equalsData-memory-arguments": 1,
      "equalsInteger-cpu-arguments-intercept": 208512,
      "equalsInteger-cpu-arguments-slope": 421,
      "equalsInteger-memory-arguments": 1,
      "equalsString-cpu-arguments-constant": 187000,
      "equalsString-cpu-arguments-intercept": 1000,
      "equalsString-cpu-arguments-slope": 52998,
      "equalsString-memory-arguments": 1,
      "fstPair-cpu-arguments": 80436,
      "fstPair-memory-arguments": 32,
      "headList-cpu-arguments": 43249,
      "headList-memory-arguments": 32,
      "iData-cpu-arguments": 1000,
      "iData-memory-arguments": 32,
      "ifThenElse-cpu-arguments": 80556,
      "ifThenElse-memory-arguments": 1,
      "indexByteString-cpu-arguments": 57667,
      "indexByteString-memory-arguments": 4,
      "lengthOfByteString-cpu-arguments": 1000,
      "lengthOfByteString-memory-arguments": 10,
      "lessThanByteString-cpu-arguments-intercept": 197145,
      "lessThanByteString-cpu-arguments-slope": 156,
      "lessThanByteString-memory-arguments": 1,
      "lessThanEqualsByteString-cpu-arguments-intercept": 197145,
      "lessThanEqualsByteString-cpu-arguments-slope": 156,
      "lessThanEqualsByteString-memory-arguments": 1,
      "lessThanEqualsInteger-cpu-arguments-intercept": 204924,
      "lessThanEqualsInteger-cpu-arguments-slope": 473,
      "lessThanEqualsInteger-memory-arguments": 1,
      "lessThanInteger-cpu-arguments-intercept": 208896,
      "lessThanInteger-cpu-arguments-slope": 511,
      "lessThanInteger-memory-arguments": 1,
      "listData-cpu-arguments": 52467,
      "listData-memory-arguments": 32,
      "mapData-cpu-arguments": 64832,
      "mapData-memory-arguments": 32,
      "mkCons-cpu-arguments": 65493,
      "mkCons-memory-arguments": 32,
      "mkNilData-cpu-arguments": 22558,
      "mkNilData-memory-arguments": 32,
      "mkNilPairData-cpu-arguments": 16563,
      "mkNilPairData-memory-arguments": 32,
      "mkPairData-cpu-arguments": 76511,
      "mkPairData-memory-arguments": 32,
      "modInteger-cpu-arguments-constant": 196500,
      "modInteger-cpu-arguments-model-arguments-intercept": 453240,
      "modInteger-cpu-arguments-model-arguments-slope": 220,
      "modInteger-memory-arguments-intercept": 0,
      "modInteger-memory-arguments-minimum": 1,
      "modInteger-memory-arguments-slope": 1,
      "multiplyInteger-cpu-arguments-intercept": 69522,
      "multiplyInteger-cpu-arguments-slope": 11687,
      "multiplyInteger-memory-arguments-intercept": 0,
      "multiplyInteger-memory-arguments-slope": 1,
      "nullList-cpu-arguments": 60091,
      "nullList-memory-arguments": 32,
      "quotientInteger-cpu-arguments-constant": 196500,
      "quotientInteger-cpu-arguments-model-arguments-intercept": 453240,
      "quotientInteger-cpu-arguments-model-arguments-slope": 220,
      "quotientInteger-memory-arguments-intercept": 0,
      "quotientInteger-memory-arguments-minimum": 1,
      "quotientInteger-memory-arguments-slope": 1,
      "remainderInteger-cpu-arguments-constant": 196500,
      "remainderInteger-cpu-arguments-model-arguments-intercept": 453240,
      "remainderInteger-cpu-arguments-model-arguments-slope": 220,
      "remainderInteger-memory-arguments-intercept": 0,
      "remainderInteger-memory-arguments-minimum": 1,
      "remainderInteger-memory-arguments-slope": 1,
      "serialiseData-cpu-arguments-intercept": 1159724,
      "serialiseData-cpu-arguments-slope": 392670,
      "serialiseData-memory-arguments-intercept": 0,
      "serialiseData-memory-arguments-slope": 2,
      "sha2_256-cpu-arguments-intercept": 806990,
      "sha2_256-cpu-arguments-slope": 30482,
      "sha2_256-memory-arguments": 4,
      "sha3_256-cpu-arguments-intercept": 1927926,
      "sha3_256-cpu-arguments-slope": 82523,
      "sha3_256-memory-arguments": 4,
      "sliceByteString-cpu-arguments-intercept": 265318,
      "sliceByteString-cpu-arguments-slope": 0,
      "sliceByteString-memory-arguments-intercept": 4,
      "sliceByteString-memory-arguments-slope": 0,
      "sndPair-cpu-arguments": 85931,
      "sndPair-memory-arguments": 32,
      "subtractInteger-cpu-arguments-intercept": 205665,
      "subtractInteger-cpu-arguments-slope": 812,
      "subtractInteger-memory-arguments-intercept": 1,
      "subtractInteger-memory-arguments-slope": 1,
      "tailList-cpu-arguments": 41182,
      "tailList-memory-arguments": 32,
      "trace-cpu-arguments": 212342,
      "trace-memory-arguments": 32,
      "unBData-cpu-arguments": 31220,
      "unBData-memory-arguments": 32,
      "unConstrData-cpu-arguments": 32696,
      "unConstrData-memory-arguments": 32,
      "unIData-cpu-arguments": 43357,
      "unIData-memory-arguments": 32,
      "unListData-cpu-arguments": 32247,
      "unListData-memory-arguments": 32,
      "unMapData-cpu-arguments": 38314,
      "unMapData-memory-arguments": 32,
      "verifyEcdsaSecp256k1Signature-cpu-arguments": 35892428,
      "verifyEcdsaSecp256k1Signature-memory-arguments": 10,
      "verifyEd25519Signature-cpu-arguments-intercept": 57996947,
      "verifyEd25519Signature-cpu-arguments-slope": 18975,
      "verifyEd25519Signature-memory-arguments": 10,
      "verifySchnorrSecp256k1Signature-cpu-arguments-intercept": 38887044,
      "verifySchnorrSecp256k1Signature-cpu-arguments-slope": 32947,
      "verifySchnorrSecp256k1Signature-memory-arguments": 10,
    },
  },
};

export const costModelKeys = {
  PlutusV1: [
    "addInteger-cpu-arguments-intercept",
    "addInteger-cpu-arguments-slope",
    "addInteger-memory-arguments-intercept",
    "addInteger-memory-arguments-slope",
    "appendByteString-cpu-arguments-intercept",
    "appendByteString-cpu-arguments-slope",
    "appendByteString-memory-arguments-intercept",
    "appendByteString-memory-arguments-slope",
    "appendString-cpu-arguments-intercept",
    "appendString-cpu-arguments-slope",
    "appendString-memory-arguments-intercept",
    "appendString-memory-arguments-slope",
    "bData-cpu-arguments",
    "bData-memory-arguments",
    "blake2b_256-cpu-arguments-intercept",
    "blake2b_256-cpu-arguments-slope",
    "blake2b_256-memory-arguments",
    "cekApplyCost-exBudgetCPU",
    "cekApplyCost-exBudgetMemory",
    "cekBuiltinCost-exBudgetCPU",
    "cekBuiltinCost-exBudgetMemory",
    "cekConstCost-exBudgetCPU",
    "cekConstCost-exBudgetMemory",
    "cekDelayCost-exBudgetCPU",
    "cekDelayCost-exBudgetMemory",
    "cekForceCost-exBudgetCPU",
    "cekForceCost-exBudgetMemory",
    "cekLamCost-exBudgetCPU",
    "cekLamCost-exBudgetMemory",
    "cekStartupCost-exBudgetCPU",
    "cekStartupCost-exBudgetMemory",
    "cekVarCost-exBudgetCPU",
    "cekVarCost-exBudgetMemory",
    "chooseData-cpu-arguments",
    "chooseData-memory-arguments",
    "chooseList-cpu-arguments",
    "chooseList-memory-arguments",
    "chooseUnit-cpu-arguments",
    "chooseUnit-memory-arguments",
    "consByteString-cpu-arguments-intercept",
    "consByteString-cpu-arguments-slope",
    "consByteString-memory-arguments-intercept",
    "consByteString-memory-arguments-slope",
    "constrData-cpu-arguments",
    "constrData-memory-arguments",
    "decodeUtf8-cpu-arguments-intercept",
    "decodeUtf8-cpu-arguments-slope",
    "decodeUtf8-memory-arguments-intercept",
    "decodeUtf8-memory-arguments-slope",
    "divideInteger-cpu-arguments-constant",
    "divideInteger-cpu-arguments-model-arguments-intercept",
    "divideInteger-cpu-arguments-model-arguments-slope",
    "divideInteger-memory-arguments-intercept",
    "divideInteger-memory-arguments-minimum",
    "divideInteger-memory-arguments-slope",
    "encodeUtf8-cpu-arguments-intercept",
    "encodeUtf8-cpu-arguments-slope",
    "encodeUtf8-memory-arguments-intercept",
    "encodeUtf8-memory-arguments-slope",
    "equalsByteString-cpu-arguments-constant",
    "equalsByteString-cpu-arguments-intercept",
    "equalsByteString-cpu-arguments-slope",
    "equalsByteString-memory-arguments",
    "equalsData-cpu-arguments-intercept",
    "equalsData-cpu-arguments-slope",
    "equalsData-memory-arguments",
    "equalsInteger-cpu-arguments-intercept",
    "equalsInteger-cpu-arguments-slope",
    "equalsInteger-memory-arguments",
    "equalsString-cpu-arguments-constant",
    "equalsString-cpu-arguments-intercept",
    "equalsString-cpu-arguments-slope",
    "equalsString-memory-arguments",
    "fstPair-cpu-arguments",
    "fstPair-memory-arguments",
    "headList-cpu-arguments",
    "headList-memory-arguments",
    "iData-cpu-arguments",
    "iData-memory-arguments",
    "ifThenElse-cpu-arguments",
    "ifThenElse-memory-arguments",
    "indexByteString-cpu-arguments",
    "indexByteString-memory-arguments",
    "lengthOfByteString-cpu-arguments",
    "lengthOfByteString-memory-arguments",
    "lessThanByteString-cpu-arguments-intercept",
    "lessThanByteString-cpu-arguments-slope",
    "lessThanByteString-memory-arguments",
    "lessThanEqualsByteString-cpu-arguments-intercept",
    "lessThanEqualsByteString-cpu-arguments-slope",
    "lessThanEqualsByteString-memory-arguments",
    "lessThanEqualsInteger-cpu-arguments-intercept",
    "lessThanEqualsInteger-cpu-arguments-slope",
    "lessThanEqualsInteger-memory-arguments",
    "lessThanInteger-cpu-arguments-intercept",
    "lessThanInteger-cpu-arguments-slope",
    "lessThanInteger-memory-arguments",
    "listData-cpu-arguments",
    "listData-memory-arguments",
    "mapData-cpu-arguments",
    "mapData-memory-arguments",
    "mkCons-cpu-arguments",
    "mkCons-memory-arguments",
    "mkNilData-cpu-arguments",
    "mkNilData-memory-arguments",
    "mkNilPairData-cpu-arguments",
    "mkNilPairData-memory-arguments",
    "mkPairData-cpu-arguments",
    "mkPairData-memory-arguments",
    "modInteger-cpu-arguments-constant",
    "modInteger-cpu-arguments-model-arguments-intercept",
    "modInteger-cpu-arguments-model-arguments-slope",
    "modInteger-memory-arguments-intercept",
    "modInteger-memory-arguments-minimum",
    "modInteger-memory-arguments-slope",
    "multiplyInteger-cpu-arguments-intercept",
    "multiplyInteger-cpu-arguments-slope",
    "multiplyInteger-memory-arguments-intercept",
    "multiplyInteger-memory-arguments-slope",
    "nullList-cpu-arguments",
    "nullList-memory-arguments",
    "quotientInteger-cpu-arguments-constant",
    "quotientInteger-cpu-arguments-model-arguments-intercept",
    "quotientInteger-cpu-arguments-model-arguments-slope",
    "quotientInteger-memory-arguments-intercept",
    "quotientInteger-memory-arguments-minimum",
    "quotientInteger-memory-arguments-slope",
    "remainderInteger-cpu-arguments-constant",
    "remainderInteger-cpu-arguments-model-arguments-intercept",
    "remainderInteger-cpu-arguments-model-arguments-slope",
    "remainderInteger-memory-arguments-intercept",
    "remainderInteger-memory-arguments-minimum",
    "remainderInteger-memory-arguments-slope",
    "sha2_256-cpu-arguments-intercept",
    "sha2_256-cpu-arguments-slope",
    "sha2_256-memory-arguments",
    "sha3_256-cpu-arguments-intercept",
    "sha3_256-cpu-arguments-slope",
    "sha3_256-memory-arguments",
    "sliceByteString-cpu-arguments-intercept",
    "sliceByteString-cpu-arguments-slope",
    "sliceByteString-memory-arguments-intercept",
    "sliceByteString-memory-arguments-slope",
    "sndPair-cpu-arguments",
    "sndPair-memory-arguments",
    "subtractInteger-cpu-arguments-intercept",
    "subtractInteger-cpu-arguments-slope",
    "subtractInteger-memory-arguments-intercept",
    "subtractInteger-memory-arguments-slope",
    "tailList-cpu-arguments",
    "tailList-memory-arguments",
    "trace-cpu-arguments",
    "trace-memory-arguments",
    "unBData-cpu-arguments",
    "unBData-memory-arguments",
    "unConstrData-cpu-arguments",
    "unConstrData-memory-arguments",
    "unIData-cpu-arguments",
    "unIData-memory-arguments",
    "unListData-cpu-arguments",
    "unListData-memory-arguments",
    "unMapData-cpu-arguments",
    "unMapData-memory-arguments",
    "verifyEd25519Signature-cpu-arguments-intercept",
    "verifyEd25519Signature-cpu-arguments-slope",
    "verifyEd25519Signature-memory-arguments",
  ],
  PlutusV2: [
    "addInteger-cpu-arguments-intercept",
    "addInteger-cpu-arguments-slope",
    "addInteger-memory-arguments-intercept",
    "addInteger-memory-arguments-slope",
    "appendByteString-cpu-arguments-intercept",
    "appendByteString-cpu-arguments-slope",
    "appendByteString-memory-arguments-intercept",
    "appendByteString-memory-arguments-slope",
    "appendString-cpu-arguments-intercept",
    "appendString-cpu-arguments-slope",
    "appendString-memory-arguments-intercept",
    "appendString-memory-arguments-slope",
    "bData-cpu-arguments",
    "bData-memory-arguments",
    "blake2b_256-cpu-arguments-intercept",
    "blake2b_256-cpu-arguments-slope",
    "blake2b_256-memory-arguments",
    "cekApplyCost-exBudgetCPU",
    "cekApplyCost-exBudgetMemory",
    "cekBuiltinCost-exBudgetCPU",
    "cekBuiltinCost-exBudgetMemory",
    "cekConstCost-exBudgetCPU",
    "cekConstCost-exBudgetMemory",
    "cekDelayCost-exBudgetCPU",
    "cekDelayCost-exBudgetMemory",
    "cekForceCost-exBudgetCPU",
    "cekForceCost-exBudgetMemory",
    "cekLamCost-exBudgetCPU",
    "cekLamCost-exBudgetMemory",
    "cekStartupCost-exBudgetCPU",
    "cekStartupCost-exBudgetMemory",
    "cekVarCost-exBudgetCPU",
    "cekVarCost-exBudgetMemory",
    "chooseData-cpu-arguments",
    "chooseData-memory-arguments",
    "chooseList-cpu-arguments",
    "chooseList-memory-arguments",
    "chooseUnit-cpu-arguments",
    "chooseUnit-memory-arguments",
    "consByteString-cpu-arguments-intercept",
    "consByteString-cpu-arguments-slope",
    "consByteString-memory-arguments-intercept",
    "consByteString-memory-arguments-slope",
    "constrData-cpu-arguments",
    "constrData-memory-arguments",
    "decodeUtf8-cpu-arguments-intercept",
    "decodeUtf8-cpu-arguments-slope",
    "decodeUtf8-memory-arguments-intercept",
    "decodeUtf8-memory-arguments-slope",
    "divideInteger-cpu-arguments-constant",
    "divideInteger-cpu-arguments-model-arguments-intercept",
    "divideInteger-cpu-arguments-model-arguments-slope",
    "divideInteger-memory-arguments-intercept",
    "divideInteger-memory-arguments-minimum",
    "divideInteger-memory-arguments-slope",
    "encodeUtf8-cpu-arguments-intercept",
    "encodeUtf8-cpu-arguments-slope",
    "encodeUtf8-memory-arguments-intercept",
    "encodeUtf8-memory-arguments-slope",
    "equalsByteString-cpu-arguments-constant",
    "equalsByteString-cpu-arguments-intercept",
    "equalsByteString-cpu-arguments-slope",
    "equalsByteString-memory-arguments",
    "equalsData-cpu-arguments-intercept",
    "equalsData-cpu-arguments-slope",
    "equalsData-memory-arguments",
    "equalsInteger-cpu-arguments-intercept",
    "equalsInteger-cpu-arguments-slope",
    "equalsInteger-memory-arguments",
    "equalsString-cpu-arguments-constant",
    "equalsString-cpu-arguments-intercept",
    "equalsString-cpu-arguments-slope",
    "equalsString-memory-arguments",
    "fstPair-cpu-arguments",
    "fstPair-memory-arguments",
    "headList-cpu-arguments",
    "headList-memory-arguments",
    "iData-cpu-arguments",
    "iData-memory-arguments",
    "ifThenElse-cpu-arguments",
    "ifThenElse-memory-arguments",
    "indexByteString-cpu-arguments",
    "indexByteString-memory-arguments",
    "lengthOfByteString-cpu-arguments",
    "lengthOfByteString-memory-arguments",
    "lessThanByteString-cpu-arguments-intercept",
    "lessThanByteString-cpu-arguments-slope",
    "lessThanByteString-memory-arguments",
    "lessThanEqualsByteString-cpu-arguments-intercept",
    "lessThanEqualsByteString-cpu-arguments-slope",
    "lessThanEqualsByteString-memory-arguments",
    "lessThanEqualsInteger-cpu-arguments-intercept",
    "lessThanEqualsInteger-cpu-arguments-slope",
    "lessThanEqualsInteger-memory-arguments",
    "lessThanInteger-cpu-arguments-intercept",
    "lessThanInteger-cpu-arguments-slope",
    "lessThanInteger-memory-arguments",
    "listData-cpu-arguments",
    "listData-memory-arguments",
    "mapData-cpu-arguments",
    "mapData-memory-arguments",
    "mkCons-cpu-arguments",
    "mkCons-memory-arguments",
    "mkNilData-cpu-arguments",
    "mkNilData-memory-arguments",
    "mkNilPairData-cpu-arguments",
    "mkNilPairData-memory-arguments",
    "mkPairData-cpu-arguments",
    "mkPairData-memory-arguments",
    "modInteger-cpu-arguments-constant",
    "modInteger-cpu-arguments-model-arguments-intercept",
    "modInteger-cpu-arguments-model-arguments-slope",
    "modInteger-memory-arguments-intercept",
    "modInteger-memory-arguments-minimum",
    "modInteger-memory-arguments-slope",
    "multiplyInteger-cpu-arguments-intercept",
    "multiplyInteger-cpu-arguments-slope",
    "multiplyInteger-memory-arguments-intercept",
    "multiplyInteger-memory-arguments-slope",
    "nullList-cpu-arguments",
    "nullList-memory-arguments",
    "quotientInteger-cpu-arguments-constant",
    "quotientInteger-cpu-arguments-model-arguments-intercept",
    "quotientInteger-cpu-arguments-model-arguments-slope",
    "quotientInteger-memory-arguments-intercept",
    "quotientInteger-memory-arguments-minimum",
    "quotientInteger-memory-arguments-slope",
    "remainderInteger-cpu-arguments-constant",
    "remainderInteger-cpu-arguments-model-arguments-intercept",
    "remainderInteger-cpu-arguments-model-arguments-slope",
    "remainderInteger-memory-arguments-intercept",
    "remainderInteger-memory-arguments-minimum",
    "remainderInteger-memory-arguments-slope",
    "serialiseData-cpu-arguments-intercept",
    "serialiseData-cpu-arguments-slope",
    "serialiseData-memory-arguments-intercept",
    "serialiseData-memory-arguments-slope",
    "sha2_256-cpu-arguments-intercept",
    "sha2_256-cpu-arguments-slope",
    "sha2_256-memory-arguments",
    "sha3_256-cpu-arguments-intercept",
    "sha3_256-cpu-arguments-slope",
    "sha3_256-memory-arguments",
    "sliceByteString-cpu-arguments-intercept",
    "sliceByteString-cpu-arguments-slope",
    "sliceByteString-memory-arguments-intercept",
    "sliceByteString-memory-arguments-slope",
    "sndPair-cpu-arguments",
    "sndPair-memory-arguments",
    "subtractInteger-cpu-arguments-intercept",
    "subtractInteger-cpu-arguments-slope",
    "subtractInteger-memory-arguments-intercept",
    "subtractInteger-memory-arguments-slope",
    "tailList-cpu-arguments",
    "tailList-memory-arguments",
    "trace-cpu-arguments",
    "trace-memory-arguments",
    "unBData-cpu-arguments",
    "unBData-memory-arguments",
    "unConstrData-cpu-arguments",
    "unConstrData-memory-arguments",
    "unIData-cpu-arguments",
    "unIData-memory-arguments",
    "unListData-cpu-arguments",
    "unListData-memory-arguments",
    "unMapData-cpu-arguments",
    "unMapData-memory-arguments",
    "verifyEcdsaSecp256k1Signature-cpu-arguments",
    "verifyEcdsaSecp256k1Signature-memory-arguments",
    "verifyEd25519Signature-cpu-arguments-intercept",
    "verifyEd25519Signature-cpu-arguments-slope",
    "verifyEd25519Signature-memory-arguments",
    "verifySchnorrSecp256k1Signature-cpu-arguments-intercept",
    "verifySchnorrSecp256k1Signature-cpu-arguments-slope",
    "verifySchnorrSecp256k1Signature-memory-arguments",
  ],
};
