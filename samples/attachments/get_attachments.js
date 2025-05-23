import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class GetAttachments {
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

    static async getAttachments(moduleAPIName, recordId) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 34097003n;
        let attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        //Possible parameters of Get Attachments Operation
        await paramInstance.add(ZOHOCRMSDK.Attachments.GetAttachmentsParam.FIELDS, "id");
        await paramInstance.add(ZOHOCRMSDK.Attachments.GetAttachmentsParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.Attachments.GetAttachmentsParam.PER_PAGE, 10);
        //Call getAttachments method that takes ParameterMap instance as parameter
        let response = await attachmentsOperations.getAttachments(recordId, moduleAPIName, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Attachments.ResponseWrapper) {
                    let attachments = responseObject.getData();
                    attachments.forEach(attachment => {
                        console.log("Attachment ID: " + attachment.getId());
                        let owner = attachment.getOwner();
                        if (owner != null) {
                            console.log("Attachment Owner - Name: " + owner.getName());
                            console.log("Attachment Owner ID: " + owner.getId());
                            console.log("Attachment Owner Email: " + owner.getEmail());
                        }
                        if (attachment.getModifiedTime() != null) {
                            console.log("Attachment Modified Time: " + attachment.getModifiedTime().toString());
                        }
                        console.log("Attachment File Name: " + attachment.getFileName());
                        console.log("Attachment File States: " + attachment.getFieldStates());
                        console.log("Attachment Created Time: " + attachment.getCreatedTime());
                        console.log("Attachment File Size: " + attachment.getSize());
                        let parentId = attachment.getParentId();
                        if (parentId != null) {
                            console.log("Attachment parent record Name: " + parentId.getKeyValue("name"));
                            console.log("Attachment parent record ID: " + parentId.getId());
                        }
                        if (attachment.getEditable() != null) {
                            console.log("Attachment is Editable: " + attachment.getEditable().toString());
                        }
                        console.log("Attachment SharingPermission: " + attachment.getSharingPermission());
                        console.log("Attachment RecordStatusS: " + attachment.getRecordStatusS());
                        console.log("Attachment File ID: " + attachment.getFileId());
                        console.log("Attachment File Type: " + attachment.getType());
                        console.log("Attachment seModule: " + attachment.getSeModule());
                        let modifiedBy = attachment.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Attachment Modified By User-Name: " + modifiedBy.getName());
                            console.log("Attachment Modified By User-ID: " + modifiedBy.getId());
                            console.log("Attachment Modified By User-Email: " + modifiedBy.getEmail());
                        }
                        console.log("Attachment Type: " + attachment.getAttachmentType());
                        console.log("Attachment State: " + attachment.getState());
                        let createdBy = attachment.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Attachment Created By User-Name: " + createdBy.getName());
                            console.log("Attachment Created By User-ID: " + createdBy.getId());
                            console.log("Attachment Created By User-Email: " + createdBy.getEmail());
                        }
                        console.log("Attachment LinkUrl: " + attachment.getLinkUrl());
                        console.log("Attachment ZiaVisions: " + attachment.getZiaVisions());
                    });
                    let info = responseObject.getInfo();
                    if (info != null) {
                        if (info.getPerPage() != null) {
                            console.log("Attachment Info PerPage: " + info.getPerPage().toString());
                        }
                        if (info.getCount() != null) {
                            console.log("Attachment Info Count: " + info.getCount().toString());
                        }
                        if (info.getPage() != null) {
                            console.log("Attachment Info Page: " + info.getPage().toString());
                        }
                        if (info.getMoreRecords() != null) {
                            console.log("Attachment Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.Attachments.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await GetAttachments.initialize();
let moduleAPIName = "Leads";
let recordId = 3477005001n;
await GetAttachments.getAttachments(moduleAPIName, recordId);
