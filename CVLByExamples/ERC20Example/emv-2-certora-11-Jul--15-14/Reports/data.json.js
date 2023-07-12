data = {
	"contractName": "ERC20",
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
						"ruleName": "balancesBoundedByTotalSupply",
						"result": "FAIL",
						"time": "12",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					},
					"isMultiRule": true
				},
				{
					 "tableRow": {
						"ruleName": "envfreeFuncsStaticCheck",
						"result": "FAIL",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					},
					"isMultiRule": true
				},
				{
					 "tableRow": {
						"ruleName": "totalSupplyIsSumOfBalances",
						"result": "FAIL",
						"time": "13",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					},
					"isMultiRule": true
				},
				{
					 "tableRow": {
						"ruleName": "transferFromDoesntRevert",
						"result": "FAIL",
						"time": "2",
						"graph_link": "Report-transferFromDoesntRevert-example1.html",
						"preoptimized_link": "PreoptimizedRule-transferFromDoesntRevert.html",
						"presimplified_link": "PresimplifiedRule-transferFromDoesntRevert.html",
						"prelastopt_link": "PrelastoptRule-transferFromDoesntRevert.html",
						"presolver_link": "PresolverRule-transferFromDoesntRevert.html"
					},
					"isMultiRule": false,
					 "variables": {
						"ERC20": "ERC20 (0x2711)"
					},
					"assertMessage":[
						"rule not implemented"
					],
					 "failureCauses": {
						"expr": "!false"
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
					},
					 "callTrace": {
						"funcName": "transferFromDoesntRevert",
						"returnValue": "",
						"status": "",
						"childrenList":[
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
								"funcName": "assert false",
								"returnValue": "",
								"status": "",
								"childrenList":[]

							}
						]
					}
				},
				{
					 "tableRow": {
						"ruleName": "transferFromReverts",
						"result": "FAIL",
						"time": "2",
						"graph_link": "Report-transferFromReverts-example1.html",
						"preoptimized_link": "PreoptimizedRule-transferFromReverts.html",
						"presimplified_link": "PresimplifiedRule-transferFromReverts.html",
						"prelastopt_link": "PrelastoptRule-transferFromReverts.html",
						"presolver_link": "PresolverRule-transferFromReverts.html"
					},
					"isMultiRule": false,
					 "variables": {
						"ERC20": "ERC20 (0x2711)"
					},
					"assertMessage":[
						"rule not implemented"
					],
					 "failureCauses": {
						"expr": "!false"
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
					},
					 "callTrace": {
						"funcName": "transferFromReverts",
						"returnValue": "",
						"status": "",
						"childrenList":[
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
								"funcName": "assert false",
								"returnValue": "",
								"status": "",
								"childrenList":[]

							}
						]
					}
				},
				{
					 "tableRow": {
						"ruleName": "transferFromSpec",
						"result": "FAIL",
						"time": "2",
						"graph_link": "Report-transferFromSpec-example1.html",
						"preoptimized_link": "PreoptimizedRule-transferFromSpec.html",
						"presimplified_link": "PresimplifiedRule-transferFromSpec.html",
						"prelastopt_link": "PrelastoptRule-transferFromSpec.html",
						"presolver_link": "PresolverRule-transferFromSpec.html"
					},
					"isMultiRule": false,
					 "variables": {
						"ERC20": "ERC20 (0x2711)"
					},
					"assertMessage":[
						"rule not implemented"
					],
					 "failureCauses": {
						"expr": "!false"
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
					},
					 "callTrace": {
						"funcName": "transferFromSpec",
						"returnValue": "",
						"status": "",
						"childrenList":[
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
								"funcName": "assert false",
								"returnValue": "",
								"status": "",
								"childrenList":[]

							}
						]
					}
				},
				{
					 "tableRow": {
						"ruleName": "balancesBoundedByTotalSupply_instate",
						"result": "SUCCESS",
						"time": "3",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_instate.html",
						"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_instate.html",
						"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_instate.html",
						"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_instate.html"
					},
					"isMultiRule": false,
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
				},
				{
					 "tableRow": {
						"ruleName": "onlyHolderCanChangeAllowance",
						"result": "SUCCESS",
						"time": "14",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					},
					"isMultiRule": true
				},
				{
					 "tableRow": {
						"ruleName": "totalSupplyIsSumOfBalances_instate",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_instate.html",
						"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_instate.html",
						"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_instate.html",
						"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_instate.html"
					},
					"isMultiRule": false,
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
				},
				{
					 "tableRow": {
						"ruleName": "transferDoesntRevert",
						"result": "SUCCESS",
						"time": "8",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-transferDoesntRevert.html",
						"presimplified_link": "PresimplifiedRule-transferDoesntRevert.html",
						"prelastopt_link": "PrelastoptRule-transferDoesntRevert.html",
						"presolver_link": "PresolverRule-transferDoesntRevert.html"
					},
					"isMultiRule": false,
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
				},
				{
					 "tableRow": {
						"ruleName": "transferReverts",
						"result": "SUCCESS",
						"time": "4",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-transferReverts.html",
						"presimplified_link": "PresimplifiedRule-transferReverts.html",
						"prelastopt_link": "PrelastoptRule-transferReverts.html",
						"presolver_link": "PresolverRule-transferReverts.html"
					},
					"isMultiRule": false,
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
				},
				{
					 "tableRow": {
						"ruleName": "transferSpec",
						"result": "SUCCESS",
						"time": "6",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-transferSpec.html",
						"presimplified_link": "PresimplifiedRule-transferSpec.html",
						"prelastopt_link": "PrelastoptRule-transferSpec.html",
						"presolver_link": "PresolverRule-transferSpec.html"
					},
					"isMultiRule": false,
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
						"funcName": "transferFrom(address,address,uint256)",
						"result": "FAIL",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-envfreeFuncsStaticCheck-transferFromLPADRCADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-envfreeFuncsStaticCheck-transferFromLPADRCADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-envfreeFuncsStaticCheck-transferFromLPADRCADRCU256RP.html",
						"presolver_link": "PresolverRule-envfreeFuncsStaticCheck-transferFromLPADRCADRCU256RP.html"
					},
					 "variables": {

					},
					"assertMessage":[
						"Specification marks method ERC20.transferFrom(address sender, address recipient, uint256 amount) returns (bool) as 'envfree' but the method uses restricted environment properties."
					],
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
						"funcName": "allowance(address,address)",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-envfreeFuncsStaticCheck-allowanceLPADRCADRRP.html",
						"presimplified_link": "PresimplifiedRule-envfreeFuncsStaticCheck-allowanceLPADRCADRRP.html",
						"prelastopt_link": "PrelastoptRule-envfreeFuncsStaticCheck-allowanceLPADRCADRRP.html",
						"presolver_link": "PresolverRule-envfreeFuncsStaticCheck-allowanceLPADRCADRRP.html"
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

		},
				{
					"ruleName": "totalSupplyIsSumOfBalances_preserve",
					"tableBody":[
						{
							 "tableRow": {
								"funcName": "deposit()",
								"result": "FAIL",
								"time": "3",
								"graph_link": "Report-totalSupplyIsSumOfBalances_preserve-depositLPRP-example1.html",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-depositLPRP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-depositLPRP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-depositLPRP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-depositLPRP.html"
							},
							 "variables": {
								"certoraInvF.selector": "0xd0e30db0",
								"certoraInvF.isPure": "false",
								"certoraInvF.isView": "false",
								"certoraInvF.isPayable": "true",
								"certoraInvF.numberOfArguments": "0",
								"certoraInvF.isFallback": "false",
								"invariantEnv.msg.sender": "0x2711",
								"invariantEnv.msg.value": "2",
								"invariantEnv.tx.origin": "0x402",
								"invariantEnv.block.coinbase": "0x401",
								"invariantEnv.block.difficulty": "9",
								"invariantEnv.block.gaslimit": "8",
								"invariantEnv.block.number": "7",
								"invariantEnv.block.timestamp": "6",
								"lastHasThrown": "false",
								"lastReverted": "false",
								"ERC20": "ERC20 (0x2710)"
							},
							"assertMessage":[
								"invariant violated in post-state"
							],
							 "failureCauses": {
								"expr": "!(CANON24!!2==((I3+int safe_math_narrow:bif(safe_math_promotion:bif(CANON77!!4[R129])+int safe_math_promotion:bif(safe_math_narrow:bif(invariantEnv.msg.value)))) -int CANON77!!4[R129]))"
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
							},
							 "callTrace": {
								"funcName": "totalSupplyIsSumOfBalances_preserve(certoraInvF=deposit(), invariantCalldata=unknown type, invariantEnv=*struct* invariantEnv)",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Storage State",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "_balances[0x2711]: 0",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_totalSupply: 3",
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
										"funcName": "assume invariant in pre-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "3",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "3",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 3",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2711]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 3",
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
											},
											{
												"funcName": "to_mathint(ERC20.totalSupply()) == sum_of_balances",
												"returnValue": "true",
												"status": "",
												"childrenList":[
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "sum_of_balances",
														"returnValue": "3",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "check effects of step taken by one of the functions",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.deposit()",
												"returnValue": "",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "sender: 0x2711; receiver: ERC20 (0x2710); transferred amount: 2",
														"returnValue": "",
														"status": "TRANSFER",
														"childrenList":[
															{
																"funcName": "Load from sender.balance: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1d9",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at sender.balance: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1d7",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from receiver.balance: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1d7",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at receiver.balance: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1d9",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "Load from ERC20._balances[0x2711]: 0",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Apply hook store ERC20._balances[KEY address a] := new_value (old: old_value)",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "With parameters:",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "a = 0x2711",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	},
																	{
																		"funcName": "new_value = 0x2",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	},
																	{
																		"funcName": "old_value = 0x0",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	}
																]
															}
														]
													},
													{
														"funcName": "Store at ERC20._balances[0x2711]: 2",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "assert invariant in post-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "3",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "3",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 3",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2711]: 2 (changed)",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "true"
																			},
																			{
																				"funcName": "_totalSupply: 3",
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
													}
												]
											},
											{
												"funcName": "to_mathint(ERC20.totalSupply()) == sum_of_balances",
												"returnValue": "false",
												"status": "",
												"childrenList":[
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "sum_of_balances",
														"returnValue": "5",
														"status": "",
														"childrenList":[]

													}
												]
											},
											{
												"funcName": "Storage State",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "_balances[0x2711]: 2",
																"returnValue": "",
																"status": "HAVOC DEPENDENT",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_totalSupply: 3",
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
									}
								]
							}
						}
