(function(i,a,r,c){"use strict";async function m(o){const e=await(await fetch(`https://api.open.mp/docs/search?q=${o}`)).json();var t=`Got ${e.total} results, showing 4 links related to ${o} (took ${e.took/1e3}ms).
`,d=!1;return e.hits.forEach(function(n,u){if(!(u>=4)){if(n.title===o&&!d){t=`Show matching results (took ${e.took/1e3}ms).
> \`\`\`Title: ${n.title}
> Description: ${n.desc}\`\`\`
> Link: https://www.open.mp/${n.url}`;return}t+=`> Link: https://open.mp/${n.url}

`}}),t}let s=[],p=c.findByProps("sendMessage","receiveMessage");var l={onLoad:function(){a.logger.log("Registering commands..."),s=r.registerCommand({name:"ompinfo",displayName:"ompinfo",description:"Get information about function/callbacks from open.mp docs",displayDescription:"Get information about function/callbacks from open.mp docs",options:[{name:"term",displayName:"term",description:"The term you want to search from wiki",displayDescription:"The term you want to search from wiki",required:!0,type:3}],type:1,applicationId:"-1",inputType:1,execute:async function(o,e){const t=o[0].value;await p.sendMessage(e.channel.id,{content:await m(t)})}}),a.logger.log("Success registering /ompinfo commands.")},onUnload:function(){a.logger.log("Unload omp-wiki plugins."),s()}};return i.default=l,Object.defineProperty(i,"__esModule",{value:!0}),i})({},vendetta,vendetta.commands,vendetta.metro);
