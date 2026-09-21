import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class UpdateSharingRules{
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
    static async updateSharingRules(moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const request = new ZOHOCRMSDK.SharingRules.BodyWrapper();
        const sharingRules = [];
        const sharingRule = new ZOHOCRMSDK.SharingRules.SharingRules();
        sharingRule.setType(new ZOHOCRMSDK.Choice("Record_Owner_Based"));
        const sharedFrom = new ZOHOCRMSDK.SharingRules.Shared();
        let resource = new ZOHOCRMSDK.SharingRules.Resource();
        resource.setId(34777236002);
        await sharedFrom.setResource(resource);
        sharedFrom.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedFrom.setSubordinates(false);
        await sharingRule.setSharedFrom(sharedFrom);
        // Uncomment and modify if using criteria-based sharing
        // const criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        // criteria.setComparator("equal");
        // const field = new ZOHOCRMSDK.SharingRules.Field();
        // field.setAPIName("Wizard");
        // field.setId(111111095003);
        // criteria.setField(field);
        // const value = new JSONObject();
        // value.put("name", "TestWizards");
        // value.put("id", "111111095001");
        // criteria.setValue(value);
        // sharingRule.setCriteria(criteria);

        sharingRule.setSuperiorsAllowed(false);

        // Set Shared To
        const sharedTo = new ZOHOCRMSDK.SharingRules.Shared();
        resource = new ZOHOCRMSDK.SharingRules.Resource();
        resource.setId(34777236002);
        await sharedTo.setResource(resource);
        sharedTo.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedTo.setSubordinates(false);
        await sharingRule.setSharedTo(sharedTo);

        sharingRule.setPermissionType(new ZOHOCRMSDK.Choice("read_write_delete"));
        sharingRule.setId(3477051001);

        sharingRules.push(sharingRule);
        request.setSharingRules(sharingRules);

        const response = await sharingRulesOperations.updateSharingRules(request);

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getSharingRules();

                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.SharingRules.SuccessResponse) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.SharingRules.APIException) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage().getValue());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
                console.log("Status:", actionHandler.getStatus().getValue());
                console.log("Code:", actionHandler.getCode().getValue());
                console.log("Details:");
                Object.entries(actionHandler.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", actionHandler.getMessage());
            }
        }
    }
}
await UpdateSharingRules.initialize();
await UpdateSharingRules.updateSharingRules("Leads");