,						{
							 "tableRow": {
								"funcName": "withdraw(uint256)",
								"result": "FAIL",
								"time": "2",
								"graph_link": "Report-totalSupplyIsSumOfBalances_preserve-withdrawLPU256RP-example1.html",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-withdrawLPU256RP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-withdrawLPU256RP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-withdrawLPU256RP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-withdrawLPU256RP.html"
							},
							 "variables": {
								"invariantCalldata": "bytemap initialized but unknown",
								"certoraInvF.selector": "0x2e1a7d4d",
								"certoraInvF.isPure": "false",
								"certoraInvF.isView": "false",
								"certoraInvF.isPayable": "false",
								"certoraInvF.numberOfArguments": "1",
								"certoraInvF.isFallback": "false",
								"invariantEnv.msg.sender": "0x2711",
								"invariantEnv.msg.value": "0",
								"invariantEnv.tx.origin": "0x401",
								"invariantEnv.block.coinbase": "0x402",
								"invariantEnv.block.difficulty": "8",
								"invariantEnv.block.gaslimit": "7",
								"invariantEnv.block.number": "5",
								"invariantEnv.block.timestamp": "3",
								"lastHasThrown": "false",
								"lastReverted": "false",
								"ERC20": "ERC20 (0x2712)"
							},
							"assertMessage":[
								"invariant violated in post-state"
							],
							 "failureCauses": {
								"expr": "!(CANON24!!3==((I4+int (CANON70!!5[R126]-CANON36[addressOf:Adhoc(identity)])) -int CANON70!!5[R126]))"
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
											"caller": "ERC20.withdraw(uint256)",
											"callee": "[?].[?]",
											"summmary": "AUTO havoc",
											"comments":[
												{
													"callee resolution": "both callee contract and sighash are unresolved"
												},
												{
													"havoc cause": "The Prover could not resolve the callee, thus, havoc'd the call"
												},
												{
													"havoc scope": "all contracts except ERC20 (ce4604a0000000000000000000000003)"
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
								"funcName": "totalSupplyIsSumOfBalances_preserve(certoraInvF=withdraw(uint256), invariantCalldata=unknown type, invariantEnv=*struct* invariantEnv)",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Storage State",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "_balances[0x2711]: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf53",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_totalSupply: 6",
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
										"funcName": "assume invariant in pre-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "6",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "6",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 6",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2711]: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf53",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 6",
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
											},
											{
												"funcName": "to_mathint(ERC20.totalSupply()) == sum_of_balances",
												"returnValue": "true",
												"status": "",
												"childrenList":[
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "sum_of_balances",
														"returnValue": "6",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "check effects of step taken by one of the functions",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.withdraw(amount=2)",
												"returnValue": "",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "sender: 0x2711; receiver: ERC20 (0x2712); transferred amount: 0",
														"returnValue": "",
														"status": "TRANSFER",
														"childrenList":[
															{
																"funcName": "Load from sender.balance: 0x476",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at sender.balance: 0x476",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from receiver.balance: 450",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at receiver.balance: 450",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "Load from ERC20._balances[0x2711]: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf53",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Load from ERC20._balances[0x2711]: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf53",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Apply hook store ERC20._balances[KEY address a] := new_value (old: old_value)",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "With parameters:",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "a = 0x2711",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	},
																	{
																		"funcName": "new_value = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf51",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	},
																	{
																		"funcName": "old_value = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf53",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	}
																]
															}
														]
													},
													{
														"funcName": "Store at ERC20._balances[0x2711]: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf51",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "sender: ERC20 (0x2712); receiver: 0x2711; transferred amount: 2",
														"returnValue": "",
														"status": "TRANSFER",
														"childrenList":[
															{
																"funcName": "Load from sender.balance: 450",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at sender.balance: 448",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from receiver.balance: 0x476",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at receiver.balance: 0x478",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "/* ERC20.sol: 407: */ msg.sender.call{value: amount}(\"\"): UNRESOLVED AUTO summary @ unknownLocation",
														"returnValue": "",
														"status": "DEFAULT HAVOC",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "assert invariant in post-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "6",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "6",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 6",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2711]: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf51 (changed)",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "true"
																			},
																			{
																				"funcName": "_totalSupply: 6",
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
													}
												]
											},
											{
												"funcName": "to_mathint(ERC20.totalSupply()) == sum_of_balances",
												"returnValue": "false",
												"status": "",
												"childrenList":[
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "sum_of_balances",
														"returnValue": "4",
														"status": "",
														"childrenList":[]

													}
												]
											},
											{
												"funcName": "Storage State",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "_balances[0x2711]: 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf51",
																"returnValue": "",
																"status": "HAVOC DEPENDENT",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_totalSupply: 6",
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
									}
								]
							}
						}
