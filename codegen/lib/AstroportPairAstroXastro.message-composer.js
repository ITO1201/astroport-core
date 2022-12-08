"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstroportPairAstroXastroMessageComposer = void 0;
var tx_1 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
var encoding_1 = require("@cosmjs/encoding");
var AstroportPairAstroXastroMessageComposer = /** @class */ (function () {
    function AstroportPairAstroXastroMessageComposer(sender, contractAddress) {
        var _this = this;
        this.receive = function (_a, funds) {
            var amount = _a.amount, msg = _a.msg, sender = _a.sender;
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: (0, encoding_1.toUtf8)(JSON.stringify({
                        receive: {
                            amount: amount,
                            msg: msg,
                            sender: sender
                        }
                    })),
                    funds: funds
                })
            };
        };
        this.provideLiquidity = function (_a, funds) {
            var assets = _a.assets, autoStake = _a.autoStake, receiver = _a.receiver, slippageTolerance = _a.slippageTolerance;
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: (0, encoding_1.toUtf8)(JSON.stringify({
                        provide_liquidity: {
                            assets: assets,
                            auto_stake: autoStake,
                            receiver: receiver,
                            slippage_tolerance: slippageTolerance
                        }
                    })),
                    funds: funds
                })
            };
        };
        this.swap = function (_a, funds) {
            var beliefPrice = _a.beliefPrice, maxSpread = _a.maxSpread, offerAsset = _a.offerAsset, to = _a.to;
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: (0, encoding_1.toUtf8)(JSON.stringify({
                        swap: {
                            belief_price: beliefPrice,
                            max_spread: maxSpread,
                            offer_asset: offerAsset,
                            to: to
                        }
                    })),
                    funds: funds
                })
            };
        };
        this.updateConfig = function (_a, funds) {
            var params = _a.params;
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: (0, encoding_1.toUtf8)(JSON.stringify({
                        update_config: {
                            params: params
                        }
                    })),
                    funds: funds
                })
            };
        };
        this.assertAndSend = function (_a, funds) {
            var askAssetInfo = _a.askAssetInfo, offerAsset = _a.offerAsset, receiver = _a.receiver, sender = _a.sender;
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: (0, encoding_1.toUtf8)(JSON.stringify({
                        assert_and_send: {
                            ask_asset_info: askAssetInfo,
                            offer_asset: offerAsset,
                            receiver: receiver,
                            sender: sender
                        }
                    })),
                    funds: funds
                })
            };
        };
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.receive = this.receive.bind(this);
        this.provideLiquidity = this.provideLiquidity.bind(this);
        this.swap = this.swap.bind(this);
        this.updateConfig = this.updateConfig.bind(this);
        this.assertAndSend = this.assertAndSend.bind(this);
    }
    return AstroportPairAstroXastroMessageComposer;
}());
exports.AstroportPairAstroXastroMessageComposer = AstroportPairAstroXastroMessageComposer;