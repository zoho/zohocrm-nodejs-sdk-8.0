import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
import path from "path";
import fs from "fs";
class GetRelatedRecordUsingExternalId {
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

    static async getRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedListAPIName, externalFieldValue, destinationFolder) {
        //example
        // let moduleAPIName = "module_api_name";
        // let externalValue = "798007";
        // let relatedModuleAPIName = "module_api_name";
        // let externalFieldValue = "414001";
        //let destinationFolder = "/Users/user/Desktop"
        let xExternal = "Leads.External,Products.Products_External";
        let relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordUsingExternalIDParam.FIELDS, "id");
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        /* Possible parameters for Get Related Record operation */
        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordUsingExternalIDHeader.IF_MODIFIED_SINCE, new Date('June 15, 2020 05:35:32'));
        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordUsingExternalIDHeader.X_EXTERNAL, xExternal);
        //Call getRelatedRecord method that takes externalFieldValue, externalValue and headerInstance as parameter
        let response = await relatedRecordsOperations.getRelatedRecordUsingExternalId(externalFieldValue, externalValue, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ResponseWrapper) {
                let records = responseObject.getData();
                records.forEach(record => {
                    console.log("RelatedRecord ID: " + record.getId());
                    let createdBy = record.getCreatedBy();
                    if (createdBy != null) {
                        console.log("RelatedRecord Created By User-ID: " + createdBy.getId());
                        console.log("RelatedRecord Created By User-Name: " + createdBy.getName());
                        console.log("RelatedRecord Created By User-Email: " + createdBy.getEmail());
                    }
                    console.log("RelatedRecord CreatedTime: " + record.getCreatedTime());
                    let modifiedBy = record.getModifiedBy();
                    if (modifiedBy != null) {
                        console.log("RelatedRecord Modified By User-ID: " + modifiedBy.getId());
                        console.log("RelatedRecord Modified By User-Name: " + modifiedBy.getName());
                        console.log("RelatedRecord Modified By User-Email: " + modifiedBy.getEmail());
                    }
                    console.log("RelatedRecord ModifiedTime: " + record.getModifiedTime());
                    let tags = record.getTag();
                    if (tags != null) {
                        tags.forEach(tag => {
                            console.log("RelatedRecord Tag Name: " + tag.getName());
                            console.log("RelatedRecord Tag ID: " + tag.getId());
                        });
                    }
                    //To get particular field value
                    console.log("RelatedRecord Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName
                    console.log("RelatedRecord KeyValues: ");
                    let keyValues = record.getKeyValues();
                    let keyArray = Array.from(keyValues.keys());
                    keyArray.forEach(keyName => {
                        let value = keyValues.get(keyName);
                        if (value != null) {
                            if (Array.isArray(value)) {
                                if (value.length > 0) {
                                    if (value[0] instanceof ZOHOCRMSDK.Record.FileDetails) {
                                        let fileDetails = value;
                                        fileDetails.forEach(fileDetail => {
                                            console.log("Record FileDetails FileIds: " + fileDetail.getFileIdS());
                                            console.log("Record FileDetails FileNameS: " + fileDetail.getFileNameS());
                                            console.log("Record FileDetails SizeS: " + fileDetail.getSizeS());
                                            console.log("Record FileDetails Id: " + fileDetail.getId());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Tags.Tag) {
                                        let tags = value;
                                        tags.forEach(tag => {
                                            console.log("RelatedRecord Tag Name: " + tag.getName());
                                            console.log("RelatedRecord Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.PricingDetails) {
                                        let pricingDetails = value;
                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("RelatedRecord PricingDetails ToRange: " + pricingDetail.getToRange().toString());
                                            console.log("RelatedRecord PricingDetails Discount: " + pricingDetail.getDiscount().toString());
                                            console.log("RelatedRecord PricingDetails ID: " + pricingDetail.getId());
                                            console.log("RelatedRecord PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.Participants) {
                                        let participants = value;
                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());
                                            console.log("Record Participants Invited: " + participant.getInvited().toString());
                                            console.log("Record Participants ID: " + participant.getId());
                                            console.log("Record Participants Type: " + participant.getType());
                                            console.log("Record Participants Participant: " + participant.getParticipant());
                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.Record) {
                                        let recordArray = value;
                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.LineTax) {
                                        let lineTaxes = value;
                                        lineTaxes.forEach(lineTax => {
                                            console.log("RelatedRecord ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                            console.log("RelatedRecord ProductDetails LineTax Name: " + lineTax.getName());
                                            console.log("RelatedRecord ProductDetails LineTax Id: " + lineTax.getId());
                                            console.log("RelatedRecord ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Choice) {
                                        let choiceArray = value;
                                        console.log(keyName);
                                        console.log("Values");
                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.LineTax) {
                                        let lineTaxes = value;
                                        lineTaxes.forEach(lineTax => {
                                            console.log("RelatedRecord ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                            console.log("RelatedRecord ProductDetails LineTax Name: " + lineTax.getName());
                                            console.log("RelatedRecord ProductDetails LineTax Id: " + lineTax.getId());
                                            console.log("RelatedRecord ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.Reminder) {
                                        let reminders = value;
                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());
                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.Comment) {
                                        let comments = value;
                                        comments.forEach(comment => {
                                            console.log("Record Comment CommentedBy: " + comment.getCommentedBy());
                                            console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());
                                            console.log("Record Comment CommentContent: " + comment.getCommentContent());
                                            console.log("Record Comment Id: " + comment.getId());
                                        });
                                    }
                                    else {
                                        console.log(keyName + ": " + value);
                                    }
                                }
                            }
                            else if (value instanceof ZOHOCRMSDK.Layouts.Layouts) {
                                console.log(keyName + " ID: " + value.getId());
                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof ZOHOCRMSDK.Users.Users) {
                                console.log("RelatedRecord " + keyName + " User-ID: " + value.getId());
                                console.log("RelatedRecord " + keyName + " User-Name: " + value.getName());
                                console.log("RelatedRecord " + keyName + " User-Email: " + value.getEmail());
                            }
                            else if (value instanceof ZOHOCRMSDK.Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof ZOHOCRMSDK.Record.RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof ZOHOCRMSDK.Record.Record) {
                                console.log(keyName + " Record ID: " + value.getId());
                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof ZOHOCRMSDK.Record.RecurringActivity) {
                                console.log(keyName);
                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof ZOHOCRMSDK.Record.Consent) {
                                console.log("Record Consent ID: " + value.getId());
                                let owner = value.getOwner();
                                if (owner != null) {
                                    console.log("Record Consent Owner Name: " + owner.getName());
                                    console.log("Record Consent Owner ID: " + owner.getId());
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }
                                let consentCreatedBy = value.getCreatedBy();
                                if (consentCreatedBy != null) {
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }
                                let consentModifiedBy = value.getModifiedBy();
                                if (consentModifiedBy != null) {
                                    console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());
                                    console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());
                                    console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                                }
                                console.log("Record Consent CreatedTime: " + value.getCreatedTime());
                                console.log("Record Consent ModifiedTime: " + value.getModifiedTime());
                                console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());
                                console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());
                                console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());
                                console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());
                                console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());
                                console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());
                                console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());
                                console.log("Record Consent ConsentThrough: " + value.getConsentThrough());
                                console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());
                                //To get custom values
                                console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                            }
                            else if (value instanceof Map) {
                                console.log(keyName);
                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + ": " + value.get(key));
                                });
                            }
                            else {
                                console.log(keyName + ": " + value);
                            }
                        }
                    });
                });
            }
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.FileBodyWrapper) {
                let streamWrapper = responseObject.getFile();
                //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                let fileName = path.join(destinationFolder, streamWrapper.getName());
                let readStream = streamWrapper.getStream();
                //Write the stream to the destination file.
                fs.writeFileSync(fileName, readStream);
            }
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
await GetRelatedRecordUsingExternalId.initialize();
let moduleAPIName = "leads";
let externalValue = "12321";
let relatedListAPIName = "notes";
let externalFieldValue = "23213";
let destinationFolder = "users/documents/file";
await GetRelatedRecordUsingExternalId.getRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedListAPIName, externalFieldValue, destinationFolder);