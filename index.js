
//const _0x2acfe3=_0xa174;(function(_0x4f0a88,_0x43cee8){const _0x384840=_0xa174,_0x4b01e1=_0x4f0a88();while(!![]){try{const _0xaae76=parseInt(_0x384840(0x158))/0x1*(parseInt(_0x384840(0x121))/0x2)+parseInt(_0x384840(0x124))/0x3+-parseInt(_0x384840(0x146))/0x4+-parseInt(_0x384840(0x13b))/0x5*(parseInt(_0x384840(0x154))/0x6)+parseInt(_0x384840(0x15a))/0x7+parseInt(_0x384840(0x134))/0x8*(-parseInt(_0x384840(0x161))/0x9)+-parseInt(_0x384840(0x135))/0xa;if(_0xaae76===_0x43cee8)break;else _0x4b01e1['push'](_0x4b01e1['shift']());}catch(_0x1ec4a7){_0x4b01e1['push'](_0x4b01e1['shift']());}}}(_0x403e,0xb595c));import _0x32c315 from'dotenv';_0x32c315[_0x2acfe3(0x128)]();import{makeWASocket,Browsers,fetchLatestBaileysVersion,DisconnectReason,useMultiFileAuthState}from'@whiskeysockets/baileys';function _0xa174(_0x599e84,_0x276711){const _0x403ee2=_0x403e();return _0xa174=function(_0xa174e9,_0x584daf){_0xa174e9=_0xa174e9-0x121;let _0x2cbf1e=_0x403ee2[_0xa174e9];return _0x2cbf1e;},_0xa174(_0x599e84,_0x276711);}import{Handler,Callupdate,GroupUpdate}from'./data/index.js';import _0x5ec0e3 from'express';import _0x1c3174 from'pino';import _0x53c0c9 from'fs';import _0x4a6278 from'node-cache';import _0x4e279b from'path';import _0x5aed02 from'chalk';import _0x3896f3 from'moment-timezone';function _0x403e(){const _0x2d205d=['green','Critical\x20Error:','log','Connection\x20reestablished\x20after\x20restart.','error','257139CocBIB','toJSON','PORT','silent','bera\x20tech\x20bot\x20whatsapp\x20user\x20bot','demon-slayer\x20using\x20WA\x20v','#FFA500','blue','join','loadMessage','SESSION_ID','No\x20session\x20found\x20or\x20downloaded,\x20QR\x20code\x20will\x20be\x20printed\x20for\x20authentication.','safari','MODE','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','send','924564YgCWZp','url','fromMe','2059668nSwjMF','private','hex','🔒\x20Session\x20downloaded,\x20starting\x20bot.','config','session','messages.upsert','🔒\x20Session\x20file\x20found,\x20proceeding\x20without\x20QR\x20code.','key','promises','group-participants.update','floor','data','#32CD32','3.3','user','160qLTCsS','6407030wrZqbK','message','✅\x20Viewed\x20status\x20from\x20','existsSync',',\x22time\x22:\x22','creds.json','425OvSSHx','❌\x20Error\x20marking\x20status\x20as\x20viewed:','🔒\x20Session\x20Successfully\x20Loaded\x20!!','endsWith','Server\x20is\x20running\x20on\x20port\x20','call','level','bold','exit','writeFile','public','1564892OpMouo','statusCode','output','length','messages','Error\x20during\x20auto\x20reaction/status\x20viewing:','CONNECTED\x20SUCCESSFULL','stringify','get','mkdirSync','trace','split','BERA\x20TECH\x20CONNECTED\x20SUCCESSFUL','remoteJid','46830UlIAMu','string','readMessages','close','3fCoEvp','https://files.catbox.moe/ldetco.jpg','6559987VvJkAu','open'];_0x403e=function(){return _0x2d205d;};return _0x403e();}import _0x843452 from'axios';import _0x493d97 from'./config.cjs';import _0x5a16bf from'./lib/autoreact.cjs';const {emojis,doReact}=_0x5a16bf,sessionName=_0x2acfe3(0x129),app=_0x5ec0e3(),orange=_0x5aed02[_0x2acfe3(0x142)][_0x2acfe3(0x126)](_0x2acfe3(0x167)),lime=_0x5aed02[_0x2acfe3(0x142)][_0x2acfe3(0x126)](_0x2acfe3(0x131));let useQR=![],initialConnection=!![];const PORT=process['env'][_0x2acfe3(0x163)]||0xbb8,MAIN_LOGGER=_0x1c3174({'timestamp':()=>_0x2acfe3(0x139)+new Date()[_0x2acfe3(0x162)]()+'\x22'}),logger=MAIN_LOGGER['child']({});logger[_0x2acfe3(0x141)]=_0x2acfe3(0x150);const msgRetryCounterCache=new _0x4a6278(),__filename=new URL(import.meta[_0x2acfe3(0x122)])['pathname'],__dirname=_0x4e279b['dirname'](__filename),sessionDir=_0x4e279b[_0x2acfe3(0x169)](__dirname,_0x2acfe3(0x129)),credsPath=_0x4e279b['join'](sessionDir,_0x2acfe3(0x13a));!_0x53c0c9[_0x2acfe3(0x138)](sessionDir)&&_0x53c0c9[_0x2acfe3(0x14f)](sessionDir,{'recursive':!![]});async function downloadSessionData(){const _0x3d74b5=_0x2acfe3;if(!_0x493d97[_0x3d74b5(0x16b)])return console['error'](_0x3d74b5(0x16f)),![];const _0x1c2e38=_0x493d97[_0x3d74b5(0x16b)][_0x3d74b5(0x151)]('BERA-TECH$')[0x1],_0x1f94d8='https://pastebin.com/raw/'+_0x1c2e38;try{const _0x175e50=await _0x843452['get'](_0x1f94d8),_0x439e3b=typeof _0x175e50[_0x3d74b5(0x130)]===_0x3d74b5(0x155)?_0x175e50['data']:JSON[_0x3d74b5(0x14d)](_0x175e50[_0x3d74b5(0x130)]);return await _0x53c0c9[_0x3d74b5(0x12d)][_0x3d74b5(0x144)](credsPath,_0x439e3b),console[_0x3d74b5(0x15e)](_0x3d74b5(0x13d)),!![];}catch(_0xfcb206){return![];}}async function start(){const _0x101457=_0x2acfe3;try{const {state:_0x2ecb26,saveCreds:_0x2ec164}=await useMultiFileAuthState(sessionDir),{version:_0x2b5695,isLatest:_0x222cb0}=await fetchLatestBaileysVersion();console[_0x101457(0x15e)](_0x101457(0x166)+_0x2b5695[_0x101457(0x169)]('.')+',\x20isLatest:\x20'+_0x222cb0);const _0x4d7d7f=makeWASocket({'version':_0x2b5695,'logger':_0x1c3174({'level':_0x101457(0x164)}),'printQRInTerminal':useQR,'browser':['demon',_0x101457(0x16d),_0x101457(0x132)],'auth':_0x2ecb26,'getMessage':async _0x198fb4=>{const _0x5ee9ff=_0x101457;if(store){const _0x19559b=await store[_0x5ee9ff(0x16a)](_0x198fb4[_0x5ee9ff(0x153)],_0x198fb4['id']);return _0x19559b[_0x5ee9ff(0x136)]||undefined;}return{'conversation':_0x5ee9ff(0x165)};}});_0x4d7d7f['ev']['on']('connection.update',_0x4a571d=>{const _0x4144fb=_0x101457,{connection:_0x3b5cc9,lastDisconnect:_0x525d09}=_0x4a571d;if(_0x3b5cc9===_0x4144fb(0x157))_0x525d09['error']?.[_0x4144fb(0x148)]?.[_0x4144fb(0x147)]!==DisconnectReason['loggedOut']&&start();else _0x3b5cc9===_0x4144fb(0x15b)&&(initialConnection?(console['log'](_0x5aed02[_0x4144fb(0x15c)](_0x4144fb(0x152))),_0x4d7d7f['sendMessage'](_0x4d7d7f[_0x4144fb(0x133)]['id'],{'image':{'url':_0x4144fb(0x159)},'caption':'╭─────────────━┈⊷\x0a\x0a│\x20*𝖭𝖮𝖭-𝖯𝖱𝖤𝖥𝖨𝖷-𝖷𝖬𝖣*\x0a\x0a╰─────────────━┈⊷\x0a\x0a╭─────────────━┈⊷\x0a\x0a│\x20*ʙᴏᴛ\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ\x20sᴜᴄᴄᴇssғᴜʟʟʏ*\x0a\x0a│\x20⚠️\x20Join\x20our\x20support\x20group\x20to\x20avoid\x20disconnection:\x0a\x0a│🔗\x20https://chat.whatsapp.com/JLFAlCXdXMh8lT4sxHplvG\x0a\x0a│\x0a\x0a╰─────────────━┈⊷\x0a\x0a>\x20*ʀᴇɢᴀʀᴅs\x20ʙᴇʀᴀ\x20ᴛᴇᴄʜ*'}),initialConnection=![]):console[_0x4144fb(0x15e)](_0x5aed02[_0x4144fb(0x168)](_0x4144fb(0x15f))));}),_0x4d7d7f['ev']['on']('creds.update',_0x2ec164),_0x4d7d7f['ev']['on'](_0x101457(0x12a),async _0x2ee530=>await Handler(_0x2ee530,_0x4d7d7f,logger)),_0x4d7d7f['ev']['on'](_0x101457(0x140),async _0x57d17e=>await Callupdate(_0x57d17e,_0x4d7d7f)),_0x4d7d7f['ev']['on'](_0x101457(0x12e),async _0x364236=>await GroupUpdate(_0x4d7d7f,_0x364236));if(_0x493d97['MODE']===_0x101457(0x145))_0x4d7d7f[_0x101457(0x145)]=!![];else _0x493d97[_0x101457(0x16e)]===_0x101457(0x125)&&(_0x4d7d7f['public']=![]);_0x4d7d7f['ev']['on'](_0x101457(0x12a),async _0x475977=>{const _0x109367=_0x101457;try{const _0x318509=_0x475977[_0x109367(0x14a)][0x0];if(!_0x318509[_0x109367(0x12c)][_0x109367(0x123)]&&_0x493d97['AUTO_REACT']){const _0x29d91a=emojis[Math[_0x109367(0x12f)](Math['random']()*emojis[_0x109367(0x149)])];await doReact(_0x29d91a,_0x318509,_0x4d7d7f);}if(_0x318509[_0x109367(0x12c)][_0x109367(0x153)][_0x109367(0x13e)]('@broadcast')&&_0x318509[_0x109367(0x136)]?.['imageMessage'])try{await _0x4d7d7f[_0x109367(0x156)]([_0x318509[_0x109367(0x12c)]]),console[_0x109367(0x15e)](_0x5aed02['green'](_0x109367(0x137)+(_0x318509[_0x109367(0x12c)]['participant']||_0x318509[_0x109367(0x12c)][_0x109367(0x153)])));}catch(_0x558b1f){console['error'](_0x109367(0x13c),_0x558b1f);}}catch(_0x160b99){console['error'](_0x109367(0x14b),_0x160b99);}});}catch(_0x1b3188){console[_0x101457(0x160)](_0x101457(0x15d),_0x1b3188),process[_0x101457(0x143)](0x1);}}async function init(){const _0x1fcd48=_0x2acfe3;if(_0x53c0c9[_0x1fcd48(0x138)](credsPath))console[_0x1fcd48(0x15e)](_0x1fcd48(0x12b)),await start();else{const _0x560b70=await downloadSessionData();_0x560b70?(console[_0x1fcd48(0x15e)](_0x1fcd48(0x127)),await start()):(console[_0x1fcd48(0x15e)](_0x1fcd48(0x16c)),useQR=!![],await start());}}init(),app[_0x2acfe3(0x14e)]('/',(_0x16224c,_0x67251)=>{const _0x456132=_0x2acfe3;_0x67251[_0x456132(0x170)](_0x456132(0x14c));}),app['listen'](PORT,()=>{const _0x266442=_0x2acfe3;console[_0x266442(0x15e)](_0x266442(0x13f)+PORT);});

