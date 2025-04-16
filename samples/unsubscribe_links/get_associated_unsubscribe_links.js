import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class GetAssociatedUnsubscribeLinks {
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

	static async getAssociatedUnsubscribeLinks() {
		let unsubscribeLinksOperations = new ZOHOCRMSDK.UnsubscribeLinks.UnsubscribeLinksOperations();
		let response = await unsubscribeLinksOperations.getAssociatedUnsubscribeLinks();
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.UnsubscribeLinks.AssociationsResponseWrapper) {
				let responseWrapper = responseHandler;
				let associations = responseWrapper.getAssociations();
				if (associations != null) {
					for (let association in associations) {
						console.log("AssociationDetails Id: " + association.getId());
						let associatedPlaces = association.getAssociatedPlaces();
						if (associatedPlaces != null) {
							for (let associatedPlace in associatedPlaces) {
								console.log("AssociationDetails AssociatedPlaces Type: " + associatedPlace.getType());
								let resource = associatedPlace.getResource();
								if (resource != null) {
									console.log("AssociationDetails AssociatedPlaces Resource Name: " + resource.getName());
									console.log("AssociationDetails AssociatedPlaces Resource Id: " + resource.getId());
								}
								let details = associatedPlace.getDetails();
								if (details != null) {
									let module = details.getModule();
									if (module != null) {
										console.log("AssociationDetails AssociatedPlaces Detail Module Name: " + module.getAPIName());
										console.log("AssociationDetails AssociatedPlaces Detail Module Id: " + module.getId());
									}
								}
							}
						}
					}
				}
			} else if (responseHandler instanceof ZOHOCRMSDK.UnsubscribeLinks.APIException) {
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
				console.log("Message: " + exception.getMessage());
			}
		}
	}
}
await GetAssociatedUnsubscribeLinks.initialize();
await GetAssociatedUnsubscribeLinks.getAssociatedUnsubscribeLinks();