,						{
							 "tableRow": {
								"funcName": "approve(address,uint256)",
								"result": "SUCCESS",
								"time": "0",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-approveLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-approveLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-approveLPADRCU256RP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-approveLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "burn(address,uint256)",
								"result": "SUCCESS",
								"time": "0",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-burnLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-burnLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-burnLPADRCU256RP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-burnLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "decreaseAllowance(address,uint256)",
								"result": "SUCCESS",
								"time": "0",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-decreaseAllowanceLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-decreaseAllowanceLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-decreaseAllowanceLPADRCU256RP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-decreaseAllowanceLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "increaseAllowance(address,uint256)",
								"result": "SUCCESS",
								"time": "3",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-increaseAllowanceLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-increaseAllowanceLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-increaseAllowanceLPADRCU256RP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-increaseAllowanceLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "mint(address,uint256)",
								"result": "SUCCESS",
								"time": "1",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-mintLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-mintLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-mintLPADRCU256RP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-mintLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "transfer(address,uint256)",
								"result": "SUCCESS",
								"time": "0",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-transferLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-transferLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-transferLPADRCU256RP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-transferLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "transferFrom(address,address,uint256)",
								"result": "SUCCESS",
								"time": "4",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_preserve-transferFromLPADRCADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_preserve-transferFromLPADRCADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_preserve-transferFromLPADRCADRCU256RP.html",
								"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_preserve-transferFromLPADRCADRCU256RP.html"
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

				},
		{
			"ruleName": "totalSupplyIsSumOfBalances",
			"tableBody":[
				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_skipped_preserve__owner()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_skipped_preserve_allowance(address,address)",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_skipped_preserve_balanceOf(address)",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_skipped_preserve_decimals()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_skipped_preserve_name()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_skipped_preserve_symbol()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_skipped_preserve_totalSupply()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_preserve",
						"result": "FAIL",
						"time": "13",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					},
					"isMultiAssert": true
				}
,				{
					 "tableRow": {
						"funcName": "totalSupplyIsSumOfBalances_instate",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-totalSupplyIsSumOfBalances_instate.html",
						"presimplified_link": "PresimplifiedRule-totalSupplyIsSumOfBalances_instate.html",
						"prelastopt_link": "PrelastoptRule-totalSupplyIsSumOfBalances_instate.html",
						"presolver_link": "PresolverRule-totalSupplyIsSumOfBalances_instate.html"
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

		},
				{
					"ruleName": "balancesBoundedByTotalSupply_preserve",
					"tableBody":[
						{
							 "tableRow": {
								"funcName": "burn(address,uint256)",
								"result": "FAIL",
								"time": "1",
								"graph_link": "Report-balancesBoundedByTotalSupply_preserve-burnLPADRCU256RP-example1.html",
								"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_preserve-burnLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_preserve-burnLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_preserve-burnLPADRCU256RP.html",
								"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_preserve-burnLPADRCU256RP.html"
							},
							 "variables": {
								"invariantCalldata": "bytemap initialized but unknown",
								"certoraInvF.selector": "0x9dc29fac",
								"certoraInvF.isPure": "false",
								"certoraInvF.isView": "false",
								"certoraInvF.isPayable": "false",
								"certoraInvF.numberOfArguments": "2",
								"certoraInvF.isFallback": "false",
								"alice": "0x475",
								"bob": "0x401",
								"invariantEnv.msg.sender": "ERC20 (0x474)",
								"invariantEnv.msg.value": "0",
								"invariantEnv.tx.origin": "0x402",
								"invariantEnv.block.coinbase": "0x403",
								"invariantEnv.block.difficulty": "9",
								"invariantEnv.block.gaslimit": "8",
								"invariantEnv.block.number": "7",
								"invariantEnv.block.timestamp": "6",
								"lastHasThrown": "false",
								"lastReverted": "false",
								"ERC20": "ERC20 (0x474)"
							},
							"assertMessage":[
								"invariant violated in post-state"
							],
							 "failureCauses": {
								"expr": "!((CANON31!!244[R110]+int CANON31!!244[R133])&lt;=(CANON46!!4-CANON56[0x24]))"
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
							},
							 "callTrace": {
								"funcName": "balancesBoundedByTotalSupply_preserve(alice=0x475, bob=0x401, certoraInvF=burn(address,uint256), invariantCalldata=unknown type, invariantEnv=*struct* invariantEnv)",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Storage State",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_balances[0x401]: 15",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_balances[0x475]: 5",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_owner: ERC20 (0x474)",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_totalSupply: 86",
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
										"funcName": "assume invariant in pre-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "5",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x475)",
														"returnValue": "5",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x475]: 5",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x401]: 15",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x475]: 5",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x474)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 86",
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
											},
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "15",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x401)",
														"returnValue": "15",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x401]: 15",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x401]: 15",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x475]: 5",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x474)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 86",
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
													}
												]
											},
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "86",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "86",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 86",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x401]: 15",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x475]: 5",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x474)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 86",
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
													}
												]
											},
											{
												"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob) <= to_mathint(ERC20.totalSupply())",
												"returnValue": "true",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob)",
														"returnValue": "20",
														"status": "",
														"childrenList":[
															{
																"funcName": "ERC20.balanceOf(account=alice)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "ERC20.balanceOf(account=bob)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "check effects of step taken by one of the functions",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.burn(account=14, amount=83)",
												"returnValue": "",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "sender: ERC20 (0x474); receiver: ERC20 (0x474); transferred amount: 0",
														"returnValue": "",
														"status": "TRANSFER",
														"childrenList":[
															{
																"funcName": "Load from sender.balance: 0x52b",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at sender.balance: 0x52b",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from receiver.balance: 0x52b",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at receiver.balance: 0x52b",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "(internal) ERC20.burn(account=14, amount=83)",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._owner: ERC20 (0x474)",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "(internal) ERC20._beforeTokenTransfer(from=14, to=0, amount=83)",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "Storage State",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "ERC20",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[
																					{
																						"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_balances[0x401]: 15",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_balances[0x475]: 5",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_owner: ERC20 (0x474)",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_totalSupply: 86",
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
																"funcName": "Load from ERC20._balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Apply hook store ERC20._balances[KEY address a] := new_value (old: old_value)",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "With parameters:",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "a = 0xe",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[]

																			},
																			{
																				"funcName": "new_value = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc30",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[]

																			},
																			{
																				"funcName": "old_value = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[]

																			}
																		]
																	}
																]
															},
															{
																"funcName": "Store at ERC20._balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc30",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from ERC20._totalSupply: 86",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at ERC20._totalSupply: 3",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "(internal) ERC20._afterTokenTransfer(from=14, to=0, amount=83)",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "Storage State",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "ERC20",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[
																					{
																						"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc30 (changed)",
																						"returnValue": "",
																						"status": "HAVOC DEPENDENT",
																						"childrenList":[]
,
																						"changed": "true"
																					},
																					{
																						"funcName": "_balances[0x401]: 15",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_balances[0x475]: 5",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_owner: ERC20 (0x474)",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_totalSupply: 3 (changed)",
																						"returnValue": "",
																						"status": "HAVOC DEPENDENT",
																						"childrenList":[]
,
																						"changed": "true"
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
																"funcName": "Storage State",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc30",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x401]: 15",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x475]: 5",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x474)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 3",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
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
										"funcName": "assert invariant in post-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "5",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x475)",
														"returnValue": "5",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x475]: 5",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc30",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x401]: 15",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x475]: 5",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x474)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 3",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
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
											},
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "15",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x401)",
														"returnValue": "15",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x401]: 15",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc30",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x401]: 15",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x475]: 5",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x474)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 3",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
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
											},
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "3",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "3",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 3",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc30",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x401]: 15",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x475]: 5",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x474)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 3",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			}
																		],
																		"storageId": "null"
																	}
																],
																"storageId": "10"
															}
														]
													}
												]
											},
											{
												"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob) <= to_mathint(ERC20.totalSupply())",
												"returnValue": "false",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob)",
														"returnValue": "20",
														"status": "",
														"childrenList":[
															{
																"funcName": "ERC20.balanceOf(account=alice)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "ERC20.balanceOf(account=bob)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													}
												]
											},
											{
												"funcName": "Storage State",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "_balances[14]: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc30",
																"returnValue": "",
																"status": "HAVOC DEPENDENT",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_balances[0x401]: 15",
																"returnValue": "",
																"status": "HAVOC",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_balances[0x475]: 5",
																"returnValue": "",
																"status": "HAVOC",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_owner: ERC20 (0x474)",
																"returnValue": "",
																"status": "HAVOC",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_totalSupply: 3",
																"returnValue": "",
																"status": "HAVOC DEPENDENT",
																"childrenList":[]
,
																"changed": "false"
															}
														],
														"storageId": "null"
													}
												],
												"storageId": "11"
											}
										]
									}
								]
							}
						}
