greets = ["hi", "hello", "hey", "greetings"]
feelings1 = ["i am", "i'm", "i feel","im"]
feelingsNeg = ["bad","sad","angry","upset","worked up","depressed","hurt","down","unwell","sick","fussy","annoyed","not"]
feelingsGood = ["happy","great","good","well","amazing","cool"]
feelingsDone = ["that's all", "i'm done","thats all", "im done", "i'm finished", "im finished"]
openapps = ["open","open up"]
chatmode = false;
apps = ["google","spotify","youtube","facebook","instagram","x","tiktok","reddit","github","netflix","gmail","office"]
sites = ["https://www.google.com/", "https://open.spotify.com/","https://www.youtube.com/","https://www.facebook.com/","https://www.instagram.com/","https://twitter.com/","https://www.tiktok.com/","https://www.reddit.com/","https://github.com/","https://www.netflix.com/", "https://www.gmail.com", "https://www.office.com/"]
const APIkey = "AIzaSyD0nVj7f7BjOr-s3EJc-wdyCChKvWzn-aA"
learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
learntdataquest = ["who made you?", "what are you?"]

orgians = ""
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
learningstate = false;
resettypecount = 0
feelings = "none"
//respond
function checksaved() {
    
    try {
        saved = localStorage.getItem("savedd");
        if (saved == "lol") {
            bgfile = localStorage.getItem("TerryBgFile");
            document.getElementById("mainbg").style.backgroundImage = "url(\"Images/"+bgfile+"\")";
            username = localStorage.getItem("TerryUsername");
            document.body.style.color = localStorage.getItem("TerryFontColor")
            learntdataquest = JSON.parse(localStorage.getItem("TerryQuestData"))
            learntdataans = JSON.parse(localStorage.getItem("TerryAnsData"))

        } else {
            localStorage.setItem("savedd","lol")
            localStorage.setItem("TerryBgFile", "BG.png")
            localStorage.setItem("TerryUsername", "Guest")
            localStorage.setItem("TerryFontColor", "#000000")
            localStorage.setItem("TerryQuestData", "who made you?")
            localStorage.setItem("TerryAnsData", "My Creator, Imeanbusiness, of course!")
            learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
            learntdataquest = ["who made you?", "what are you?"]
            localStorage.setItem("TerryQuestData", JSON.stringify(learntdataquest))
            localStorage.setItem("TerryAnsData", JSON.stringify(learntdataans))
            console.log(saved)
        }

    } catch {
        localStorage.setItem("savedd","lol")
        localStorage.setItem("TerryBgFile", "BG.png")
        localStorage.setItem("TerryUsername", "Guest")
        saved = localStorage.getItem("savedd");
        localStorage.setitem("TerryFontColor", "#000000")
        localStorage.setItem("TerryQuestData", "who made you?")
        localStorage.setItem("TerryAnsData", "My Creator, Imeanbusiness, of course!")
        learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
        learntdataquest = ["who made you?", "what are you?"]
        localStorage.setItem("TerryQuestData", JSON.stringify(learntdataquest))
        localStorage.setItem("TerryAnsData", JSON.stringify(learntdataans))

        console.log(saved)

    }
}

window.onload = checksaved()


function replywith(x) {
    document.getElementById("Terry").innerHTML = x;
}

function randint(i) {
    return Math.floor((Math.random()*i)+1);
}


function greetings() {
    replies = ["Hello "+username+"! I am Terry. I am your personal assistant!", "Hey, how's it going, "+username+"? I am your personal assistant Terry.","Well hello "+username+"! I'm Terry, your personal assistant!"]
    i = randint(2)
    reply = replies[i];
    replywith(reply);
}

function appOpen(rep) {
    x = false;
    i = 0
    while (i < 10) {
        if (rep.includes(apps[i])) {
            x = true 
            jaz = i
            i = 12
            
        }
        i++
    }
    if (x==true) {
        rep = apps[jaz]
        replies = [`Sure thing. Opening ${rep}`, `Absolutely. Opening ${rep} up.`,`Yep! Opening ${rep} now!`]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
            sleep(1500).then(() => {
                window.open(sites[jaz])
            });

            

            return;
    }
    googlesearch(rep)
    return;
}

