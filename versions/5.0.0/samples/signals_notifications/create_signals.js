import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class CreateSignals {
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
    static async createSignals() {
        let signalsNotificationsOperations = new ZOHOCRMSDK.SignalsNotifications.SignalsNotificationsOperations();
        let bodyWrapper = new ZOHOCRMSDK.SignalsNotifications.BodyWrapper();
        let signals = [];
        let signal = new ZOHOCRMSDK.SignalsNotifications.Signals();
        signal.setSignalNamespace("mailchimp.open");
        signal.setSubject("Node.js SDK Test");
        signal.setId(34770605001n);
        signal.setModule("Leads");
        signal.setMessage("This is SDK sample code");
        signals.push(signal);
        bodyWrapper.setSignals(signals);
        let response = await signalsNotificationsOperations.createSignals(bodyWrapper);
        if (response) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.SignalsNotifications.ActionWrapper) {
                let actionResponses = actionHandler.getSignals();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.SignalsNotifications.SuccessResponse) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        for (let [key, value] of details.entries()) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.SignalsNotifications.APIException) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        for (let [key, value] of details.entries()) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.SignalsNotifications.APIException) {
                console.log("Status: " + actionHandler.getStatus().getValue());
                console.log("Code: " + actionHandler.getCode().getValue());
                console.log("Details: ");
                let details = actionHandler.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + actionHandler.getMessage());
            }
        }
    }
}
await CreateSignals.initialize();
await CreateSignals.createSignals();
