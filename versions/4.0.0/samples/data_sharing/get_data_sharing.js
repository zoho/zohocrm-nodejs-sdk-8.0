import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class GetDataSharing{
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
    static async getDataSharing() {
        const dataSharingOperations = new ZOHOCRMSDK.DataSharing.DataSharingOperations();

        // Call the getDataSharing method
        const response = await dataSharingOperations.getDataSharing();

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            const responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.DataSharing.ResponseWrapper) {
                const dataSharingList = responseHandler.getDataSharing();

                dataSharingList.forEach(dataSharing => {
                    console.log("DataSharing PublicInPortals:", dataSharing.getPublicInPortals());
                    console.log("DataSharing ShareType:", dataSharing.getShareType().getValue());

                    const module = dataSharing.getModule();
                    if (module) {
                        console.log("DataSharing Module APIName:", module.getAPIName());
                        console.log("DataSharing Module Id:", module.getId());
                    }

                    console.log("DataSharing RuleComputationRunning:", dataSharing.getRuleComputationRunning());
                });
            } else if (responseHandler instanceof ZOHOCRMSDK.DataSharing.APIException) {
                const exception = responseHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage());
            }
        }
    }
}
await GetDataSharing.initialize();
await GetDataSharing.getDataSharing();