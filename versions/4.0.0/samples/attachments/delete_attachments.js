import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class DeleteAttachments {
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

    static async deleteAttachments(moduleAPIName, recordId, attachmentIds) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 32267003n;
        // let attachmentId = 32267024n;
        let attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        for (let recordId of attachmentIds) {
            await paramInstance.add(ZOHOCRMSDK.Attachments.DeleteAttachmentsParam.IDS, recordId);
        }
        //Call deleteAttachment method that takes attachmentId as parameter
        let response = await attachmentsOperations.deleteAttachments(recordId, moduleAPIName, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Attachments.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Attachments.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Attachments.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Attachments.APIException) {
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
await DeleteAttachments.initialize();
let moduleAPIName = "leads";
let recordId = 3477005001n;
let attachmentIds = new Array(34770057001n);
await DeleteAttachments.deleteAttachments(moduleAPIName, recordId, attachmentIds);