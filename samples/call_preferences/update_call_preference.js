import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class UpdateCallPreference{

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


    static async update_call_preference()
    {
        let callPreferencesOperations = new ZOHOCRMSDK.CallPreferences.CallPreferencesOperations();
        let bodyWrapper = new ZOHOCRMSDK.CallPreferences.BodyWrapper();
        let callPreferences = new ZOHOCRMSDK.CallPreferences.CallPreferences();
        callPreferences.setShowFromNumber(true);
        callPreferences.setShowToNumber(true);
        await bodyWrapper.setCallPreferences(callPreferences);
        let response = await callPreferencesOperations.updateCallPreference(bodyWrapper);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CallPreferences.ActionWrapper) {
                const actionResponse = actionHandler.getCallPreferences()
                if (actionResponse instanceof ZOHOCRMSDK.CallPreferences.SuccessResponse) {
                    const successResponse = actionResponse;
                    console.log("Status:", successResponse.getStatus().getValue());
                    console.log("Code:", successResponse.getCode().getValue());
                    console.log("Details:");
                    const details = successResponse.getDetails();
                    for (let [key, value] of details.entries()) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message:", successResponse.getMessage());
                } else if (actionResponse instanceof ZOHOCRMSDK.CallPreferences.APIException) {
                    const exception = actionResponse;
                    console.log("Status:", exception.getStatus().getValue());
                    console.log("Code:", exception.getCode().getValue());
                    console.log("Details:");
                    const details = exception.getDetails();
                    for (let [key, value] of details.entries()) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message:", exception.getMessage());
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.CallPreferences.APIException) {
                const exception = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                const details = exception.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message:", exception.getMessage());
            }
        }
    }
}
await UpdateCallPreference.initialize();
await UpdateCallPreference.update_call_preference();