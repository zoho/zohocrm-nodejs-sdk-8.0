import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class RemoveTerritoriesFromUser {
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

	static async removeTerritoriesFromUser(userId) {
		let usersTerritoriesOperations = new ZOHOCRMSDK.UsersTerritories.UsersTerritoriesOperations(userId);
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.UsersTerritories.RemoveTerritoriesFromUserParam.IDS, "123");
		let response = await usersTerritoriesOperations.removeTerritoriesFromUser(paramInstance);
		if (response != null) {
			console.log("Status Code : " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.UsersTerritories.ActionWrapper) {
				let actionWrapper = actionHandler;
				let actionResponses = actionWrapper.getTerritories();
				if (actionResponses != null) {
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.UsersTerritories.SuccessResponse) {
							let successResponse = actionResponse;
							console.log("Status: " + successResponse.getStatus().getValue());
							console.log("Code: " + successResponse.getCode().getValue());
							console.log("Details");
							let details = successResponse.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
						}
						else if (actionResponse instanceof ZOHOCRMSDK.UsersTerritories.APIException) {
							let exception = actionResponse;
							console.log("Status: " + exception.getStatus().getValue());
							console.log("Code: " + exception.getCode().getValue());
							console.log("Details");
							let details = exception.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
						}
					});
				}
			}
			else if (actionHandler instanceof ZOHOCRMSDK.UsersTerritories.APIException) {
				let exception = actionHandler;
				console.log("Status: " + exception.getStatus().getValue());
				console.log("Code: " + exception.getCode().getValue());
				console.log("Details");
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

await RemoveTerritoriesFromUser.initialize();
let userId = 4402480254001n;
await RemoveTerritoriesFromUser.removeTerritoriesFromUser(userId);