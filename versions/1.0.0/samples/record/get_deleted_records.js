import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class GetDeletedRecords {
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

    static async getDeletedRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Get Deleted Records operation */
        //can be all/recycle/permanent
        await paramInstance.add(ZOHOCRMSDK.Record.GetDeletedRecordsParam.TYPE, "permanent");
        await paramInstance.add(ZOHOCRMSDK.Record.GetDeletedRecordsParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.Record.GetDeletedRecordsParam.PER_PAGE, 200);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        /* Possible headers for Get Deleted Records operation */
        await headerInstance.add(ZOHOCRMSDK.Record.GetDeletedRecordsHeader.IF_MODIFIED_SINCE, new Date('January 15, 2020 10:35:32'));
        //Call getDeletedRecords method that takes paramInstance, headerInstance and moduleAPIName as parameter
        let response = await recordOperations.getDeletedRecords(paramInstance, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.DeletedRecordsWrapper) {
                    let deletedRecords = responseObject.getData();
                    deletedRecords.forEach(deletedRecord => {
                        let deletedBy = deletedRecord.getDeletedBy();
                        if (deletedBy != null) {
                            console.log("DeletedRecord Deleted By User-Name: " + deletedBy.getName());
                            console.log("DeletedRecord Deleted By User-ID: " + deletedBy.getId());
                        }
                        console.log("DeletedRecord ID: " + deletedRecord.getId());
                        console.log("DeletedRecord DisplayName: " + deletedRecord.getDisplayName());
                        console.log("DeletedRecord Type: " + deletedRecord.getType());
                        let createdBy = deletedRecord.getCreatedBy();
                        if (createdBy != null) {
                            console.log("DeletedRecord Created By User-Name: " + createdBy.getName());
                            console.log("DeletedRecord Created By User-ID: " + createdBy.getId());
                        }
                        console.log("DeletedRecord DeletedTime: " + deletedRecord.getDeletedTime());
                    });
                    let info = responseObject.getInfo();
                    if (info != null) {
                        if (info.getPerPage() != null) {
                            console.log("Record Info PerPage: " + info.getPerPage().toString());
                        }
                        if (info.getCount() != null) {
                            console.log("Record Info Count: " + info.getCount().toString());
                        }
                        if (info.getPage() != null) {
                            console.log("Record Info Page: " + info.getPage().toString());
                        }
                        if (info.getMoreRecords() != null) {
                            console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.Record.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
await GetDeletedRecords.initialize();
let moduleAPIName = "leads";
await GetDeletedRecords.getDeletedRecords(moduleAPIName);