function feelingit(repl) {
    for (i=0; i < 12; i++) {
        if (repl.includes(feelingsNeg[i])) {
            replies = ["Oh, I see! That's not good. Why is that so?", "Alright. What made you feel that way?","Oh no! I am so sorry! What happened?"]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
            feelings = "neg"
            return;
        }
    }
    for (i=0; i < 6; i++) {
        if (repl.includes(feelingsNeg[i])) {
            replies = ["Oh, I see, that's great to hear! Why is that so?", "Nice, that is amazing! Why do you feel that way today!","Very good! Why is that?"]
            i = randint(1)
            reply = replies[i];
            replywith(reply);
            feelings = "good"
            return;
        }
    }
    replies = ["I see! Why is that so?", "Nice. Anything happen?","That's cool. Why is that?"]
    i = randint(1)
    reply = replies[i];
    replywith(reply);
    feelings = "neut"
}
currentquest = ""




function terrylearn(state) {
    console.log(learntdataans)
    console.log(learntdataquest)
    if (learningstate) {
        if (!state.includes("/no") ) {
            learntdataquest.push(currentquest)
            learntdataans.push(orgians)

            localStorage.setItem("TerryQuestData", JSON.stringify(learntdataquest))
            localStorage.setItem("TerryAnsData", JSON.stringify(learntdataans))
            replywith("Thank you for improving my knowledge!")
            learningstate = false
        }
        learningstate = false
        return
    } else {
        replies = ["I do not understand. Do you mind explaining? (reply /no if not.)", "What is that? Do you mind explaining? (reply /no if not.)","I do not get it. Do you mind elaborating? (reply /no if not.)"]
        i = randint(2)
        reply = replies[i];
        replywith(reply);
        currentquest = state;
        learningstate = true;

    }




    
}

function command(repl) {
    if (repl.includes("help")) {
        window.open("help.html")
        haha = true
    } else if (repl.includes("kill")) {
        close()
    } else if (repl.includes("mode")) {
        chatmode = !chatmode;
        if (chatmode) {
            replywith("Switched to chat mode. Hello "+username+"! I am Terry. What do you need?")

        } else {
            replywith("Switched to search mode. Hello "+username+"! I am Terry. What do you need?")
        }
        haha = true;
    } else if (repl.includes("bgc ")) {
        sit = repl.replace("/bgc ","")
        localStorage.setItem("TerryBgFile",sit)
        replywith("Set successfully.")
        document.getElementById("mainbg").style.backgroundImage = "url(\"Images/"+sit+"\")";
        haha = true
    
    } else if (repl.includes("ops ")) {
        
        sit = repl.replace("/ops ","")
        replywith("Yes, opening now.")
        sleep(250).then(() => {
            window.open("https://"+sit)
        });
        haha = true
    } else if (repl.includes("gs ")) {
        sit = repl.replace("/gs ","")
        replywith("Searching for your query.")
        sleep(250).then(() => {
            window.open("https://www.google.com/search?q="+sit)
        });
        haha = true
    } else if (repl.includes("gh")) {
        replywith("Opening my github.")
        window.open("https://github.com/Imeanbusiness/TerryBot2.0")
        haha = true
    } else if (repl.includes("status")) {
        try {
            replywith("Systems: Normal. Version: Beta")
        } catch {
            replywith("Systems: Abnormal. Version: Beta. Restart recommended.")
        }
        haha = true
        
    } else if (repl.includes("ms")) {
        sit = repl.replace("/ms ","")
        replywith("Searching for your query on Spotify.")
        sleep(250).then(() => {
            window.open("https://open.spotify.com/search/"+sit)
        });
        haha = true

    }  else if (repl.includes("yt")) {
        sit = repl.replace("/yt ","")
        replywith("Searching for your query on Youtube.")
        sleep(250).then(() => {
            window.open("https://www.youtube.com/results?search_query="+sit)
        });
        haha = true

    } else if (repl.includes("reset")) {
        resettypecount+=1;
        if (resettypecount < 2) {
            replywith("Are you sure? Run the commad one more time to reset.");
        } else {
            replywith ("Succesful.")
            localStorage.setItem("savedd","lol")
            localStorage.setItem("TerryBgFile", "BG.png")
            localStorage.setItem("TerryUsername", "Guest")
            localStorage.setitem("TerryFontColor", "#000000")
            document.body.style.color = "#000000"
            saved = localStorage.getItem("savedd");
            console.log(saved)
            bgfile = localStorage.getItem("TerryBgFile");
            document.getElementById("mainbg").style.backgroundImage = "url(\"Images/"+bgfile+"\")";
            username = localStorage.getItem("TerryUsername");
            learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
            learntdataquest = ["who made you?", "what are you?"]
            localStorage.setItem("TerryQuestData", JSON.stringify(learntdataquest))
            localStorage.setItem("TerryAnsData", JSON.stringify(learntdataans))
        }
        haha = true
    } else if (repl.includes("fontcolor")) {
        colorchange = repl.replace("/fontcolor ", "")
        document.body.style.color = colorchange;
        localStorage.setItem("TerryFontColor", colorchange) 
        haha = true
        replywith("Success! I like that color!")
    }
    if (!repl.includes("reset")) {
        resettypecount = 0;
    }
}

