import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";
class GetCurrencies {
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

    static async getCurrencies() {
        let currenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();
        //Call getCurrencies method
        let response = await currenciesOperations.getCurrencies();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Currencies.ResponseWrapper) {
                    let currencies = responseObject.getCurrencies();
                    currencies.forEach(currency => {
                        console.log("Currency Symbol: " + currency.getSymbol());
                        console.log("Currency CreatedTime: " + currency.getCreatedTime());
                        console.log("Currency IsActive: " + currency.getIsActive().toString());
                        console.log("Currency ExchangeRate: " + currency.getExchangeRate());
                        let format = currency.getFormat();
                        if (format != null) {
                            console.log("Currency Format DecimalSeparator: " + format.getDecimalSeparator().getValue());
                            console.log("Currency Format ThousandSeparator: " + format.getThousandSeparator().getValue());
                            console.log("Currency Format DecimalPlaces: " + format.getDecimalPlaces().getValue());
                        }
                        let createdBy = currency.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Currency CreatedBy User-Name: " + createdBy.getName());
                            console.log("Currency CreatedBy User-ID: " + createdBy.getId());
                        }
                        console.log("Currency PrefixSymbol: " + currency.getPrefixSymbol().toString());
                        console.log("Currency IsBase: " + currency.getIsBase().toString());
                        console.log("Currency ModifiedTime: " + currency.getModifiedTime());
                        console.log("Currency Name: " + currency.getName());
                        let modifiedBy = currency.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Currency ModifiedBy User-Name: " + modifiedBy.getName());
                            console.log("Currency ModifiedBy User-ID: " + modifiedBy.getId());
                        }
                        console.log("Currency Id: " + currency.getId());
                        console.log("Currency IsoCode: " + currency.getIsoCode());
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
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
}
await GetCurrencies.initialize();
await GetCurrencies.getCurrencies();