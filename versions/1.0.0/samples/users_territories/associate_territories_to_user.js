import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class AssociateTerritoriesToUser {
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
    static async associateTerritoriesToUser(userId) {
        let userTerritoriesOperations = new ZOHOCRMSDK.UsersTerritories.UsersTerritoriesOperations(userId);
        let request = new ZOHOCRMSDK.UsersTerritories.BodyWrapper();
        let usersTerritoryList = [];
        let territory = new ZOHOCRMSDK.UsersTerritories.Territory();
        territory.setId(4402480390040n);
        usersTerritoryList.push(territory);
        request.setTerritories(usersTerritoryList);
        let response = await userTerritoriesOperations.associateTerritoriesToUser(request);
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
let userId = 440248394324n;
await AssociateTerritoriesToUser.initialize();
await AssociateTerritoriesToUser.associateTerritoriesToUser(userId);