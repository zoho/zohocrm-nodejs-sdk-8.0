import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class CreateWebForms {
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
    static async createWebForms(moduleAPIName) {
        let webformsOperations = new ZOHOCRMSDK.Webforms.WebformsOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Webforms.BodyWrapper();
        let webforms = [];
        let webform = new ZOHOCRMSDK.Webforms.WebForm();
        webform.setName("sample");
        let module = new ZOHOCRMSDK.Webforms.Module();
        module.setId("347706117");
        module.setModuleName(moduleAPIName);
        module.setAPIName(moduleAPIName);
        await webform.setModule(module);
        let layout = new ZOHOCRMSDK.Webforms.Layout();
        layout.setId("34771");
        await webform.setLayout(layout);
        let formAttributes = new ZOHOCRMSDK.Webforms.FormAttributes();
        formAttributes.setColor("White");
        formAttributes.setWidth(600);
        formAttributes.setAlign("left");
        let fontAttributes = new ZOHOCRMSDK.Webforms.FontAttributes();
        fontAttributes.setSize(12);
        fontAttributes.setColor("black");
        fontAttributes.setFamily("Arial");
        await formAttributes.setFontAttributes(fontAttributes);
        formAttributes.setDisplayFormName(true);
        await webform.setFormAttributes(formAttributes);
        let buttonAttributes = [];
        let buttonAttribute = new ZOHOCRMSDK.Webforms.ButtonAttributes();
        buttonAttribute.setColor("#fff");
        buttonAttribute.setName("Submit");
        buttonAttributes.push(buttonAttribute);
        buttonAttribute = new ZOHOCRMSDK.Webforms.ButtonAttributes();
        buttonAttribute.setColor("#fff");
        buttonAttribute.setName("Reset");
        buttonAttributes.push(buttonAttribute);
        webform.setButtonAttributes(buttonAttributes);
        let owner = new ZOHOCRMSDK.Webforms.Owner();
        owner.setId("3477064");
        await webform.setOwner(owner);
        webform.setCreateContact(false);
        let tags = [];
        let tag = new ZOHOCRMSDK.Webforms.Tags();
        tag.setId("34770602");
        tag.setName("Chems");
        tags.push(tag);
        webform.setTags(tags);
        webform.setDoubleOptinEnabled(false);
        let notifyOwner = new ZOHOCRMSDK.Webforms.Owner();
        notifyOwner.setId("34770024");
        await webform.setNotifyOwner(notifyOwner);
        let acknowledgeVisitors = new ZOHOCRMSDK.Webforms.AcknowledgeVisitor();
        await webform.setAcknowledgeVisitor(acknowledgeVisitors);
        webform.setApprovalRequest(false);
        webform.setType("webform");
        let userType = new ZOHOCRMSDK.Webforms.User();
        userType.setId(null);
        await webform.setUserType(userType);
        webform.setActionOnSubmit("splash_message");
        webform.setActionValue("Splash Message");
        let locationUrl = [];
        locationUrl.push("*");
        webform.setLocationUrl(locationUrl);
        let analyticsData = new ZOHOCRMSDK.Webforms.AnalyticsData();
        analyticsData.setAnalyticsEnabled(true);
        await webform.setAnalyticsData(analyticsData);
        let formFields = [];
        let formField = new ZOHOCRMSDK.Webforms.Fields();
        let fieldLayout = new ZOHOCRMSDK.Webforms.Layout();
        fieldLayout.setName("SDK");
        fieldLayout.setId("347706001");
        await formField.setLayout(fieldLayout);
        formField.setHelp("");
        let formField1 = new ZOHOCRMSDK.Webforms.Fields();
        formField1.setAPIName("Company");
        formField1.setFieldLabel("Company");
        formField1.setId("34770591");
        formField.setField(formField1);
        formField.setHidden(false);
        formField.setAdvanced(false);
        let fieldModue = new ZOHOCRMSDK.Webforms.Module();
        fieldModue.setAPIName(moduleAPIName);
        fieldModue.setId("34770675");
        await formField.setModule(fieldModue);
        formField.setDateFormat("");
        formField.setRequired(true);
        formField.setFieldName("Company");
        formFields.push(formField);
        webform.setFields(formFields);
        webforms.push(webform);
        request.setWebforms(webforms);
        let response = await webformsOperations.createWebForms(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Webforms.ActionWrapper) {
                    let actionResponses = responseObject.getWebforms();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Webforms.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Webforms.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Webforms.APIException) {
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
}
let moduleAPIName = "Leads";
await CreateWebForms.initialize();
await CreateWebForms.createWebForms(moduleAPIName);