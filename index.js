const { Telegraf } = require('telegraf')
const dotenv = require('dotenv')

dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.help((ctx) => ctx.reply('try out "@ channel" or "@all" to nitify everyone in group'))
bot.hears('hi', async (ctx) => {
    console.log("ctx", ctx.message.chat.)
    let members = await bot.telegram.getChatAdministrators(ctx.chat.id)
    // console.log("members", members)
    // ctx.reply(bot.telegram.getChatMember)
})
bot.launch()