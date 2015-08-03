(function () {

    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Hasztagg";

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };
        
        bot.commands.awansCommand = {
            command: 'awans',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Użyj tego linku aby otrzymać awans: http:\/\/bit.ly\/1e1TmUO");
                }
            }
        };
        
        bot.commands.gonciarzCommand = {
            command: 'gonciarz',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var crowd = API.getUsers();
                            var msg = chat.message;
                            var argument = msg.substring(cmd.length + 1).replace(/@/g, '');
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * basicBot.chat.balls.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            API.sendChat(subChat(basicBot.chat.ball, {name: chat.un, botname: basicBot.settings.botName, question: argument, response: basicBot.chat.balls[randomBall]}));
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "BeczkobotBETA",
        language: "polish",
        chatLink: "https://raw.githubusercontent.com/Hasztagg/basicBot-customization/master/lang/pl.json",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        autoskip: false,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: true,
        timeGuard: false,
        maximumSongLength: 12,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "user",
        motdEnabled: false,
        motdInterval: 8,
        motd: "Zapoznaj si\u0119 z regulaminem (http:\/\/tnij.org/regulamin\u005Fbeczki) i mi\u0142ej zabawy!",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://tnij.org/regulamin_beczki",
        themeLink: null,
        fbLink: "https://www.facebook.com/groups/beczkownicyofficial/",
        youtubeLink: "https://youtube.com/user/TheUwagaPies oraz https://youtube.com/user/wybuchajacebeczki",
        website: "https://www.facebook.com/groups/beczkownicyofficial/",
        intervalMessages: ["RADA: jeżeli roz\u0142\u0105czysz si\u0119 przez przypadek, u\u017cyj !dc aby wr\u00f3ci\u0107 na swoje miejsce w kolejce.","RADA: U\u017cyj !rules aby otrzyma\u0107 link do zasad.", "RADA: Wpisz !fb albo !website aby otrzyma\u0107 link do naszej grupy na facebooku.", "RADA: Wpisz !help, aby otrzyma\u0107 link do obrazka t\u0142umacz\u0105cego pluga.", "RADA: Istneje sekretny link do otrzymania awansu, wpisz !awans, aby si\u0119 dla Ciebie pojawi\u0142."],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Hasztagg/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/Hasztagg/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/Hasztagg/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);
