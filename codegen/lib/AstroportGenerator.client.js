"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstroportGeneratorClient = exports.AstroportGeneratorQueryClient = void 0;
var AstroportGeneratorQueryClient = /** @class */ (function () {
    function AstroportGeneratorQueryClient(client, contractAddress) {
        var _this = this;
        this.activePoolLength = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        active_pool_length: {}
                    })];
            });
        }); };
        this.poolLength = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        pool_length: {}
                    })];
            });
        }); };
        this.deposit = function (_a) {
            var lpToken = _a.lpToken, user = _a.user;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            deposit: {
                                lp_token: lpToken,
                                user: user
                            }
                        })];
                });
            });
        };
        this.userVirtualAmount = function (_a) {
            var lpToken = _a.lpToken, user = _a.user;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            user_virtual_amount: {
                                lp_token: lpToken,
                                user: user
                            }
                        })];
                });
            });
        };
        this.totalVirtualSupply = function (_a) {
            var generator = _a.generator;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            total_virtual_supply: {
                                generator: generator
                            }
                        })];
                });
            });
        };
        this.pendingToken = function (_a) {
            var lpToken = _a.lpToken, user = _a.user;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            pending_token: {
                                lp_token: lpToken,
                                user: user
                            }
                        })];
                });
            });
        };
        this.config = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        config: {}
                    })];
            });
        }); };
        this.rewardInfo = function (_a) {
            var lpToken = _a.lpToken;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            reward_info: {
                                lp_token: lpToken
                            }
                        })];
                });
            });
        };
        this.orphanProxyRewards = function (_a) {
            var lpToken = _a.lpToken;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            orphan_proxy_rewards: {
                                lp_token: lpToken
                            }
                        })];
                });
            });
        };
        this.poolInfo = function (_a) {
            var lpToken = _a.lpToken;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            pool_info: {
                                lp_token: lpToken
                            }
                        })];
                });
            });
        };
        this.simulateFutureReward = function (_a) {
            var futureBlock = _a.futureBlock, lpToken = _a.lpToken;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            simulate_future_reward: {
                                future_block: futureBlock,
                                lp_token: lpToken
                            }
                        })];
                });
            });
        };
        this.poolStakers = function (_a) {
            var limit = _a.limit, lpToken = _a.lpToken, startAfter = _a.startAfter;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            pool_stakers: {
                                limit: limit,
                                lp_token: lpToken,
                                start_after: startAfter
                            }
                        })];
                });
            });
        };
        this.blockedTokensList = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        blocked_tokens_list: {}
                    })];
            });
        }); };
        this.rewardProxiesList = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        reward_proxies_list: {}
                    })];
            });
        }); };
        this.client = client;
        this.contractAddress = contractAddress;
        this.activePoolLength = this.activePoolLength.bind(this);
        this.poolLength = this.poolLength.bind(this);
        this.deposit = this.deposit.bind(this);
        this.userVirtualAmount = this.userVirtualAmount.bind(this);
        this.totalVirtualSupply = this.totalVirtualSupply.bind(this);
        this.pendingToken = this.pendingToken.bind(this);
        this.config = this.config.bind(this);
        this.rewardInfo = this.rewardInfo.bind(this);
        this.orphanProxyRewards = this.orphanProxyRewards.bind(this);
        this.poolInfo = this.poolInfo.bind(this);
        this.simulateFutureReward = this.simulateFutureReward.bind(this);
        this.poolStakers = this.poolStakers.bind(this);
        this.blockedTokensList = this.blockedTokensList.bind(this);
        this.rewardProxiesList = this.rewardProxiesList.bind(this);
    }
    return AstroportGeneratorQueryClient;
}());
exports.AstroportGeneratorQueryClient = AstroportGeneratorQueryClient;
var AstroportGeneratorClient = /** @class */ (function (_super) {
    __extends(AstroportGeneratorClient, _super);
    function AstroportGeneratorClient(client, sender, contractAddress) {
        var _this = _super.call(this, client, contractAddress) || this;
        _this.updateConfig = function (_a, fee, memo, funds) {
            var checkpointGeneratorLimit = _a.checkpointGeneratorLimit, generatorController = _a.generatorController, guardian = _a.guardian, vestingContract = _a.vestingContract, votingEscrow = _a.votingEscrow, votingEscrowDelegation = _a.votingEscrowDelegation;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                update_config: {
                                    checkpoint_generator_limit: checkpointGeneratorLimit,
                                    generator_controller: generatorController,
                                    guardian: guardian,
                                    vesting_contract: vestingContract,
                                    voting_escrow: votingEscrow,
                                    voting_escrow_delegation: votingEscrowDelegation
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.setupPools = function (_a, fee, memo, funds) {
            var pools = _a.pools;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                setup_pools: {
                                    pools: pools
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.updatePool = function (_a, fee, memo, funds) {
            var hasAssetRewards = _a.hasAssetRewards, lpToken = _a.lpToken;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                update_pool: {
                                    has_asset_rewards: hasAssetRewards,
                                    lp_token: lpToken
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.claimRewards = function (_a, fee, memo, funds) {
            var lpTokens = _a.lpTokens;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                claim_rewards: {
                                    lp_tokens: lpTokens
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.withdraw = function (_a, fee, memo, funds) {
            var amount = _a.amount, lpToken = _a.lpToken;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                withdraw: {
                                    amount: amount,
                                    lp_token: lpToken
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.emergencyWithdraw = function (_a, fee, memo, funds) {
            var lpToken = _a.lpToken;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                emergency_withdraw: {
                                    lp_token: lpToken
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.sendOrphanProxyReward = function (_a, fee, memo, funds) {
            var lpToken = _a.lpToken, recipient = _a.recipient;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                send_orphan_proxy_reward: {
                                    lp_token: lpToken,
                                    recipient: recipient
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.receive = function (_a, fee, memo, funds) {
            var amount = _a.amount, msg = _a.msg, sender = _a.sender;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                receive: {
                                    amount: amount,
                                    msg: msg,
                                    sender: sender
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.setTokensPerBlock = function (_a, fee, memo, funds) {
            var amount = _a.amount;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                set_tokens_per_block: {
                                    amount: amount
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.proposeNewOwner = function (_a, fee, memo, funds) {
            var expiresIn = _a.expiresIn, owner = _a.owner;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                propose_new_owner: {
                                    expires_in: expiresIn,
                                    owner: owner
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.dropOwnershipProposal = function (fee, memo, funds) {
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                drop_ownership_proposal: {}
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        _this.claimOwnership = function (fee, memo, funds) {
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                claim_ownership: {}
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        _this.moveToProxy = function (_a, fee, memo, funds) {
            var lpToken = _a.lpToken, proxy = _a.proxy;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                move_to_proxy: {
                                    lp_token: lpToken,
                                    proxy: proxy
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.migrateProxy = function (_a, fee, memo, funds) {
            var lpToken = _a.lpToken, newProxy = _a.newProxy;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                migrate_proxy: {
                                    lp_token: lpToken,
                                    new_proxy: newProxy
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.updateBlockedTokenslist = function (_a, fee, memo, funds) {
            var add = _a.add, remove = _a.remove;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                update_blocked_tokenslist: {
                                    add: add,
                                    remove: remove
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.deactivatePool = function (_a, fee, memo, funds) {
            var lpToken = _a.lpToken;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                deactivate_pool: {
                                    lp_token: lpToken
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.deactivatePools = function (_a, fee, memo, funds) {
            var pairTypes = _a.pairTypes;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                deactivate_pools: {
                                    pair_types: pairTypes
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.checkpointUserBoost = function (_a, fee, memo, funds) {
            var generators = _a.generators, user = _a.user;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                checkpoint_user_boost: {
                                    generators: generators,
                                    user: user
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.callback = function (_a, fee, memo, funds) {
            var action = _a.action;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                callback: {
                                    action: action
                                }
                            }, fee, memo, funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.client = client;
        _this.sender = sender;
        _this.contractAddress = contractAddress;
        _this.updateConfig = _this.updateConfig.bind(_this);
        _this.setupPools = _this.setupPools.bind(_this);
        _this.updatePool = _this.updatePool.bind(_this);
        _this.claimRewards = _this.claimRewards.bind(_this);
        _this.withdraw = _this.withdraw.bind(_this);
        _this.emergencyWithdraw = _this.emergencyWithdraw.bind(_this);
        _this.sendOrphanProxyReward = _this.sendOrphanProxyReward.bind(_this);
        _this.receive = _this.receive.bind(_this);
        _this.setTokensPerBlock = _this.setTokensPerBlock.bind(_this);
        _this.proposeNewOwner = _this.proposeNewOwner.bind(_this);
        _this.dropOwnershipProposal = _this.dropOwnershipProposal.bind(_this);
        _this.claimOwnership = _this.claimOwnership.bind(_this);
        _this.moveToProxy = _this.moveToProxy.bind(_this);
        _this.migrateProxy = _this.migrateProxy.bind(_this);
        _this.updateBlockedTokenslist = _this.updateBlockedTokenslist.bind(_this);
        _this.deactivatePool = _this.deactivatePool.bind(_this);
        _this.deactivatePools = _this.deactivatePools.bind(_this);
        _this.checkpointUserBoost = _this.checkpointUserBoost.bind(_this);
        _this.callback = _this.callback.bind(_this);
        return _this;
    }
    return AstroportGeneratorClient;
}(AstroportGeneratorQueryClient));
exports.AstroportGeneratorClient = AstroportGeneratorClient;