,						{
							 "tableRow": {
								"funcName": "deposit()",
								"result": "FAIL",
								"time": "1",
								"graph_link": "Report-balancesBoundedByTotalSupply_preserve-depositLPRP-example1.html",
								"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_preserve-depositLPRP.html",
								"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_preserve-depositLPRP.html",
								"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_preserve-depositLPRP.html",
								"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_preserve-depositLPRP.html"
							},
							 "variables": {
								"certoraInvF.selector": "0xd0e30db0",
								"certoraInvF.isPure": "false",
								"certoraInvF.isView": "false",
								"certoraInvF.isPayable": "true",
								"certoraInvF.numberOfArguments": "0",
								"certoraInvF.isFallback": "false",
								"alice": "0x402",
								"bob": "0x401",
								"invariantEnv.msg.sender": "0x401",
								"invariantEnv.msg.value": "5",
								"invariantEnv.tx.origin": "0x404",
								"invariantEnv.block.coinbase": "0x403",
								"invariantEnv.block.difficulty": "10",
								"invariantEnv.block.gaslimit": "9",
								"invariantEnv.block.number": "3",
								"invariantEnv.block.timestamp": "8",
								"lastHasThrown": "false",
								"lastReverted": "false",
								"ERC20": "ERC20 (0x2711)"
							},
							"assertMessage":[
								"invariant violated in post-state"
							],
							 "failureCauses": {
								"expr": "!((CANON31!!246[R109]+int CANON31!!246[R132])&lt;=CANON46!!4)"
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
							},
							 "callTrace": {
								"funcName": "balancesBoundedByTotalSupply_preserve(alice=0x402, bob=0x401, certoraInvF=deposit(), invariantCalldata=unknown type, invariantEnv=*struct* invariantEnv)",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Storage State",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "_balances[0x401]: 0",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_balances[0x402]: 1",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_totalSupply: 2",
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
										"funcName": "assume invariant in pre-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "1",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x402)",
														"returnValue": "1",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x402]: 1",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x401]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x402]: 1",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 2",
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
											},
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "0",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x401)",
														"returnValue": "0",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x401]: 0",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x401]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x402]: 1",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 2",
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
													}
												]
											},
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "2",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "2",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 2",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x401]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x402]: 1",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 2",
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
													}
												]
											},
											{
												"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob) <= to_mathint(ERC20.totalSupply())",
												"returnValue": "true",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob)",
														"returnValue": "1",
														"status": "",
														"childrenList":[
															{
																"funcName": "ERC20.balanceOf(account=alice)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "ERC20.balanceOf(account=bob)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "check effects of step taken by one of the functions",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.deposit()",
												"returnValue": "",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "sender: 0x401; receiver: ERC20 (0x2711); transferred amount: 5",
														"returnValue": "",
														"status": "TRANSFER",
														"childrenList":[
															{
																"funcName": "Load from sender.balance: 5",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at sender.balance: 0",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from receiver.balance: 0x2297",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at receiver.balance: 0x229c",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "Load from ERC20._balances[0x401]: 0",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													},
													{
														"funcName": "Apply hook store ERC20._balances[KEY address a] := new_value (old: old_value)",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "With parameters:",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "a = 0x401",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	},
																	{
																		"funcName": "new_value = 0x5",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	},
																	{
																		"funcName": "old_value = 0x0",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[]

																	}
																]
															}
														]
													},
													{
														"funcName": "Store at ERC20._balances[0x401]: 5",
														"returnValue": "",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "assert invariant in post-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "1",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x402)",
														"returnValue": "1",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x402]: 1",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x401]: 5 (changed)",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "true"
																			},
																			{
																				"funcName": "_balances[0x402]: 1",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 2",
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
													}
												]
											},
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "5",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x401)",
														"returnValue": "5",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x401]: 5",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x401]: 5",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x402]: 1",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 2",
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
													}
												]
											},
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "2",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "2",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 2",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x401]: 5",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_balances[0x402]: 1",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 2",
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
											},
											{
												"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob) <= to_mathint(ERC20.totalSupply())",
												"returnValue": "false",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob)",
														"returnValue": "6",
														"status": "",
														"childrenList":[
															{
																"funcName": "ERC20.balanceOf(account=alice)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "ERC20.balanceOf(account=bob)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													}
												]
											},
											{
												"funcName": "Storage State",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "_balances[0x401]: 5",
																"returnValue": "",
																"status": "HAVOC DEPENDENT",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_balances[0x402]: 1",
																"returnValue": "",
																"status": "HAVOC",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_totalSupply: 2",
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
						}
