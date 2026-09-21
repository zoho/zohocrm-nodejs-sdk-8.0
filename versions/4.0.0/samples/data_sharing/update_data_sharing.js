import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class UpdateDataSharing{
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
    static async updateDataSharing() {
        const dataSharingOperations = new ZOHOCRMSDK.DataSharing.DataSharingOperations();
        const request = new ZOHOCRMSDK.DataSharing.BodyWrapper();
        const dataSharingArray = [];
        const dataSharing1 = new ZOHOCRMSDK.DataSharing.DataSharing();
        dataSharing1.setShareType(new ZOHOCRMSDK.Choice("private"));
        const module = new ZOHOCRMSDK.DataSharing.Module();
        module.setAPIName("Leads");
        module.setId(34770612175n);
        await dataSharing1.setModule(module);
        dataSharingArray.push(dataSharing1);
        request.setDataSharing(dataSharingArray);
        const response = await dataSharingOperations.updateDataSharing(request);

        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.DataSharing.ActionWrapper) {
                const actionResponses = actionHandler.getDataSharing();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.DataSharing.SuccessResponse) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.DataSharing.APIException) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.DataSharing.APIException) {
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
await UpdateDataSharing.initialize();
await UpdateDataSharing.updateDataSharing();