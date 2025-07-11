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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxvdWhNMmMxS0YzZTdXNXFtbXUzRWVJc1g5SklmamNpT2RSaWhnMGJVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXgvYW9HM05rV0M1MjhseklOTFE2QkNiNi9mQWhnV2MwSHFIaTdGejFsQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRlppN1JRK2FjRXZYdm5lbW1lTU1KNHQyUUlUc2x5VmZhWmhuakp6dmt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJickk0OFBGbkZwT1EwMEFvcUFHaVBGNUxZWW05UUlZZlI1RlpVOHJoS1FRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNK3FtMWpmOFRwVm9xYzBwOXA3ODRUdUwvaVMyTDcrOTllWDNERWc4MkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNWVQ4RzVNTlFzNm5YRkNPcmlCMUZjeHk3emw5bEZXV2hZV21LeWZJVjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0UwemFNSEp3ajNFREh6MGJTanFSRk9OSWkzS2xRNmxlUkE0N1RNSTUydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFREZzVsRmozVzhhSk9xR1pHb1dVMThMN2JXaG5NbkFuV0xZNTlwT1Vsdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVNZWptaUdCR2ZBOEpXNW03aHc2Yzk1UCtHU2RoWlJrTGVwTElEaUpHclRFU2NGVlV5Nlo1bldnczR4V1VrNG0zT2ZOTlNZR0tPN29wUTJWMElYVWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJ0YXZ4Q0dmTzI4c2JFRzhLaUpBLzNoaUVBdlh3SDRWanZrOXhQUkVJekZjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI0MzA0ODUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGQjI2MkZGRkE3NDc4QUQ0QURENzI3RDQ1MDVCMDQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIyMDI0Mjl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1fNzVsRENzUVZPb1Z6eFV2ODRUbnciLCJwaG9uZUlkIjoiZjAzZjg2OTctMmUzMi00ODA2LTk0MTgtZjZkMDA3ZGI0OTk5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im85SGNxNEFyMXVTR1I1QlRZYUhTNGFpUkEwUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3N0lqM0haUGNxNkkrR2ljUjlRd25XMVBnRkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTURHV1dQU0giLCJtZSI6eyJpZCI6Ijk0NzI0MzA0ODUwOjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODQ5ODkwOTAxMDM1MDI6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tlS3ZPOEJFSy81d2NNR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklYKzlvODl6SHVqVllsMEdWSmVOb1o3YXM4em9oSUZxUXNPWTY5cld4blE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ind0a0V4ZXFGdC91QXBsVGtudVd5YXZBRGtwczNmODVDWXlWK3A0WjBRaVhUZkdOMUwxQ3F2MGo4SUIrRUNhbFdMU01lNXkwZXVOZmlLeVF6TDNRQkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwZktubmJ1NFBzSG8zbFVmaG1HQjdnbG0xRHc1dk01blIxS0Fwd0JjdSt4WWU1L0VyZTIwSVNlSXVnMm1VWUtjalF2SmVaY0Y4NVVHWDRTS2h6djlodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI0MzA0ODUwOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0YvdmFQUGN4N28xV0pkQmxTWGphR2UyclBNNklTQmFrTERtT3ZhMXNaMCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMjAyNDI4LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5nZyJ9",
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