//const _0x4167f3=_0x4790;(function(_0x1a5028,_0x5e2c0c){const _0x201b58=_0x4790,_0x47c366=_0x1a5028();while(!![]){try{const _0x408094=-parseInt(_0x201b58(0xc4))/0x1+-parseInt(_0x201b58(0x9e))/0x2+-parseInt(_0x201b58(0xa1))/0x3*(-parseInt(_0x201b58(0xb3))/0x4)+-parseInt(_0x201b58(0xdf))/0x5+-parseInt(_0x201b58(0xb1))/0x6+-parseInt(_0x201b58(0x9d))/0x7+parseInt(_0x201b58(0xd4))/0x8*(parseInt(_0x201b58(0xa3))/0x9);if(_0x408094===_0x5e2c0c)break;else _0x47c366['push'](_0x47c366['shift']());}catch(_0x39edd8){_0x47c366['push'](_0x47c366['shift']());}}}(_0x5e27,0x31579));function hi(){const _0x48a0e8=_0x4790;console[_0x48a0e8(0xd3)](_0x48a0e8(0xe8));}hi();import _0x33fd40 from'dotenv';_0x33fd40[_0x4167f3(0x9b)]();import{makeWASocket,Browsers,fetchLatestBaileysVersion,DisconnectReason,useMultiFileAuthState}from'@whiskeysockets/baileys';import{Handler,Callupdate,GroupUpdate}from'./data/index.js';import _0x2a3d0b from'express';import _0x512dfd from'pino';import _0x2a9ef4 from'fs';import _0x2d74f1 from'node-cache';function _0x5e27(){const _0x546cf0=['🔒\x20Session\x20Successfully\x20Loaded\x20!!','call','bold','❌\x20Error\x20marking\x20status\x20as\x20viewed:','No\x20session\x20found\x20or\x20downloaded,\x20QR\x20code\x20will\x20be\x20printed\x20for\x20authentication.','1373166hPMeet','Server\x20is\x20running\x20on\x20port\x20','8876OFoIgG','get','session','pathname','hex','group-participants.update','#FFA500','split','creds.update','toJSON','silent','exit','stringify','https://files.catbox.moe/ldetco.jpg','output','Connection\x20reestablished\x20after\x20restart.','remoteJid','201266kpAhQC','length','writeFile','promises','creds.json',',\x22time\x22:\x22','#32CD32','participant','public','🔒\x20Session\x20file\x20found,\x20proceeding\x20without\x20QR\x20code.','endsWith','https://pastebin.com/raw/','connection.update','existsSync','messages.upsert','log','4762168mawyYZ','statusCode','level','send','SESSION_ID','mkdirSync','private','readMessages','@broadcast','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','bera\x20tech\x20bot\x20whatsapp\x20user\x20bot','1819875HWZkBm','data','✅\x20Viewed\x20status\x20from\x20','user','BERA\x20TECH\x20CONNECTED\x20SUCCESSFULLY','floor','Error\x20during\x20auto\x20reaction/status\x20viewing:','green','key','Hello\x20World!','BERA-TECH$','demon-slayer\x20using\x20WA\x20v','3.3','join','demon','config','random','757792oObdMw','735784BnnODV','error','sendMessage','381SbufAP','loadMessage','18XPoHNG','loggedOut','url','CONNECTED\x20SUCCESSFULLY','safari','fromMe','listen','imageMessage','MODE'];_0x5e27=function(){return _0x546cf0;};return _0x5e27();}import _0x170009 from'path';import _0xecc4ae from'chalk';import _0x2f1c47 from'moment-timezone';import _0x1d190f from'axios';function _0x4790(_0x4d0b65,_0xf61259){const _0x5e27bd=_0x5e27();return _0x4790=function(_0x479082,_0x2929f8){_0x479082=_0x479082-0x9b;let _0x5d42b0=_0x5e27bd[_0x479082];return _0x5d42b0;},_0x4790(_0x4d0b65,_0xf61259);}import _0x16bb70 from'./config.cjs';import _0x5470ea from'./lib/autoreact.cjs';import _0x189812 from'./plugins/gptPlugin.js';const {emojis,doReact}=_0x5470ea,sessionName=_0x4167f3(0xb5),app=_0x2a3d0b(),orange=_0xecc4ae['bold'][_0x4167f3(0xb7)](_0x4167f3(0xb9)),lime=_0xecc4ae[_0x4167f3(0xae)][_0x4167f3(0xb7)](_0x4167f3(0xca));let useQR=![],initialConnection=!![];const PORT=process['env']['PORT']||0xbb8,MAIN_LOGGER=_0x512dfd({'timestamp':()=>_0x4167f3(0xc9)+new Date()[_0x4167f3(0xbc)]()+'\x22'}),logger=MAIN_LOGGER['child']({});logger[_0x4167f3(0xd6)]='trace';const msgRetryCounterCache=new _0x2d74f1(),__filename=new URL(import.meta[_0x4167f3(0xa5)])[_0x4167f3(0xb6)],__dirname=_0x170009['dirname'](__filename),sessionDir=_0x170009[_0x4167f3(0xec)](__dirname,_0x4167f3(0xb5)),credsPath=_0x170009[_0x4167f3(0xec)](sessionDir,_0x4167f3(0xc8));!_0x2a9ef4['existsSync'](sessionDir)&&_0x2a9ef4[_0x4167f3(0xd9)](sessionDir,{'recursive':!![]});async function downloadSessionData(){const _0x278ff5=_0x4167f3;if(!_0x16bb70[_0x278ff5(0xd8)])return console[_0x278ff5(0x9f)](_0x278ff5(0xdd)),![];const _0x4fff76=_0x16bb70[_0x278ff5(0xd8)][_0x278ff5(0xba)](_0x278ff5(0xe9))[0x1],_0x52b3d5=_0x278ff5(0xcf)+_0x4fff76;try{const _0x26d02e=await _0x1d190f['get'](_0x52b3d5),_0x49746f=typeof _0x26d02e['data']==='string'?_0x26d02e[_0x278ff5(0xe0)]:JSON[_0x278ff5(0xbf)](_0x26d02e[_0x278ff5(0xe0)]);return await _0x2a9ef4[_0x278ff5(0xc7)][_0x278ff5(0xc6)](credsPath,_0x49746f),console['log'](_0x278ff5(0xac)),!![];}catch(_0x33cdbe){return![];}}async function start(){const _0x2c079d=_0x4167f3;try{const {state:_0x24f93b,saveCreds:_0x3299d6}=await useMultiFileAuthState(sessionDir),{version:_0x4e5ffc,isLatest:_0x137fbd}=await fetchLatestBaileysVersion();console['log'](_0x2c079d(0xea)+_0x4e5ffc[_0x2c079d(0xec)]('.')+',\x20isLatest:\x20'+_0x137fbd);const _0x3583ee=makeWASocket({'version':_0x4e5ffc,'logger':_0x512dfd({'level':_0x2c079d(0xbd)}),'printQRInTerminal':useQR,'browser':[_0x2c079d(0xed),_0x2c079d(0xa7),_0x2c079d(0xeb)],'auth':_0x24f93b,'getMessage':async _0x26e93d=>{const _0x4bcd3b=_0x2c079d;if(store){const _0x1acf8d=await store[_0x4bcd3b(0xa2)](_0x26e93d[_0x4bcd3b(0xc3)],_0x26e93d['id']);return _0x1acf8d['message']||undefined;}return{'conversation':_0x4bcd3b(0xde)};}});_0x3583ee['ev']['on'](_0x2c079d(0xd0),_0x22d9ee=>{const _0x396126=_0x2c079d,{connection:_0x173aa4,lastDisconnect:_0x7e8998}=_0x22d9ee;if(_0x173aa4==='close')_0x7e8998['error']?.[_0x396126(0xc1)]?.[_0x396126(0xd5)]!==DisconnectReason[_0x396126(0xa4)]&&start();else _0x173aa4==='open'&&(initialConnection?(console[_0x396126(0xd3)](_0xecc4ae[_0x396126(0xe6)](_0x396126(0xe3))),_0x3583ee[_0x396126(0xa0)](_0x3583ee[_0x396126(0xe2)]['id'],{'image':{'url':_0x396126(0xc0)},'caption':'╭─────────────━┈⊷\x0a\x0a│\x20*𝖭𝖮𝖭-𝖯𝖱𝖤𝖥𝖨𝖷-𝖷𝖬𝖣*\x0a\x0a╰─────────────━┈⊷\x0a\x0a╭─────────────━┈⊷\x0a\x0a│\x20*ʙᴏᴛ\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ\x20sᴜᴄᴄᴇssғᴜʟʟʏ*\x0a\x0a│\x20⚠️\x20Join\x20our\x20support\x20group\x20to\x20avoid\x20disconnection:\x0a\x0a│🔗\x20https://chat.whatsapp.com/JLFAlCXdXMh8lT4sxHplvG\x0a\x0a│\x0a\x0a╰─────────────━┈⊷\x0a\x0a>\x20*ʀᴇɢᴀʀᴅs\x20ʙᴇʀᴀ\x20ᴛᴇᴄʜ*'}),initialConnection=![]):console[_0x396126(0xd3)](_0xecc4ae['blue'](_0x396126(0xc2))));}),_0x3583ee['ev']['on'](_0x2c079d(0xbb),_0x3299d6),_0x3583ee['ev']['on']('messages.upsert',async _0x50247e=>{await Handler(_0x50247e,_0x3583ee,logger),await _0x189812(_0x50247e,_0x3583ee);}),_0x3583ee['ev']['on'](_0x2c079d(0xad),async _0x4b46=>await Callupdate(_0x4b46,_0x3583ee)),_0x3583ee['ev']['on'](_0x2c079d(0xb8),async _0x3bf2f7=>await GroupUpdate(_0x3583ee,_0x3bf2f7));if(_0x16bb70[_0x2c079d(0xab)]===_0x2c079d(0xcc))_0x3583ee[_0x2c079d(0xcc)]=!![];else _0x16bb70[_0x2c079d(0xab)]===_0x2c079d(0xda)&&(_0x3583ee['public']=![]);_0x3583ee['ev']['on'](_0x2c079d(0xd2),async _0x1bd1ff=>{const _0x1ec964=_0x2c079d;try{const _0x220804=_0x1bd1ff['messages'][0x0];if(!_0x220804['key'][_0x1ec964(0xa8)]&&_0x16bb70['AUTO_REACT']){const _0x438457=emojis[Math[_0x1ec964(0xe4)](Math[_0x1ec964(0x9c)]()*emojis[_0x1ec964(0xc5)])];await doReact(_0x438457,_0x220804,_0x3583ee);}if(_0x220804[_0x1ec964(0xe7)]['remoteJid'][_0x1ec964(0xce)](_0x1ec964(0xdc))&&_0x220804['message']?.[_0x1ec964(0xaa)])try{await _0x3583ee[_0x1ec964(0xdb)]([_0x220804['key']]),console[_0x1ec964(0xd3)](_0xecc4ae[_0x1ec964(0xe6)](_0x1ec964(0xe1)+(_0x220804[_0x1ec964(0xe7)][_0x1ec964(0xcb)]||_0x220804[_0x1ec964(0xe7)][_0x1ec964(0xc3)])));}catch(_0x38894d){console[_0x1ec964(0x9f)](_0x1ec964(0xaf),_0x38894d);}}catch(_0x22d736){console[_0x1ec964(0x9f)](_0x1ec964(0xe5),_0x22d736);}});}catch(_0x3eac9c){console[_0x2c079d(0x9f)]('Critical\x20Error:',_0x3eac9c),process[_0x2c079d(0xbe)](0x1);}}async function init(){const _0x50879c=_0x4167f3;if(_0x2a9ef4[_0x50879c(0xd1)](credsPath))console[_0x50879c(0xd3)](_0x50879c(0xcd)),await start();else{const _0x59dd64=await downloadSessionData();_0x59dd64?(console['log']('🔒\x20Session\x20downloaded,\x20starting\x20bot.'),await start()):(console['log'](_0x50879c(0xb0)),useQR=!![],await start());}}init(),app[_0x4167f3(0xb4)]('/',(_0x2f799b,_0x5ec918)=>{const _0x5e36c0=_0x4167f3;_0x5ec918[_0x5e36c0(0xd7)](_0x5e36c0(0xa6));}),app[_0x4167f3(0xa9)](PORT,()=>{const _0x271963=_0x4167f3;console['log'](_0x271963(0xb2)+PORT);});












