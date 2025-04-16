import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class RemoveContactRolesFromDeal {
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

	static async removeContactRolesFromDeal(dealId) {
		let contactRolesOperations = new ZOHOCRMSDK.DealContactRoles.DealContactRolesOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.DealContactRoles.DeleteAssociatedContactRolesParam.IDS, "34772418044");
		let response = await contactRolesOperations.deleteAssociatedContactRoles(dealId, paramInstance);
		if (response != null) {
			console.log("Status code : " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.DealContactRoles.ActionWrapper) {
				let actionWrapper = actionHandler;
				let actionResponses = actionWrapper.getData();
				actionResponses.forEach(actionResponse => {
					if (actionResponse instanceof ZOHOCRMSDK.DealContactRoles.SuccessResponse) {
						let successResponse = actionResponse;
						console.log("Status: " + successResponse.getStatus().getValue());
						console.log("Code: " + successResponse.getCode().getValue());
						console.log("Details: ");
						let details = actionResponse.getDetails();
						if (details != null) {
							Array.from(details.keys()).forEach(key => {
								console.log(key + ": " + details.get(key));
							});
						}
						console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
					}
					if (actionResponse instanceof ZOHOCRMSDK.DealContactRoles.APIException) {
						let exception = actionResponse;
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
				});
			}
			else if (actionHandler instanceof ZOHOCRMSDK.DealContactRoles.APIException) {
				let exception = actionHandler;
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

let dealId = 34770418049n;
await RemoveContactRolesFromDeal.initialize();
await RemoveContactRolesFromDeal.removeContactRolesFromDeal(dealId);