,						{
							 "tableRow": {
								"funcName": "mint(address,uint256)",
								"result": "FAIL",
								"time": "1",
								"graph_link": "Report-balancesBoundedByTotalSupply_preserve-mintLPADRCU256RP-example1.html",
								"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_preserve-mintLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_preserve-mintLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_preserve-mintLPADRCU256RP.html",
								"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_preserve-mintLPADRCU256RP.html"
							},
							 "variables": {
								"invariantCalldata": "bytemap initialized but unknown",
								"certoraInvF.selector": "0x40c10f19",
								"certoraInvF.isPure": "false",
								"certoraInvF.isView": "false",
								"certoraInvF.isPayable": "false",
								"certoraInvF.numberOfArguments": "2",
								"certoraInvF.isFallback": "false",
								"alice": "0x2712",
								"bob": "0x2712",
								"invariantEnv.msg.sender": "ERC20 (0x16dc)",
								"invariantEnv.msg.value": "0",
								"invariantEnv.tx.origin": "0x401",
								"invariantEnv.block.coinbase": "0x402",
								"invariantEnv.block.difficulty": "9",
								"invariantEnv.block.gaslimit": "8",
								"invariantEnv.block.number": "7",
								"invariantEnv.block.timestamp": "3",
								"lastHasThrown": "false",
								"lastReverted": "false",
								"ERC20": "ERC20 (0x16dc)"
							},
							"assertMessage":[
								"invariant violated in post-state"
							],
							 "failureCauses": {
								"expr": "!((CANON31!!252[R110]+int CANON31!!252[R133])&lt;=safe_math_narrow:bif(safe_math_promotion:bif(CANON46!!4)+int safe_math_promotion:bif(CANON56[0x24])))"
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
							},
							 "callTrace": {
								"funcName": "balancesBoundedByTotalSupply_preserve(alice=0x2712, bob=0x2712, certoraInvF=mint(address,uint256), invariantCalldata=unknown type, invariantEnv=*struct* invariantEnv)",
								"returnValue": "",
								"status": "",
								"childrenList":[
									{
										"funcName": "Storage State",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "_balances[0x2712]: 0",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_owner: ERC20 (0x16dc)",
														"returnValue": "",
														"status": "HAVOC",
														"childrenList":[]
,
														"changed": "false"
													},
													{
														"funcName": "_totalSupply: 1",
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
										"funcName": "assume invariant in pre-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "0",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x2712)",
														"returnValue": "0",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x2712]: 0",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2712]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x16dc)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 1",
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
											},
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "0",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x2712)",
														"returnValue": "0",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x2712]: 0",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2712]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x16dc)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 1",
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
													}
												]
											},
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "1",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "1",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 1",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2712]: 0",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x16dc)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 1",
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
													}
												]
											},
											{
												"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob) <= to_mathint(ERC20.totalSupply())",
												"returnValue": "true",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob)",
														"returnValue": "0",
														"status": "",
														"childrenList":[
															{
																"funcName": "ERC20.balanceOf(account=alice)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "ERC20.balanceOf(account=bob)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													}
												]
											}
										]
									},
									{
										"funcName": "check effects of step taken by one of the functions",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.mint(account=0x2712, amount=5)",
												"returnValue": "",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "sender: ERC20 (0x16dc); receiver: ERC20 (0x16dc); transferred amount: 0",
														"returnValue": "",
														"status": "TRANSFER",
														"childrenList":[
															{
																"funcName": "Load from sender.balance: 0x16dd",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at sender.balance: 0x16dd",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from receiver.balance: 0x16dd",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at receiver.balance: 0x16dd",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "(internal) ERC20.mint(account=0x2712, amount=5)",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._owner: ERC20 (0x16dc)",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "(internal) ERC20._beforeTokenTransfer(from=0, to=0x2712, amount=5)",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "Storage State",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "ERC20",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[
																					{
																						"funcName": "_balances[0x2712]: 0",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_owner: ERC20 (0x16dc)",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_totalSupply: 1",
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
																"funcName": "Load from ERC20._totalSupply: 1",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Store at ERC20._totalSupply: 6",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Load from ERC20._balances[0x2712]: 0",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "Apply hook store ERC20._balances[KEY address a] := new_value (old: old_value)",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "With parameters:",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "a = 0x2712",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[]

																			},
																			{
																				"funcName": "new_value = 0x5",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[]

																			},
																			{
																				"funcName": "old_value = 0x0",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[]

																			}
																		]
																	}
																]
															},
															{
																"funcName": "Store at ERC20._balances[0x2712]: 5",
																"returnValue": "",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "(internal) ERC20._afterTokenTransfer(from=0, to=0x2712, amount=5)",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "Storage State",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "ERC20",
																				"returnValue": "",
																				"status": "",
																				"childrenList":[
																					{
																						"funcName": "_balances[0x2712]: 5 (changed)",
																						"returnValue": "",
																						"status": "HAVOC DEPENDENT",
																						"childrenList":[]
,
																						"changed": "true"
																					},
																					{
																						"funcName": "_owner: ERC20 (0x16dc)",
																						"returnValue": "",
																						"status": "HAVOC",
																						"childrenList":[]
,
																						"changed": "false"
																					},
																					{
																						"funcName": "_totalSupply: 6 (changed)",
																						"returnValue": "",
																						"status": "HAVOC DEPENDENT",
																						"childrenList":[]
,
																						"changed": "true"
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
																"funcName": "Storage State",
																"returnValue": "",
																"status": "",
																"childrenList":[
																	{
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2712]: 5",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x16dc)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 6",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
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
										"funcName": "assert invariant in post-state",
										"returnValue": "",
										"status": "",
										"childrenList":[
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "5",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x2712)",
														"returnValue": "5",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x2712]: 5",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2712]: 5",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x16dc)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 6",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
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
											},
											{
												"funcName": "ERC20.balanceOf(account=X)",
												"returnValue": "5",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.balanceOf(account=0x2712)",
														"returnValue": "5",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._balances[0x2712]: 5",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2712]: 5",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x16dc)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 6",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
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
											},
											{
												"funcName": "ERC20.totalSupply()",
												"returnValue": "6",
												"status": "SUCCESS",
												"childrenList":[
													{
														"funcName": "(internal) ERC20.totalSupply()",
														"returnValue": "6",
														"status": "",
														"childrenList":[
															{
																"funcName": "Load from ERC20._totalSupply: 6",
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
																		"funcName": "ERC20",
																		"returnValue": "",
																		"status": "",
																		"childrenList":[
																			{
																				"funcName": "_balances[0x2712]: 5",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_owner: ERC20 (0x16dc)",
																				"returnValue": "",
																				"status": "HAVOC",
																				"childrenList":[]
,
																				"changed": "false"
																			},
																			{
																				"funcName": "_totalSupply: 6",
																				"returnValue": "",
																				"status": "HAVOC DEPENDENT",
																				"childrenList":[]
,
																				"changed": "false"
																			}
																		],
																		"storageId": "null"
																	}
																],
																"storageId": "10"
															}
														]
													}
												]
											},
											{
												"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob) <= to_mathint(ERC20.totalSupply())",
												"returnValue": "false",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20.balanceOf(account=alice) + ERC20.balanceOf(account=bob)",
														"returnValue": "10",
														"status": "",
														"childrenList":[
															{
																"funcName": "ERC20.balanceOf(account=alice)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															},
															{
																"funcName": "ERC20.balanceOf(account=bob)",
																"returnValue": "*",
																"status": "",
																"childrenList":[]

															}
														]
													},
													{
														"funcName": "to_mathint(ERC20.totalSupply())",
														"returnValue": "*",
														"status": "",
														"childrenList":[]

													}
												]
											},
											{
												"funcName": "Storage State",
												"returnValue": "",
												"status": "",
												"childrenList":[
													{
														"funcName": "ERC20",
														"returnValue": "",
														"status": "",
														"childrenList":[
															{
																"funcName": "_balances[0x2712]: 5",
																"returnValue": "",
																"status": "HAVOC DEPENDENT",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_owner: ERC20 (0x16dc)",
																"returnValue": "",
																"status": "HAVOC",
																"childrenList":[]
,
																"changed": "false"
															},
															{
																"funcName": "_totalSupply: 6",
																"returnValue": "",
																"status": "HAVOC DEPENDENT",
																"childrenList":[]
,
																"changed": "false"
															}
														],
														"storageId": "null"
													}
												],
												"storageId": "11"
											}
										]
									}
								]
							}
						}
