import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class CreateUnsubscribeLink {
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
	static async createUnsubscribeLink() {
		let unsubscribeLinksOperations = new ZOHOCRMSDK.UnsubscribeLinks.UnsubscribeLinksOperations();
		let request = new ZOHOCRMSDK.UnsubscribeLinks.BodyWrapper();
		let unsubscribeLinks = [];
		let unsubscribeLink = new ZOHOCRMSDK.UnsubscribeLinks.UnsubscribeLinks();
		unsubscribeLink.setName("Test USL");
		unsubscribeLink.setPageType(new ZOHOCRMSDK.Choice("standard"));
		unsubscribeLink.setCustomLocationUrl("https://custompage.com");
		unsubscribeLink.setStandardPageMessage("Custom message given");
		unsubscribeLink.setSubmissionActionType(new ZOHOCRMSDK.Choice("display_message"));
		unsubscribeLink.setSubmissionMessage("Test Action message");
		unsubscribeLink.setSubmissionRedirectUrl("https://redirecturl.com");
		unsubscribeLinks.push(unsubscribeLink);
		request.setUnsubscribeLinks(unsubscribeLinks);
		let response = await unsubscribeLinksOperations.createUnsubscribeLink(request);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.UnsubscribeLinks.ActionWrapper) {
				let responseWrapper = actionHandler;
				let actionResponses = responseWrapper.getUnsubscribeLinks();
				for (let actionResponse of actionResponses) {
					if (actionResponse instanceof ZOHOCRMSDK.UnsubscribeLinks.SuccessResponse) {
						let successResponse = actionResponse;
						console.log("Status: " + successResponse.getStatus().getValue());
						console.log("Code: " + successResponse.getCode().getValue());
						console.log("Details: ");
						let details = successResponse.getDetails();
						if (details != null) {
							Array.from(details.keys()).forEach(key => {
								console.log(key + ": " + details.get(key));
							});
						}
						console.log("Message: " + successResponse.getMessage());
					}
					else if (actionResponse instanceof ZOHOCRMSDK.UnsubscribeLinks.APIException) {
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
						console.log("Message: " + exception.getMessage());
					}
				}
			}
			else if (actionHandler instanceof ZOHOCRMSDK.UnsubscribeLinks.APIException) {
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
				console.log("Message: " + exception.getMessage());
			}
		}
	}
}
await CreateUnsubscribeLink.initialize();
await CreateUnsubscribeLink.createUnsubscribeLink();
