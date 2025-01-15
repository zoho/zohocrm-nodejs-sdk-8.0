import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class ExecuteFunctionUsingRequestBody {
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
    static async executeFunctionUsingRequestBody() {
        const functionName = "get_record_lead";
        const authType = "oauth";
        let arguments1 = {
            zoho: {
                "12223322": "iuubnf"
            }
        };
        let functionsOperations = new ZOHOCRMSDK.Functions.FunctionsOperations(functionName, authType, arguments1);
        let bodyWrapper = new ZOHOCRMSDK.Functions.BodyWrapper();
        let requestBody = {
            name: "JavaScript",
            version: "4.0.0",
            "v2.1": {
                name: "JAVASCRIPT-2.1",
                version: "1.0.0"
            }
        };
        bodyWrapper.setBody(requestBody);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        const param = {
            "1221": "2111221",
            "15221": "21113221",
            "12421": "211341221"
        };
        await paramInstance.add(new ZOHOCRMSDK.Param("Java", Object.name), param);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        let response = await functionsOperations.executeFunctionUsingRequestBody(bodyWrapper, paramInstance, headerInstance);
        if (response) {
            console.log("Status Code: " + response.getStatusCode());
             let responseWrapper = response.getObject();
            if (responseWrapper instanceof ZOHOCRMSDK.Functions.SuccessResponse) {
                console.log("Code: " + responseWrapper.getCode().getValue());
                console.log("Details: ");
                let details = responseWrapper.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + responseWrapper.getMessage().getValue());
            } else if (responseWrapper instanceof ZOHOCRMSDK.Functions.APIException) {
                console.log("Status: " + responseWrapper.getStatus().getValue());
                console.log("Code: " + responseWrapper.getCode().getValue());
                console.log("Details: ");
                let details = responseWrapper.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + responseWrapper.getMessage().getValue());
            }
        }
    }
}
await ExecuteFunctionUsingRequestBody.initialize();
await ExecuteFunctionUsingRequestBody.executeFunctionUsingRequestBody();