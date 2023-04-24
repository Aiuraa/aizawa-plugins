(function(i,a,c,m){"use strict";async function p(o){const e=await(await fetch(`https://api.open.mp/docs/search?q=${o}`)).json();var t=`Got ${e.total} results, showing 4 links related to ${o} (took ${e.took/1e3}ms).
`,s=!1;return e.hits.forEach(function(n,u){if(!(u>=4)){if(n.title===o&&!s){t=`Show matching results (took ${e.took/1e3}ms).
> \`\`\`Title: ${n.title}
> Description: ${n.desc}\`\`\`
> Link: https://www.open.mp/${n.url}`,s=!0;return}s||(t+=`> Link: https://www.open.mp/${n.url}

`)}}),t}let r=[],l=m.findByProps("sendMessage","receiveMessage");var d={onLoad:function(){a.logger.log("Registering commands..."),r=c.registerCommand({name:"ompinfo",displayName:"ompinfo",description:"Get information about function/callbacks from open.mp docs",displayDescription:"Get information about function/callbacks from open.mp docs",options:[{name:"term",displayName:"term",description:"The term you want to search from wiki",displayDescription:"The term you want to search from wiki",required:!0,type:3}],type:1,applicationId:"-1",inputType:1,execute:async function(o,e){const t=o[0].value;await l.sendMessage(e.channel.id,{content:await p(t)})}}),a.logger.log("Success registering /ompinfo commands.")},onUnload:function(){a.logger.log("Unload omp-wiki plugins."),r()}};return i.default=d,Object.defineProperty(i,"__esModule",{value:!0}),i})({},vendetta,vendetta.commands,vendetta.metro);
