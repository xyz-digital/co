import {Command, flags} from '@oclif/command'
import {WebClient} from '@slack/web-api'
import cli from 'cli-ux'

export default class Message extends Command {
  static description = 'describe the command here';

  static examples = ['$ co message adam \'This is a test message\''];

  static flags = {
    help: flags.help({char: 'h'}),
  };

  static args = [
    {name: 'who'},
    {name: 'what'},
  ];

  async run() {
    const {args} = this.parse(Message)

    const who = args.who ?? await cli.prompt('Who would you like to send to?')
    const what = args.what ?? await cli.prompt('What message would you like to send?')

    const token =
      'xoxp-1330352677777-1323913058788-1311000526390-0aaf73b5c6b20fb1073e0adee11db287'
    const web = new WebClient(token)

    const usernameToConversationId: { [key: string]: string } = {
      adam: 'D019AAF4ZLM',
    }
    let channel = usernameToConversationId[who]
    if (!channel) {
      channel = who
    }

    await web.chat.postMessage({
      text: what,
      channel,
    })
  }
}
