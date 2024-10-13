
// list of personality types
const personalities =
{
    "entj": "tank",
    "enfj": "mysterious unmarked white van",
    "esfj": "bus",
    "estj": "pink convertible; sports/race car",
    "entp": "golf cart",
    "enfp": "hot wheel",
    "esfp": "pink convertible, sports/race car",
    "estp": "pickup truck",
    "intj": "cybertruck",
    "infj": "tractor",
    "isfj": "mom van",
    "istj": "garbage truck",
    "intp": "zamboni",
    "infp": "banana cart",
    "isfp": "horse drawn carriage",
    "istp": "ambulance"
}

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
                "mapping": "n"
            },
            {
                "choice": "think about all the embarrassing things you've ever done and slowly die from cringe",
                "mapping": "n"
            },
            {
                "choice": "watch your favorite asmr video: \"boyfriend tucks you into bed before dropping 15 metal pipes\"",
                "mapping": "s"
            },
            {
                "choice": "talk to the people sitting next to you — why do all the people coming out of the driving test look so frazzled?",
                "mapping": "se"
            }
        ]
    },
    "1": {
        "question": "they fiiiinally call your number, but oh no! you forgot your papers! what do you do?",
        "choices": [
            {
                "choice": "that's literally impossible, you have 10 extra copies in your bag!",
                "mapping": "j"
            },
            {
                "choice": "try to charm the dmv lady into letting you off the hook (she seems unamused)",
                "mapping": "pe"
            },
            {
                "choice": "beg the dmv lady for mercy and hope she doesn't smite you on the spot",
                "mapping": "p"
            },
            {
                "choice": "call your mom and sheepishly ask her to deliver your documents",
                "mapping": "j"
            }
        ]
    },
    "2": {
        "question": "you end up finding your documents in your bag! hallelujah! you start your driving test, and the examiner asks you to perform arm signals. you…",
        "choices": [
            {
                "choice": "have studied your whole life in preparation for this exact moment. you execute the arm signals flawlessly. the examiner is in awe",
                "mapping": "j"
            },
            {
                "choice": "freak out because what arm signals??? the examiner takes pity on you and teaches them to you",
                "mapping": "p"
            },
            {
                "choice": "lie and tell the examiner you have a shoulder injury that prevents you performing the arm signals",
                "mapping": "j"
            },
            {
                "choice": "flail your arms about, performing an interpretive dance. the examiner is impressed by your dancing skills",
                "mapping": "p"
            }
        ]
    },
    "3": {
        "question": "the examiner gets into the car, and you sink into silence as you pull out of the dmv parking lot. what do you do?",
        "choices": [
            {
                "choice": "try to make conversation and laugh awkwardly when you're met with stony silence",
                "mapping": "e"
            },
            {
                "choice": "put on some music — maybe the examiner will like k-pop?",
                "mapping": "i"
            },
            {
                "choice": "stay quiet and enjoy the shared silence",
                "mapping": "i"
            },
            {
                "choice": "start spiraling internally and convince yourself that the examiner hates you",
                "mapping": "e"
            }
        ]
    },
    "4": {
        "question": "as you merge onto the main road, an otherworldly portal opens on the right! the examiner calmly directs you to drive into the portal.",
        "choices": [
            {
                "choice": "no way! ignoring the examiner's protests, you take a hard left",
                "mapping": "s",
                "next": "9"
            },
            {
                "choice": "interesting… maybe this is a new section of the test? looks fun! you take a right",
                "mapping": "n"
            },
            {
                "choice": "although the portal looks scary, the examiner is scarier… you take a right",
                "mapping": "s"
            },
            {
                "choice": "after telling the examiner you have a diagnosed phobia of otherworldly portals, they let you take a left",
                "mapping": "n",
                "next": "9"
            }
        ]
    },

    // branch 1
    "5": {
        "question": "the otherworldly portal sucks you in, and you find yourself pulling up to a moat. a troll pops out in front of you and says you must answer a riddle in order to cross the bridge.",
        "choices": [
            {
                "choice": "nah… you step on the gas and skirt around the troll. he shakes his fist angrily at you in the rearview mirror",
                "mapping": "i"
            },
            {
                "choice": "chatting with the troll, you find out he's totally getting underpaid! the troll takes your advice and joins a union",
                "mapping": "e"
            },
            {
                "choice": "you make easy work of the riddle, then trade ideas and strategies with the troll — good luck to the next player!",
                "mapping": "i"
            },
            {
                "choice": "you butter him up and bribe the troll with an iced coffee — delighted by the joy of a sweet treat and a compliment, he happily lets you pass",
                "mapping": "e"
            }
        ]
    },
    "6": {
        "question": "driving across the bridge, you arrive at the entrance of an old medieval castle. a dragon is sitting by the gate, looking incredibly morose",
        "choices": [
            {
                "choice": "oh no! slow down and ask the dragon if it's ok",
                "mapping": "f"
            },
            {
                "choice": "that's none of your business — try to sneak past the dragon unnoticed",
                "mapping": "t"
            },
            {
                "choice": "look around and try to figure out why — it's cloudy today, maybe seasonal depression?",
                "mapping": "t"
            },
            {
                "choice": "a dragon??? make a u-turn and escape before it turns you into a s'more",
                "mapping": "f"
            }
        ]
    },
    "7": {
        "question": "unprompted, the dragon starts bemoaning how it lost its most prized possession: the princess diamond",
        "choices": [
            {
                "choice": "provide some logical solutions: where did it last see the diamond? can it get another one? can it get *you* one?",
                "mapping": "j"
            },
            {
                "choice": "dealing with sad people (or, creatures?) is not your forte — awkwardly try to offer it some snacks",
                "mapping": "p"
            },
            {
                "choice": "you get it, you're familiar with heartbreak — you commiserate together by listening to some sad music",
                "mapping": "p"
            },
            {
                "choice": "this is so killing your vibe, you roll your eyes and tell the dragon to get it together",
                "mapping": "j"
            }
        ]
    },
    "8": {
        "question": "entering the castle, you look around — there's a witch's cauldron, a room full of secrets, and a dimly lit hallway. what do you do?",
        "choices": [
            {
                "choice": "go into the room of secrets — you love gossip!",
                "mapping": "n",
                "next": "13"
            },
            {
                "choice": "approach the witch's cauldron, whatever she's cooking in there smells delicious!",
                "mapping": "s",
                "next": "13"
            },
            {
                "choice": "lie down. it's been a long day",
                "mapping": "s",
                "next": "13"
            },
            {
                "choice": "go down the dimly lit hallway, maybe the dragon's diamond is there!",
                "mapping": "n",
                "next": "13"
            }
        ]
    },

    // branch 2
    "9": {
        "question": "you drive away from the portal, but you find yourself in a weird neighborhood… why is there a pterodactyl on the lawn? is it alive?",
        "choices": [
            {
                "choice": "snap a picture of it — your 2 followers have to see this",
                "mapping": "e"
            },
            {
                "choice": "a pterodactyl??? step on the gas before you become its lunch",
                "mapping": "i"
            },
            {
                "choice": "roll down your window and chat with the pterodactyl — what are the hoa fees like in this neighborhood?",
                "mapping": "e"
            },
            {
                "choice": "that's none of your business - try to sneak past the pterodactyl unnoticed",
                "mapping": "i"
            }
        ]
    },
    "10": {
        "question": "the pterodactyl says their car broke down! they ask if they can catch a ride with you…",
        "choices": [
            {
                "choice": "say yes because you're really bad at saying no :/",
                "mapping": "p"
            },
            {
                "choice": "decline apologetically - unfortunately, you're in the middle of a driving test :(",
                "mapping": "j"
            },
            {
                "choice": "don't pterodactyls fly???",
                "mapping": "j"
            },
            {
                "choice": "sure! the more the merrier!",
                "mapping": "p"
            }
        ]
    },
    "11": {
        "question": "before you can finish responding, you suddenly see a t-rex charging towards you, yelling at the pterodactyl! what do you do?",
        "choices": [
            {
                "choice": "you're too young to die — run!!!!",
                "mapping": "f"
            },
            {
                "choice": "the t-rex clearly ran multiple red lights and stop signs — threaten the t-rex with their traffic violations and ask them to explain themself",
                "mapping": "t"
            },
            {
                "choice": "your nosiness gets the best of you: grab some popcorn and watch them fight it out",
                "mapping": "f"
            },
            {
                "choice": "you didn't like the pterodactyl much anyway — surrender them and back away slowly from the situation",
                "mapping": "t"
            }
        ]
    },
    "12": {
        "question": "turns out the t-rex is a car mechanic! they offer to fix the pterodactyl's car, but only if you can give them something of equal value…",
        "choices": [
            {
                "choice": "you give them your most prized possession: your iced coffee… the t-rex is very pleased, they love a sweet treat!",
                "mapping": "s"
            },
            {
                "choice": "you give them a copy of karl marx's communist manifesto — the t-rex leaves to start a socialist uprising",
                "mapping": "n"
            },
            {
                "choice": "you tell them your deepest darkest secret… the t-rex points at you and laughs",
                "mapping": "n"
            },
            {
                "choice": "you give them a little pink bow! the t-rex is delighted and feels very cute",
                "mapping": "s"
            }
        ]
    },

    // conclusion
    "13": {
        "question": "suddenly, out of nowhere, you hear a loud honk, and a blinding light overwhelms your vision. is that… a truck??",
        "choices": [
            {
                "choice": "am i about to get isekaied right now…?",
                "mapping": "f"
            },
            {
                "choice": "god i'm totally failing this driving test aren't i",
                "mapping": "t"
            },
            {
                "choice": "if i turn maybe i can still avoid collision!",
                "mapping": "t"
            },
            {
                "choice": "let jesus take the wheel",
                "mapping": "f"
            }
        ]
    },
    "14": {
        "question": "somehow, you're back at the dmv… congratulations! the examiner informs you that you've passed your driving test. how do you feel?",
        "choices": [
            {
                "choice": "what just happened???",
                "mapping": "i"
            },
            {
                "choice": "nice! i'm never driving ever again!",
                "mapping": "i"
            },
            {
                "choice": "thank god there was no parallel parking section",
                "mapping": "e"
            },
            {
                "choice": "that was fun! can we go again?",
                "mapping": "e"
            }
        ]
    },
    "15": {
        "question": "now comes the hardest part… taking a picture for your license. say cheese!",
        "choices": [
            {
                "choice": "cheese!",
                "mapping": "f"
            },
            {
                "choice": "i'm going to sue the dmv",
                "mapping": "t"
            },
            {
                "choice": "wait let me touch up!",
                "mapping": "f"
            },
            {
                "choice": "please just get me out of here",
                "mapping": "t"
            }
        ]
    }
}
