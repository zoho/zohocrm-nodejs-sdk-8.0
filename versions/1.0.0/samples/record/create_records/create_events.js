import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class CreateEvents {
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
    static async createEvents(moduleAPIName) {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        let records = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Events.DESCRIPTION, 'description');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Events.START_DATETIME, new Date(2023, 9, 9, 11, 32, 33));
        let participants = [];
        let participant1 = new ZOHOCRMSDK.Record.Participants();
        participant1.setEmail('abc@gmail.com');
        participant1.setType('email');
        participant1.setId(4402480254001n);
        participants.push(participant1);
        let participant2 = new ZOHOCRMSDK.Record.Participants();
        participant2.addKeyValue('participant', 4003423423434n);
        participant2.addKeyValue('type', 'lead');
        participants.push(participant2);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Events.PARTICIPANTS, participants);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Events.ALL_DAY, true);
        record1.addKeyValue('send_notification', true);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Events.EVENT_TITLE, 'New Automated Event');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Events.END_DATETIME, new Date(2023, 9, 10, 11, 30, 22));
        let reminderList = [];
        let remindAt = new ZOHOCRMSDK.Record.Reminder();
        remindAt.setPeriod("minutes");
        remindAt.setUnit(15);
        reminderList.push(remindAt);
        let remindAt1 = new ZOHOCRMSDK.Record.Reminder();
        remindAt1.setPeriod("minutes");
        remindAt1.setUnit(15);
        remindAt1.setTime("10:30");
        reminderList.push(remindAt1);
        record1.addKeyValue('$se_module', 'leads');
        let whatId = new ZOHOCRMSDK.Record.Record();
        whatId = new ZOHOCRMSDK.Record.Record();
        whatId.setId(4300234243n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Events.WHAT_ID, whatId);
        record1.addKeyValue('Currency', new ZOHOCRMSDK.Choice("USD"));
        //used when GDPR is enabled
        let dataConsent = new ZOHOCRMSDK.Record.Consent();
        dataConsent.setConsentRemarks("Approved.");
        dataConsent.setConsentThrough("Email");
        dataConsent.setContactThroughEmail(true);
        dataConsent.setContactThroughSocial(false);
        dataConsent.setContactThroughPhone(true);
        dataConsent.setContactThroughSurvey(true);
        dataConsent.setConsentDate(new Date(2022, 10, 11));
        dataConsent.setDataProcessingBasis("Obtained");
        record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);
        // for custom Fields
        record1.addKeyValue("External", "Value12345");
        record1.addKeyValue("LongInteger", 123);
        record1.addKeyValue("CustomField", "custom_field");
        record1.addKeyValue("Datetime", new Date(2020, 12, 20, 10, 29, 33));
        record1.addKeyValue("Date_1", new Date(2020, 10, 12));
        record1.addKeyValue("Subject", "AutomatedSDK");
        record1.addKeyValue("Product_Name", "Automated");
        let fileDetails = [];
        let fileDetail = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c32a6ae23d729ad87c6d90b0bd44183");
        fileDetails.push(fileDetail);
        let fileDetail2 = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail2.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c32a6ae2329ad87c6d90b0bd44183");
        fileDetails.push(fileDetail2);
        record1.addKeyValue("file_Upload", fileDetails);
        // for Custom User LookUp
        let user = new ZOHOCRMSDK.Users.MinifiedUser();
        user.setId(4323001232n);
        record1.addKeyValue("User_1", user);
        // for Custom LookUp
        let data = new ZOHOCRMSDK.Record.Record();
        data.setId(400034234234234n);
        record1.addKeyValue("LookUp_1", data);
        //for Custom PicKList
        record1.addKeyValue("Pick", new ZOHOCRMSDK.Choice(true));
        //for Custom MultiPickList
        record1.addKeyValue("MultiSelecr", [new ZOHOCRMSDK.Choice("Option 1"), new ZOHOCRMSDK.Choice("Option 2")]);
        // for Subform
        let subformList = [];
        let subform = new ZOHOCRMSDK.Record.Record();
        subform.addKeyValue("customfield", "customValue");
        let user1 = new ZOHOCRMSDK.Users.MinifiedUser();
        user1.setId(42393413434213n);
        subform.addKeyValue("Userfield", user1);
        subformList.push(subform);
        record1.addKeyValue("Subform_2", subformList);
        // for MultiSelectLookUp/custom MultiSelectLookUp
        let multiSelectList = [];
        let record = new ZOHOCRMSDK.Record.Record();
        record.addKeyValue("id", 43234234423434n);
        let linkingRecord = new ZOHOCRMSDK.Record.Record();
        linkingRecord.addKeyValue("MultiSelectLookup", record);
        multiSelectList.push(linkingRecord);
        let record2 = new ZOHOCRMSDK.Record.Record();
        record2.addKeyValue("id", 43234234423434n);
        let linkingRecord2 = new ZOHOCRMSDK.Record.Record();
        linkingRecord2.addKeyValue("MultiSelectLookup", record2);
        multiSelectList.push(linkingRecord2);
        record1.addKeyValue("MultiSelectlookup", multiSelectList);
        //
        let tagList = [];
        let tag = new ZOHOCRMSDK.Tags.Tag();
        tag.setName("Testtask");
        tagList.push(tag);
        record1.setTag(tagList);
        // add Record instance to List
        records.push(record1);
        request.setData(records);
        let trigger = ["approval", "workflow", "blueprint"];
        request.setTrigger(trigger);
        request.setLarId("4222222222224324");
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        // await headerInstance.add(ZOHOCRMSDK.Record.CreateRecordsHeader.X_EXTERNAL, "Quotes.Quoted_Items.Product_Name.Products_External");
        // await headerInstance.add(ZOHOCRMSDK.Record.CreateRecordsHeader.X_EXTERNAL, "Products.Products_External");
        let response = await recordOperations.createRecords(request, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        } else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                } else if (responseObject instanceof ZOHOCRMSDK.Record.APIException) {
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
let moduleAPIName = "Events";
await CreateEvents.initialize();
await CreateEvents.createEvents(moduleAPIName);