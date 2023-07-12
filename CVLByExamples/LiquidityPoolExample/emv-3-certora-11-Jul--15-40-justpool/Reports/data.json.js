data = {
	"contractName": "Pool",
		 "main_table": {
			"tableHeader":[
				"Test name",
				"Result",
				"Time(sec)",
				"Dump"
			],
			"contractResult":[
				{
					 "tableRow": {
						"ruleName": "integrityOfDeposit",
						"result": "FAIL",
						"time": "1",
						"graph_link": "Report-integrityOfDeposit-example1.html",
						"preoptimized_link": "PreoptimizedRule-integrityOfDeposit.html",
						"presimplified_link": "PresimplifiedRule-integrityOfDeposit.html",
						"prelastopt_link": "PrelastoptRule-integrityOfDeposit.html",
						"presolver_link": "PresolverRule-integrityOfDeposit.html"
					},
					"isMultiRule": false,
					 "variables": {
						"e.msg.sender": "0xffff",
						"e.msg.value": "0",
						"e.tx.origin": "0x401",
						"e.block.coinbase": "0x402",
						"e.block.difficulty": "10",
						"e.block.gaslimit": "8",
						"e.block.number": "7",
						"e.block.timestamp": "5",
						"amount": "3",
						"balance_before": "15",
						"balance_after": "14",
						"identity": "identity (0x978bbdb8)"
					},
					"assertMessage":[
						"deposit must increase the underlying balance of the pool"
					],
					 "failureCauses": {
						"expr": "!(balance_after==(balance_before+int amount))"
					},
					 "callResolutionTable": {
						"tableHeader":[
							"Caller",
							"Callee",
							"Summary"
						],
						"callResolution":[

						]
					},
					 "callResolutionWarningsTable": {
						"tableHeader":[
							"Caller",
							"Callee",
							"Summary"
						],
						"callResolutionWarnings":[
							{
								 "tableRow": {
									"caller": "Pool.assetBalance()",
									"callee": "[?].balanceOf(address)",
									"summmary": "AUTO havoc",
									"comments":[
										{
											"callee resolution": "callee contract unresolved; callee sighash resolved"
										},
										{
											"callee resolution hint (1)": "To resolve the call, try '--link Pool:asset=[Pool]'"
										},
										{
											"havoc cause": "The Prover could not resolve the callee, thus, havoc'd the call"
										},
										{
											"havoc scope": "only the return value"
										},
										{
											"summary application reason": "chosen automatically by the Prover"
										}
									]
								}
							},
							{
								 "tableRow": {
									"caller": "Pool.deposit(uint256)",
									"callee": "[?].balanceOf(address)",
									"summmary": "AUTO havoc",
									"comments":[
										{
											"callee resolution": "callee contract unresolved; callee sighash resolved"
										},
										{
											"callee resolution hint (1)": "To resolve the call, try '--link Pool:asset=[Pool]'"
										},
										{
											"havoc cause": "The Prover could not resolve the callee, thus, havoc'd the call"
										},
										{
											"havoc scope": "only the return value"
										},
										{
											"summary application reason": "chosen automatically by the Prover"
										}
									]
								}
							},
							{
								 "tableRow": {
									"caller": "Pool.deposit(uint256)",
									"callee": "[?].balanceOf(address)",
									"summmary": "AUTO havoc",
									"comments":[
										{
											"callee resolution": "callee contract unresolved; callee sighash resolved"
										},
										{
											"callee resolution hint (1)": "To resolve the call, try '--link Pool:asset=[Pool]'"
										},
										{
											"havoc cause": "The Prover could not resolve the callee, thus, havoc'd the call"
										},
										{
											"havoc scope": "only the return value"
										},
										{
											"summary application reason": "chosen automatically by the Prover"
										}
									]
								}
							},
							{
								 "tableRow": {
									"caller": "Pool.deposit(uint256)",
									"callee": "[?].transferFrom(address,address,uint256)",
									"summmary": "AUTO havoc",
									"comments":[
										{
											"callee resolution": "callee contract unresolved; callee sighash resolved"
										},
										{
											"callee resolution hint (1)": "To resolve the call, try '--link Pool:asset=[Pool]'"
										},
										{
											"havoc cause": "The Prover could not resolve the callee, thus, havoc'd the call"
										},
										{
											"havoc scope": "all contracts except Pool (ce4604a0000000000000000000000007)"
										},
										{
											"summary application reason": "chosen automatically by the Prover"
										}
									]
								}
							}
						]
					},
					 "callTrace": {
						"funcName": "integrityOfDeposit",
						"returnValue": "",
						"status": "",
						"childrenList":[
							{
								"funcName": "Storage State",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Pool",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "_balanceOf[0xffff]: 0",
												"returnValue": "",
												"status": "HAVOC",
												"childrenList":[]
,
												"changed": "false"
											},
											{
												"funcName": "_status: 0",
												"returnValue": "",
												"status": "HAVOC",
												"childrenList":[]
,
												"changed": "false"
											},
											{
												"funcName": "_totalSupply: 9",
												"returnValue": "",
												"status": "HAVOC",
												"childrenList":[]
,
												"changed": "false"
											},
											{
												"funcName": "asset: identity (0x978bbdb8)",
												"returnValue": "",
												"status": "HAVOC",
												"childrenList":[]
,
												"changed": "false"
											}
										],
										"storageId": "null"
									}
								],
								"storageId": "1"
							},
							{
								"funcName": "Setup",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "multi contract setup",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "rule parameters setup",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "contract address vars initialized",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "setup read tracking instrumentation",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "last storage initialize",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "assumptions about extcodesize",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "assumptions about contracts' addresses",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "assumptions about starting balances",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "assumptions about static addresses",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "assumptions about uniqueness of contracts' addressses",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "record starting nonces",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "cloned contracts have no balances",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									},
									{
										"funcName": "Linked immutable setup",
										"returnValue": "",
										"status": "",
										"childrenList":[]

									}
								]
							},
							{
								"funcName": "balance_before = Pool.assetBalance()",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Pool.assetBalance()",
										"returnValue": "15",
										"status": "SUCCESS",
										"childrenList":[
											{
												"funcName": "(internal) Pool.assetBalance()",
												"returnValue": "15",
												"status": "",
												"childrenList":[
													{
														"funcName": "Load from Pool.asset: identity (0x978bbdb8)",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "balanceOf(address): UNRESOLVED AUTO summary @ unknownLocation",
														"returnValue": "",
														"status": "DEFAULT HAVOC",
														"childrenList":[]

													},
													{
														"funcName": "Storage State",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "Pool",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "_balanceOf[0xffff]: 0",
																		"returnValue": "",
																		"status": "HAVOC",
																		"childrenList":[]
,
																		"changed": "false"
																	},
																	{
																		"funcName": "_status: 0",
																		"returnValue": "",
																		"status": "HAVOC",
																		"childrenList":[]
,
																		"changed": "false"
																	},
																	{
																		"funcName": "_totalSupply: 9",
																		"returnValue": "",
																		"status": "HAVOC",
																		"childrenList":[]
,
																		"changed": "false"
																	},
																	{
																		"funcName": "asset: identity (0x978bbdb8)",
																		"returnValue": "",
																		"status": "HAVOC",
																		"childrenList":[]
,
																		"changed": "false"
																	}
																],
																"storageId": "null"
															}
														],
														"storageId": "2"
													}
												]
											}
										]
									}
								]
							},
							{
								"funcName": "require e.msg.sender != currentContract",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "e.msg.sender != currentContract",
										"returnValue": "true",
										"status": "",
										"childrenList":[
											{
												"funcName": "e.msg.sender == currentContract",
												"returnValue": "false",
												"status": "",
												"childrenList":[
													{
														"funcName": "e.msg.sender",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "currentContract",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									}
								]
							},
							{
								"funcName": "Pool.deposit(e, amount)",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Pool.deposit(amount=X)",
										"returnValue": "6",
										"status": "SUCCESS",
										"childrenList":[
											{
												"funcName": "sender: 0xffff; receiver: identity (0x978bbdb8); transferred amount: 0",
												"returnValue": "",
												"status": "TRANSFER",
												"childrenList":[
													{
														"funcName": "Load from sender.balance: 1",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Store at sender.balance: 1",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Load from receiver.balance: 0",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Store at receiver.balance: 0",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													}
												]
											},
											{
												"funcName": "(internal) Pool.deposit(amount=3)",
												"returnValue": "6",
												"status": "",
												"childrenList":[
													{
														"funcName": "Load from Pool._status: 0",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Store at Pool._status: 2",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Load from Pool.asset: identity (0x978bbdb8)",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "balanceOf(address): UNRESOLVED AUTO summary @ unknownLocation",
														"returnValue": "",
														"status": "DEFAULT HAVOC",
														"childrenList":[]

													},
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "9",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from Pool._totalSupply: 9",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Storage State",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "Pool",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balanceOf[0xffff]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_status: 2 (changed)",
																				"returnValue": "",
																				"status": "CONCRETE",
																				"childrenList":[]
,
																				"changed": "true"
																			},
																			{
																				"funcName": "_totalSupply: 9",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "asset: identity (0x978bbdb8)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			}
																		],
																		"storageId": "null"
																	}
																],
																"storageId": "3"
															}
														]
													},
													{
														"funcName": "(internal) Pool.amountToShares(amount=3)",
														"returnValue": "6",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from Pool.asset: identity (0x978bbdb8)",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "balanceOf(address): UNRESOLVED AUTO summary @ unknownLocation",
																"returnValue": "",
																"status": "DEFAULT HAVOC",
																"childrenList":[]

															},
															{
																"funcName": "(internal) ERC20.totalSupply()",
																"returnValue": "9",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "Load from Pool._totalSupply: 9",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	},
																	{
																		"funcName": "Storage State",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "Pool",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[
																					{
																						"funcName": "_balanceOf[0xffff]: 0",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_status: 2",
																						"returnValue": "",
																						"status": "CONCRETE",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_totalSupply: 9",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "asset: identity (0x978bbdb8)",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					}
																				],
																				"storageId": "null"
																			}
																		],
																		"storageId": "4"
																	}
																]
															},
															{
																"funcName": "Storage State",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "Pool",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balanceOf[0xffff]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_status: 2",
																				"returnValue": "",
																				"status": "CONCRETE",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 9",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "asset: identity (0x978bbdb8)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			}
																		],
																		"storageId": "null"
																	}
																],
																"storageId": "5"
															}
														]
													},
													{
														"funcName": "Load from Pool.asset: identity (0x978bbdb8)",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "transferFrom(address,address,uint256): UNRESOLVED AUTO summary @ unknownLocation",
														"returnValue": "",
														"status": "DEFAULT HAVOC",
														"childrenList":[]

													},
													{
														"funcName": "(internal) ERC20._mint(recipient=0xffff, amount=6)",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from Pool._totalSupply: 9",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at Pool._totalSupply: 15",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from Pool._balanceOf[0xffff]: 0",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at Pool._balanceOf[0xffff]: 6",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Storage State",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "Pool",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balanceOf[0xffff]: 6 (changed)",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "true"
																			},
																			{
																				"funcName": "_status: 2",
																				"returnValue": "",
																				"status": "CONCRETE",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 15 (changed)",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "true"
																			},
																			{
																				"funcName": "asset: identity (0x978bbdb8)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			}
																		],
																		"storageId": "null"
																	}
																],
																"storageId": "6"
															}
														]
													},
													{
														"funcName": "Store at Pool._status: 1",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Storage State",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "Pool",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "_balanceOf[0xffff]: 6",
																		"returnValue": "",
																		"status": "HAVOC DEPENDENT",
																		"childrenList":[]
,
																		"changed": "false"
																	},
																	{
																		"funcName": "_status: 1 (changed)",
																		"returnValue": "",
																		"status": "CONCRETE",
																		"childrenList":[]
,
																		"changed": "true"
																	},
																	{
																		"funcName": "_totalSupply: 15",
																		"returnValue": "",
																		"status": "HAVOC DEPENDENT",
																		"childrenList":[]
,
																		"changed": "false"
																	},
																	{
																		"funcName": "asset: identity (0x978bbdb8)",
																		"returnValue": "",
																		"status": "HAVOC",
																		"childrenList":[]
,
																		"changed": "false"
																	}
																],
																"storageId": "null"
															}
														],
														"storageId": "7"
													}
												]
											}
										]
									}
								]
							},
							{
								"funcName": "balance_after = Pool.assetBalance()",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Pool.assetBalance()",
										"returnValue": "14",
										"status": "SUCCESS",
										"childrenList":[
											{
												"funcName": "(internal) Pool.assetBalance()",
												"returnValue": "14",
												"status": "",
												"childrenList":[
													{
														"funcName": "Load from Pool.asset: identity (0x978bbdb8)",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "balanceOf(address): UNRESOLVED AUTO summary @ unknownLocation",
														"returnValue": "",
														"status": "DEFAULT HAVOC",
														"childrenList":[]

													},
													{
														"funcName": "Storage State",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "Pool",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "_balanceOf[0xffff]: 6",
																		"returnValue": "",
																		"status": "HAVOC DEPENDENT",
																		"childrenList":[]
,
																		"changed": "false"
																	},
																	{
																		"funcName": "_status: 1",
																		"returnValue": "",
																		"status": "CONCRETE",
																		"childrenList":[]
,
																		"changed": "false"
																	},
																	{
																		"funcName": "_totalSupply: 15",
																		"returnValue": "",
																		"status": "HAVOC DEPENDENT",
																		"childrenList":[]
,
																		"changed": "false"
																	},
																	{
																		"funcName": "asset: identity (0x978bbdb8)",
																		"returnValue": "",
																		"status": "HAVOC",
																		"childrenList":[]
,
																		"changed": "false"
																	}
																],
																"storageId": "null"
															}
														],
														"storageId": "8"
													}
												]
											}
										]
									}
								]
							},
							{
								"funcName": "assert balance_after == balance_before + amount",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "balance_after == balance_before + amount",
										"returnValue": "false",
										"status": "",
										"childrenList":[
											{
												"funcName": "balance_after",
												"returnValue": "14",
												"status": "",
												"childrenList":[]

											},
											{
												"funcName": "balance_before + amount",
												"returnValue": "18",
												"status": "",
												"childrenList":[
													{
														"funcName": "balance_before",
														"returnValue": "15",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "amount",
														"returnValue": "3",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "Storage State",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "Pool",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "_balanceOf[0xffff]: 6",
														"returnValue": "",
														"status": "HAVOC DEPENDENT",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_status: 1",
														"returnValue": "",
														"status": "CONCRETE",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_totalSupply: 15",
														"returnValue": "",
														"status": "HAVOC DEPENDENT",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "asset: identity (0x978bbdb8)",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													}
												],
												"storageId": "null"
											}
										],
										"storageId": "9"
									}
								]
							}
						]
					}
				},
				{
					 "tableRow": {
						"ruleName": "envfreeFuncsStaticCheck",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					},
					"isMultiRule": true
				}
			]

		},
		 "sub_tables": {
			"tableHeader":[
				"Function name",
				"Result",
				"Time(secs)",
				"Dump"
			],
			"functionResults":[
		{
			"ruleName": "envfreeFuncsStaticCheck",
			"tableBody":[
				{
					 "tableRow": {
						"funcName": "assetBalance()",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-envfreeFuncsStaticCheck-assetBalanceLPRP.html",
						"presimplified_link": "PresimplifiedRule-envfreeFuncsStaticCheck-assetBalanceLPRP.html",
						"prelastopt_link": "PrelastoptRule-envfreeFuncsStaticCheck-assetBalanceLPRP.html",
						"presolver_link": "PresolverRule-envfreeFuncsStaticCheck-assetBalanceLPRP.html"
					},
					 "callResolutionTable": {
						"tableHeader":[
							"Caller",
							"Callee",
							"Summary"
						],
						"callResolution":[

						]
					},
					 "callResolutionWarningsTable": {
						"tableHeader":[
							"Caller",
							"Callee",
							"Summary"
						],
						"callResolutionWarnings":[

						]
					}
				}
,				{
					 "tableRow": {
						"funcName": "balanceOf(address)",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-envfreeFuncsStaticCheck-balanceOfLPADRRP.html",
						"presimplified_link": "PresimplifiedRule-envfreeFuncsStaticCheck-balanceOfLPADRRP.html",
						"prelastopt_link": "PrelastoptRule-envfreeFuncsStaticCheck-balanceOfLPADRRP.html",
						"presolver_link": "PresolverRule-envfreeFuncsStaticCheck-balanceOfLPADRRP.html"
					},
					 "callResolutionTable": {
						"tableHeader":[
							"Caller",
							"Callee",
							"Summary"
						],
						"callResolution":[

						]
					},
					 "callResolutionWarningsTable": {
						"tableHeader":[
							"Caller",
							"Callee",
							"Summary"
						],
						"callResolutionWarnings":[

						]
					}
				}
,				{
					 "tableRow": {
						"funcName": "totalSupply()",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-envfreeFuncsStaticCheck-totalSupplyLPRP.html",
						"presimplified_link": "PresimplifiedRule-envfreeFuncsStaticCheck-totalSupplyLPRP.html",
						"prelastopt_link": "PrelastoptRule-envfreeFuncsStaticCheck-totalSupplyLPRP.html",
						"presolver_link": "PresolverRule-envfreeFuncsStaticCheck-totalSupplyLPRP.html"
					},
					 "callResolutionTable": {
						"tableHeader":[
							"Caller",
							"Callee",
							"Summary"
						],
						"callResolution":[

						]
					},
					 "callResolutionWarningsTable": {
						"tableHeader":[
							"Caller",
							"Callee",
							"Summary"
						],
						"callResolutionWarnings":[

						]
					}
				}
			]

		}
			]

		},
		 "assert_tables": {
			"tableHeader":[
				"Assertions",
				"Result",
				"Time(secs)",
				"Dump"
			],
			"functionResults":[

			]

		},
		 "availableContractsTable": {
			"sectionName": "Available contracts",
			"tableHeader":[
				"Name",
				"Address",
				"Pre-state",
				"Methods"
			],
			"contractResult":[
				{
					 "tableRow": {
						"name": "Pool",
						"address": "ce4604a0000000000000000000000007",
						"pre_state": "{}",
						"methodsNames":[
							"deposit(uint256)",
							"calcPremium(uint256)",
							"transferFrom(address,address,uint256)",
							"withdraw(uint256)",
							"amountToShares(uint256)",
							"asset()",
							"transfer(address,uint256)",
							"balanceOf(address)",
							"approve(address,uint256)",
							"assetBalance()",
							"feeRate()",
							"sharesToAmount(uint256)",
							"flashLoan(address,uint256)",
							"totalSupply()",
							"allowance(address,address)"
						]
					}
				}
			]
		}
	}