var clicked = false;
var started = false;
var speed = 0;
function goto1(minilevel) {
    started = false;
    level = 0;
    min = 0;
    sec = 0;
    speed = 0;
    small = 0;
    level4seconds = 0;
    level4centiseconds = 0;
    save(1, minilevel);
    switch (minilevel) {
        case 1:
            title("Free money?")
            align("center");
            // make it so that doing tab doesnt work
            write(`<span style = 'font-size: 30px;'>So you really want that <span onclick='goto1(2)'>free money</span>, do you? <br> <button tabindex="-1" id = "b1" onmouseover = "this.innerHTML = 'NO'; document.getElementById('b2').innerHTML = 'YES'" onclick = fail()>NO</button> <button tabindex="-1" id = "b2" onmouseover = "this.innerHTML = 'NO'; document.getElementById('b1').innerHTML = 'YES'" onclick='fail()'>YES</button></span><br><br><br><span style='font-size:5px;' i >YES</span>`);
            break;
        case 2:
            title("Sussy")
            align("center")
            write(`You seem to really want free money. But is the money for you? <br> to verify that the money is yours, please enter the code you find on line 5434 in virus.sus. Oh wait you didnt download it? well too bad. <br>Don't have a text editor that shows line numbers? Sucks to suck.<br> <input type='text' id='bus'><button onclick='if (document.getElementById("bus").value == "4328533280912318321105872366649827352888") goto1(3); else fail()'>SOOBMIT</button>`)
            break;
        case 3:
            title("Hmm?")
            align("center")
            write(`<div style = 'height: 100vh'>
                <h2>You have successfully inputted the code. If you click one of the following buttons once, you can continue. If you click on a different button, it kills you. Note that the system may lag after you click.</h2>
                ${("<br>" + "<button onclick='fail()' style='margin: 3px'>❌</button>".repeat(12)).repeat(14)}
            </div>
            <button onclick = 'goto1(4)'>✅</button>`)
            break;
        case 4:
            if (!clicked) {
                clicked = true;
                globalThis.clickTimeout = setTimeout(function() {
                    clicked = false;
                    title("Nub or Pro? or...")
                    align("center")
                    write(`<h2> Are you a <button onclick='write("You have admitted you are a nub"); setTimeout(fail, 3000)'>pro nub</button><br> or <br><button onclick='write("You have admitted you are a nub"); setTimeout(fail, 3000)'>nub pro</button><br>?</h2> <span style='color:  ${!assist ? 'rgb(215, 255, 255);' : 'black;'} cursor: pointer;' id="hide"> or a <span onclick = goto1(5)>hecker</span></span>`);
                    add(`<h2>Do you want to know what a nub is?</h2> It means a small lump. Definitely not something else.`);
                }, 5000)
                // noooooo
            }
            else {
                clicked = false;
                clearTimeout(globalThis.clickTimeout);
                write(`it said to click it once, ya big nub!`)
                setTimeout(fail, 3000)
            }
            break;
        case 5:
            align("center");
            title("Imposter?")
            write(`<h2> YOU HAVE ADMITTED TO BEING A HECKER. NOW GO TO JAIL! Do not pass GO and do not collect $200.<small> wait a minute this isnt monopoly i forgot</small> ANYWAY GO TO JAIL NOW</h2><input id="input"><button onclick = "if (document.getElementById('input').value.toLowerCase().includes('no')) goto1(6); else fail();">submit</button>`);

            break;
        case 6:
            align("center")
            title("WHAR THE HAIL?")
            write(`<h2> wat da h e double hockey sticks? Art thou on <input id="input" /><button onclick = "if (document.getElementById('input').value.toLowerCase().replaceAll(' ', '') == 'cokecane') goto1(7); else fail();">submit</button> ?</h2><img src = 'coke.jpeg' style = 'height: 200px;'><img src = 'plus.png' style = 'height: 200px;'><img src = 'cane.png' style = 'height: 200px;'>`);
            // n i c e
            break;
        case 7:
            align("center")
            title("speeeed")
            write(`<h2>You are about to run from the police. But are you fast enough?</h2><h1>Speed: <span id='speed'>0</span> mph</h1> <br> <button style='width: 300px; height: 300px;' onmousedown = "accelerate()" id='accelerate'>Click to accelerate (police will chase you)</button>`);
            break;
        case 8:
            align("center");
            title("Time waster")
            write(`<h2>This level is basically purely to waste your time. (Unless you're Mr. Floyd [read source if you don't know what that means], in which case this level is cakewalk.) <br></h2>`);
            add(`Stop this stopwatch on the second<br><div id='timer' style='font-size: 30px;'><span id='second'>00</span>:<span id='centisecond'>00</span><br><button id='start' onclick='startlevel4(); this.disabled = "disabled";'>Start</button><button id='stop' disabled='disabled' onclick='stoplevel4(); this.disabled="disabled"'>Stop</button></div><div id="skip" hidden="hidden"><button onclick="goto1(9)">I tried and tried, but I could not do it!</button></div>`)
            // in class mr floyd said if you can pause a stopwatch at exactly 1:00, he would give us a bonus point. he did it first try 3 times. either hes insanely good or hes insanely lucky. either way this level is cakewalk for him        

            break;
        case 9:
            align("center");
            title("time waster part 2")
            write(`<h2>hmm lets see... the stopwatch from the previous part was on for a total of ${totalTime / 1000} seconds. So, thats how long you have to wait now.</h2>`)
            setTimeout(function() { goto1(10); totalTime = 0; }, totalTime);
            break;
        case 10:
            align("center")
            title("Judgement Test")
            align("center")
            write(`<h2>Try to guess the percentage. ±3% ok.</h2>`);
            var amount = Math.random();
			if (assist) add(`it's ${amount * 100} percent because it may be hard to read on ur screen`);
            add(`
   <div>
   <div style="position: absolute; width: 100px; height: 200px; border: 1px solid; background-color: 	blue;">&nbsp;
   <div style="position: absolute; top: 0; left: 0; height: ${200 * (1 - amount)}px; width: 100px; background-color: white;"></div>
   </div>
   <form action="javascript:;" onsubmit="if (Math.abs(parseFloat(document.querySelector('#amount').value) - (${amount} * 100)) > 3) {setFail();setTimeout(() => add('It was ${amount * 100}% exactly.'), 0)} else {goto1(11);}">
       How much is it? ±3% allowed.
       <br />
       <label>How much: <input id="amount" /></label>
       <input type="submit" value="Soobmit" />
   </form>
   			`);
            // 
            break;
        case 11:
            title("Taxes")
            align("center")
            write('uhm-- I am sorry, but it appears you need to pay taxes or else the Internal Revenue Service will confiscate your property.');
            add(`<p>Luckily, you can keep your free money by pushing the button below hard enough.</p>
   <label>Progress: <progress max="100000" value="0"></progress></label><br /><button onmousedown="console.log('mouse down'); holdUpdating = true;" onmouseup="holdUpdating = false; mouseDownProgress = 0;">Hold this</button>`);
			if (assist) add(`You cannot push buttons, right? <button onclick="holdUpdating = true; mouseDownProgress += (100000 - mouseDownProgress) / 2;">Click this instead.</button>`);
            holdUpdating = false;
            mouseDownProgress = 0;
            updateInterval = setInterval(function() {
                if (holdUpdating) mouseDownProgress += Math.sqrt(Math.cbrt(mouseDownProgress))+1;
                document.querySelector('progress').value = mouseDownProgress;
                if (mouseDownProgress >= 100000) {
                    clearInterval(updateInterval);
                    goto1(12);
                }
                if (localStorage.getItem('level') != '1' || localStorage.getItem('minilevel') != '11') clearInterval(updateInterval);
            }, 1);
            break;
        case 12:
            title("Quick!")
            align("center")
            write(`You start to punch the tax machine. It backfires. You get kicked out of here. No more free money for you. <p><em>You sure?</em></p><p>Yea.</p><p><em>Sorry.</em></p><p>FIIIINE.</p><p>But you'll have to get incredibly lucky and choose the right button within 5 seconds.<center><button onclick="fail()">Is it this?</button> <button onclick="fail()">Or this?</button><div style="height: 100vh;">&nbsp;</div><button onclick="goto1(13)">HEY! You're not supposed to be seeing this!</button></center>`);
            globalThis.failTimeout = setTimeout(fail, 5000);
            break;
        case 13:
            title("hmmmmmmm?")
            align("center")
            clearTimeout(failTimeout);
            write(`Ahh yes, that trick earlier did work...<br />What is the length of this string? <pre>aaaaa&#x200d;aaaaaaaaaaaaaaaaaaa</pre><br />hint: there's a hidden character and 24 a's. <input type='number' id='ans' step='1' /> <button onclick='if (document.getElementById("ans").value == 25) goto1(14); else fail();'>soobmit</button>`);
            // for some reason it hurts for me
            // not seeing /> after a
            // self closing tag
            // or required instead of
            // required="required"
            break;
        case 14:
            align("center");
            title("last test")
            write(`<h1>Null strings are fun.</h1> <h2>Last (and hardest) test before you get <del>rickrolled</del> <ins>your free money</ins>!</h2><small>but since it is so hard, you can't die.</small><p style='color: rgb(215, 255, 255);'>This is also the hardest level to code. Better appreciate it or you're gonna get tazered.</p><br />`);
			if (assist) {
				add('This game may be impossible to play on mobile. So good news, you do not have to!<br />');
				add(`<button onclick="goto1(15)">Skip</button>`);
			}
			add(`<h3>Get a score of 3000 or more to continue. Play the actual game in our games page.</h3><iframe width="50%" height="700px" src="games/bouncyball.html?in-iframe-freemoney=true"></iframe>`);
            break;
        case 15:
            align("center");
            title("YOU WI- wait what?")
            write("<h1>You win!</h1><h2>You have passed all of the tests. So now, you get your free money! Oh wait, its in Ohio!</h2><button onclick = 'fail()'>Ragequit</button><button onclick='goto2(1)'>Continue</button>")
            break;
        default:
            align("center");
            title("404 page and everything");
            write("<h1>404. since the only way you could have reached this page is by hecking and hecking is illegal, you're gonna get tasered.</h1><h2>Wait, that's illegal.</h2>");
            setTimeout(function() { fail() }, 5000);
            break;
    }

    for (const el of document.querySelectorAll("input"))
        el.setAttribute("autocomplete", "off")
}
var faoihfeiwh = load();
// basically it loads it then immediately unloads it
// this checks if you have visited the wesite before
// load() now returs true if saved is true
// yea ik
// should I make ripoffs of game shows
// jeopardy, wheel of fortune, deal or no deal, 
// etc.
// do it on here