,						{
							 "tableRow": {
								"funcName": "approve(address,uint256)",
								"result": "SUCCESS",
								"time": "0",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_preserve-approveLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_preserve-approveLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_preserve-approveLPADRCU256RP.html",
								"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_preserve-approveLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "decreaseAllowance(address,uint256)",
								"result": "SUCCESS",
								"time": "0",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_preserve-decreaseAllowanceLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_preserve-decreaseAllowanceLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_preserve-decreaseAllowanceLPADRCU256RP.html",
								"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_preserve-decreaseAllowanceLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "increaseAllowance(address,uint256)",
								"result": "SUCCESS",
								"time": "0",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_preserve-increaseAllowanceLPADRCU256RP.html",
								"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_preserve-increaseAllowanceLPADRCU256RP.html",
								"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_preserve-increaseAllowanceLPADRCU256RP.html",
								"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_preserve-increaseAllowanceLPADRCU256RP.html"
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
,						{
							 "tableRow": {
								"funcName": "withdraw(uint256)",
								"result": "SUCCESS",
								"time": "0",
								"graph_link": "",
								"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_preserve-withdrawLPU256RP.html",
								"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_preserve-withdrawLPU256RP.html",
								"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_preserve-withdrawLPU256RP.html",
								"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_preserve-withdrawLPU256RP.html"
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
											"caller": "ERC20.withdraw(uint256)",
											"callee": "[?].[?]",
											"summmary": "AUTO havoc",
											"comments":[
												{
													"callee resolution": "both callee contract and sighash are unresolved"
												},
												{
													"havoc cause": "The Prover could not resolve the callee, thus, havoc'd the call"
												},
												{
													"havoc scope": "all contracts except ERC20 (ce4604a0000000000000000000000003)"
												},
												{
													"summary application reason": "chosen automatically by the Prover"
												}
											]
										}
									}
								]
							}
						}
					]

				},
		{
			"ruleName": "balancesBoundedByTotalSupply",
			"tableBody":[
				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_skipped_preserve__owner()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_skipped_preserve_allowance(address,address)",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_skipped_preserve_balanceOf(address)",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_skipped_preserve_decimals()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_skipped_preserve_name()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_skipped_preserve_symbol()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_skipped_preserve_totalSupply()",
						"result": "SKIPPED",
						"time": "?",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					}
				}
