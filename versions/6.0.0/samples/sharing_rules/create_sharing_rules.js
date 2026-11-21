import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class CreateSharingRules{
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
    static async createSharingRules(moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);

        const request = new ZOHOCRMSDK.SharingRules.BodyWrapper();
        const sharingRules = [];
        const sharingRule = new ZOHOCRMSDK.SharingRules.SharingRules();

        // Record Owner Based Rule
        sharingRule.setType(new ZOHOCRMSDK.Choice("Record_Owner_Based"));

        const sharedFrom = new ZOHOCRMSDK.SharingRules.Shared();
        const resourceFrom = new ZOHOCRMSDK.SharingRules.Resource();
        resourceFrom.setId(347706117236002n);
        await sharedFrom.setResource(resourceFrom);
        sharedFrom.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedFrom.setSubordinates(false);
        await sharingRule.setSharedFrom(sharedFrom);

        sharingRule.setSuperiorsAllowed(false);

        const sharedTo = new ZOHOCRMSDK.SharingRules.Shared();
        const resourceTo = new ZOHOCRMSDK.SharingRules.Resource();
        resourceTo.setId(347706117236002n);
        await sharedTo.setResource(resourceTo);
        sharedTo.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedTo.setSubordinates(false);
        await sharingRule.setSharedTo(sharedTo);

        sharingRule.setPermissionType(new ZOHOCRMSDK.Choice("read_write_delete"));
        sharingRule.setName("TestNodeSDK");

        sharingRules.push(sharingRule);
        request.setSharingRules(sharingRules);

        const response = await sharingRulesOperations.createSharingRules(request);

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getSharingRules();

                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.SharingRules.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status:", successResponse.getStatus().getValue());
                        console.log("Code:", successResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(successResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.SharingRules.APIException) {
                        const exception = actionResponse;
                        console.log("Status:", exception.getStatus().getValue());
                        console.log("Code:", exception.getCode().getValue());
                        console.log("Details:");
                        Object.entries(exception.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", exception.getMessage().getValue());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
                const exception = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage().getValue());
            }
        }
    }
}
await CreateSharingRules.initialize();
await CreateSharingRules.createSharingRules("Leads");