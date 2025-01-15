import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class UpdateSharingRule{
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
    static async updateSharingRule(id, moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);

        const request = new ZOHOCRMSDK.SharingRules.BodyWrapper();
        const sharingRules = [];

        const sharingRule = new ZOHOCRMSDK.SharingRules.SharingRules();

        // Set type to "Record_Owner_Based"
        sharingRule.setType(new ZOHOCRMSDK.Choice("Record_Owner_Based"));

        // Set sharedFrom details
        const sharedFrom = new ZOHOCRMSDK.SharingRules.Shared();
        const sharedFromResource = new ZOHOCRMSDK.SharingRules.Resource();
        sharedFromResource.setId(3477036002n);
        await sharedFrom.setResource(sharedFromResource);
        sharedFrom.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedFrom.setSubordinates(false);
        await sharingRule.setSharedFrom(sharedFrom);

        // Optional: Criteria-based rule example (commented out)
        /*
        sharingRule.setType(new ZOHOCRMSDK.Choice("Criteria_Based"));
        const criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        criteria.setComparator("equal");
        const field = new ZOHOCRMSDK.SharingRules.Field();
        await field.setAPIName("Wizard");
        field.setId(1111195003n);
        criteria.setField(field);
        const value = {
            name: "TestWizards",
            id: "11111195001"
        };
        criteria.setValue(value);
        sharingRule.setCriteria(criteria);
        */

        sharingRule.setSuperiorsAllowed(false);

        // Set sharedTo details
        const sharedTo = new ZOHOCRMSDK.SharingRules.Shared();
        const sharedToResource = new ZOHOCRMSDK.SharingRules.Resource();
        sharedToResource.setId(3477236002n);
        await sharedTo.setResource(sharedToResource);
        sharedTo.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedTo.setSubordinates(false);
        await sharingRule.setSharedTo(sharedTo);
        sharingRule.setPermissionType(new ZOHOCRMSDK.Choice("read_write_delete"));
        sharingRules.push(sharingRule);
        request.setSharingRules(sharingRules);
        const response = await sharingRulesOperations.updateSharingRule(id, request);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                const actionResponses = actionHandler.getSharingRules();
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
await UpdateSharingRule.initialize();
await UpdateSharingRule.updateSharingRule(3232312n, "Leads");