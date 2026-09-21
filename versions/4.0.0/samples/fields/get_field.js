import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class GetField {
    static async initialize() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("Client_Id")
            .clientSecret("Client_Secret")
            .refreshToken("Refresh_Token")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }

    static async getField(moduleAPIName, fieldId) {
        //example
        // let moduleAPIName = "module_api_name"
        // let fieldId = 93043n
        let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Fields.GetFieldParam.MODULE, moduleAPIName);
        //Call getField method which takes fieldId as parameter
        let response = await fieldsOperations.getField(fieldId, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Fields.ResponseWrapper) {
                    let fields = responseObject.getFields();
                    fields.forEach(field => {
                        console.log("Field SystemMandatory: " + field.getSystemMandatory().toString());
                        console.log("Field Webhook: " + field.getWebhook().toString());
                        let operationType = field.getOperationType();
                        if (operationType != null)
                        {
                            console.log("Field OperationType WebUpdate: " + operationType.getWebUpdate());
                            console.log("Field OperationType APICreate: " + operationType.getAPICreate());
                            console.log("Field OperationType WebCreate: " + operationType.getWebCreate());
                            console.log("Field OperationType APIUpdate: " + operationType.getAPIUpdate());
                        }
                        console.log("Field JsonType: " + field.getJsonType());
                        let privateInfo = field.getPrivate();
                        if (privateInfo != null) {
                            console.log("Private Details\n");
                            console.log("Field Private Type: " + privateInfo.getType());
                            console.log("Field Private Export: " + privateInfo.getExport());
                            console.log("Field Private Restricted: " + privateInfo.getRestricted());
                        }
                        let crypt = field.getCrypt();
                        if (crypt != null) {
                            console.log("Field Crypt Mode: " + crypt.getMode());
                            console.log("Field Crypt Column: " + crypt.getColumn());
                            console.log("Field Crypt Table: " + crypt.getTable());
                            console.log("Field Crypt Status: " + crypt.getStatus().toString());
                            let encFldIds = crypt.getEncfldids();
                            if (encFldIds != null) {
                                console.log("EncFldIds : ");
                                encFldIds.forEach(encFldId => {
                                    console.log(encFldId);
                                });
                            }
                            console.log("Field Crypt Notify: " + crypt.getNotify());
                        }
                        console.log("Field FieldLabel: " + field.getFieldLabel());
                        let toolTip = field.getTooltip();
                        if (toolTip != null) {
                            console.log("Field ToolTip Name: " + toolTip.getName());
                            console.log("Field ToolTip Value: " + toolTip.getValue());
                        }
                        console.log("Field CreatedSource: " + field.getCreatedSource());
                        console.log("Field Type: " + field.getType());
                        console.log("Field FieldReadOnly: " + field.getFieldReadOnly().toString());
                        console.log("Field DisplayLabel: " + field.getDisplayLabel());
                        console.log("Field DisplayType: " + field.getDisplayType());
                        console.log("Field UIType: " + field.getUiType());
                        console.log("Field ReadOnly: " + field.getReadOnly().toString());
                        let associationDetails = field.getAssociationDetails();
                        if (associationDetails != null) {
                            let lookupField = associationDetails.getLookupField();
                            if (lookupField != null) {
                                console.log("Field AssociationDetails LookupField ID: " + lookupField.getId());
                                console.log("Field AssociationDetails LookupField Name: " + lookupField.getName())
                            }
                            let relatedField = associationDetails.getRelatedField();
                            if (relatedField != null) {
                                console.log("Field AssociationDetails RelatedField ID: " + relatedField.getId());
                                console.log("Field AssociationDetails RelatedField Name: " + relatedField.getName());
                            }
                        }
                        if (field.getQuickSequenceNumber() != null) {
                            console.log("Field QuickSequenceNumber: " + field.getQuickSequenceNumber().toString());
                        }
                        if (field.getBusinesscardSupported() != null) {
                            console.log("Field BusinesscardSupported: " + field.getBusinesscardSupported().toString());
                        }
                        let multiModuleLookup = field.getMultiModuleLookup();
                        if (multiModuleLookup != null) {
                            console.log("Field MultiModuleLookup Name: " + multiModuleLookup.getAPIName());
                            console.log("Field MultiModuleLookup DisplayLabel: " + multiModuleLookup.getDisplayLabel());
                            let module1 = multiModuleLookup.getModules();
                            if (module1 != null) {
                                console.log("Field MultiModuleLookup Module APIName: " + module1.getAPIName());
                                console.log("Field MultiModuleLookup Module Id: " + module1.getId());
                            }
                        }
                        let currency = field.getCurrency();
                        if (currency != null) {
                            console.log("Field Currency RoundingOption: " + currency.getRoundingOption());
                            if (currency.getPrecision() != null) {
                                console.log("Field Currency Precision: " + currency.getPrecision().toString());
                            }
                        }
                        console.log("Field ID: " + field.getId());
                        if (field.getCustomField() != null) {
                            console.log("Field CustomField: " + field.getCustomField().toString());
                        }
                        let lookup = field.getLookup();
                        if (lookup != null) {
                            console.log("Field ModuleLookup DisplayLabel: " + lookup.getDisplayLabel());
                            console.log("Field ModuleLookup RevalidateFilterDuringEdit: " + lookup.getRevalidateFilterDuringEdit());
                            console.log("Field ModuleLookup APIName: " + lookup.getAPIName());
                            let module = lookup.getModule();
                            if (module != null) {
                                console.log("Field ModuleLookup Module APIName: " + module.getAPIName());
                                console.log("Field ModuleLookup Module Id: " + module.getId());
                            }
                            let querydetails = lookup.getQueryDetails();
                            if (querydetails != null) {
                                console.log("Field ModuleLookup QueryDetails Query Id: " + querydetails.getQueryId());
                            }
                            if (lookup.getId() != null) {
                                console.log("Field ModuleLookup ID: " + lookup.getId().toString());
                            }
                        }
                        console.log("Field Filterable: " + field.getFilterable());
                        if (field.getVisible() != null) {
                            console.log("Field Visible: " + field.getVisible().toString());
                        }
                        let profiles = field.getProfiles();
                        if (profiles != null) {
                            profiles.forEach(profile => {
                                console.log("Field Profile PermissionType: " + profile.getPermissionType());
                                console.log("Field Profile Name: " + profile.getName());
                                console.log("Field Profile Id: " + profile.getId());
                            });
                        }
                        if (field.getLength() != null) {
                            console.log("Field Length: " + field.getLength().toString());
                        }
                        let viewType = field.getViewType();
                        if (viewType != null) {
                            console.log("Field ViewType View: " + viewType.getView().toString());
                            console.log("Field ViewType Edit: " + viewType.getEdit().toString());
                            console.log("Field ViewType Create: " + viewType.getCreate().toString());
                            console.log("Field ViewType QuickCreate: " + viewType.getQuickCreate().toString());
                        }
                        if (field.getDisplayField() != null) {
                            //check if field is DisplayField
                            console.log("Field DisplayField " + field.getDisplayField());
                        }
                        console.log("Field PickListValuesSortedLexically: " + field.getPickListValuesSortedLexically());
                        console.log("Field Sortable: " + field.getSortable());
                        let subform = field.getAssociatedModule();
                        if (subform != null) {
                            console.log("Field Subform Module: " + subform.getModule());
                            if (subform.getId() != null) {
                                console.log("Field Subform ID: " + subform.getId().toString());
                            }
                        }
                        if (field.getSequenceNumber() != null) {
                            //get UI type of field
                            console.log("Field sequence number " + field.getSequenceNumber());
                        }
                        let external = field.getExternal();
                        if (external != null) {
                            console.log("Field External Show: " + external.getShow());
                            console.log("Field External Type: " + external.getType());
                            console.log("Field External AllowMultipleConfig: " + external.getAllowMultipleConfig());
                        }
                        console.log("Field APIName: " + field.getAPIName().toString());
                        let unique = field.getUnique();
                        if (unique != null) {
                            console.log("Field Unique Casesensitive : " + unique.getCasesensitive());
                        }
                        if (field.getHistoryTracking() != null) {
                            let historytracking = field.getHistoryTracking();
                            let module = historytracking.getModule();
                            if (module != null) {
                                let moduleLayout = module.getLayout();
                                if (moduleLayout != null) {
                                    console.log("Module Layout ID" + moduleLayout.getId());
                                }
                                console.log("Module DisplayLabel" + module.getDisplayLabel());
                                console.log("Module APIName" + module.getAPIName());
                                console.log("Module ID" + module.getId());
                                console.log("Module Module" + module.getModule());
                                console.log("Module ModuleName" + module.getModuleName());
                            }
                            let durationConfigured = historytracking.getDurationConfiguredField();
                            if (durationConfigured != null) {
                                console.log("Historytracking duration configured field" + durationConfigured.getId());
                            }
                        }
                        console.log("Field DataType: " + field.getDataType().toString());
                        let formula = field.getFormula();
                        if (formula != null) {
                            console.log("Field Formula ReturnType : " + formula.getReturnType());
                            if (formula.getExpression() != null) {
                                console.log("Field Formula Expression : " + formula.getExpression().toString());
                            }
                        }
                        if (field.getDecimalPlace() != null) {
                            console.log("Field DecimalPlace: " + field.getDecimalPlace().toString());
                        }
                        console.log("Field MassUpdate: " + field.getMassUpdate());
                        if (field.getBlueprintSupported() != null) {
                            console.log("Field BlueprintSupported: " + field.getBlueprintSupported().toString());
                        }
                        let multiSelectLookup = field.getMultiselectlookup();
                        if (multiSelectLookup !== null) {
                            let linkingDetails = multiSelectLookup.getLinkingDetails();

                            if (linkingDetails) {
                                let module = linkingDetails.getModule();
                                if (module) {
                                    console.log("Field Multiselectlookup LinkingDetails Module Visibility: ",  module.getVisibility());
                                    console.log("Field Multiselectlookup LinkingDetails Module PluralLabel: ",  module.getPluralLabel());
                                    console.log("Field Multiselectlookup LinkingDetails Module APIName: ",  module.getAPIName());
                                    console.log("Field Multiselectlookup LinkingDetails Module Id: ",  module.getId());
                                }

                                let lookupField = linkingDetails.getLookupField();
                                if (lookupField) {
                                    console.log("Field MultiSelectLookup LinkingDetails LookupField APIName: ",  lookupField.getAPIName());
                                    console.log("Field MultiSelectLookup LinkingDetails LookupField FieldLabel: ", lookupField.getFieldLabel());
                                    console.log("Field MultiSelectLookup LinkingDetails LookupField Id: ",  lookupField.getId());
                                }

                                let connectedLookupField = linkingDetails.getConnectedLookupField();
                                if (connectedLookupField) {
                                    console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField APIName: ", connectedLookupField.getAPIName());
                                    console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField FieldLabel: ", connectedLookupField.getFieldLabel());
                                    console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField Id: ", connectedLookupField.getId());
                                }
                            }

                            let connectedDetails = multiSelectLookup.getConnectedDetails();
                            if (connectedDetails) {
                                let connectedField = connectedDetails.getField();
                                if (connectedField) {
                                    console.log("Field Multiselectlookup ConnectedDetails Field APIName: ", connectedField.getAPIName());
                                    console.log("Field Multiselectlookup ConnectedDetails Field FieldLabel: ", connectedField.getFieldLabel());
                                    console.log("Field Multiselectlookup ConnectedDetails Field id: ", connectedField.getId());
                                }

                                let connectedModule = connectedDetails.getModule();
                                if (connectedModule) {
                                    console.log("Field MultiSelectLookup ConnectedDetails Module PluralLabel: ", connectedModule.getPluralLabel());
                                    console.log("Field MultiSelectLookup ConnectedDetails Module APIName: ", connectedModule.getAPIName());
                                    console.log("Field MultiSelectLookup ConnectedDetails Module Id: ", connectedModule.getId());
                                }

                                let layouts = connectedDetails.getLayouts();
                                if (layouts && layouts.length > 0) {
                                    for (let layout of layouts) {
                                        console.log("Field MultiSelectLookup ConnectedDetails Layouts APIName: ", layout.getAPIName());
                                        console.log("Field MultiSelectLookup ConnectedDetails Layouts Id: ", layout.getId());
                                    }
                                }
                            }

                            let relatedList = multiSelectLookup.getRelatedList();
                            if (relatedList) {
                                console.log("Field MultiSelectLookup RelatedList DisplayLabel: ", relatedList.getDisplayLabel());
                                console.log("Field MultiSelectLookup RelatedList APIName: ", relatedList.getAPIName());
                                console.log("Field MultiSelectLookup RelatedList Id: ", relatedList.getId());
                            }
                        }

                        let pickListValues = field.getPickListValues();
                        if (pickListValues != null) {
                            pickListValues.forEach(async pickListValue => {
                                await this.printPickListValue(pickListValue);
                            });
                        }
                        if (field.getDefaultValue() != null) {
                            console.log("Field DefaultValue: " + field.getDefaultValue());
                        }
                        if (field.getConvertMapping() != null) {
                            let convertMapping = field.getConvertMapping();
                            console.log("Field ConvertMapping Account : " + convertMapping.getAccounts());
                            console.log("Field ConvertMapping Contact : " + convertMapping.getContacts());
                            console.log("Field ConvertMapping Account : " + convertMapping.getDeals());
                        }
                        if (field.getMultiuserlookup !== null) {
                            let multiuserlookup =  field.getMultiuserlookup();
                            if (multiuserlookup !== null) {
                                let linkingDetails =  multiuserlookup.getLinkingDetails();

                                if (linkingDetails) {
                                    let module =  linkingDetails.getModule();
                                    if (module) {
                                        console.log("Field Multiuserlookup LinkingDetails Module Visibility: ",  module.getVisibility());
                                        console.log("Field Multiuserlookup LinkingDetails Module PluralLabel: ",  module.getPluralLabel());
                                        console.log("Field Multiuserlookup LinkingDetails Module APIName: ",  module.getAPIName());
                                        console.log("Field Multiuserlookup LinkingDetails Module Id: ",  module.getId());
                                    }

                                    let lookupField = linkingDetails.getLookupField();
                                    if (lookupField) {
                                        console.log("Field Multiuserlookup LinkingDetails LookupField APIName: ",  lookupField.getAPIName());
                                        console.log("Field Multiuserlookup LinkingDetails LookupField FieldLabel: ",  lookupField.getFieldLabel());
                                        console.log("Field Multiuserlookup LinkingDetails LookupField Id: ", lookupField.getId());
                                    }

                                    let connectedLookupField = linkingDetails.getConnectedLookupField();
                                    if (connectedLookupField) {
                                        console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField APIName: ",  connectedLookupField.getAPIName());
                                        console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField FieldLabel: ",  connectedLookupField.getFieldLabel());
                                        console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField Id: ", connectedLookupField.getId());
                                    }
                                }

                                console.log("Field Multiuserlookup RecordAccess: ", multiuserlookup.getRecordAccess());
                            }
                        }

                        if (field.getGlobalPicklist !== null) {
                            let globalPicklist = field.getGlobalPicklist();
                            if (globalPicklist !== null) {
                                console.log("Fields GlobalPicklist Id: ", globalPicklist.getId());
                                console.log("Fields GlobalPicklist APIName: ",  globalPicklist.getAPIName());
                            }
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Fields.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
    static async printPickListValue(pickListValue) {
        console.log("Field PickListValue DisplayValue: " + pickListValue.getDisplayValue());
        console.log(" Fields PickListValue Probability: " + pickListValue.getProbability());
        console.log(" Fields PickListValue ForecastCategory: " + pickListValue.getForecastCategory());
        if (pickListValue.getSequenceNumber() != null) {
            console.log("Field PickListValue SequenceNumber: " + pickListValue.getSequenceNumber().toString());
        }
        console.log("Field PickListValue ExpectedDataType: " + pickListValue.getExpectedDataType());
        console.log("Field PickListValue ActualValue: " + pickListValue.getActualValue());
        console.log("Field PickListValue SysRefName: " + pickListValue.getSysRefName());
        console.log("Field PickListValue Type: " + pickListValue.getType());
        console.log("Field PickListValue Id: " + pickListValue.getId());
        console.log(" Fields PickListValue ForecastType: " + pickListValue.getForecastType());
        if (pickListValue.getMaps() != null) {
            pickListValue.getMaps().forEach(map => {
                console.log("Field PickListValue Maps APIName: " + map.getAPIName());
                let pickListValues = map.getPickListValues();
                if (pickListValues != null) {
                    pickListValues.forEach(async pickListValue1 => {
                        await this.printPickListValue(pickListValue1);
                    });
                }
            });
        }
    }
}
await GetField.initialize();
let moduleAPIName = "leads";
let fieldId = 66539000405006n;
await GetField.getField(moduleAPIName, fieldId);
