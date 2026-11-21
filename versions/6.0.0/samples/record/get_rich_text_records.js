import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class GetRichTextRecords{
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
    static async getRichTextRecords(moduleAPIName) {
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Record.GetRichTextRecordsParam.IDS, "3477062");
        const response = await recordOperations.getRichTextRecords(paramInstance);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            const responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Record.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const records = responseWrapper.getData();
                records.forEach(record => {
                    console.log("Record ID:", record.getId());
                    const createdBy = record.getCreatedBy();
                    if (createdBy) {
                        console.log("Record Created By User-ID:", createdBy.getId());
                        console.log("Record Created By User-Name:", createdBy.getName());
                        console.log("Record Created By User-Email:", createdBy.getEmail());
                    }
                    console.log("Record CreatedTime:", record.getCreatedTime());
                    const modifiedBy = record.getModifiedBy();
                    if (modifiedBy) {
                        console.log("Record Modified By User-ID:", modifiedBy.getId());
                        console.log("Record Modified By User-Name:", modifiedBy.getName());
                        console.log("Record Modified By User-Email:", modifiedBy.getEmail());
                    }
                    console.log("Record ModifiedTime:", record.getModifiedTime());
                    console.log("Record Field Value (Last_Name):", record.getKeyValue("Last_Name"));
                    console.log("Record KeyValues:");
                    Object.entries(record.getKeyValues()).forEach(([key, value]) => {
                        if (Array.isArray(value)) {
                            console.log(`Record KeyName: ${key}`);
                            value.forEach(item => {
                                if (item instanceof Object) {
                                    console.log(`Record KeyName: ${key} - Value:`);
                                    Object.entries(item).forEach(([k, v]) => console.log(`${k}: ${v}`));
                                } else {
                                    console.log(item);
                                }
                            });
                        } else if (value instanceof Object) {
                            console.log(`Record KeyName: ${key} - Value:`);
                            Object.entries(value).forEach(([k, v]) => console.log(`${k}: ${v}`));
                        } else {
                            console.log(`Record KeyName: ${key} - Value: ${value}`);
                        }
                    });
                });
                const info = responseWrapper.getInfo();
                if (info) {
                    if (info.getCount() !== null) {
                        console.log("Record Info Count:", info.getCount());
                    }
                    if (info.getMoreRecords() !== null) {
                        console.log("Record Info MoreRecords:", info.getMoreRecords());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.Record.APIException) {
                const exception = responseHandler;
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
await GetRichTextRecords.initialize();
await GetRichTextRecords.getRichTextRecords("Leads");