import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class SearchSharingRulesSummary{
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
    static async searchSharingRulesSummary(moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const request = new ZOHOCRMSDK.SharingRules.FiltersBody();
        const criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        criteria.setGroupOperator("and");
        const group = [];
        const groupCriteria1 = new ZOHOCRMSDK.SharingRules.Criteria();
        const field1 = new ZOHOCRMSDK.SharingRules.Field();
        field1.setAPIName("shared_from.type");
        await groupCriteria1.setField(field1);
        groupCriteria1.setValue("${EMPTY}");
        groupCriteria1.setComparator("equal");
        group.push(groupCriteria1);

        const groupCriteria2 = new ZOHOCRMSDK.SharingRules.Criteria();
        const field2 = new ZOHOCRMSDK.SharingRules.Field();
        field2.setAPIName("superiors_allowed");
        await groupCriteria2.setField(field2);
        groupCriteria2.setValue("false");
        groupCriteria2.setComparator("equal");
        group.push(groupCriteria2);

        const groupCriteria3 = new ZOHOCRMSDK.SharingRules.Criteria();
        const field3 = new ZOHOCRMSDK.SharingRules.Field();
        field3.setAPIName("status");
        await groupCriteria3.setField(field3);
        groupCriteria3.setValue("active");
        groupCriteria3.setComparator("equal");
        group.push(groupCriteria3);

        const groupCriteria4 = new ZOHOCRMSDK.SharingRules.Criteria();
        groupCriteria4.setGroupOperator("or");
        const group4 = [];

        const group4Criteria1 = new ZOHOCRMSDK.SharingRules.Criteria();
        group4Criteria1.setGroupOperator("and");
        const group41 = [];

        const group41Criteria1 = new ZOHOCRMSDK.SharingRules.Criteria();
        const group41Field1 = new ZOHOCRMSDK.SharingRules.Field();
        group41Field1.setAPIName("shared_to.resource.id");
        await group41Criteria1.setField(group41Field1);
        group41Criteria1.setValue([11111777078, 11111777098]);
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

        // Subgroup 4.2
        const group4Criteria2 = new ZOHOCRMSDK.SharingRules.Criteria();
        group4Criteria2.setGroupOperator("and");
        const group42 = [];

        const group42Criteria1 = new ZOHOCRMSDK.SharingRules.Criteria();
        const group42Field1 = new ZOHOCRMSDK.SharingRules.Field();
        group42Field1.setAPIName("shared_to.resource.id");
        await group42Criteria1.setField(group42Field1);
        group42Criteria1.setValue([11111777078, 11111777098]);
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
        request.setFilters([criteria]);

        const response = await sharingRulesOperations.searchSharingRulesSummary(request);

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();

            if (responseHandler instanceof SummaryResponseWrapper) {
                const responseWrapper = responseHandler;
                const rulesSummary = responseWrapper.getSharingRulesSummary();

                rulesSummary.forEach(ruleSummary => {
                    const module = ruleSummary.getModule();
                    if (module) {
                        console.log("RulesSummary Module APIName:", module.getAPIName());
                        console.log("RulesSummary Module Id:", module.getId());
                    }
                    console.log("RulesSummary RuleComputationStatus:", ruleSummary.getRuleComputationStatus());
                    console.log("RulesSummary RuleCount:", ruleSummary.getRuleCount());
                });
            } else if (responseHandler instanceof APIException) {
                const exception = responseHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage());
            }
        }
    }
}
await SearchSharingRulesSummary.initialize();
await SearchSharingRulesSummary.searchSharingRulesSummary("Leads");