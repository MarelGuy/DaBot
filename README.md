# DaBot

 Welcome to the DaBot repository, here you will be able to see the code, the commands and everything about DaBot.

## Commands

### `$help`

Displays the help command

### `$help <arg>`

Displays the help command for one of the available commands.

### `$add-person`

This command adds a person to the MongoDB database and so it becomes available for the user to use it as first argument with the `$add-insult` command.

### `$add-insult`

This command adds an insult to the MongoDB database if the first argument of the message is found in the persons collection. To add one you can use the `$add-person` command.

### `$insult <arg>`

Searches the first argument in the MongoDB and if he finds it, then it sends a random insult to the user.

### `$tts-insult <arg>`

Searches the first argument in the MongoDB and if he finds it, then it sends a request to a tts service and then use a random insult.

### `$bonk`

Joins a vocal channel and then literally bonks you.

### `$ping`

Gives the latency.

### `$leave`

Leaves the vocal channel.

## Q&A

### Why did you create this bot?

I created this bot just for fun. Everyone can use it and/or contribute to it.

### How did you create this bot?

Here's a list of waht frameworks and what API i used:

- ExpressJS for the backend API.
- MongoDB for the database.
- DiscordJS for the discord commands.
- @Discord/opus for the voice channel part.
- GoogleTTS API for the TTS.

### Will you update this bot?

Of course i will, for now this is just the beta of the bot (I will do the official release on version 1.0).

### How can i contribute?

You can fork the repo and then i'll check if i can merge it to the main branch

### I have a question, where can i contact you?

Here's a list of my contacts:

- Email: golans.gaming@gmail.com
- Discord: _Chips [Marel]#8424

## That's it, Thanks for using this bot :D
