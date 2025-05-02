let riddle = 0;
const fel = ["Fel svar.", "Nja, testa igen.", "Det var inte rätt.", "Bra försök!", "Nu blev det visst lite fel.", "Nope!", "Oops!"];
let text1 = 'RGUgdHJlIGtvbXBpc2FybmEgU29mZmFuLCBTb3NzbyBvY2ggUGhpYSBnaWxsYXIgYWxsYSBhdHQgZHJpY2thIE5vY2NvLiBUaWxsc2FtbWFucyBkcmlja2VyIGRlIDYyIGJ1cmthciBtZWQgTm9jY28gaSB2ZWNrYW4uIFNvZmZhbiBkcmlja2VyIGR1YmJlbHQgc+UgbeVuZ2EgYnVya2FyIE5vY2NvIHNvbSBTb3NzbyBvY2ggU29zc28gZHJpY2tlciB0duUgYnVya2FyIGbkcnJlIORuIFBoaWEu';
let question1 = 'SHVyIG3lbmdhIGJ1cmthciBOb2NjbyBkcmlja2VyIFNvZmZhbiBwZXIgdmVja2E/';
let text2 = 'SSBjYW4gdGFrZSB5b3UgdG8gdGhlIGZvdXJ0aCBtb3N0IHBvcHVsYXRlZCBjaXR5IGluIEV1cm9wZS4gSW5kdXN0cnkgZXZlbnQgaGVyZSBpbiBvbmUgb2YgdGhlIEJpZyBGb3VyLiBBaXIgdHJhdmVsIGNhbiB0YWtlIHVzIHRoZXJlIHRvbW9ycm93LiBUaGVyZSBpcyBzdWZmaWNpZW50IGZ1bmRzIGluIHRoZSBiYW5rIGFjY291bnQuIEl0J3Mgb25seSB5b3UuIEl0IHByb2NlZWRzIG5hdHVyYWxseS4gWW91IHdhbnQgdG8gZ28gYWxvbmcuIFdlJ3JlIGluIHRoZSBzYW1lIHN0YXRlIG9mIG1pbmQu';
let question2 = 'VmFkIGhldGVyIGzldGVuIHNvbSBoYXIg9nZlcnNhdHRzIHRpbGwgZW5nZWxza2E/';
let text3 = 'SW5mbHVlbmNlcm4gZ2xpdHRlcnNvZmlhIGhhciBza2FwYXQgZXR0IGtvbnRvIHDlIGRlbiBueWEgb2NoIG9t5XR0bGlndCBwb3B1bORyYSBwbGF0dGZvcm1lbiBUYWtUaWsuIFR5duRyciBoYXIgaG9uIGds9m10IHNpdHQgbPZzZW5vcmQgb2NoIGvkbm5lciBodXIgcGFuaWtlbiB25Hhlci4gTuRyIGhvbiBza2FwYWRlIGtvbnRvdCBmaWNrIGhvbiBm9nJiZXJlZGEgZW4gbGVkdHLlZCBzb20gc2t1bGxlIGt1bm5hIGhq5GxwYSBoZW5uZSBhdHQga29tbWEgaWjlZyBzaXR0IGz2c2Vub3JkIG9tIGRldHRhIHNrdWxsZSBpbnRy5GZmYS4gTGVkdHLlZGVuIORyIFJVTExFIExFRFRSxUQgTUlORFJFLg==';
let question3 = 'VmFkIORyIGdsaXR0ZXJzb2ZpYXMgbPZzZW5vcmQ/';
let text4 = 'S29uc3RyaWt0aXYgcGVyaWthcmRpdCBrYW4gbGVkYSB0aWxsIGF0dCBkZXQgYmlsZGFzIGV0dCBo5XJ0IHNrYWwgcnVudCBoauRydGF0IHRpbGwgZvZsamQgYXYgZvZya2Fsa25pbmdhciwgZGV0dGEgYnJ1a2FyIOR2ZW4ga2FsbGFzIGb2ciBwYW5zYXJoauRydGEuIFDlIGVuZ2Vsc2thIGthbGxhcyBkZXQgZvZyIG7lZ290IG1lciB0cm9waXNrdCBvY2ggc2p1a2RvbWVuIGhhciBibGFuZCBhbm5hdCBm9nJla29tbWl0IGkgc2VyaWVuIFRoZSBHb29kIERvY3Rvci4gMjAyMSBzbORwcHRlIHR25SB25HJsZHNhcnRpc3RlciBlbiBs5XQgc29tIHZpc3NhIHRyb3IgaGFuZGxhciBvbSBkZW5uYSBzanVrZG9tLg==';
let question4 = 'VmFkIGhldGVyIGRlbiBtYW5saWdhIGFydGlzdGVuIGJha29tIGzldGVuPw==';
let text5 = 'QnJhIGpvYmJhdCwgZHUga2xhcmFkZSBhbGxhIGfldG9yISBEdSBrb21tZXIgbnUgYXR0IGblIGVuIGJlbPZuaW5nIGJlc3TlZW5kZSBhdiBldHQgcHJlc2VudGtvcnQgcOUgTHlrbyBvY2ggZXR0IGZsYWsgbWVkIE5vY2NvIGkgdmFsZnJpIHNtYWsuIFNraWNrYSBs9nNlbm9yZGV0IFBPVEFUSVMgb2NoIPZuc2thZCBzbWFrIHDlIE5vY2NvIHRpbGwgU2FuZHJhIGb2ciBhdHQgbPZzYSBpbiBkaW4gdmluc3Qu';

function startGame() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("riddle1").style.display = "block";
    document.getElementById("form1").style.display = "flex";
}

function checkPassword() {
    const input = document.getElementById("password").value.toLowerCase();
    document.getElementById("password").value = '';
    if (riddle === 0 && input === "sadel" || input === "en sadel") {
        riddle = 1;
        document.getElementById("riddle1").style.display = "none";
        document.getElementById("riddle2text").innerText = atob(text1);
        document.getElementById("riddle2question").innerText = atob(question1);
        document.getElementById("riddle2").style.display = "block";
    }
    else if (riddle === 1 && input === "30" || input === "trettio") {
        riddle = 2;
        document.getElementById("riddle2").style.display = "none";
        document.getElementById("riddle3text").innerText = atob(text2);
        document.getElementById("riddle3question").innerText = atob(question2);
        document.getElementById("riddle3").style.display = "block";
    }
    else if (riddle === 2 && input === "pari") {
        riddle = 3;
        document.getElementById("riddle3").style.display = "none";
        document.getElementById("riddle4text").innerText = atob(text3);
        document.getElementById("riddle4question").innerText = atob(question3);
        document.getElementById("riddle4").style.display = "block";
    }
    else if (riddle === 3 && input === "clueless") {
        riddle = 4;
        document.getElementById("riddle4").style.display = "none";
        document.getElementById("riddle5text").innerText = atob(text4);
        document.getElementById("riddle5question").innerText = atob(question4);
        document.getElementById("riddle5").style.display = "block";
    }
    else if (riddle === 4 && input === "elton john") {
        riddle = 5;
        document.getElementById("riddle5").style.display = "none";
        document.getElementById("form1").style.display = "none";
        document.getElementById("solutiontext").innerText = atob(text5);
        document.getElementById("solution").style.display = "block";
    }
    else {
        const random = Math.floor(Math.random() * fel.length);
        alert(fel[random]);
    }
}

var input = document.getElementById("password");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button2").click();
    }
});

