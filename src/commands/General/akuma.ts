import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'akuma',
            description: 'Displays info about akuma.',
            category: 'general',
            usage: `${client.config.prefix}akuma`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/a43f5a77aafa32083150a.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `💖𝗛𝗘𝗟𝗟𝗢!💖I'm 𝐀𝐊𝐔𝐌𝐀 an ordinary guy who loves watching anime & play games🎮. I'm a BCA Student💖relationship with 𝐙𝐄𝐑𝐎💖.
            
💖𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/917892202052

💖𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆;
https://facebook.com/groups/600441174428472/

💖𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈;
https://www.instagram.com/akuma__24/?hl=en

⪼𝖲𝖾𝖾 𝗒𝖺𝗁 have a great day💖💖` }
        )
    }
}