import dotenv from 'dotenv';
dotenv.config();

import {
    makeWASocket,
    Browsers,
    fetchLatestBaileysVersion,
    DisconnectReason,
    useMultiFileAuthState,
} from '@whiskeysockets/baileys';
import { Handler, Callupdate, GroupUpdate } from './data/index.js';
import express from 'express';
import pino from 'pino';
import fs from 'fs';
import NodeCache from 'node-cache';
import path from 'path';
import chalk from 'chalk';
import moment from 'moment-timezone';
import axios from 'axios';
import config from './config.cjs';
import pkg from './lib/autoreact.cjs';
import gptPlugin from './plugins/gptPlugin.js';
import lyricsPlugin from './plugins/lyricsPlugin.js';  // ✅ Import lyrics plugin

const { emojis, doReact } = pkg;

const sessionName = "session";
const app = express();
const orange = chalk.bold.hex("#FFA500");
const lime = chalk.bold.hex("#32CD32");
let useQR = false;
let initialConnection = true;
const PORT = process.env.PORT || 3000;

const MAIN_LOGGER = pino({
    timestamp: () => `,"time":"${new Date().toJSON()}"`
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";

const msgRetryCounterCache = new NodeCache();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir, { recursive: true });
}

async function downloadSessionData() {
    if (!config.SESSION_ID) {
        console.error('Please add your session to SESSION_ID env !!');
        return false;
    }
    const sessdata = config.SESSION_ID.split("BERA-TECH$")[1];
    const url = `https://pastebin.com/raw/${sessdata}`;
    try {
        const response = await axios.get(url);
        const data = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
        await fs.promises.writeFile(credsPath, data);
        console.log("🔒 Session Successfully Loaded !!");
        return true;
    } catch (error) {
        return false;
    }
}

