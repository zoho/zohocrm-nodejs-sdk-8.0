import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class ExecuteFunctionUsingFile {
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
    static async executeFunctionUsingFile() {
        const functionName = "test_java";
        const authType = "oauth";
        let functionsOperations = new ZOHOCRMSDK.Functions.FunctionsOperations(functionName, authType, null);
        let fileBodyWrapper = new ZOHOCRMSDK.Functions.FileBodyWrapper();
        let streamWrapper = new ZOHOCRMSDK.StreamWrapper(null, "./sample.txt");
        fileBodyWrapper.setInputfile(streamWrapper);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        const param = {
            "1221": "2111221",
            "15221": "21113221",
            "12421": "211341221"
        };
        await paramInstance.add(new ZOHOCRMSDK.Param("Java", Map.name), param);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        let response = await functionsOperations.executeFunctionUsingFile(fileBodyWrapper, paramInstance, headerInstance);
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
await ExecuteFunctionUsingFile.initialize();
await ExecuteFunctionUsingFile.executeFunctionUsingFile();