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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0J6STYybkNjL25vZ3J3VnlGQ0sxRTAxQXhVdTVUM1JEenpvcUVuK1dXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTZtSlJxZE9ucERNZEgyT2F5dm0yUFB2VGdyeUJ6YTZmWXhaczAzNDVYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSitHMGE5T2w5QUh5aDliWDhWKzhPa2dqSG4vZnZCckdtNDU3KzFEVm13PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtb1ZhanJsZ3pkUithZEVRRVBoRUlIK2x2YUk3a0QzNGhWZHVRaXRBd0RNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJNEZWemNIVXdVMEJQQ3VCTE1HV004NVc4KzRWZ0piZkhYb083WXdnblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRSQzZ6eG4wM0dyQWJtODJMSW1INGhvVWlkUS9nNlIySktERi9xUkxnUzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BnQlRSY2RLZ21aaXhYK1R4dWdlYml0Qk9MamNnVGp4MVNiLytPZmRGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXk2Z3BoNXJuWVhlcXJFWXhLUmxqc0UwVHBhbko0OWd4WTBGZEdWcnJVUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlppZTByOGpPcW1VbUt0U1NKZC9Sdnp2bEJwb2wxOTdGaUh1eDUwWnVKMXd5NFUxN0pyTkNLdElrQ3NXVWUycDJ3VDVPUkhFbHZpeGdQWHdGZTc5SmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6InI1YzFQZFRwdWI2c3lBOEpWbHZvN1IxL1ZxQkltSXQ2U2FFTk92NkVsN2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNwTDI2aGNMUnJxNnA4aFNYUFJmVGciLCJwaG9uZUlkIjoiNDQ5NjZjNjgtODg4Mi00MGQ2LWE2YzctZTg3MDA0ZDZjNDYxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFaUHUxTmVOejRhRi9kSU0reTVUSnBkanVYYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQTYrVzZLbmxra3dCbWRObUY4VFQ2VlFqSWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjI5UjdDNDMiLCJtZSI6eyJpZCI6Ijk0NzY5MTYyNTgzOjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iu+8syDvvKEg77ykIO+8pSDvvLcgfiIsImxpZCI6IjM5NTE4MDQ0NDQyNjY3OjMwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1BqOEI4UXY2K3Z3d1lZRGlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV0cyWk95SzA5RkxRRG1XWS9zd0dHOE5KM3Y5ODdCL216L3hZTXB0MXJoUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNVhWV3djQUVvOGc2NC9pSHNPVUorWmtPNlFWRDhBeXBEMTMyRmNkUXFsR28rQlBiSlpQazFVN1d3cVRUeTJRbmRmYU5ndlAyckVVVEdvUW1hcm9wQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Ikx3TnE4bHEwT3NNSWFleExiRXZCYnJRS0lSWFVvSXEzQ3lMQ0EvMGNycUc3c0hNVC9Oa21uV3JsVWlsL2ljNlA5NXl4TzA2U084RDNuZlZHUDJXeGdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjkxNjI1ODM6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmh0bVRzaXRQUlMwQTVsbVA3TUJodkRTZDcvZk93ZjVzLzhXREtiZGE0VSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxODk4MDYwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx4MCJ9",
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
