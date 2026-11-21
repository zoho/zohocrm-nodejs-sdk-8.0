import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class GetSharingRules{
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
    static async getSharingRules(moduleAPIName) {
        const sharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);

        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.SharingRules.GetSharingRulesParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.SharingRules.GetSharingRulesParam.PER_PAGE, 5);

        const response = await sharingRulesOperations.getSharingRules(paramInstance);

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
                    if (info) {
                        console.log("SharingRules Info PerPage:", info.getPerPage());
                        console.log("SharingRules Info Count:", info.getCount());
                        console.log("SharingRules Info Page:", info.getPage());
                        console.log("SharingRules Info MoreRecords:", info.getMoreRecords());
                    }
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
            } else if (response.getStatusCode() !== 204) {
                const responseObject = response.getModel();
                console.log("Response Object:", responseObject);
            }
        }
    }
}
await GetSharingRules.initialize();
await GetSharingRules.getSharingRules("Leads");