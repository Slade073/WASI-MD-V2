//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "South Africa,Eastern Cape.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/South Africa";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "27736267768";
global.owner = process.env.OWNER_NUMBER || "27736267768";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0g4enB5MnNkcE9hVXhiSUZMWW53K1h4T2lzdmxrSk53cHo2QVBtcjFWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRitNK1Jpa0pJMm83MFIwaHVqUEdZTUt1RkhPMlNnRFBST0xFdlNQbmFRbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQjhVU0NiVGlONWdGREg4YS9nblFMVk9JdEg1M3ZoNStCYUszU3RuZ1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGR2pmN0NhNnYwL2xsazJGU1kzK0hvQU0yRDIvMTN4aG5acmVkaUxxc0M0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVLWWxCLzJ5OFRUNjFwaHJUaGxPOW5LMkRqN3FKTS95NkdjUGJVK2cyMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhWdHRndC8xYU5sV2l5dVVEMENoRldoaVJtWnZtRmNJd2l1a09MUWpyeTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZ4RllJMEptT3lPOU9yRmg4UnoyRW1JS0IzRVd5bWkwNSsvU2pvNDEwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiengzL01EQ1lYU0lhUG92YitzajN1ZjlNQUJnQk5VdklKMVRtb0RPSDR4ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNUM1ZxcHZmUlNjZEVWcHBLTnNvZEhxSGI1bjY1akE4OC9OUGxueWZHU1g0ODBEVWlmbXd6U0pXVzhUUURpSUhaeit6K05HMy9xTzRTckd1c2dsbEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6IjA4VERWMjdNbFZxS2Jtbjhtcld0cTZmU0xOWldQU1JVTmdZN0t5d1NVaGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxOMWlRNkpZUzZXRmp2aXRkYW1hdkEiLCJwaG9uZUlkIjoiMTAxMDU1NGEtYmFjZC00NjFjLWFmMGQtMWFjNWUwYTE1NTgyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhmdG8zK1l2VnNWdVFyYlpuS1FxazhRc0htRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPd1BkSlMrUVpuNVI0MktYYkM3TFloc2JYVGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFQxTlRTNEMiLCJtZSI6eyJpZCI6IjI3NzM1OTQwMTAyOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCUU2xhZGXigJQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTMDBmQURFTW5paXJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im16Z3M3bTR4L0xIZXRQRnBWdFdsNU13UFNGMlJnRVhSTHJPQ3RVcHhQaWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9XZTlPQkNHL1JmdFUvYVZTVHVkcXFJVG1MVkZhWkdCUmZaemI4TXBpVjNFa3Q2dmhSN01Yd1d0eDl6NWQ4K0Jya2ZNQWVVVVZkVjFOUmwzbXZlbUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZb2NNOXBGanpRRDhuN0NQbThPeHBER0JiWHlSQ1FyV0lpK2Q4d0tZMHUwaENSWkpJemhWV3FRNVdXTW1MUStLdXhmS09uZkEvQ2d6UFhYRUFKSGlDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzM1OTQwMTAyOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWnM0TE81dU1meXgzclR4YVZiVnBlVE1EMGhka1lCRjBTNnpnclZLY1Q0biJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTkzODI2NH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐒LADE 𝐌𝐃-𝐕2",
  author: process.env.PACK_AUTHER || "Tsepo",
  packname: process.env.PACK_NAME || "Slade is being weird again",
  botname: process.env.BOT_NAME || "Slade-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Tsepo Mohlomi",
  errorChat: process.env.ERROR_CHAT || "27736267768",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
