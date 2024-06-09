const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94789265022";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_00_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICA2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDkwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhR2UxcTZya24waTlaZEtBNXFDK2w1MndTcXJTTnFBOFBLMUJ2S2psQmdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg5MjY1MDIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQzZDRjJEQjBEMkFENzhCRjZBQzc0MjVEODg5NjNBOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5NTI0MDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4OTI2NTAyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzhCMkM0ODU5MjgwNkIxODk1MEIxQ0I3NEU1RDk1OTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3OTUyNDAyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkM4enN5eDFkUlRlRlFxZG5nZXJtdkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzQwZDRlOTgtYzQxMy00YzM5LWFiYzUtYjJjZmRlMWIyMDVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDEzMCxcbiAgICAgIDIxOCxcbiAgICAgIDE0MyxcbiAgICAgIDExNyxcbiAgICAgIDU1LFxuICAgICAgMTUzLFxuICAgICAgNTYsXG4gICAgICAyMDEsXG4gICAgICAyMTgsXG4gICAgICAxMCxcbiAgICAgIDE1NSxcbiAgICAgIDAsXG4gICAgICAyMjcsXG4gICAgICAxMDIsXG4gICAgICAxMDcsXG4gICAgICAxNTIsXG4gICAgICA4MSxcbiAgICAgIDE4NixcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICA3MSxcbiAgICAgIDE4MixcbiAgICAgIDI0MixcbiAgICAgIDE0MyxcbiAgICAgIDIyOSxcbiAgICAgIDE2NixcbiAgICAgIDU2LFxuICAgICAgMjA2LFxuICAgICAgNTAsXG4gICAgICA2OSxcbiAgICAgIDEyMixcbiAgICAgIDEwLFxuICAgICAgMTI1LFxuICAgICAgMTc3LFxuICAgICAgMjA3LFxuICAgICAgMzYsXG4gICAgICAxNjcsXG4gICAgICA5NCxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIloxREtSNVhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4OTI2NTAyMjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTMzNjg4MDk3NTkyODo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfmJZcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM2t2cXNGRUl1L2w3TUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhCUUNmZ1Y0VnRsVGVTSGl6Mi81Qzg3N0Yyd0ZtUXRDVUxyUlF2WlNwWFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVXdROEtDL2x2K0pSUis4TmVkRll2Tk8xSHc2K0JjdWpQa1pWbTU4N2JGUElpeEtqbm83ZU5Zc1dGYlhHRGZyUGkzYUQ4TmY1V2wrZkUvdGtHMGtKQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiODJKbWpIR3JqOE9CVFJoNWZhRlZxVVJPeGo0Q0NKK3cva0czVFBPbU9DaXF0eThCazZRYnNsaEI1ckdrWC8zMlFuTXExK1dXK21rZHdyVit4RXh5QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODkyNjUwMjI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc5NTIzOTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZFRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVkVC5qc29uIjogIntcImtleURhdGFcIjpcIm1tSFQ4aFNKM3JsL21SZTR6NGU0eUtOQTIwZEw5bkc2NmQxL0lOUGFsZWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzMzM4MzUzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3ODQxOTc1NTcxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
