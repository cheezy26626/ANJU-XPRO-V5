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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJJaVl4aFIyYk1RWnZsc1piQ2FLRWN4TUZORElqT2pVYUJZbzZmT0FHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3Y0RDJpeUs1WGVuMGx4Sm14NTJZbTEzcVVCTDlET1RIMmpuSlpOamMwZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRk85Vk1KRUxRM1Bjc2FqejkxYm5ORUVYUWhWRTBEckJjdG8xcWFRMEhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQjFRUDZHSitCMndEK1pJVnNHd21zV2NUU05FRTN0M1ljMEVkRnBCOTJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQU3NKcUlDYzY2aTk1QnlXWDJzUXBFL0JmbUJRNm1Ia29IL0N3UGpMbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBpU2RaRjZnV1dxL1gyUDhlU25pZGRGem9ueXFoS3JWaWNiQVh4cEtWZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hiOUxSMnFmV2VMNDdGT3A0M1R2SDRqd1cvTTVRZmY5cU9SZmU4Y1Iydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3phVHVrY2JrNGNseGVyZTd6bkpBRzk0OGFLMU11bFRCVFJaWHl4c3pGdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik04VENlRGcxcmtQQ0lYU05URlNKUStUVzJFeDUxQkV5MVdYc0FKeVlWeWdQM1kwc3ZkRFZQSjJyeGNBUmt6Qlg4WGVaK3pQOFRFNkZNbmxtY09xNmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6InZBWURNTVM0ZitMOHB6MlNnQklmU0x4bDdwYjNvMmsrMnNnTk55WS9OWDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im50dnBvbFVFU1RlTHVUNTAzcFFXTkEiLCJwaG9uZUlkIjoiZWZlZWY1MTYtMWQwYi00YjU5LTlkNzYtNGQwM2IzYjVkM2QwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im83REZoN1c1RzVwY3E4Mm9qaDFBcHlXV0txZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdytIeFE0WmVXNm9iQytmWFVFMFN3TW1zcXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDhIQ05NWFgiLCJtZSI6eyJpZCI6IjE1NDgyOTczODY0OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDU1NjIzMjY5NjY0OTI6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01YNmdkY0dFUC8rdnNNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNwelpIWXRXYko2N2RNZEN6UXdqa2RsNVkvWVdOZS9rZ2VjeXR6a3NIbUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpoRCtGaFdOMWIzMXVKdDJ1TVlyVHVLb0hIYzJPeEFBSzlnVkpENm9pOFBEUlV6MXdUSEhTa1orS2dDa0Y5ZGwrcHR5ZVA0angwUTdlM2N6SW15a0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSNVJVVklSNkgweU1DRU9JMXp1M2NuZSs3dTBUdzRUWENMa2gyOENUOU5TZlF6c2VBWi8zbDd2U082R1h4cFA1N2JjM1JqbHFOYVl1c1FidndmZkVoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1NDgyOTczODY0OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDZjMlIyTFZteWV1M1RIUXMwTUk1SFplV1AyRmpYdjVJSG5NcmM1TEI1aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMTUzOTk3LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRnBDIn0=",
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
