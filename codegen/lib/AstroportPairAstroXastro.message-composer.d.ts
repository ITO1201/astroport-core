/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { AssetInfo, Addr, Binary, Uint128, Decimal, Asset } from "./AstroportPairAstroXastro.types";
export interface AstroportPairAstroXastroMessage {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    provideLiquidity: ({ assets, autoStake, receiver, slippageTolerance }: {
        assets: Asset[];
        autoStake?: boolean;
        receiver?: string;
        slippageTolerance?: Decimal;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swap: ({ beliefPrice, maxSpread, offerAsset, to }: {
        beliefPrice?: Decimal;
        maxSpread?: Decimal;
        offerAsset: Asset;
        to?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ params }: {
        params: Binary;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    assertAndSend: ({ askAssetInfo, offerAsset, receiver, sender }: {
        askAssetInfo: AssetInfo;
        offerAsset: Asset;
        receiver: Addr;
        sender: Addr;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class AstroportPairAstroXastroMessageComposer implements AstroportPairAstroXastroMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    provideLiquidity: ({ assets, autoStake, receiver, slippageTolerance }: {
        assets: Asset[];
        autoStake?: boolean | undefined;
        receiver?: string | undefined;
        slippageTolerance?: string | undefined;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swap: ({ beliefPrice, maxSpread, offerAsset, to }: {
        beliefPrice?: string | undefined;
        maxSpread?: string | undefined;
        offerAsset: Asset;
        to?: string | undefined;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ params }: {
        params: Binary;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    assertAndSend: ({ askAssetInfo, offerAsset, receiver, sender }: {
        askAssetInfo: AssetInfo;
        offerAsset: Asset;
        receiver: Addr;
        sender: Addr;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}