async function start() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log(`demon-slayer using WA v${version.join('.')}, isLatest: ${isLatest}`);
        
        const Matrix = makeWASocket({
            version,
            logger: pino({ level: 'silent' }),
            printQRInTerminal: useQR,
            browser: ["demon", "safari", "3.3"],
            auth: state,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id);
                    return msg.message || undefined;
                }
                return { conversation: "bera tech bot whatsapp user bot" };
            }
        });

        Matrix.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                if (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                    start();
                }
            } else if (connection === 'open') {
                if (initialConnection) {
                    console.log(chalk.green("BERA TECH CONNECTED SUCCESSFULLY"));
                    Matrix.sendMessage(Matrix.user.id, { 
                        image: { url: "https://files.catbox.moe/ldetco.jpg" }, 
                        caption: `╭─────────────━┈⊷
│ *𝖭𝖮𝖭-𝖯𝖱𝖤𝖥𝖨𝖷-𝖷𝖬𝖣*
╰─────────────━┈⊷

╭─────────────━┈⊷
│ *ʙᴏᴛ ᴄᴏɴɴᴇᴄᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ*
│ ⚠️ Join our support group to avoid disconnection:
│🔗 https://chat.whatsapp.com/JLFAlCXdXMh8lT4sxHplvG
│
╰─────────────━┈⊷

> *ʀᴇɢᴀʀᴅs ʙᴇʀᴀ ᴛᴇᴄʜ*`
                    });
                    initialConnection = false;
                } else {
                    console.log(chalk.blue("Connection reestablished after restart."));
                }
            }
        });

        Matrix.ev.on('creds.update', saveCreds);

        Matrix.ev.on("messages.upsert", async (chatUpdate) => {
            await Handler(chatUpdate, Matrix, logger);
            await gptPlugin(chatUpdate, Matrix);  
            await lyricsPlugin(chatUpdate, Matrix);  // ✅ Call lyrics plugin
        });

        Matrix.ev.on("call", async (json) => await Callupdate(json, Matrix));
        Matrix.ev.on("group-participants.update", async (messag) => await GroupUpdate(Matrix, messag));

        if (config.MODE === "public") {
            Matrix.public = true;
        } else if (config.MODE === "private") {
            Matrix.public = false;
        }

        Matrix.ev.on('messages.upsert', async (chatUpdate) => {
            try {
                const mek = chatUpdate.messages[0];

                if (!mek.key.fromMe && config.AUTO_REACT) {
                    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                    await doReact(randomEmoji, mek, Matrix);
                }

                if (mek.key.remoteJid.endsWith('@broadcast') && mek.message?.imageMessage) {
                    try {
                        await Matrix.readMessages([mek.key]);
                        console.log(chalk.green(`✅ Viewed status from ${mek.key.participant || mek.key.remoteJid}`));
                    } catch (error) {
                        console.error('❌ Error marking status as viewed:', error);
                    }
                }
                
            } catch (err) {
                console.error('Error during auto reaction/status viewing:', err);
            }
        });

    } catch (error) {
        console.error('Critical Error:', error);
        process.exit(1);
    }
}

async function init() {
    if (fs.existsSync(credsPath)) {
        console.log("🔒 Session file found, proceeding without QR code.");
        await start();
    } else {
        const sessionDownloaded = await downloadSessionData();
        if (sessionDownloaded) {
            console.log("🔒 Session downloaded, starting bot.");
            await start();
        } else {
            console.log("No session found or downloaded, QR code will be printed for authentication.");
            useQR = true;
            await start();
        }
    }
}

init();

app.get('/', (req, res) => {
    res.send('CONNECTED SUCCESSFULLY');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
