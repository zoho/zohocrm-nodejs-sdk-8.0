import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class GetSharingRuleSummary{
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
    static async getSharingRuleSummary(moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);

        const response = await sharingRulesOperations.getSharingRuleSummary();

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.SharingRules.SummaryResponseWrapper) {
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
            } else if (responseHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
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
await GetSharingRuleSummary.initialize();
await GetSharingRuleSummary.getSharingRuleSummary("Leads");