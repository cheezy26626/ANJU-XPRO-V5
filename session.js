//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5xOXVWLy84alRWTThxRGE4b09DTnFDeGdMZXFXVlE4VTFCQmZyMURWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFlFUVI3YVJMYUcySXdxcVBpVXNzbUI1c1d2cjE4RG5hMnZ5KzhIY2ZWWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTlAzdW5OTXRtOXFTV0U2KysyU214RG1VNGNabnlnMzBPYWs2TTRsZFhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0MitZWEYwMlM2bGs0K2pkRzlOUko1VlRtNnFkaEZ0RzhjUzJJRFpBNUdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ESjl5b1JIUTJiZGdRanhrclliY0ZtYzQ2MVJSUU5TSlpUN1MzbVFHRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpHTUVPRVVDcnIvcWFaTjhjK25zZ3l0c1V5aXdZeHhRZHd5NnVXNDFnazg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVodXNBZ29DeFdIZG1YYUsvM2pjQlUyRGFoZjN1TEttVlN3aDJGTFRraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTJBcUttN0hPNG1wWHMxMFdoQkZ3aUIvU0U5dHFrWk55TmU0U2JUOEkwZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko4SUg1N3ZmZTBXQlpqeGF3T3lwNGVheWNPdE4vSW1uMWJ2K0d1VE1IMTFMSGExMGNxTTBZQ0Jhd3RMT01KbktFWXEzeTZZQmovU3dtYW01SW5lTUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6InJkYVdKd1RqbVJiWGcrOTZBUUFMTVJTQ2haRjdGUFVsakNoZTd4bm5LeUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjA0MTc1OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjA5OEZCRkE0QTEyNUI0MEQ5RDg2NjlFNDY3RThGOUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjMzMTEzNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNDhkUnk2YkdTTzJuaEZyNmRFM29uUSIsInBob25lSWQiOiIzM2E1YTI0Zi03YWQzLTQyOWMtYTU2Yi03NDIxODZiNDVkOWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmV5NDJEU0JWVC9zSEcwb1M1M1o4bGRuTXNBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdKWm5vVHhEdEJYczRHd2tZR1JJRXhqQkswdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFV01NTVYzUCIsIm1lIjp7ImlkIjoiOTQ3MjA0MTc1OTA6MTJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjk3Njc0OTk4NzQzMjc6MTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZjZnZGNHRU8vbXljTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzcHpaSFl0V2JKNjdkTWRDelF3amtkbDVZL1lXTmUva2dlY3l0emtzSG1JPSIsImFjY291bnRTaWduYXR1cmUiOiJYR2FPTmFRZHAzc1ozVXBNZ0orQWtUMENaZnpmRUZSbFFHd1FyWGYzWjhQVFhvamNEMXA4Nkx2d3BuNDEydGt0ckhiOWplRlBTNm0zc1doL2dqd2hBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMjByd3AwdDU3VkJTdW1FbTJHOUxNWTQ2WktRYWd5ZytiU3grNTBWTDIzNTFuYlk4MEo2SW84bjJ1QmNqbmZzSVVkY2hJcEdraXA2bkQvaDA1dXJsQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMDQxNzU5MDoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNmMyUjJMVm15ZXUzVEhRczBNSTVIWmVXUDJGalh2NUlIbk1yYzVMQjVpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTIzMzExMzEsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUhaIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94769162583",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94769162583", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
