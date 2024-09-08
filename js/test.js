
// list of personality types
const personalities = [
    "personality1",
    "personality2",
    "personality3",
    "personality4",
    // "si",
    // "se",
    // "ni",
    // "ne",
    // "ti",
    // "te",
    // "fi",
    // "fe"
    // ...
]

/* 
 * we"re not using typescript but.. i like types...
 *
 * enum Personality = {}
 * 
 * interface Choice {
 *     choice: string,
 *     mapping: Personality,
 *     next?: string // id of next question
 * }
 * 
 * interface Question {
 *     question: string,
 *     choices: List[Choice]
 * }
 * 
 * questions: List[Question]
 * 
 */

// test questions
const questions = {
    "0": {
        "question": "you're waiting at the dmv, and wow, are you bored. what do you do to pass the time?",
        "choices": [
            { 
                "choice": "dissociate",
                "mapping": "personality1"
            },
            { 
                "choice": "people watch — why does everyone coming out of the driving test look so frazzled?",
                "mapping": "personality2"
            },
            { 
                "choice": "watch your favorite asmr video: \"Boyfriend tucks you into bed before dropping 15 metal pipes\”",
                "mapping": "personality3"
            },
            { 
                "choice": "think about all the embarrassing things you've ever done and slowly die from cringe",
                "mapping": "personality4"
            },
        ]
    },
    "1": {
        "question": "they fiiiinally call your number, but oh no! you forgot your papers! what do you do?",
        "choices": [
            { 
                "choice": "that's literally impossible, you have 10 extra copies in your bag!",
                "mapping": "personality1"
            },
            { 
                "choice": "beg the dmv lady for mercy and hope she doesn't smite you on the spot",
                "mapping": "personality2"
            },
            { 
                "choice": "try to charm the dmv lady into letting you off the hook (she seems unamused)",
                "mapping": "personality3"
            },
            { 
                "choice": "call your mom and sheepishly ask her to deliver your documents",
                "mapping": "personality4"
            },
        ]
    },
    "2": {
        "question": "you end up finding your documents in your bag! hallelujah! you start your driving test, and the examiner asks you to perform arm signals. you…",
        "choices": [
            { 
                "choice": "have studied your whole life in preparation for this exact moment. you execute the arm signals flawlessly. the examiner is in awe",
                "mapping": "personality1"
            },
            { 
                "choice": "flail your arms about, performing an interpretive dance. the examiner is impressed by your dancing skills and lets you pass",
                "mapping": "personality2"
            },
            { 
                "choice": "lie and tell the examiner you have a shoulder injury that prevents you from performing the arm signals",
                "mapping": "personality3"
            },
            { 
                "choice": "freak out because what arm signals??? the examiner takes pity on you and teaches them to you",
                "mapping": "personality4"
            },
        ]
    },
    "3": {
        "question": "as you're pulling out of the DMV parking lot, an otherworldly portal opens on the right. the examiner calmly directs you to drive into the portal",
        "choices": [
            { 
                "choice": "no way! ignoring the examiner's protests, you take a hard left",
                "mapping": "personality1",
                "next": "8"
            },
            { 
                "choice": "interesting… maybe this is a new section of the test? looks fun! you take a right",
                "mapping": "personality2",
                "next": "4"
            },
            { 
                "choice": "although the portal looks scary, the examiner is scarier… you take a right",
                "mapping": "personality3",
                "next": "4"
            },
            { 
                "choice": "after telling the examiner you have a diagnosed phobia of otherworldly portals, they let you take a left",
                "mapping": "personality4",
                "next": "8"
            },
        ]
    },

    // branch 1
    "4": {
        "question": "the otherworldly portal sucks you in, and you find yourself pulling up to a moat. a troll pops out in front of you and says you must answer a riddle in order to cross the bridge",
        "choices": [
            { 
                "choice": "nah… you step on the gas and skirt around the troll. he shakes his fist angrily at you in the rearview mirror",
                "mapping": "personality1"
            },
            { 
                "choice": "chatting with the troll, you find out he's totally underpaid! the troll takes your advice and joins a union",
                "mapping": "personality2"
            },
            { 
                "choice": "you make easy work of the riddle, then trade ideas and strategies with the troll — good luck to the next player!",
                "mapping": "personality3"
            },
            { 
                "choice": "you bribe the troll with an iced coffee. delighted by the joy of a sweet treat, he happily lets you pass",
                "mapping": "personality4"
            },
        ]
    },
    "5": {
        "question": "driving across the bridge, you arrive at the entrance of an old medieval castle. a dragon is sitting by the gate, looking incredibly morose",
        "choices": [
            { 
                "choice": "oh no! slow down and ask the dragon if it's ok",
                "mapping": "personality1"
            },
            { 
                "choice": "that's none of your business — try to sneak past the dragon unnoticed",
                "mapping": "personality2"
            },
            { 
                "choice": "look around and try to figure out why — it's cloudy today, maybe seasonal depression?",
                "mapping": "personality3"
            },
            { 
                "choice": "a DRAGON??? make a u-turn and escape before it turns you into a s'more",
                "mapping": "personality4"
            },
        ]
    },
    "6": {
        "question": "unprompted, the dragon starts bemoaning how it lost its most prized possession: the princess diamond",
        "choices": [
            { 
                "choice": "dealing with sad people (or, creatures?) is not your forte — awkwardly try to offer it some snacks",
                "mapping": "personality1"
            },
            { 
                "choice": "you get it, you're familiar with heartbreak — you commiserate together by listening to some sad music",
                "mapping": "personality2"
            },
            { 
                "choice": "this is so killing your vibe, you roll your eyes and tell the dragon to get it together",
                "mapping": "personality3"
            },
            { 
                "choice": "provide some logical solutions: where did it last see the diamond? can it get another one? can it get <i>you</i> one? ",
                "mapping": "personality4"
            },
        ]
    },
    "7": {
        "question": "entering the castle, you look around — there’s a witch’s cauldron, a room full of secrets, and a dimly lit hallway. what do you do?",
        "choices": [
            { 
                "choice": "go into the room of secrets — you love gossip!",
                "mapping": "personality1",
                "next": "12"
            },
            { 
                "choice": "approach the witch’s cauldron, whatever she’s cooking in there smells delicious!",
                "mapping": "personality2",
                "next": "12"
            },
            { 
                "choice": "lie down. it’s been a long day!",
                "mapping": "personality3",
                "next": "12"
            },
            { 
                "choice": "go down the dimly lit hallway, maybe the dragon’s diamond is there!",
                "mapping": "personality4",
                "next": "12"
            },
        ]
    },

    // branch 2
    "8": {
        "question": "you drive away from the portal, but you find yourself in a weird neighborhood… why is there a pterodactyl on their lawn? is it ALIVE?",
        "choices": [
            { 
                "choice": "roll down your window to get a better look — is it really alive?",
                "mapping": "personality1"
            },
            { 
                "choice": "step on the gas! let's not stick around and find out",
                "mapping": "personality2"
            },
            { 
                "choice": "snap a picture of it — when else would you be able to see a live pterodactyl?!",
                "mapping": "personality3"
            },
            { 
                "choice": "other people's pets are none of your business, just keep driving",
                "mapping": "personality4"
            },
        ]
    },

    // conclusion
    "12": {
        "question": "suddenly, out of nowhere, you hear a loud honk, and a blinding light overwhelms your vision. is that… a truck??",
        "choices": [
            {
                "choice": "am i about to get isekaied right now?",
                "mapping": "personality1"
            },
            { 
                "choice": "god i’m totally failing this driving test aren’t i",
                "mapping": "personality2"
            },
            { 
                "choice": "if i turn maybe i can still avoid collision!",
                "mapping": "personality3"
            },
            { 
                "choice": "let jesus take the wheel",
                "mapping": "personality4"
            },
        ]
    },
    "13": {
        "question": "when you open your eyes, you're... back at the dmv?!<br>congratulations! the examiner informs you that you've passed your driving test. how do you feel?",
        "choices": [
            {
                "choice": "what just happened???",
                "mapping": "personality1"
            },
            { 
                "choice": "nice! i'm never driving ever again!",
                "mapping": "personality2"
            },
            { 
                "choice": "thank god there was no parallel parking section",
                "mapping": "personality3"
            },
            { 
                "choice": "that was fun! can we go again?",
                "mapping": "personality4"
            },
        ]
    }
}
