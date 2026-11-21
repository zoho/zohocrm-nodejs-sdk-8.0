import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class GetCallPreference
{
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

    static async getCallPreference()
    {
        let callPreferenceOperations = new ZOHOCRMSDK.CallPreferences.CallPreferencesOperations();
        let response = await callPreferenceOperations.getCallPreference();
        if (response != null)
        {
            console.log('Status Code: ' + response.getStatusCode());
            if (response.getStatusCode() === 204 || response.getStatusCode() === 304) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.CallPreferences.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let call_preferences = responseWrapper.getCallPreferences();
                console.log("call_preferences show_from_number: " + call_preferences.getShowFromNumber());
                console.log("call_preferences show_to_number: " + call_preferences.getShowToNumber());
            }
            else if (responseHandler instanceof ZOHOCRMSDK.CallPreferences.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
await GetCallPreference.initialize();
await GetCallPreference.getCallPreference();