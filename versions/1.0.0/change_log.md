# Migrating from Zoho CRM NODEJS SDK 7.0-v3.0.0 to 8.0-v1.0.0

1. [Attachments](#attachments)
   - [Get Attachments](#get-attachments)

2. [ConversionOptions](#conversionOptions)
   - [LeadConversionOptions](#leadconversionoptions)

3. [Fields](#fields)
   - [Get Fields](#get-fields)
   - [Update Field](#update-field)
   - [Update Fields](#update-fields)
   
4. [Layouts](#layouts)
   - [Get Layouts](#get-layouts)

5. [Notification](#notification)
   - [Disable Notification](#disable-notification)
   
6. [ZiaOrgEnrichment](#ziaOrgEnrichment)
    - [Create ZiaOrgEnrichment](#create-ziaorgenrichment)
    - [Get ZiaOrgEnrichment](#get-ziaorgenrichment)
    - [Get ZiaOrgEnrichments](#get-ziaorgenrichments)

7. [ZiaPeopleEnrichment](#ziaPeopleEnrichment)
   - [Create ZiaPeopleEnrichment](#create-ziapeopleenrichment)
   - [Get ZiaPeopleEnrichment](#get-ziapeopleenrichment)
   - [Get ZiaPeopleEnrichments](#get-ziapeopleenrichments)
   
8. [FromAddresses](#fromAddresses)
   - [Get EmailAddresses](#get-emailaddresses)

9. [EmailSharingDetails](#emailSharingDetails)
   - [Get EmailSharingDetails](#get-emailsharingdetails)
   
## Attachments

### Get Attachments

- Changes Note : Introduced recordStatusS, attachmentSourceS, fileIdS, fieldStates and ziaVisions fields in Attachment class  

- NODEJS SDK 7.0-v3.0.0

  ```js
  let attachments = responseObject.getData();
  attachments.forEach(attachment => {
  console.log("Attachment ID: " + attachment.getId());
  });
  ```
  
- NODEJS SDK 8.0-v1.0.0

    ```js
    let attachments = responseObject.getData();
    attachments.forEach(attachment => {
    console.log("Attachment ID: " + attachment.getId());
    console.log("Attachment File States: " + attachment.getFieldStates());
    console.log("Attachment RecordStatusS: " + attachment.getRecordStatusS());
    console.log("Attachment ZiaVisions: " + attachment.getZiaVisions());
    console.log("Attachment FileIds: " + attachment.getFileIdS());
    console.log("Attachment AttachmentSourceS: " + attachment.getAttachmentSourceS());
    });
    ```
  
## ConversionOptions

### LeadConversionOptions

- Changes Note: method name updated from getConversionoptions to getConversionOptions in ResponseWrapper

- NODEJS SDK 7.0-v3.0.0

    ```js
    let responseHandler = response.getObject();
    if (responseHandler instanceof ZOHOCRMSDK.ConversionOption.ResponseWrapper) {
    let conversionOption = responseHandler.getConversionoptions();    
    }
    ```
- NODEJS SDK 8.0-v1.0.0

    ```js
    let responseHandler = response.getObject();
    if (responseHandler instanceof ZOHOCRMSDK.ConversionOption.ResponseWrapper) {
    let conversionOption = responseHandler.getConversionOptions();    
    }
    ```

## Fields

### Get Fields

- Changes Note : New Fields introduced in MultiSelectLookup and some fields are removed.

- NODEJS SDK 7.0-v3.0.0

    ```js
    //get multi select lookup for field
    let multiSelectLookup = field.getMultiselectlookup();
    if (multiSelectLookup != null) {
        console.log("Field MultiSelectLookup DisplayLabel: " + multiSelectLookup.getDisplayLabel());
        console.log("Field MultiSelectLookup LinkingModule: " + multiSelectLookup.getLinkingModule());
        console.log("Field MultiSelectLookup LookupApiname: " + multiSelectLookup.getLookupApiname());
        console.log("Field MultiSelectLookup APIName: " + multiSelectLookup.getAPIName());
        console.log("Field MultiSelectLookup ConnectedlookupApiname: " + multiSelectLookup.getConnectedlookupApiname());
        console.log("Field MultiSelectLookup ID: " + multiSelectLookup.getId());
        console.log("Field MultiSelectLookup ConnectedModule: " + multiSelectLookup.getConnectedModule());   
    }
    //get multi user lookup for field
    if (field.getMultiuserlookup() != null) {
        let multiuserlookup = field.getMultiuserlookup();
        console.log("Field MultiUserLookup DisplayLabel" + multiuserlookup.getDisplayLabel());
        console.log("Field MultiUserLookup LinkingModule" + multiuserlookup.getLinkingModule());
        console.log("Field MultiUserLookup LookupApiname" + multiuserlookup.getLookupApiname());
        console.log("Field MultiUserLookup APIName" + multiuserlookup.getAPIName());
        console.log("Field MultiUserLookup ID" + multiuserlookup.getId());
        console.log("Field MultiUserLookup ConnectedModule" + multiuserlookup.getConnectedModule());
        console.log("Field MultiUserLookup ConnectedlookupApiname" + multiuserlookup.getConnectedlookupApiname()); 
    }
    ```

- NODEJS SDK 8.0-v1.0.0

    ```js
    //get the multi select lookup for field
    let multiSelectLookup = field.getMultiselectlookup();
    if (multiSelectLookup !== null) {
        let linkingDetails = multiSelectLookup.getLinkingDetails();

        if (linkingDetails) {
            let module = linkingDetails.getModule();
            if (module) {
                console.log("Field Multiselectlookup LinkingDetails Module Visibility: ",  module.getVisibility());
                console.log("Field Multiselectlookup LinkingDetails Module PluralLabel: ",  module.getPluralLabel());
                console.log("Field Multiselectlookup LinkingDetails Module APIName: ",  module.getAPIName());
                console.log("Field Multiselectlookup LinkingDetails Module Id: ",  module.getId());
            }

            let lookupField = linkingDetails.getLookupField();
            if (lookupField) {
                console.log("Field MultiSelectLookup LinkingDetails LookupField APIName: ",  lookupField.getAPIName());
                console.log("Field MultiSelectLookup LinkingDetails LookupField FieldLabel: ", lookupField.getFieldLabel());
                console.log("Field MultiSelectLookup LinkingDetails LookupField Id: ",  lookupField.getId());
            }

            let connectedLookupField = linkingDetails.getConnectedLookupField();
            if (connectedLookupField) {
                console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField APIName: ", connectedLookupField.getAPIName());
                console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField FieldLabel: ", connectedLookupField.getFieldLabel());
                console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField Id: ", connectedLookupField.getId());
            }
        }

        let connectedDetails = multiSelectLookup.getConnectedDetails();
        if (connectedDetails) {
            let connectedField = connectedDetails.getField();
            if (connectedField) {
                console.log("Field Multiselectlookup ConnectedDetails Field APIName: ", connectedField.getAPIName());
                console.log("Field Multiselectlookup ConnectedDetails Field FieldLabel: ", connectedField.getFieldLabel());
                console.log("Field Multiselectlookup ConnectedDetails Field id: ", connectedField.getId());
            }

            let connectedModule = connectedDetails.getModule();
            if (connectedModule) {
                console.log("Field MultiSelectLookup ConnectedDetails Module PluralLabel: ", connectedModule.getPluralLabel());
                console.log("Field MultiSelectLookup ConnectedDetails Module APIName: ", connectedModule.getAPIName());
                console.log("Field MultiSelectLookup ConnectedDetails Module Id: ", connectedModule.getId());
            }

            let layouts = connectedDetails.getLayouts();
            if (layouts && layouts.length > 0) {
                for (let layout of layouts) {
                    console.log("Field MultiSelectLookup ConnectedDetails Layouts APIName: ", layout.getAPIName());
                    console.log("Field MultiSelectLookup ConnectedDetails Layouts Id: ", layout.getId());
                }
            }
        }

        let relatedList = multiSelectLookup.getRelatedList();
        if (relatedList) {
            console.log("Field MultiSelectLookup RelatedList DisplayLabel: ", relatedList.getDisplayLabel());
            console.log("Field MultiSelectLookup RelatedList APIName: ", relatedList.getAPIName());
            console.log("Field MultiSelectLookup RelatedList Id: ", relatedList.getId());
        }
    }
  
  // get the multi user lookup for field
  if (field.getMultiuserlookup !== null) {
    let multiuserlookup =  field.getMultiuserlookup();
    if (multiuserlookup !== null) {
        let linkingDetails =  multiuserlookup.getLinkingDetails();

        if (linkingDetails) {
            let module =  linkingDetails.getModule();
            if (module) {
                console.log("Field Multiuserlookup LinkingDetails Module Visibility: ",  module.getVisibility());
                console.log("Field Multiuserlookup LinkingDetails Module PluralLabel: ",  module.getPluralLabel());
                console.log("Field Multiuserlookup LinkingDetails Module APIName: ",  module.getAPIName());
                console.log("Field Multiuserlookup LinkingDetails Module Id: ",  module.getId());
            }

            let lookupField = linkingDetails.getLookupField();
            if (lookupField) {
                console.log("Field Multiuserlookup LinkingDetails LookupField APIName: ",  lookupField.getAPIName());
                console.log("Field Multiuserlookup LinkingDetails LookupField FieldLabel: ",  lookupField.getFieldLabel());
                console.log("Field Multiuserlookup LinkingDetails LookupField Id: ", lookupField.getId());
            }

            let connectedLookupField = linkingDetails.getConnectedLookupField();
            if (connectedLookupField) {
                console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField APIName: ",  connectedLookupField.getAPIName());
                console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField FieldLabel: ",  connectedLookupField.getFieldLabel());
                console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField Id: ", connectedLookupField.getId());
            }
        }

        console.log("Field Multiuserlookup RecordAccess: ", multiuserlookup.getRecordAccess());
    }
  }
  ```
  
### Update Field

- Changes Note : Sample Input for picklist and rollup summary fields.

- NODEJS SDK 7.0-v3.0.0

    ```js
    let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
    let bodyWrapper = new ZOHOCRMSDK.Fields.BodyWrapper();
    let fields = [];
    let field = new ZOHOCRMSDK.Fields.Fields();
    field.setFieldLabel("SDK");
    field.setDisplayLabel("SDK");
    field.setDataType("text");
    field.setLength(180);
    let toolTip = new ZOHOCRMSDK.Fields.Tooltip();
    toolTip.setName("static_text");
    toolTip.setValue("Enter your name");
    await field.setTooltip(toolTip);
    let unique = new ZOHOCRMSDK.Fields.Unique();
    unique.setCasesensitive("false");
    await field.setUnique(unique);
    let crypt = new ZOHOCRMSDK.Fields.Crypt();
    crypt.setMode("decryption");
    await field.setCrypt(crypt);
    let external = new ZOHOCRMSDK.Fields.External();
    external.setType("user");
    external.setShow(true);
    await field.setExternal(external);
    let profiles = [];
    let profile = new ZOHOCRMSDK.Fields.Profile();
    profile.setId(347706126014n);
    profile.setPermissionType("read_write");
    profiles.push(profile);
    field.setProfiles(profiles);
    fields.push(field);
    ```

- NODEJS SDK 8.0-v1.0.0

    ```js
    let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
    let bodyWrapper = new ZOHOCRMSDK.Fields.BodyWrapper();
    let fields = [];
    let field = new ZOHOCRMSDK.Fields.Fields();
    field.setFieldLabel("SDK");
    field.setDisplayLabel("SDK");
    field.setDataType("text");
    field.setLength(180);
    let toolTip = new ZOHOCRMSDK.Fields.Tooltip();
    toolTip.setName("static_text");
    toolTip.setValue("Enter your name");
    await field.setTooltip(toolTip);
    let unique = new ZOHOCRMSDK.Fields.Unique();
    unique.setCasesensitive("false");
    await field.setUnique(unique);
    let crypt = new ZOHOCRMSDK.Fields.Crypt();
    crypt.setMode("decryption");
    await field.setCrypt(crypt);
    let external = new ZOHOCRMSDK.Fields.External();
    external.setType("user");
    external.setShow(true);
    await field.setExternal(external);
    let profiles = [];
    let profile = new ZOHOCRMSDK.Fields.Profile();
    profile.setId(347706126014n);
    profile.setPermissionType("read_write");
    profiles.push(profile);
    field.setProfiles(profiles);
    fields.push(field);
    /** End */
    /** Sample Input: Field Type - Picklist */
    let picklistField = new ZOHOCRMSDK.Fields.Fields();
    picklistField.setFieldLabel("Select Region5");
    picklistField.setDataType("picklist");
    let toolTip1 = new ZOHOCRMSDK.Fields.Tooltip();
    toolTip1.setName("info_icon");
    toolTip1.setValue("Select your region here");
    await picklistField.setTooltip(toolTip1);
    picklistField.setLength(120);
    let picklistFieldProfiles = [];
    let profile1 = new ZOHOCRMSDK.Fields.Profile();
    profile1.setId(7534770395001n);
    profile1.setPermissionType("read_write");
    picklistFieldProfiles.push(profile1);
    let picklistValues = [];
    let picklistValue = new ZOHOCRMSDK.Fields.PickListValue();
    picklistValue.setDisplayValue("Left");
    picklistValue.setActualValue("IN_Left");
    picklistValues.push(picklistValue);
    picklistValue = new ZOHOCRMSDK.Fields.PickListValue();
    picklistValue.setDisplayValue("Top");
    picklistValue.setActualValue("IN_Top");
    picklistValues.push(picklistValue);
    picklistValue = new ZOHOCRMSDK.Fields.PickListValue();
    picklistValue.setDisplayValue("Down");
    picklistValue.setActualValue("IN_Down");
    picklistValues.push(picklistValue);
    let picklistValue1 = new ZOHOCRMSDK.Fields.PickListValue();
    picklistValue1.setDisplayValue("South_Updated");
    picklistValue1.setActualValue("IN_South");
    picklistValue1.setId(75347706075n);
    picklistValues.push(picklistValue1);
    let picklistValue2 = new ZOHOCRMSDK.Fields.PickListValue();
    picklistValue2.setDisplayValue("West");
    picklistValue2.setActualValue("IN_West");
    picklistValue2.setId(7534776071n);
    picklistValue2.setDelete(true);
    picklistValues.push(picklistValue2);
    picklistField.setPickListValues(picklistValues);
    fields.push(picklistField);
    /** End */
    /** Rollup Summary Field */
    let rollupSummaryField = new ZOHOCRMSDK.Fields.Fields();
    rollupSummaryField.setFieldLabel("Total");
    rollupSummaryField.setDataType("rollup_summary");
    let rollupSummary = new ZOHOCRMSDK.Fields.RollupSummary();
    rollupSummary.setReturnType("currency");
    let expression = new ZOHOCRMSDK.Fields.Expression();
    let functionParameter = new ZOHOCRMSDK.Fields.FunctionParameter();
    functionParameter.setAPIName("Total");
    expression.setFunctionParameters([functionParameter]);
    let criteria = new Criteria();
    criteria.setComparator("AND");
    let group = [];
    let groupCriteria1 = new Criteria();
    groupCriteria1.setComparator("equal");
    let groupCriteria1Field = new ZOHOCRMSDK.Fields.MinifiedField();
    groupCriteria1Field.setAPIName("Billing_Country");
    groupCriteria1.setValue("United States");
    groupCriteria1.setField(groupCriteria1Field);
    group.push(groupCriteria1);
    let groupCriteria2 = new Criteria();
    groupCriteria2.setComparator("greater_than");
    let groupCriteria2Field = new ZOHOCRMSDK.Fields.MinifiedField();
    groupCriteria2Field.setAPIName("Invoice_Date");
    groupCriteria2.setValue("2024-11-27");
    groupCriteria2.setField(groupCriteria2Field);
    group.push(groupCriteria2);
    criteria.setGroup(group);
    await expression.setCriteria(criteria);
    expression.setFunction("SUM");
    let basedOnModule = new ZOHOCRMSDK.Fields.MinifiedModule();
    basedOnModule.setAPIName("Invoices");
    await rollupSummary.setBasedOnModule(basedOnModule);
    let relatedList = new ZOHOCRMSDK.Fields.RelatedList();
    relatedList.setAPIName("Invoices");
    await rollupSummary.setRelatedList(relatedList);
    await rollupSummary.setExpression(expression);
    await rollupSummaryField.setRollupSummary(rollupSummary);
    fields.push(rollupSummaryField);
  ```
  
### Update Fields

- Changes Note : Introduced globalPicklistValue field in PickListValue.

- NODEJS SDK 7.0-v3.0.0

    ```js
    let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
    let bodyWrapper = new ZOHOCRMSDK.Fields.BodyWrapper();
    let fields = [];
    let field = new ZOHOCRMSDK.Fields.Fields();
    field.setId(34770003n);
    field.setFieldLabel("SDK");
    field.setDisplayLabel("SDK");
    field.setDataType("text");
    field.setLength(180);
    let toolTip = new ZOHOCRMSDK.Fields.Tooltip();
    toolTip.setName("static_text");
    toolTip.setValue("Enter your name");
    field.setTooltip(toolTip);
    let unique = new ZOHOCRMSDK.Fields.Unique();
    unique.setCasesensitive("false");
    field.setUnique(unique);
    let crypt = new ZOHOCRMSDK.Fields.Crypt();
    crypt.setMode("decryption");
    field.setCrypt(crypt);
    let external = new ZOHOCRMSDK.Fields.External();
    external.setType("user");
    external.setShow(true);
    field.setExternal(external);
    let profiles = [];
    let profile = new ZOHOCRMSDK.Fields.Profile();
    profile.setId(3477061000000026014n);
    profile.setPermissionType("read_write");
    profiles.push(profile);
    field.setProfiles(profiles);
    fields.push(field);    
    ```

- NODEJS SDK 8.0-v1.0.0

    ```js
    let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
    let bodyWrapper = new ZOHOCRMSDK.Fields.BodyWrapper();
    let fields = [];
    let field = new ZOHOCRMSDK.Fields.Fields();
    field.setId(34770003n);
    field.setFieldLabel("SDK");
    field.setDisplayLabel("SDK");
    field.setDataType("text");
    field.setLength(180);
    let toolTip = new ZOHOCRMSDK.Fields.Tooltip();
    toolTip.setName("static_text");
    toolTip.setValue("Enter your name");
    field.setTooltip(toolTip);
    let unique = new ZOHOCRMSDK.Fields.Unique();
    unique.setCasesensitive("false");
    field.setUnique(unique);
    let crypt = new ZOHOCRMSDK.Fields.Crypt();
    crypt.setMode("decryption");
    field.setCrypt(crypt);
    let external = new ZOHOCRMSDK.Fields.External();
    external.setType("user");
    external.setShow(true);
    field.setExternal(external);
    let profiles = [];
    let profile = new ZOHOCRMSDK.Fields.Profile();
    profile.setId(3477061000000026014n);
    profile.setPermissionType("read_write");
    profiles.push(profile);
    field.setProfiles(profiles);
    fields.push(field);

    let picklistField = new ZOHOCRMSDK.Fields.Fields();
    picklistField.setId(342323n);
    let picklistValues = [];
    let picklistValue = new ZOHOCRMSDK.Fields.PickListValue();
    picklistValue.setId(33242323n);
    picklistValue.setDisplayValue("Left");
    let globalPicklistValue = new ZOHOCRMSDK.Fields.Picklist();
    globalPicklistValue.setId(322323n);
    picklistValue.setGlobalPicklistValue(globalPicklistValue);

    picklistValues.push(picklistValue);
    picklistField.setPickListValues(picklistValues);

    let globalPickList = new ZOHOCRMSDK.Fields.Picklist();
    globalPickList.setId(323123123n);
    picklistField.setGlobalPicklist(globalPickList);
    fields.push(picklistField);
    ```

## Layouts

### Get Layouts

- Changes Note : Updated getDefaultview method name to getDefaultView and introduced new fields in MutliSelectLookup.

- NODEJS SDk 7.0-v3.0.0

    ```js
    let layouts = responseObject.getLayouts();
    for (const layout of layouts) {
        let profiles = layout.getProfiles();
        if (profiles != null) {
            profiles.forEach(profile => {
                let defaultView = profile.getDefaultview();
            });
        }
    }
    //get multi select lookup for field
    let multiSelectLookup = field.getMultiselectlookup();
    if (multiSelectLookup != null) {
    console.log("Field MultiSelectLookup DisplayLabel: " + multiSelectLookup.getDisplayLabel());
    console.log("Field MultiSelectLookup LinkingModule: " + multiSelectLookup.getLinkingModule());
    console.log("Field MultiSelectLookup LookupApiname: " + multiSelectLookup.getLookupApiname());
    console.log("Field MultiSelectLookup APIName: " + multiSelectLookup.getAPIName());
    console.log("Field MultiSelectLookup ConnectedModule: " + multiSelectLookup.getConnectedModule());
    console.log("Field MultiSelectLookup ConnectedlookupApiname: " + multiSelectLookup.getConnectedlookupApiname());
    console.log("Field MultiSelectLookup ID: " + multiSelectLookup.getId());    
    }
    //get multi user lookup for field
    if (field.getMultiuserlookup() != null) {
    let multiuserlookup = field.getMultiuserlookup();
    console.log("Field MultiUserLookup DisplayLabel" + multiuserlookup.getDisplayLabel());
    console.log("Field MultiUserLookup LinkingModule" + multiuserlookup.getLinkingModule());
    console.log("Field MultiUserLookup LookupApiname" + multiuserlookup.getLookupApiname());
    console.log("Field MultiUserLookup APIName" + multiuserlookup.getAPIName());
    console.log("Field MultiUserLookup ID" + multiuserlookup.getId());
    console.log("Field MultiUserLookup ConnectedModule" + multiuserlookup.getConnectedModule());
    console.log("Field MultiUserLookup ConnectedlookupApiname" + multiuserlookup.getConnectedlookupApiname());
    }
    ```

- NODEJS SDK 8.0-v1.0.0

    ```js
    let layouts = responseObject.getLayouts();
    for (const layout of layouts) {
        let profiles = layout.getProfiles();
        if (profiles != null) {
            profiles.forEach(profile => {
                let defaultView = profile.getDefaultView();
            });
        }
    }
    //get multi select lookup for field
    let multiSelectLookup = field.getMultiselectlookup();
    if (multiSelectLookup !== null) {
        let linkingDetails = multiSelectLookup.getLinkingDetails();

        if (linkingDetails) {
            let module = linkingDetails.getModule();
            if (module) {
                console.log("Field Multiselectlookup LinkingDetails Module Visibility: ",  module.getVisibility());
                console.log("Field Multiselectlookup LinkingDetails Module PluralLabel: ",  module.getPluralLabel());
                console.log("Field Multiselectlookup LinkingDetails Module APIName: ",  module.getAPIName());
                console.log("Field Multiselectlookup LinkingDetails Module Id: ",  module.getId());
            }

            let lookupField = linkingDetails.getLookupField();
            if (lookupField) {
                console.log("Field MultiSelectLookup LinkingDetails LookupField APIName: ",  lookupField.getAPIName());
                console.log("Field MultiSelectLookup LinkingDetails LookupField FieldLabel: ", lookupField.getFieldLabel());
                console.log("Field MultiSelectLookup LinkingDetails LookupField Id: ",  lookupField.getId());
            }

            let connectedLookupField = linkingDetails.getConnectedLookupField();
            if (connectedLookupField) {
                console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField APIName: ", connectedLookupField.getAPIName());
                console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField FieldLabel: ", connectedLookupField.getFieldLabel());
                console.log("Field MultiSelectLookup LinkingDetails ConnectedLookupField Id: ", connectedLookupField.getId());
            }
        }

        let connectedDetails = multiSelectLookup.getConnectedDetails();
        if (connectedDetails) {
            let connectedField = connectedDetails.getField();
            if (connectedField) {
                console.log("Field Multiselectlookup ConnectedDetails Field APIName: ", connectedField.getAPIName());
                console.log("Field Multiselectlookup ConnectedDetails Field FieldLabel: ", connectedField.getFieldLabel());
                console.log("Field Multiselectlookup ConnectedDetails Field id: ", connectedField.getId());
            }

            let connectedModule = connectedDetails.getModule();
            if (connectedModule) {
                console.log("Field MultiSelectLookup ConnectedDetails Module PluralLabel: ", connectedModule.getPluralLabel());
                console.log("Field MultiSelectLookup ConnectedDetails Module APIName: ", connectedModule.getAPIName());
                console.log("Field MultiSelectLookup ConnectedDetails Module Id: ", connectedModule.getId());
            }

            let layouts = connectedDetails.getLayouts();
            if (layouts && layouts.length > 0) {
                for (let layout of layouts) {
                    console.log("Field MultiSelectLookup ConnectedDetails Layouts APIName: ", layout.getAPIName());
                    console.log("Field MultiSelectLookup ConnectedDetails Layouts Id: ", layout.getId());
                }
            }
        }

        let relatedList = multiSelectLookup.getRelatedList();
        if (relatedList) {
            console.log("Field MultiSelectLookup RelatedList DisplayLabel: ", relatedList.getDisplayLabel());
            console.log("Field MultiSelectLookup RelatedList APIName: ", relatedList.getAPIName());
            console.log("Field MultiSelectLookup RelatedList Id: ", relatedList.getId());
        }
    }
  
    //get multi select lookup for field
    if (field.getMultiuserlookup !== null) {
        let multiuserlookup =  field.getMultiuserlookup();
        if (multiuserlookup !== null) {
            let linkingDetails =  multiuserlookup.getLinkingDetails();

            if (linkingDetails) {
                let module =  linkingDetails.getModule();
                if (module) {
                    console.log("Field Multiuserlookup LinkingDetails Module Visibility: ",  module.getVisibility());
                    console.log("Field Multiuserlookup LinkingDetails Module PluralLabel: ",  module.getPluralLabel());
                    console.log("Field Multiuserlookup LinkingDetails Module APIName: ",  module.getAPIName());
                    console.log("Field Multiuserlookup LinkingDetails Module Id: ",  module.getId());
                }

                let lookupField = linkingDetails.getLookupField();
                if (lookupField) {
                    console.log("Field Multiuserlookup LinkingDetails LookupField APIName: ",  lookupField.getAPIName());
                    console.log("Field Multiuserlookup LinkingDetails LookupField FieldLabel: ",  lookupField.getFieldLabel());
                    console.log("Field Multiuserlookup LinkingDetails LookupField Id: ", lookupField.getId());
                }

                let connectedLookupField = linkingDetails.getConnectedLookupField();
                if (connectedLookupField) {
                    console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField APIName: ",  connectedLookupField.getAPIName());
                    console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField FieldLabel: ",  connectedLookupField.getFieldLabel());
                    console.log("Field Multiuserlookup LinkingDetails ConnectedLookupField Id: ", connectedLookupField.getId());
                }
            }

            console.log("Field Multiuserlookup RecordAccess: ", multiuserlookup.getRecordAccess());
        }
    }
    ```
    
## Notification

### Disable Notification

- Changes Note: Updated setDeleteevents method name to setDeleteEvents.

- NODEJS SDK 7.0-v3.0.0

    ```js
    let notification = new ZOHOCRMSDK.Notifications.Notification();
    notification.setChannelId("1006800211");
    let events = ["Deals.edit"];
    notification.setEvents(events);
    notification.setDeleteevents(new ZOHOCRMSDK.Choice(true));    
    ```
- NODEJS SDK 8.0-v1.0.0

    ```js
    let notification = new ZOHOCRMSDK.Notifications.Notification();
    notification.setChannelId("1006800211");
    let events = ["Deals.edit"];
    notification.setEvents(events);
    notification.setDeleteEvents(new ZOHOCRMSDK.Choice(true));    
    ```

## ZiaOrgEnrichment

### Create ZiaOrgEnrichment

- Changes Note: Updated setZiaorgenrichment and getZiaorgenrichment method names to setZiaOrgEnrichment and getZiaOrgEnrichment respectively.

- NODEJS SDK 7.0-v3.0.0
    ```js
    let request = new ZOHOCRMSDK.ZiaOrgEnrichment.BodyWrapper();
    request.setZiaorgenrichment(ziaorgenrichment);
    let paramInstance = new ZOHOCRMSDK.ParameterMap();
    await paramInstance.add(ZOHOCRMSDK.ZiaOrgEnrichment.CreateZiaOrgEnrichmentParam.MODULE, "Vendors");
    let response = await ziaOrgEnrichmentOperations.createZiaOrgEnrichment(request, paramInstance);
    if (response != null) {
        console.log("Status Code: " + response.getStatusCode());
        let responseObject = response.getObject();
        if (responseObject != null) {
            if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ActionWrapper) {
                let actionResponses = responseObject.getZiaorgenrichment();
            }
        }
    }
    ```
- NODEJS SDK 8.0-v1.0.0
    ```js
    let request = new ZOHOCRMSDK.ZiaOrgEnrichment.BodyWrapper();
    request.setZiaOrgEnrichment(ziaorgenrichment);
    let paramInstance = new ZOHOCRMSDK.ParameterMap();
    await paramInstance.add(ZOHOCRMSDK.ZiaOrgEnrichment.CreateZiaOrgEnrichmentParam.MODULE, "Vendors");
    let response = await ziaOrgEnrichmentOperations.createZiaOrgEnrichment(request, paramInstance);
    if (response != null) {
        console.log("Status Code: " + response.getStatusCode());
        let responseObject = response.getObject();
        if (responseObject != null) {
            if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ActionWrapper) {
                let actionResponses = responseObject.getZiaOrgEnrichment();
            }
        }
    }
    ```

### Get ZiaOrgEnrichment

- Changes Note: Updated getZiaorgenrichment method name to getZiaOrgEnrichment.

- NODEJS SDK 7.0-v3.0.0
    ```js
    let ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
    let response = await ziaOrgEnrichmentOperations.getZiaOrgEnrichment(ziaOrgEnrichmentId);
    let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper)
				{
					let ziaorgenrichment = responseObject.getZiaorgenrichment();
                }
            }
    ```
- NODEJS SDK 8.0-v1.0.0
    
    ```js
    let ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
    let response = await ziaOrgEnrichmentOperations.getZiaOrgEnrichment(ziaOrgEnrichmentId);
    let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper)
				{
					let ziaorgenrichment = responseObject.getZiaOrgEnrichment();
                }
            }
    ```
  
### Get ZiaOrgEnrichments

- Changes Note: Updated getZiaorgenrichment method name to getZiaOrgEnrichment.

- NODEJS SDK 7.0-v3.0.0
    ```js
    let ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
    let paramInstance = new ZOHOCRMSDK.ParameterMap();
    let response = await ziaOrgEnrichmentOperations.getZiaOrgEnrichments(paramInstance);
    let responseObject = response.getObject();
    if (responseObject != null) {
        if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper) {
            let ziaorgenrichment = responseObject.getZiaorgenrichment();
        }
    } 
    ```
- NODEJS SDK 8.0-v1.0.0
    ```js
    let ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
    let paramInstance = new ZOHOCRMSDK.ParameterMap();
    let response = await ziaOrgEnrichmentOperations.getZiaOrgEnrichments(paramInstance);
    let responseObject = response.getObject();
    if (responseObject != null) {
        if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper) {
            let ziaorgenrichment = responseObject.getZiaOrgEnrichment();
        }
    } 
   ```
  
## ZiaPeopleEnrichment

### Create ZiaPeopleEnrichment

- Changes Note : Updated setZiapeopleenrichment and getZiapeopleenrichment methods name to setZiaPeopleEnrichment and getZiaPeopleEnrichment respectively.

- NODEJS SDK 7.0-v3.0.0
    ```js
  	let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
    let request = new ZOHOCRMSDK.ZiaPeopleEnrichment.BodyWrapper();
    request.setZiapeopleenrichment(ziapeopleenrichment);
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.ZiaPeopleEnrichment.CreateZiaPeopleEnrichmentParam.MODULE, "TestSDK12");
		let response = await ziaPeopleEnrichmentOperations.createZiaPeopleEnrichment(request, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ActionWrapper) {
					let actionResponses = responseObject.getZiapeopleenrichment();
                }
            }
        } 
    ```

- NODEJS SDK 8.0-v1.0.0
    ```js
  	let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
    let request = new ZOHOCRMSDK.ZiaPeopleEnrichment.BodyWrapper();
    request.setZiaPeopleEnrichment(ziapeopleenrichment);
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.ZiaPeopleEnrichment.CreateZiaPeopleEnrichmentParam.MODULE, "TestSDK12");
		let response = await ziaPeopleEnrichmentOperations.createZiaPeopleEnrichment(request, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ActionWrapper) {
					let actionResponses = responseObject.getZiaPeopleEnrichment();
                }
            }
        } 
    ```
  
### Get ZiaPeopleEnrichment

- Changes Note : Updated getZiapeopleenrichment method name to getZiaPeopleEnrichment.

- NODEJS SDK 7.0-v3.0.0
    ```js
    let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
    let response = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichment(ziaPeopleEnrichmentId);
    let responseObject = response.getObject();
        if (responseObject != null) {
            if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseWrapper) {
                let ziapeopleenrichment = responseObject.getZiapeopleenrichment();
            }
        }
    ```

- NODEJS SDK 8.0-v1.0.0
    ```js
    let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
    let response = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichment(ziaPeopleEnrichmentId);
    let responseObject = response.getObject();
        if (responseObject != null) {
            if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseWrapper) {
                let ziapeopleenrichment = responseObject.getZiaPeopleEnrichment();
            }
        }
    ```

### Get ZiaPeopleEnrichments

- Changes Note : Updated getZiapeopleenrichment method name to getZiaPeopleEnrichment.

- NODEJS SDK 7.0-v3.0.0
    ```js
    let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
    let paramInstance = new ZOHOCRMSDK.ParameterMap();
    let response = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichments(paramInstance);
    let responseObject = response.getObject();
        if (responseObject != null) {
            if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseWrapper) {
                let ziapeopleenrichment = responseObject.getZiapeopleenrichment();
            }
        }
    ```

- NODEJS SDK 8.0-v1.0.0
    ```js
    let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
    let paramInstance = new ZOHOCRMSDK.ParameterMap();
    let response = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichments(paramInstance);
    let responseObject = response.getObject();
        if (responseObject != null) {
            if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseWrapper) {
                let ziapeopleenrichment = responseObject.getZiaPeopleEnrichment();
            }
        }
    ```
  
## FromAddresses

### Get EmailAddresses

- Changes Note: Introduced new param userId to getEmailAddresses.

- NODEJS SDK 7.0-v3.0.0
    ```js
    class FromAddresses {
        static async getEmailAddresses() {
            let sendMailOperations = new ZOHOCRMSDK.FromAddresses.FromAddressesOperations();
        }
    }
    await FromAddresses.getEmailAddresses();
    ```

- NODEJS SDK 8.0-v1.0.0

    ```js
    class FromAddresses {
        static async getEmailAddresses(userId) {
            let sendMailOperations = new ZOHOCRMSDK.FromAddresses.FromAddressesOperations(userId);
        }
    }
    let userID = 342312312n;
    await FromAddresses.getEmailAddresses(userID);
    ```

## EmailSharingDetails

### Get EmailSharingDetails

- Changes Note : Updated getEmailssharingdetails method name to getEmailsSharingDetails.

- NODEJS SDK 7.0-v3.0.0

    ```js
    let responseHandler = response.getObject();
    if (responseHandler instanceof ZOHOCRMSDK.EmailSharingDetails.ResponseWrapper) {
        let responseWrapper = responseHandler;
        let emailSharingDetails = responseWrapper.getEmailssharingdetails();
    }
    ```

- NODEJS SDK 8.0-v1.0.0

    ```js
    let responseHandler = response.getObject();
    if (responseHandler instanceof ZOHOCRMSDK.EmailSharingDetails.ResponseWrapper) {
        let responseWrapper = responseHandler;
        let emailSharingDetails = responseWrapper.getEmailsSharingDetails();
    }
    ```
  
