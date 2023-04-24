import { logger } from '@vendetta';
import { registerCommand } from "@vendetta/commands";
import { findByProps } from "@vendetta/metro";

async function ParseDocs(query) {
	const response = await fetch(`https://api.open.mp/docs/search?q=${query}`);
	const data = await response.json();
	
	var parsed = `Got ${data.total} results, took ${data.took / 1000}ms.\n`;

	data.hits.forEach((el, idx) => {
		if (idx >= 4) return;
		parsed += `> \`\`\`Title: ${el.title}\n> Description: ${el.desc}\`\`\`\n> Link: https://open.mp/${el.url}\n\n`;
		
	});

	return parsed;
}

let info_cmd = [];
let Author = findByProps("sendMessage", "receiveMessage");

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

			execute: async (args, ctx) => {
				const term = args[0].value as string;

				await Author.sendMessage(ctx.channel.id, {
					content: await ParseDocs(term)
				});
			}
		});
		logger.log("Success registering /ompinfo commands.");
	},
	onUnload: () => {
	    logger.log("Unload omp-wiki plugins.");
	    info_cmd();
	}
}
