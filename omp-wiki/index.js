(function(n,s,c,m){"use strict";async function p(o){const e=await(await fetch(`https://api.open.mp/docs/search?q=${o}`)).json();var t=`Got ${e.total} results, showing lists of related to ${o} (took ${e.took/1e3}ms).
`,a=!1;return e.hits.forEach(function(i,u){if(!(u>=4)){if(i.title===o&&!a){t=`Show matching results (took ${e.took/1e3}ms).
> \`\`\`Title: ${i.title}
> Description: ${i.desc}\`\`\`
> Link: https://www.open.mp/${i.url}`,a=!0;return}a||(t+=`> Link: https://www.open.mp/${i.url}

`)}}),t}let r=[],l=m.findByProps("sendMessage","receiveMessage");var d={onLoad:function(){s.logger.log("Registering commands..."),r=c.registerCommand({name:"ompinfo",displayName:"ompinfo",description:"Get information about function/callbacks from open.mp docs",displayDescription:"Get information about function/callbacks from open.mp docs",options:[{name:"term",displayName:"term",description:"The term you want to search from wiki",displayDescription:"The term you want to search from wiki",required:!0,type:3}],type:1,applicationId:"-1",inputType:1,execute:async function(o,e){const t=o[0].value;await l.sendMessage(e.channel.id,{content:await p(t)})}}),s.logger.log("Success registering /ompinfo commands.")},onUnload:function(){s.logger.log("Unload omp-wiki plugins."),r()}};return n.default=d,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta,vendetta.commands,vendetta.metro);
