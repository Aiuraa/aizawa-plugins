import { logger } from '@vendetta';
import { registerCommand } from "@vendetta/commands";
import { FindByProps } from "@vendetta/metro";

/*
https://api.open.mp/docs/search?q=%s
async function getOmpDocs(query) {
	const response = await fetch(`https://api.open.mp/docs/search?q=${query}`);
	const data = await response.json();
	return ...;
}
*/

let info_cmd = [];

let Clayde = FindByProps("sendBotMessage");
let Author = FindByProps("sendMessage", "receiveMessage");

export default {
	onLoad: () => {
	    logger.log("Registering commands...");
		info_cmd = registerCommand({
			name: "ompinfo",
			displayName: "ompinfo",
			description: "Get information about function/callbacks from open.mp docs",
			displayDescription: "Get information about function/callbacks from open.mp docs",
			options: [{
				name: "term",
				displayName: "term",
				description: "The term you want to search from wiki",
				displayDescription: "The term you want to search from wiki",
				required: true,
				type: 3
			}],
			type: 1,
			applicationId: "-1",
			inputType: 1,

			execute: (args, ctx) => {
				try {
					const term = args[0].value as string;

					Author.sendMessage(ctx.channel.id, {
						content: "Hello world!"
					});
					/*
					if (term.substring(0, 2) === "On") {
						Author.sendMessage(ctx.channel.id, {
							content: `${term} is a callback!`
						}); //return await GetOmpCallbackInfo(term);
					}
					

					Author.sendMessage(ctx.channel.id, {
						content: `${term} is not a callback!`
					}); //return content: await `${term} is not a callback!`;
					*/
				}
				catch (err: any) {
					Clayde.sendBotMessage(ctx.channel.id, "I think the api went down again, damn");
				}
			}
		});
		logger.log("Success registering /ompinfo commands.");
	},
	onUnload: () => {
	    logger.log("Unload omp-wiki plugins.");
	    info_cmd();
	}
}
