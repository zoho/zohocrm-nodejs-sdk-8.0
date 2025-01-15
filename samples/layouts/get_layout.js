import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class GetLayout {
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

    static async getLayout(moduleAPIName, layoutId) {
        //example
        //let moduleAPIName = "module_api_name";
        //let layoutId = 091055n
        let layoutsOperations = new ZOHOCRMSDK.Layouts.LayoutsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Layouts.GetLayoutsParam.MODULE, moduleAPIName);
        //Call getLayout method
        let response = await layoutsOperations.getLayout(layoutId, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Layouts.ResponseWrapper) {
                    let layouts = responseObject.getLayouts();
                    layouts.forEach(layout => {
                        if (layout.getCreatedTime() != null) {
                            console.log("Layout CreatedTime: " + layout.getCreatedTime().toString());
                        }
                        console.log("Layout Visible: " + layout.getVisible().toString());
                        let createdFor = layout.getCreatedFor();
                        if (createdFor != null) {
                            console.log("Layout CreatedFor User-Name: " + createdFor.getName());
                            console.log("Layout CreatedFor User-ID: " + createdFor.getId());
                            console.log("Layout CreatedFor User-Email: " + createdFor.getEmail());
                        }
                        let profiles = layout.getProfiles();
                        if (profiles != null) {
                            profiles.forEach(profile => {
                                console.log("Layout Profile Default: " + profile.getDefault().toString());
                                console.log("Layout Profile Name: " + profile.getName().toString());
                                console.log("Layout Profile ID: " + profile.getId().toString());
                                let defaultView = profile.getDefaultview();
                                if (defaultView != null) {
                                    console.log("Layout Profile DefaultView Name: " + defaultView.getName());
                                    console.log("Layout Profile DefaultView ID: " + defaultView.getId());
                                    console.log("Layout Profile DefaultView Type: " + defaultView.getType());
                                }
                            });
                        }
                        let createdBy = layout.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Layout CreatedBy User-Name: " + createdBy.getName());
                            console.log("Layout CreatedBy User-ID: " + createdBy.getId());
                            console.log("Layout CreatedBy User-Email: " + createdBy.getEmail());
                        }
                        let sections = layout.getSections();
                        if (sections != null) {
                            sections.forEach(section => {
                                console.log("Layout Section DisplayLabel: " + section.getDisplayLabel());
                                console.log("Layout Section SequenceNumber: " + section.getSequenceNumber().toString());
                                console.log("Layout Section Issubformsection: " + section.getIssubformsection().toString());
                                console.log("Layout Section TabTraversal: " + section.getTabTraversal().toString());
                                console.log("Layout Section APIName: " + section.getAPIName());
                                console.log("Layout Section ColumnCount: " + section.getColumnCount().toString());
                                console.log("Layout Section Name: " + section.getName());
                                console.log("Layout Section GeneratedType: " + section.getGeneratedType());
                                console.log("Layout Section Type: " + section.getType());
                                let fields = section.getFields();
                                if (fields != null) {
                                    fields.forEach(async field => {
                                        await this.printField(field);
                                    });
                                }
                                let properties = section.getProperties();
                                if (properties != null) {
                                    console.log("Layout Section Properties ReorderRows: " + properties.getReorderRows().toString());
                                    let tooltip = properties.getTooltip();
                                    if (tooltip != null) {
                                        console.log("Layout Section Properties ToolTip Name: " + tooltip.getName().toString());
                                        console.log("Layout Section Properties ToolTip Value: " + tooltip.getValue().toString());
                                    }
                                    console.log("Layout Section Properties MaximumRows: " + properties.getMaximumRows().toString());
                                }
                            });
                        }
                        console.log("Layout ShowBusinessCard: " + layout.getShowBusinessCard());
                        if (layout.getModifiedTime() != null) {
                            console.log("Layout ModifiedTime: " + layout.getModifiedTime());
                        }
                        console.log("Layout Name: " + layout.getName());
                        let modifiedBy = layout.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Layout ModifiedBy User-Name: " + modifiedBy.getName());
                            console.log("Layout ModifiedBy User-ID: " + modifiedBy.getId());
                            console.log("Layout ModifiedBy User-Email: " + modifiedBy.getEmail());
                        }
                        console.log("Layout ID: " + layout.getId());
                        console.log("Layout Status: " + layout.getStatus());
                        console.log("Layout DisplayType : " + layout.getDisplayType());
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Layouts.APIException) {
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
    static async printField(field) {
        console.log("Field SystemMandatory: " + field.getSystemMandatory().toString());
        console.log("Field Webhook: " + field.getWebhook().toString());
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
            console.log("Crypt Details");
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
        console.log("Field FieldReadOnly: " + field.getFieldReadOnly().toString());
        console.log("Field DisplayLabel: " + field.getDisplayLabel());
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
        console.log("Field Filterable: " + field.getFilterable());
        if (field.getConvertMapping() != null) {
            console.log("Field ConvertMapping: \n");
            let convertMapping = field.getConvertMapping();
            console.log(convertMapping.getAccounts());
            console.log(convertMapping.getContacts());
            console.log(convertMapping.getDeals());
        }
        if (field.getHistoryTracking() != null) {
            let historytracking = field.getHistoryTracking();
            let module = historytracking.getModule();
            if (module != null) {
                let moduleLayout = module.getLayout();
                if (moduleLayout != null) {
                    console.log("Module Layout ID" + moduleLayout.getId());
                }
                console.log("Module Layout Module DisplayLabe" + module.getDisplayLabel());
                console.log("Module Layout Module APIName" + module.getAPIName());
                console.log("Module Layout Module ID" + module.getId());
                console.log("Module Layout Module" + module.getModule());
                console.log("Module Layout Module Name" + module.getModuleName());
            }
            let durationConfigured = historytracking.getDurationConfiguredField();
            if (durationConfigured != null) {
                console.log("historytracking duration configured field" + durationConfigured.getId());
            }
        }
        if (field.getBusinesscardSupported() != null) {
            console.log("Field BusinesscardSupported: " + field.getBusinesscardSupported().toString());
        }
        let currency = field.getCurrency();
        if (currency != null) {
            console.log("Field Currency RoundingOption: " + currency.getRoundingOption());
            if (currency.getPrecision() != null) {
                console.log("Field Currency Precision: " + currency.getPrecision().toString());
            }
        }
        if (field.getQuickSequenceNumber() != null) {
            console.log("Field QuickSequenceNumber: " + field.getQuickSequenceNumber().toString());
        }
        console.log("Field ID: " + field.getId().toString());
        if (field.getCustomField() != null) {
            console.log("Field CustomField: " + field.getCustomField().toString());
        }
        let lookup = field.getLookup();
        if (lookup != null) {
            console.log("Field Lookup DisplayLabel: " + lookup.getDisplayLabel());
            console.log("Field Lookup APIName: " + lookup.getAPIName());
            console.log("Field Lookup Module: " + lookup.getModule());
            if (lookup.getId() != null) {
                console.log("Field Lookup ID: " + lookup.getId().toString());
            }
        }
        if (field.getVisible() != null) {
            console.log("Field Visible: " + field.getVisible().toString());
        }
        console.log("Field PickListValuesSortedLexically: " + field.getPickListValuesSortedLexically());
        console.log("Field Sortable: " + field.getSortable());
        console.log("Field UIType: " + field.getUiType());
        if (field.getSequenceNumber() != null) {
            console.log("Field PickListValue SequenceNumber: " + field.getSequenceNumber().toString());
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
        let subform = field.getAssociatedModule();
        if (subform != null) {
            console.log("Field Subform Module: " + subform.getModule());
            console.log("Field Subform ID: " + subform.getId().toString());
        }
        console.log("Field APIName: " + field.getAPIName().toString());
        let unique = field.getUnique();
        if (unique != null) {
            console.log("Field Unique Casesensitive : " + unique.getCasesensitive());
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
            for (const pickListValue of pickListValues) {
                await this.printPickListValue(pickListValue);
            }
        }
        if (field.getDefaultValue() != null) {
            console.log("Field DefaultValue: " + field.getDefaultValue().toString());
        }
        console.log("Field DisplayType: " + field.getDisplayType());
        if (field.getValidationRule() != null) {
            console.log("Field ValidationRule: \n");
            Array.from(field.getValidationRule().keys()).forEach(key => {
                console.log(key + ": " + field.getValidationRule().get(key));
            });
        }
        console.log("Get field type" + field.getType());
        let external = field.getExternal();
        if (external != null) {
            console.log("Field External Show: " + external.getShow());
            console.log("Field External Type: " + external.getType());
            console.log("Field External AllowMultipleConfig: " + external.getAllowMultipleConfig());
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
    }
    static async printPickListValue(pickListValue) {
        console.log("Field PickListValue DisplayValue: " + pickListValue.getDisplayValue());
        if (pickListValue.getSequenceNumber() != null) {
            console.log("Field PickListValue SequenceNumber: " + pickListValue.getSequenceNumber().toString());
        }
        console.log("Field PickListValue ExpectedDataType: " + pickListValue.getExpectedDataType());
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
        console.log("Field PickListValue ActualValue: " + pickListValue.getActualValue());
        console.log("Field PickListValue SysRefName: " + pickListValue.getSysRefName());
        console.log("Field PickListValue Type: " + pickListValue.getType());
        console.log("Field PickListValue Id: " + pickListValue.getId());
    }
}
await GetLayout.initialize();
let moduleAPIName = "leads";
let layoutId = 66539000167n
await GetLayout.getLayout(moduleAPIName, layoutId);