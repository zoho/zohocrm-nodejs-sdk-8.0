import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class UpdateField {
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

    static async updateField(module, fieldId) {
        let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
        let bodyWrapper = new ZOHOCRMSDK.Fields.BodyWrapper();
        let fields = [];
        let field = new ZOHOCRMSDK.Fields.Fields();
        field.setFieldLabel("SDK");
        field.setDisplayLabel("SDK");
        field.setDataType("text");
        field.setLength(180);
        let toolTip = new ZOHOCRMSDK.Fields.Tooltip();
        toolTip.setName("static_text");
        toolTip.setValue("Enter your name");
        await field.setTooltip(toolTip);
        let unique = new ZOHOCRMSDK.Fields.Unique();
        unique.setCasesensitive("false");
        await field.setUnique(unique);
        let crypt = new ZOHOCRMSDK.Fields.Crypt();
        crypt.setMode("decryption");
        await field.setCrypt(crypt);
        let external = new ZOHOCRMSDK.Fields.External();
        external.setType("user");
        external.setShow(true);
        await field.setExternal(external);
        let profiles = [];
        let profile = new ZOHOCRMSDK.Fields.Profile();
        profile.setId(347706126014n);
        profile.setPermissionType("read_write");
        profiles.push(profile);
        field.setProfiles(profiles);
        fields.push(field);
        /** End */
        /** Sample Input: Field Type - Picklist */
        let picklistField = new ZOHOCRMSDK.Fields.Fields();
        picklistField.setFieldLabel("Select Region5");
        picklistField.setDataType("picklist");
        let toolTip1 = new ZOHOCRMSDK.Fields.Tooltip();
        toolTip1.setName("info_icon");
        toolTip1.setValue("Select your region here");
        await picklistField.setTooltip(toolTip1);
        picklistField.setLength(120);
        let picklistFieldProfiles = [];
        let profile1 = new ZOHOCRMSDK.Fields.Profile();
        profile1.setId(7534770395001n);
        profile1.setPermissionType("read_write");
        picklistFieldProfiles.push(profile1);
        let picklistValues = [];
        let picklistValue = new ZOHOCRMSDK.Fields.PickListValue();
        picklistValue.setDisplayValue("Left");
        picklistValue.setActualValue("IN_Left");
        picklistValues.push(picklistValue);
        picklistValue = new ZOHOCRMSDK.Fields.PickListValue();
        picklistValue.setDisplayValue("Top");
        picklistValue.setActualValue("IN_Top");
        picklistValues.push(picklistValue);
        picklistValue = new ZOHOCRMSDK.Fields.PickListValue();
        picklistValue.setDisplayValue("Down");
        picklistValue.setActualValue("IN_Down");
        picklistValues.push(picklistValue);
        let picklistValue1 = new ZOHOCRMSDK.Fields.PickListValue();
        picklistValue1.setDisplayValue("South_Updated");
        picklistValue1.setActualValue("IN_South");
        picklistValue1.setId(75347706075n);
        picklistValues.push(picklistValue1);
        let picklistValue2 = new ZOHOCRMSDK.Fields.PickListValue();
        picklistValue2.setDisplayValue("West");
        picklistValue2.setActualValue("IN_West");
        picklistValue2.setId(7534776071n);
        picklistValue2.setDelete(true);
        picklistValues.push(picklistValue2);
        picklistField.setPickListValues(picklistValues);
        fields.push(picklistField);
        /** End */
        /** Rollup Summary Field */
        let rollupSummaryField = new ZOHOCRMSDK.Fields.Fields();
        rollupSummaryField.setFieldLabel("Total");
        rollupSummaryField.setDataType("rollup_summary");
        let rollupSummary = new ZOHOCRMSDK.Fields.RollupSummary();
        rollupSummary.setReturnType("currency");
        let expression = new ZOHOCRMSDK.Fields.Expression();
        let functionParameter = new ZOHOCRMSDK.Fields.FunctionParameter();
        functionParameter.setAPIName("Total");
        expression.setFunctionParameters([functionParameter]);
        let criteria = new Criteria();
        criteria.setComparator("AND");
        let group = [];
        let groupCriteria1 = new Criteria();
        groupCriteria1.setComparator("equal");
        let groupCriteria1Field = new ZOHOCRMSDK.Fields.MinifiedField();
        groupCriteria1Field.setAPIName("Billing_Country");
        groupCriteria1.setValue("United States");
        groupCriteria1.setField(groupCriteria1Field);
        group.push(groupCriteria1);
        let groupCriteria2 = new Criteria();
        groupCriteria2.setComparator("greater_than");
        let groupCriteria2Field = new ZOHOCRMSDK.Fields.MinifiedField();
        groupCriteria2Field.setAPIName("Invoice_Date");
        groupCriteria2.setValue("2024-11-27");
        groupCriteria2.setField(groupCriteria2Field);
        group.push(groupCriteria2);
        criteria.setGroup(group);
        await expression.setCriteria(criteria);
        expression.setFunction("SUM");
        let basedOnModule = new ZOHOCRMSDK.Fields.MinifiedModule();
        basedOnModule.setAPIName("Invoices");
        await rollupSummary.setBasedOnModule(basedOnModule);
        let relatedList = new ZOHOCRMSDK.Fields.RelatedList();
        relatedList.setAPIName("Invoices");
        await rollupSummary.setRelatedList(relatedList);
        await rollupSummary.setExpression(expression);
        await rollupSummaryField.setRollupSummary(rollupSummary);
        fields.push(rollupSummaryField);
        bodyWrapper.setFields(fields);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Fields.CreateFieldParam.MODULE, module);
        let response = await fieldsOperations.updateField(fieldId, bodyWrapper, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Fields.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getFields();
                for (let actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.Fields.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        if (successResponse.getDetails() != null) {
                            Array.from(successResponse.getDetails().keys()).forEach(key => {
                                console.log(key + ": " + successResponse.getDetails().get(key));
                            });
                        }
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.Fields.APIException) {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        if (exception.getDetails() != null) {
                            Array.from(exception.getDetails().keys()).forEach(key => {
                                console.log(key + ": " + exception.getDetails().get(key));
                            });
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.Fields.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                if (exception.getDetails() != null) {
                    Array.from(exception.getDetails().keys()).forEach(key => {
                        console.log(key + ": " + exception.getDetails().get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
let module = "Invoices";
let fieldId = 34324323543n;
await UpdateField.initialize();
await UpdateField.updateField(module, fieldId);