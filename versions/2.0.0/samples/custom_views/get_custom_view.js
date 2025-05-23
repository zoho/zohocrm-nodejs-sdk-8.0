import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class GetCustomView {
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

    static async getCustomView(moduleAPIName, customViewId) {
        let customViewsOperations = new ZOHOCRMSDK.CustomViews.CustomViewsOperations();
        let paraminstance = new ZOHOCRMSDK.ParameterMap();
        await paraminstance.add(ZOHOCRMSDK.CustomViews.GetCustomViewParam.MODULE, moduleAPIName);
        let response = await customViewsOperations.getCustomView(customViewId, paraminstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.CustomViews.ResponseWrapper) {
                    let customViews = responseObject.getCustomViews();
                    for (let index = 0; index < customViews.length; index++) {
                        let customView = customViews[index];
                        console.log("CustomView ID: " + customView.getId());
                        console.log("CustomView Name: " + customView.getName());
                        console.log("CustomView DisplayValue: " + customView.getDisplayValue());
                        console.log("CustomView AccessType: " + customView.getAccessType());
                        let criteria = customView.getCriteria();
                        if (criteria != null) {
                            await this.printCriteria(criteria);
                        }
                        console.log("CustomView SystemName: " + customView.getSystemName());
                        console.log("CustomView SortBy: " + customView.getSortBy());
                        let createdBy = customView.getCreatedBy();
                        if (createdBy != null) {
                            console.log("CustomView Created By User-Name: " + createdBy.getName());
                            console.log("CustomView Created By User-ID: " + createdBy.getId());
                        }
                        let sharedToArray = customView.getSharedTo();
                        if (sharedToArray != null) {
                            sharedToArray.forEach(sharedTo => {
                                console.log("CustomView sharedTo Name: " + sharedTo.getName());
                                console.log("CustomView sharedTo Id: " + sharedTo.getId());
                                console.log("CustomView sharedTo Type: " + sharedTo.getType());
                                console.log("CustomView sharedTo Subordinates: " + sharedTo.getSubordinates());
                            });
                        }
                        console.log("CustomView Default: " + customView.getDefault().toString());
                        console.log("CustomView ModifiedTime: " + customView.getModifiedTime());
                        console.log("CustomView SystemDefined: " + customView.getSystemDefined().toString());
                        let modifiedBy = customView.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("CustomView Modified By User-Name: " + modifiedBy.getName());
                            console.log("CustomView Modified By User-ID: " + modifiedBy.getId());
                        }
                        let fields = customView.getFields();
                        if (fields != null) {
                            fields.forEach(field => {
                                console.log("CustomView Fields APIName: " + field.getAPIName());
                                console.log("CustomView Fields Id: " + field.getId());
                            });
                        }
                        console.log("CustomView Category: " + customView.getCategory());
                        console.log("CustomView LastAccessedTime: " + customView.getLastAccessedTime());
                        if (customView.getFavorite() != null) {
                            console.log("CustomView Favorite: " + customView.getFavorite().toString());
                        }
                        if (customView.getSortOrder() != null) {
                            console.log("CustomView SortOrder: " + customView.getSortOrder().toString());
                        }
                    }
                    let info = responseObject.getInfo();
                    if (info != null) {
                        let translation = info.getTranslation();
                        if (translation != null) {
                            console.log("Translation details");
                            console.log("PublicViews: " + translation.getPublicViews());
                            console.log("OtherUsersViews: " + translation.getOtherUsersViews());
                            console.log("SharedWithMe: " + translation.getSharedWithMe());
                            console.log("CreatedByMe: " + translation.getCreatedByMe());
                        }
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.CustomViews.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
    static async printCriteria(criteria) {
        let field = criteria.getField();
        if (field != null) {
            console.log("Bulkread Query Criteria Field Id: " + field.getId());
            console.log("Bulkread Query Criteria Field APIName: " + field.getAPIName());
        }
        if (criteria.getComparator() != null) {
            console.log("BulkRead Criteria Comparator: " + criteria.getComparator());
        }
        if (criteria.getValue() != null) {
            console.log("BulkRead Criteria Value: " + criteria.getValue().toString());
        }
        let criteriaGroup = criteria.getGroup();
        if (criteriaGroup != null) {
            criteriaGroup.forEach(eachCriteria => {
                this.printCriteria(eachCriteria);
            });
        }
        if (criteria.getGroupOperator() != null) {
            console.log("BulkRead Criteria Group Operator: " + criteria.getGroupOperator());
        }
    }
}
await GetCustomView.initialize();
let moduleAPIName = "leads";
let customViewId = 665390029342n;
await GetCustomView.getCustomView(moduleAPIName, customViewId);