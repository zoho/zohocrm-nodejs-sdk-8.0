import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class UpdateRelatedRecords {
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

    static async updateRelatedRecords(moduleAPIName, recordId, relatedListAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        // let recordId = 007n;
        // let relatedModuleAPIName = "module_api_name";
        let relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        let request = new ZOHOCRMSDK.RelatedRecords.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("id", 34770614994113n);
        //
        record1.addKeyValue("list_price", 50.56);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Notes.ID, 44024800984009n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Notes.NOTE_CONTENT, "updated");
        //Add Record instance to the array
        recordsArray.push(record1);
        let record2 = new ZOHOCRMSDK.Record.Record();
        //
        // /*
        //  * Call addKeyValue method that takes two arguments
        //  * 1 -> A string that is the Field's API Name
        //  * 2 -> Value
        //  */
        record2.addKeyValue("id", 34096432414001n);
        //
        record2.addKeyValue("list_price", 100.56);
        //
        // //Add Record instance to the array
        // recordsArray.push(record2);
        request.setData(recordsArray);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        //Call updateRelatedRecords method that takes recordId and BodyWrapper instance
        let response = await relatedRecordsOperations.updateRelatedRecords(recordId, request, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
await UpdateRelatedRecords.initialize();
let moduleAPIName = "leads";
let recordId = 440248074074n;
let relatedListAPIName = "notes";
await UpdateRelatedRecords.updateRelatedRecords(moduleAPIName, recordId, relatedListAPIName);