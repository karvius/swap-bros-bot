const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'say',
      aliases: ['copycat', 'repeat', 'echo', 'parrot'],
      group: 'main',
      memberName: 'say',
      description: 'Replies with the text you provide.',
      examples: ['say Hi there!'],
      throttling: {
        usages: 2,
        duration: 10
      },
      args: [
        {
          key: 'text',
          prompt: 'What text would you like the bot to say?',
          type: 'string',
          validate: text => {
            if (text.length < 201) return true;
            return 'Message Content is above 200 characters';
          }
        }
      ]
    });
  }

  run(msg, { text }) {
    msg.delete();
    return msg.say(text);
  }
};