,				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_preserve",
						"result": "FAIL",
						"time": "3",
						"graph_link": "",
						"preoptimized_link": "",
						"presimplified_link": "",
						"prelastopt_link": "",
						"presolver_link": ""
					},
					"isMultiAssert": true
				}
,				{
					 "tableRow": {
						"funcName": "balancesBoundedByTotalSupply_instate",
						"result": "SUCCESS",
						"time": "3",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply_instate.html",
						"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply_instate.html",
						"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply_instate.html",
						"presolver_link": "PresolverRule-balancesBoundedByTotalSupply_instate.html"
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
						"funcName": "balancesBoundedByTotalSupply_preserve_explicit_transfer(address,uint256)",
						"result": "SUCCESS",
						"time": "5",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply-balancesBoundedByTotalSupply_preserve_explicit_transferLPADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply-balancesBoundedByTotalSupply_preserve_explicit_transferLPADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply-balancesBoundedByTotalSupply_preserve_explicit_transferLPADRCU256RP.html",
						"presolver_link": "PresolverRule-balancesBoundedByTotalSupply-balancesBoundedByTotalSupply_preserve_explicit_transferLPADRCU256RP.html"
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
						"funcName": "balancesBoundedByTotalSupply_preserve_explicit_transferFrom(address,address,uint256)",
						"result": "SUCCESS",
						"time": "1",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-balancesBoundedByTotalSupply-balancesBoundedByTotalSupply_preserve_explicit_transferFromLPADRCADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-balancesBoundedByTotalSupply-balancesBoundedByTotalSupply_preserve_explicit_transferFromLPADRCADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-balancesBoundedByTotalSupply-balancesBoundedByTotalSupply_preserve_explicit_transferFromLPADRCADRCU256RP.html",
						"presolver_link": "PresolverRule-balancesBoundedByTotalSupply-balancesBoundedByTotalSupply_preserve_explicit_transferFromLPADRCADRCU256RP.html"
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

		},
		{
			"ruleName": "onlyHolderCanChangeAllowance",
			"tableBody":[
				{
					 "tableRow": {
						"funcName": "_owner()",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-_ownerLPRP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-_ownerLPRP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-_ownerLPRP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-_ownerLPRP.html"
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
						"funcName": "allowance(address,address)",
						"result": "SUCCESS",
						"time": "2",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-allowanceLPADRCADRRP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-allowanceLPADRCADRRP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-allowanceLPADRCADRRP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-allowanceLPADRCADRRP.html"
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
						"funcName": "approve(address,uint256)",
						"result": "SUCCESS",
						"time": "1",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-approveLPADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-approveLPADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-approveLPADRCU256RP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-approveLPADRCU256RP.html"
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
						"time": "4",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-balanceOfLPADRRP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-balanceOfLPADRRP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-balanceOfLPADRRP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-balanceOfLPADRRP.html"
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
						"funcName": "burn(address,uint256)",
						"result": "SUCCESS",
						"time": "1",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-burnLPADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-burnLPADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-burnLPADRCU256RP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-burnLPADRCU256RP.html"
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
						"funcName": "decimals()",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-decimalsLPRP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-decimalsLPRP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-decimalsLPRP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-decimalsLPRP.html"
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
						"funcName": "decreaseAllowance(address,uint256)",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-decreaseAllowanceLPADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-decreaseAllowanceLPADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-decreaseAllowanceLPADRCU256RP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-decreaseAllowanceLPADRCU256RP.html"
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
						"funcName": "deposit()",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-depositLPRP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-depositLPRP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-depositLPRP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-depositLPRP.html"
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
						"funcName": "increaseAllowance(address,uint256)",
						"result": "SUCCESS",
						"time": "3",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-increaseAllowanceLPADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-increaseAllowanceLPADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-increaseAllowanceLPADRCU256RP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-increaseAllowanceLPADRCU256RP.html"
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
						"funcName": "mint(address,uint256)",
						"result": "SUCCESS",
						"time": "1",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-mintLPADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-mintLPADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-mintLPADRCU256RP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-mintLPADRCU256RP.html"
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
						"funcName": "name()",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-nameLPRP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-nameLPRP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-nameLPRP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-nameLPRP.html"
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
						"funcName": "symbol()",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-symbolLPRP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-symbolLPRP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-symbolLPRP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-symbolLPRP.html"
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
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-totalSupplyLPRP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-totalSupplyLPRP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-totalSupplyLPRP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-totalSupplyLPRP.html"
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
						"funcName": "transfer(address,uint256)",
						"result": "SUCCESS",
						"time": "1",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-transferLPADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-transferLPADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-transferLPADRCU256RP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-transferLPADRCU256RP.html"
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
						"funcName": "transferFrom(address,address,uint256)",
						"result": "SUCCESS",
						"time": "1",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-transferFromLPADRCADRCU256RP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-transferFromLPADRCADRCU256RP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-transferFromLPADRCADRCU256RP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-transferFromLPADRCADRCU256RP.html"
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
						"funcName": "withdraw(uint256)",
						"result": "SUCCESS",
						"time": "0",
						"graph_link": "",
						"preoptimized_link": "PreoptimizedRule-onlyHolderCanChangeAllowance-withdrawLPU256RP.html",
						"presimplified_link": "PresimplifiedRule-onlyHolderCanChangeAllowance-withdrawLPU256RP.html",
						"prelastopt_link": "PrelastoptRule-onlyHolderCanChangeAllowance-withdrawLPU256RP.html",
						"presolver_link": "PresolverRule-onlyHolderCanChangeAllowance-withdrawLPU256RP.html"
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
									"caller": "ERC20.withdraw(uint256)",
									"callee": "[?].[?]",
									"summmary": "AUTO havoc",
									"comments":[
										{
											"callee resolution": "both callee contract and sighash are unresolved"
										},
										{
											"havoc cause": "The Prover could not resolve the callee, thus, havoc'd the call"
										},
										{
											"havoc scope": "all contracts except ERC20 (ce4604a0000000000000000000000003)"
										},
										{
											"summary application reason": "chosen automatically by the Prover"
										}
									]
								}
							}
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
						"name": "ERC20",
						"address": "ce4604a0000000000000000000000003",
						"pre_state": "{}",
						"methodsNames":[
							"constructor()",
							"symbol()",
							"name()",
							"_owner()",
							"decimals()",
							"transferFrom(address,address,uint256)",
							"burn(address,uint256)",
							"withdraw(uint256)",
							"deposit()",
							"balanceOf(address)",
							"increaseAllowance(address,uint256)",
							"approve(address,uint256)",
							"decreaseAllowance(address,uint256)",
							"mint(address,uint256)",
							"transfer(address,uint256)",
							"totalSupply()",
							"allowance(address,address)"
						]
					}
				}
			]
		}
	}