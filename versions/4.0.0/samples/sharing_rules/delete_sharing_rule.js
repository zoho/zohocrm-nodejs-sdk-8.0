import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class DeleteSharingRule{
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
    static async deleteSharingRule(id, moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);

        const response = await sharingRulesOperations.deleteSharingRule(id);

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getSharingRules();

                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.SharingRules.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status:", successResponse.getStatus().getValue());
                        console.log("Code:", successResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(successResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.SharingRules.APIException) {
                        const exception = actionResponse;
                        console.log("Status:", exception.getStatus().getValue());
                        console.log("Code:", exception.getCode().getValue());
                        console.log("Details:");
                        Object.entries(exception.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", exception.getMessage().getValue());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
                const exception = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage().getValue());
            }
        }
    }
}

let id = 323312n;
let moduleAPIName = "Leads";
await DeleteSharingRule.initialize();
await DeleteSharingRule.deleteSharingRule(id, moduleAPIName);