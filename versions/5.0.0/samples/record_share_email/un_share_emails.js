import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class UnShareEmails {

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

    static async unShareEmails(moduleAPIName, id) {
        const recordShareEmailOperations = new ZOHOCRMSDK.RecordShareEmail.RecordShareEmailOperations(moduleAPIName);
        const response = await recordShareEmailOperations.unshareEmails(id);

        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.RecordShareEmail.ActionWrapper) {
                let actionResponses = actionHandler.getData();

                for (let actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.RecordShareEmail.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status:", successResponse.getStatus().getValue());
                        console.log("Code:", successResponse.getCode().getValue());
                        console.log("Details:");
                        const details = successResponse.getDetails();
                        for (let [key, value] of details.entries()) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message:", successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.RecordShareEmail.APIException) {
                        let exception = actionResponse;
                        console.log("Status:", exception.getStatus().getValue());
                        console.log("Code:", exception.getCode().getValue());
                        console.log("Details:");
                        const details = exception.getDetails();
                        for (let [key, value] of details.entries()) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message:", exception.getMessage().getValue());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.RecordShareEmail.APIException) {
                let exception = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                const details = exception.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message:", exception.getMessage().getValue());
            }
        }
    }
}
let moduleAPIName = "Leads";
let id = 3423423412n;
await UnShareEmails.initialize();
await UnShareEmails.unShareEmails(moduleAPIName, id);