if (!faoihfeiwh) {
    goto1(1);
}
// oh bruh im dumb
function accelerate() {
    if (started) {
        speed++;
        document.getElementById('speed').innerHTML = speed;
		// on most mobile devices, clicking
		// twice quickly will zoom in,
		// so on mobile, there are lower
		// requirements.10doned
        if (speed == (assist ? 20 : 55)) {
            clearTimeout(globalThis.speedTimeout);
            goto1(8)
        }
    }
    else {
        speed = 0;
        started = true;
        add('<br> <h2>The police have started chasing you. Click the button to accelerate!</h2>')
        globalThis.speedTimeout = setTimeout(function() {
            document.getElementById('accelerate').disabled = 'disabled';
            add('<br><h2>You didn\'t accelerate fast enough. The police caught you.</h2>'); setTimeout(fail, 3328)
        }, 8888);
    }
}
function startlevel4() {
    document.getElementById('stop').disabled = ''
    globalThis.level4 = setInterval(function() {
        totalTime += 10;
        level4centiseconds++;
        if (level4centiseconds == 100) {
            level4seconds++;
            level4centiseconds = 0;
        }
        if (level4seconds == 60) {
            level4seconds = 0;
        }
        if (level4centiseconds < 10) {
            document.getElementById('centisecond').innerHTML = '0' + level4centiseconds;
        }
        else {
            document.getElementById('centisecond').innerHTML = level4centiseconds;
        }
        if (level4seconds < 10) {
            document.getElementById('second').innerHTML = '0' + level4seconds;
        }
        else {
            document.getElementById('second').innerHTML = level4seconds;
        }
        if (localStorage.getItem('level') != '1' || localStorage.getItem('minilevel') != '8') clearInterval(int);
    }, 10)
}
var level4stops = 0;
function stoplevel4() {
	level4stops++;
    clearInterval(level4);
    document.getElementById('start').disabled = ''
    if (level4centiseconds == 0) {
        setTimeout(function() { goto1(9) }, 1000);
		return;
    }
	if (level4stops > 2) document.querySelector('#skip').hidden = '';
}
var level = 0;
var min = 0;
var sec = 0;
var small = 0;
var level4seconds = 0;
var level4centiseconds = 0;
var totalTime = 0;