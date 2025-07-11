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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09iNXN5bytCYk1ZSCtZL3FGUnhXbDM0eGVOS2crZkVNZXFuMEM5dE5ubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTYrMEhuaEZnMjJqVzNIbUJ1ZzUvazZlWS9rblIwRkN6VFdzRWIxR04yQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTFlDSWYrODhVV0lCa3lsc3Z3YllEZUd0OU54cVRlYnVhMWFpcG5qSFZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTW9wb0VmSkJYK25VRkEwQ1JoL29JOHVYb3FHYzZKSmxoR1J0VS9NWmk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKZGpzMFYrYWJFU1ZTUGs3a3BsMitqb1libW5ZM2xrUzN2NEVXSFp5RlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFqbGROYVBRa1A5YWt4VzhJWmorUWhBR0VhenVZTE8rVmJKNklXNENaMWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9wWUtLdU9rT3Jab0NxcldUMWhiN0ZJNEJwZzRGemlNQ01nbnZvNEJVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzhQc2Z0MUJ4Rm9CdVM5RFBvYVdHbmNFQ01EYUhoNW5FVzlFYUJWQUZHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjByblhON1RUakE4VkhEM29iK0xLWmRNei90RXVBWE1rTzFKYWViVEFyMGVxcmRSdkU2cGcvcmNmeFJ2c1lDaHZHaHRsd3JTdklsWXQ2MFRQV1BGWmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJmcHUzak4wWklUM0Q1MzJBQ1I1Um14V0QwL1hXeWNRRHArSFM1US9VSnZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsajRYUEc0UVN2LXg5SEpaRVV0SFRBIiwicGhvbmVJZCI6IjcxNTc2OTFjLWI2YTQtNDEwYi1hZTM2LTQ1OWVkODI4Njg4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUdWppOGtvOVdkU1J0L0R6c3dLN2N2RmJIaVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpwOVpyZXhlcklTckVwenh3RE4xTlhUT2I4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRWS1BZQjVHIiwibWUiOnsiaWQiOiI5NDcyNDMwNDg1MDoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg0OTg5MDkwMTAzNTAyOjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZUt2TzhCRUw3RXdjTUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJWCs5bzg5ekh1alZZbDBHVkplTm9aN2FzOHpvaElGcVFzT1k2OXJXeG5RPSIsImFjY291bnRTaWduYXR1cmUiOiJueU0rd20zSjlmK1g4b1hSWUFrMWVSRzZOd0lCeG56MmJlQnRXVVZMSEhFUkliSS9qVWg1V1BNWkU5VVpNYmErRTY5UXVHbDFaQmxlajV1Z240SDJEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaG9nd2IyclA4cWxyeWZydjN2U09DU2pLQUVjVHhXR0UrN3NwRm5KcE1Qb25lTjRjQk96TEI4UHZFU3dack96d3Nvb2d2ZGV5VVI0UHUvN1c0MDZQanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNDMwNDg1MDoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNGL3ZhUFBjeDdvMVdKZEJsU1hqYUdlMnJQTTZJU0Jha0xEbU92YTFzWjAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjE5NTY2NSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94769162583",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
