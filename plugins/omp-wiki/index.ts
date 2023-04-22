import { logger } from '@vendetta';
import { registerCommand } from "@vendetta/commands";

/*
//https://api.open.mp/docs/search?q=%s
async function getOmpDocs(query) {
	const response = await fetch(`https://api.open.mp/docs/search?q=${query}`);
	const data = await response.json();
	return ...;
}
*/
let info_cmd = [];

export default {
	onLoad: () => {
	    logger.log("Registering commands...");
		info_cmd = registerCommand({
			name: "ompinfo",
			displayName: "ompinfo",
			description: "Get information about function/callbacks from open.mp docs",
			displayDescription: "Get information about function/callbacks from open.mp docs",
			type: 1,
			applicationId: "-1",
			inputType: 1,
			execute: "Hello World!"
		})
		logger.log("Success registering /ompinfo commands.");
	},
	onUnload: () => {
	    logger.log("Unload omp-wiki plugins.");
	    info_cmd();
	},
	settings: Settings,
}
