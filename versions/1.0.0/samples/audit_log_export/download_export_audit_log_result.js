import path from "path";
import fs from "fs";
import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-8.0";

class DownloadExportAuditLogResult {
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

	static async downloadExportAuditLogResult(downloadUrl, destinationFolder) {
		let auditLogExportOperations = new ZOHOCRMSDK.AuditLogExport.AuditLogExportOperations();
		let response = await auditLogExportOperations.downloadExportAuditLogResult(downloadUrl);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = await response.getObject();
			if (responseObject instanceof ZOHOCRMSDK.AuditLogExport.FileBodyWrapper) {
				let streamWrapper = responseObject.getFile();
				//Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
				let fileName = path.join(destinationFolder, streamWrapper.getName());
				let readStream = streamWrapper.getStream();
				//Write the stream to the destination file.
				fs.writeFileSync(fileName, readStream);
			}
			else if (responseObject instanceof ZOHOCRMSDK.AuditLogExport.APIException) {
				console.log("Status: " + responseObject.getStatus());
				console.log("Code: " + responseObject.getCode());
				console.log("Details");
				let details = responseObject.getDetails();
				if (details != null) {
					Array.from(details.keys()).forEach(key => {
						console.log(key + ": " + details.get(key));
					});
				}
				console.log("X-error: " + responseObject.getXError());
				console.log("Message: " + responseObject.getMessage());
				console.log("Info: " + responseObject.getInfo());
			}
		}
	}
}

await DownloadExportAuditLogResult.initialize();
let downloadUrl = "https://download-accl.zoho.com/v2/crm/zzz/auditlog/34770002/AuditLog.csv";
let destinationFolder = "/Users/file";
await DownloadExportAuditLogResult.downloadExportAuditLogResult(downloadUrl, destinationFolder);
