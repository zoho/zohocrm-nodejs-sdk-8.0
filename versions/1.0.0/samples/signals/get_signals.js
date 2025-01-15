import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class GetSignals {
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
    static async getSignals() {
        let signalsOperations = new ZOHOCRMSDK.Signals.SignalsOperations();
        let response = await signalsOperations.getSignals();
        if (response) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.Signals.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let signals = responseWrapper.getSignals();

                signals.forEach(signal => {
                    console.log("Signals DisplayLabel: " + signal.getDisplayLabel());

                    let extension = signal.getExtension();
                    if (extension) {
                        console.log("Signals Extension DisplayLabel: " + extension.getDisplayLabel());
                        console.log("Signals Extension Namespace: " + extension.getNamespace());
                        console.log("Signals Extension Id: " + extension.getId());
                        console.log("Signals Extension Type: " + extension.getType());
                    }

                    let featureAvailability = signal.getFeatureAvailability();
                    if (featureAvailability) {
                        console.log("Signals FeatureAvailability Scoring: " + featureAvailability.getScoring());
                        console.log("Signals FeatureAvailability Signals: " + featureAvailability.getSignals());
                    }

                    console.log("Signals Namespace: " + signal.getNamespace());
                    console.log("Signals ChatEnabled: " + signal.getChatEnabled());
                    console.log("Signals Id: " + signal.getId());
                    console.log("Signals Enabled: " + signal.getEnabled());
                });
            } else if (responseHandler instanceof ZOHOCRMSDK.Signals.APIException) {
                let exception = responseHandler;

                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await GetSignals.initialize();
await GetSignals.getSignals();