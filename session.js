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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xOYmR3ZWwzQ3l0VXJNNlBBWERwVXAvYUQyWlhvRnFpT0ZEZFIvM1dHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmxwdEErLzVRbUhIbUExSURuc0dVZTZtQlF5S1RaTzlNS2VjSC8vVER4WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRTdoNGV5VEJYRVppUDZWU1hMYkZWUFp2cUdKTHM0Z2xTNEtEL2VMdGxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDOU95M0dwSUczS3JiVkJnNk4yZWE3RU9Zdk44b2RHUVhuREhyS001cG5RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHb04rVlJVMFptNHVzcTNsR1hpUWZ3NXhJSTB3eHpaTktUYVlCM3NyMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBqUkJpa1VNZlhyYVcwYlllMmJiUHlnbVJGZGEremV5REZGdksxQm5SZ1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BuM1JkYVQ2cC9mUVBiaDRJTGxpUDQ5eGg1aUdQRGE4VkxTaU5BL2FWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpQbVIvWGdQZk1JZllJait5QlVjZTdlVDAwTWMyTkFoVWx5UzE5TlREQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxoTC9PYVJ4VHVNYW56ZVlrWFBxU2loeVV5ck1DUlB2UVg1RmV1T2R3MlVZVExwU1RuM1pJV05OWENkS3FHS0JxTk93alZKZ1ZJbUJxS2tWZ1JJU2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJ6cnllN09sSkQwQVhxZ1hxWE95UWxrSVAxK0NWcmFDb3VNM2NjaW5oekJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4RXdiU1FOQ1F6dWdwSkN2YUJoSF9nIiwicGhvbmVJZCI6IjI2N2Q0ZDkyLTRmZGYtNGNlOC05M2JkLTViN2ZhYTg4ZjIzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVM0l3TkhPWFdRODFmU2xoa0podmVsajl4MGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3NsWTYwRWp0aXNrSVhjVHVKUGVvbDBIbTFzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllBUko2Wk5aIiwibWUiOnsiaWQiOiIxOTAyNjY2NDk2Nzo2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDEwNTE5MTgyMTcyODU6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09paCt2QUJFSnV2bjhNR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxIVmtTUHlEQ2hUdEZXSzFJdmRZQWhUa2hJUVJiaEFXT0lXY0pUOG5PVU09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZHNVdUR05MRmdYaWRYOTErTE8rS0VMTDFNWUwxUHZFdGJ1eHZlNk9nQnF4UVJFdi9Yd0xwdCs1V0tvTjRxTHRqM1BaL3lSYVhXQ1VtOWszYmcxNUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpaWxMMzh1MVo3UGVIczFkNFFBSDhOS0VFRU1lOXprb3QzQWpnTXVhTnJXVnNlcC8vMnQ4ellzLzl2d3JIeFVDYUtoNGlMZW5Uc0hWbnVUdVR2VUFodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE5MDI2NjY0OTY3OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3gxWkVqOGd3b1U3UlZpdFNMM1dBSVU1SVNFRVc0UUZqaUZuQ1UvSnpsRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNjM1ODgxLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtuWSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
