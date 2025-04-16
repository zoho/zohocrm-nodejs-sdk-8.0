import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class GetRelatedRecordsCount{
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
    static async getRelatedRecordsCount(recordId, moduleAPIName) {
        const getRelatedRecordsCountOperations = new ZOHOCRMSDK.GetRelatedRecordsCount.GetRelatedRecordsCountOperations(recordId, moduleAPIName);
        const request = new ZOHOCRMSDK.GetRelatedRecordsCount.BodyWrapper();
        const getRelatedRecordsCountList = [];
        const getRelatedRecordsCountInstance = new ZOHOCRMSDK.GetRelatedRecordsCount.GetRelatedRecordCount();
        const relatedListInstance = new ZOHOCRMSDK.GetRelatedRecordsCount.RelatedList();
        relatedListInstance.setAPIName("Notes");
        relatedListInstance.setId(34770602197n);
        await getRelatedRecordsCountInstance.setRelatedList(relatedListInstance);
        getRelatedRecordsCountList.push(getRelatedRecordsCountInstance);
        request.setGetRelatedRecordsCount(getRelatedRecordsCountList);
        const response = await getRelatedRecordsCountOperations.getRelatedRecordsCount(request);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.GetRelatedRecordsCount.ActionWrapper) {
                const actionResponses = actionHandler.getGetRelatedRecordsCount();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.GetRelatedRecordsCount.SuccessResponse) {
                        console.log("Count:", actionResponse.getCount());
                        const relatedList = actionResponse.getRelatedList();
                        if (relatedList) {
                            console.log("RelatedList APIName:", relatedList.getAPIName());
                            console.log("RelatedList Id:", relatedList.getId());
                        }
                    } else if (actionResponse instanceof ZOHOCRMSDK.GetRelatedRecordsCount.APIException) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.GetRelatedRecordsCount.APIException) {
                console.log("Status:", actionHandler.getStatus().getValue());
                console.log("Code:", actionHandler.getCode().getValue());
                console.log("Details:");
                Object.entries(actionHandler.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", actionHandler.getMessage());
            }
        }
    }
}
let recordID = 332422n;
let moduleAPIName = "Leads";
await GetRelatedRecordsCount.initialize();
await GetRelatedRecordsCount.getRelatedRecordsCount(recordID, moduleAPIName);