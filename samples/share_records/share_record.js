import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class ShareRecord {
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

    static async shareRecord(moduleAPIName, recordId) {
        //example
        //let moduleAPIName = "module_api_name";
        // let recordId = 112011n;
        let sharedRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);
        let request = new ZOHOCRMSDK.ShareRecords.BodyWrapper();
        let shareList = [];
        let share1 = new ZOHOCRMSDK.ShareRecords.ShareRecord();
        for (let i = 0; i < 9; i++) {
            share1 = new ZOHOCRMSDK.ShareRecords.ShareRecord();
            share1.setShareRelatedRecords(true);
            share1.setPermission("read_write");
            let user = new ZOHOCRMSDK.Users.Users();
            user.setId(3477061173021n);
            await share1.setUser(user);
            let sharedWith = new ZOHOCRMSDK.Users.Users();
            sharedWith.setId(34770615791024n);
            sharedWith.addKeyValue("type", "users");
            await share1.setSharedWith(sharedWith);
            share1.setType(new ZOHOCRMSDK.Choice("private"));
            shareList.add(share1);
        }
        share1.setShareRelatedRecords(true);
        share1.setPermission("read_write");
        let user = new ZOHOCRMSDK.Users.Users();
        user.setId(66539000308001n);
        await share1.setUser(user);
        let sharedWith = new ZOHOCRMSDK.Users.Users();
        sharedWith.setId(66539000308001n);
        sharedWith.addKeyValue("type", "users");
        await share1.setSharedWith(sharedWith);
        share1.setType(new ZOHOCRMSDK.Choice("private"));
        shareList.push(share1);
        request.setNotify(true);
        request.setShare(shareList);
        //Call shareRecord method that takes BodyWrapper instance as parameter
        let response = await sharedRecordsOperations.shareRecord(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ShareRecords.ActionWrapper) {
                    let actionResponses = responseObject.getShare();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
await ShareRecord.initialize();
let moduleAPIName = "Leads";
let recordId = 66539000388010n;
await ShareRecord.shareRecord(moduleAPIName, recordId);