function responses(arr) {
    console.log(learningstate)
    if (learningstate) {
        terrylearn(arr);
        return;
    }
    if (arr.includes("/")) {
        haha = false
        command(arr)
        if (haha == true) {
            return;
        }
    }
    if (!arr.includes("/")) {
        resettypecount = 0
    } 
    if (!chatmode) {
        googlesearch(arr)
        
    } else {
        ansucc = false;
        if (feelings!="none") {
            for (i = 0; i < 6; i++) {
                if (arr.includes(feelingsDone[i])) {
                    ansucc = true;
                    replies = "Alright. Thank you for sharing with me! Remember, in the end I am still only a bot, and don't forget to talk to other people too!"
                    
                    reply = replies;
                    replywith(reply);
                    feelings = "none"
                    return;
                }
            }
            
            if (feelings == "neg") {
                ansucc = true;
                replies = ["I understand and I am sorry. Is there anything more? (Reply with 'that's all' if you are finished)", "Oh... I see. Do you want to keep going? (Reply with 'that's all' if you are finished)","I'm really sorry. Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
                i = randint(2)
                reply = replies[i];
                replywith(reply);
            } else if (feelings == "good") {
                ansucc = true;
                replies = ["I see, that's awesome! Do you have anything more to add? (Reply with 'that's all' if you are finished)", "Oh I see! Very cool! Do you want to keep going? (Reply with 'that's all' if you are finished)","That's great!! I'm verry happy for you Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
                i = randint(2)
                reply = replies[i];
                replywith(reply);
                
            } else if (feelings == "neut") {
            ansucc = true;
            replies = ["Cool. Do you have anything more to add? (Reply with 'that's all' if you are finished)", "I see. Do you want to keep going? (Reply with 'that's all' if you are finished)","Nice! Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
        }
    } else {
        for (i = 0; i < 4; i++) {
            if (arr.includes(greets[i])) {
                ansucc = true;
                
                greetings();
                console.log("Ew")
                j = true;
                return;
            }
        }
        
        for (i=0; i < 2; i++) {
            if (arr.includes(openapps[i])) {
                ansucc = true;
                
                appOpen(arr);
                console.log("LOL")
                j = true;
                return;
            }
        }
        
        for (i = 0; i < 4; i++) {
            if (arr.includes(feelings1[i])) {
                ansucc = true;
                
                
                feelingit(arr);
                console.log("Ha")
                j = true;
                return;
            }
        }
        if (arr.includes("my name is ")) {
            ansucc = true;
            username = arr.replace("my name is ","")
            sit = username[0].toUpperCase();
            username = username.replace(username[0], sit);
            localStorage.setItem("TerryUsername",username);
            replywith("Hi "+username+", nice to meet you!");
        }
        console.log(ansucc)
        for (i=0; i < learntdataquest.length; i++) {
            console.log(learntdataquest[i])
            if (arr.includes(learntdataquest[i])) {
                console.log(learntdataans)
                replywith(learntdataans[i])
                ansucc = true;
            }
            
        }
            if (!ansucc) {
                terrylearn(arr)
            }
        }
    }

   
}


function googlesearch(i) {
    replies = [`I will google ${i}. `, `Opening google to find ${i}. `]
    x = randint(1)
    console.log("Should work")
    reply = replies[x]
    replywith(reply)
    sleep(1000).then(() => {
        window.open("https://www.google.com/search?q="+i)
    });
    
}

function respond() {
    ans = document.getElementById("Resp");
    ans = ans.value;
    orgians = ans;
    if (!ans.includes("/bgc ")) {
        ans = ans.toLowerCase();
    }
   
    j = false;
    responses(ans);
    

    document.getElementById("Resp").value = "";
    
}

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    document.addEventListener('keydown', event => {
        var key = event.key.toLowerCase();
        if (key == "enter") { 
            respond()
        }
    });
});
