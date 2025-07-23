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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBCZWRFSFplVTVoT0ZMUDZuQjNGUjVXQThzR1A3ckVMMVhFdDNpYWUwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTytVTksvWmlnaE1qT3piT0N4Sk1rcm9LKzBHVzZUM0ZLU0s3bndoQzd3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQmRhNFFjTWlRVzRKN2VpQVdRWXhmRHdvQ1NqRzRhMkxCMXoxeCtoUldZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZFlBeno1R0tjbWlpaGlySGZzNWtEM3gwK0NZQm9iQ29DS3o2eGdTWDJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKWU9RYmg4THBZaXlVUGZUTGY1dUduNnRTT0psdEtYMHlzMEd4ZlZLMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllWVURJWk9GTUZtVE5GYk5oVi96TjdUUjZYdkpyVkNha295N3ljY3FreFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJVclhaQ3VsVHBOdTFLNHJMQTNaK0xkMU1UenE3Z0xLOVo2SUdjc2NXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXlVa3dqbi90QzBWZWhmSlUwMTJxcG1mb0tTUnBpbFZuUHArbEIwMElCaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJucG8xUlBuWkE5bWgweUIrcHkybi9FemQyanhYendIbVBQSUtmUUVkbEtFSFhrS0Ewb3hOY1JOWVgvWTIwMFY2Tmw2cCtNdnAxUkpDUHpSWFFjZGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6Ik9UQ0w5MFVUbjBObFRaMlRDNHJvblo0UTJqWVRTczBSWXpaSUdubXNVczQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjA0MTc1OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjczNjNFMjg2MDZDN0M3MkQxQTU3ODIyMjhEMjA2NUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MzI3NjAwMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjp0cnVlfSwiZGV2aWNlSWQiOiJnU08yNVZXOVJqMnlwMHJiYmNYNFVBIiwicGhvbmVJZCI6ImY3N2M0NDZiLWYwYTAtNGI1YS1iMTczLTMzMGVkZmMyOTY2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2YzVCUzZLbHl4MFJHek5RQXhUWUVhb21nd2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWRIR2NvdjlJT1NGN0FRdzlrNDJEbE9Da1l3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBOTEU3Tk1EIiwibWUiOnsiaWQiOiI5NDcyMDQxNzU5MDo0N0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI2OTc2NzQ5OTg3NDMyNzo0N0BsaWQiLCJuYW1lIjoiLi4uLi4uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbjZnZGNHRU5DOGc4UUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzcHpaSFl0V2JKNjdkTWRDelF3amtkbDVZL1lXTmUva2dlY3l0emtzSG1JPSIsImFjY291bnRTaWduYXR1cmUiOiJDTHBlUUdPTzlMN29TclpzTmswODNTWWZ6L3hoRVQ3NXd4MFJDVVVxSGZrcld3NDhoc29uMFpVR2tiVTMwTS81RmNlclFLNWQyTzBJZXVuS3dMaVBCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY2RQa0FvcnpEUGtUdmdHdjhMWjJHbWlvOUtpYUFtWW1uRUgwTnJZTVdIMk5WWDR1Nm5GYjdEMkVVM1Rwbk5CUHVyaGdYcFlKbmY5bHNxS3YxbXgzalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMDQxNzU5MDo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNmMyUjJMVm15ZXUzVEhRczBNSTVIWmVXUDJGalh2NUlIbk1yYzVMQjVpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTMyNzU5OTcsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQUkrIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94769162583", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
