import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class SearchSharingRules{
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
    static async searchSharingRules(moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const paramInstance = new ZOHOCRMSDK.ParameterMap();

        // Adding parameters
        paramInstance.add(ZOHOCRMSDK.SharingRules.GetSharingRulesParam.PAGE, 1);
        paramInstance.add(ZOHOCRMSDK.SharingRules.GetSharingRulesParam.PER_PAGE, 5);

        const filtersBody = new ZOHOCRMSDK.SharingRules.FiltersBody();
        const criteria = new Criteria();
        criteria.setGroupOperator("and");

        const group = [];

        // Adding first criteria
        const groupCriteria1 = new ZOHOCRMSDK.SharingRules.Criteria();
        const field1 = new ZOHOCRMSDK.SharingRules.Field();
        field1.setAPIName("shared_from.type");
        await groupCriteria1.setField(field1);
        groupCriteria1.setValue("${EMPTY}");
        groupCriteria1.setComparator("equal");
        group.push(groupCriteria1);

        // Adding second criteria
        const groupCriteria2 = new ZOHOCRMSDK.SharingRules.Criteria();
        const field2 = new ZOHOCRMSDK.SharingRules.Field();
        field2.setAPIName("superiors_allowed");
        await groupCriteria2.setField(field2);
        groupCriteria2.setValue("false");
        groupCriteria2.setComparator("equal");
        group.push(groupCriteria2);

        // Adding third criteria
        const groupCriteria3 = new ZOHOCRMSDK.SharingRules.Criteria();
        const field3 = new ZOHOCRMSDK.SharingRules.Field();
        field3.setAPIName("status");
        await groupCriteria3.setField(field3);
        groupCriteria3.setValue("active");
        groupCriteria3.setComparator("equal");
        group.push(groupCriteria3);

        // Adding nested criteria
        const groupCriteria4 = new ZOHOCRMSDK.SharingRules.Criteria();
        groupCriteria4.setGroupOperator("or");

        const group4 = [];

        // First subgroup
        const group4Criteria1 = new ZOHOCRMSDK.SharingRules.Criteria();
        group4Criteria1.setGroupOperator("and");
        const group41 = [];

        const group41Criteria1 = new ZOHOCRMSDK.SharingRules.Criteria();
        const group41Field1 = new ZOHOCRMSDK.SharingRules.Field();
        group41Field1.setAPIName("shared_to.resource.id");
        await group41Criteria1.setField(group41Field1);
        group41Criteria1.setValue([1111078, 111117098]);
        group41Criteria1.setComparator("in");
        group41.push(group41Criteria1);

        const group41Criteria2 = new ZOHOCRMSDK.SharingRules.Criteria();
        const group41Field2 = new ZOHOCRMSDK.SharingRules.Field();
        group41Field2.setAPIName("shared_to.type");
        await group41Criteria2.setField(group41Field2);
        group41Criteria2.setValue("groups");
        group41Criteria2.setComparator("equal");
        group41.push(group41Criteria2);

        group4Criteria1.setGroup(group41);
        group4.push(group4Criteria1);

        // Second subgroup
        const group4Criteria2 = new ZOHOCRMSDK.SharingRules.Criteria();
        group4Criteria2.setGroupOperator("and");
        const group42 = [];

        const group42Criteria1 = new ZOHOCRMSDK.SharingRules.Criteria();
        const group42Field1 = new ZOHOCRMSDK.SharingRules.Field();
        group42Field1.setAPIName("shared_to.resource.id");
        await group42Criteria1.setField(group42Field1);
        group42Criteria1.setValue([111117078, 111198]);
        group42Criteria1.setComparator("in");
        group42.push(group42Criteria1);

        const group42Criteria2 = new ZOHOCRMSDK.SharingRules.Criteria();
        const group42Field2 = new ZOHOCRMSDK.SharingRules.Field();
        group42Field2.setAPIName("shared_to.type");
        await group42Criteria2.setField(group42Field2);
        group42Criteria2.setValue("roles");
        group42Criteria2.setComparator("equal");
        group42.push(group42Criteria2);

        group4Criteria2.setGroup(group42);
        group4.push(group4Criteria2);

        groupCriteria4.setGroup(group4);
        group.push(groupCriteria4);

        criteria.setGroup(group);
        filtersBody.setFilters([criteria]);
        const response = await sharingRulesOperations.searchSharingRules(filtersBody, paramInstance);

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            if (response.isExpected()) {
                const responseHandler = response.getObject();

                if (responseHandler instanceof ZOHOCRMSDK.SharingRules.ResponseWrapper) {
                    const responseWrapper = responseHandler;
                    const sharingRules = responseWrapper.getSharingRules();

                    sharingRules.forEach(sharingRule => {
                        const module = sharingRule.getModule();
                        if (module) {
                            console.log("SharingRules Module APIName:", module.getAPIName());
                            console.log("SharingRules Module Name:", module.getName());
                            console.log("SharingRules Module Id:", module.getId());
                        }
                        console.log("SharingRules SuperiorsAllowed:", sharingRule.getSuperiorsAllowed());
                        console.log("SharingRules Type:", sharingRule.getType().getValue());

                        const sharedTo = sharingRule.getSharedTo();
                        if (sharedTo) {
                            const resource = sharedTo.getResource();
                            if (resource) {
                                console.log("SharingRules SharedTo Resource Name:", resource.getName());
                                console.log("SharingRules SharedTo Resource Id:", resource.getId());
                            }
                            console.log("SharingRules SharedTo Type:", sharedTo.getType());
                            console.log("SharingRules SharedTo Subordinates:", sharedTo.getSubordinates());
                        }

                        const sharedFrom = sharingRule.getSharedFrom();
                        if (sharedFrom) {
                            const resource = sharedFrom.getResource();
                            if (resource) {
                                console.log("SharingRules SharedFrom Resource Name:", resource.getName());
                                console.log("SharingRules SharedFrom Resource Id:", resource.getId());
                            }
                            console.log("SharingRules SharedFrom Type:", sharedFrom.getType());
                            console.log("SharingRules SharedFrom Subordinates:", sharedFrom.getSubordinates());
                        }

                        console.log("SharingRules PermissionType:", sharingRule.getPermissionType().getValue());
                        console.log("SharingRules Name:", sharingRule.getName());
                        console.log("SharingRules Id:", sharingRule.getId());
                        console.log("SharingRules Status:", sharingRule.getStatus().getValue());
                        console.log("SharingRules MatchLimitExceeded:", sharingRule.getMatchLimitExceeded());
                    });

                    const info = responseWrapper.getInfo();
                    console.log("SharingRules Info PerPage:", info.getPerPage());
                    console.log("SharingRules Info Count:", info.getCount());
                    console.log("SharingRules Info Page:", info.getPage());
                    console.log("SharingRules Info MoreRecords:", info.getMoreRecords());
                } else if (responseHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
                    const exception = responseHandler;
                    console.log("Status:", exception.getStatus().getValue());
                    console.log("Code:", exception.getCode().getValue());
                    console.log("Details:");
                    Object.entries(exception.getDetails()).forEach(([key, value]) => {
                        console.log(`${key}: ${value}`);
                    });
                    console.log("Message:", exception.getMessage().getValue());
                }
            } else {
                console.log("Unexpected response received:", response);
            }
        }
    }
}
await SearchSharingRules.initialize();
await SearchSharingRules.searchSharingRules("Leads");