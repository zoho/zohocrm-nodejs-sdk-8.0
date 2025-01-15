import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class DeleteUserFromThePortal {
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
    static async deleteUserFromThePortal(portalName, userTypeId) {
        let userTypeUsersOperations = new ZOHOCRMSDK.UserTypeUsers.UserTypeUsersOperations(userTypeId, portalName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.UserTypeUsers.DeleteUserFromThePortalParam.PERSONALITY_IDS, "347746007");
        let response = await userTypeUsersOperations.deleteUserFromThePortal(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.UserTypeUsers.StatusActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getChangeStatus();
                for (let actionResponse in actionResponses) {
                    if (actionResponse instanceof SuccessResponse) {
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
                    else if (actionResponse instanceof APIException) {
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
            else if (actionHandler instanceof APIException) {
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
let portalName = "PortalsAPItest101";
let userTypeId = 3421008n;
await DeleteUserFromThePortal.initialize();
await DeleteUserFromThePortal.deleteUserFromThePortal(portalName, userTypeId);