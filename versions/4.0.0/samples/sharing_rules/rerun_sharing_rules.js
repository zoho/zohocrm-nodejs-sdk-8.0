import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class RerunSharingRules{
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
    static async rerunSharingRules(moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);

        const response = await sharingRulesOperations.rerunSharingRules();

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            if (response.isExpected()) {
                const actionHandler = response.getObject();

                if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                    const actionWrapper = actionHandler;
                    const actionResponses = actionWrapper.getSharingRules();

                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.SharingRules.SuccessResponse) {
                            console.log("Status:", actionResponse.getStatus().getValue());
                            console.log("Code:", actionResponse.getCode().getValue());
                            console.log("Details:");
                            Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                                console.log(`${key}: ${value}`);
                            });
                            console.log("Message:", actionResponse.getMessage().getValue());
                        } else if (actionResponse instanceof ZOHOCRMSDK.SharingRules.APIException) {
                            console.log("Status:", actionResponse.getStatus().getValue());
                            console.log("Code:", actionResponse.getCode().getValue());
                            console.log("Details:");
                            Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                                console.log(`${key}: ${value}`);
                            });
                            console.log("Message:", actionResponse.getMessage().getValue());
                        }
                    });
                } else if (actionHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
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
}
await RerunSharingRules.initialize();
await RerunSharingRules.rerunSharingRules("Leads");