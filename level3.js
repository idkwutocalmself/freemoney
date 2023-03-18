var zathInterval = 0;
var zathBonus = 10000;
var zathMS = 0;
var zathQuestion = 0;
var zathAnswer = 0;
var zathScore = 0;
var zathCurrentAnswer = '';
function displayText(x){}
function goto3(minilevel) {
	if ([-2, -1, 2].indexOf(minilevel) === -1 && minilevel >= 0) save(3, minilevel);
	switch (minilevel) {
        case -3:
            title("nice");
            write("<h1>you got blown up</h1>");
            setFail(2000);
            break;
		case -2:
			title("hmmm?")
			write("<h1>Where else do you think you'll be going?</h1>")
			setFail();
			break;
		case -1:
			title("you were kicked out")
			write("<h1>you were kicked out of the airport.</h1>")
			setFail();
			break;
		case 1:
			title('Uh-oh.')
			write(`<h1>You'll have to do a lot of mental abuse to humans to continue.</h1>
<div style="margin-top: 50px">
	<table align="center" style="margin-bottom: 15px">
        <tr><th>Question (<code id="questionnum"></code>)</th><th>Your answer</th></tr>
        <tr>
        <td><div id="question" style="font-size: 20px;"></div></td>
        <td><div id="answer" style="font-size: 20px;">
        <label><span style="position: fixed; top: -100px;">Enter answer: </span> <input type="text" style="border: none; background-color: transparent; text-align: center;" placeholder="666" oninput="zathCurrentAnswer = this.value" id="enter" onfocus="if (assist) {document.querySelector('#assistPad').hidden = ''; document.querySelector('#assistPad input').focus();}" /></label></div></td>
        </tr>
    </table>
    Score: <code id="score">0</code>
    Bonus: <code id="bonus">10000</code>
    Time: <code id="sec">0.0</code><br>
	<div id="assistPad" hidden="hidden" style="background-color: white; border: 1px solid; bottom: 0px; position: sticky; font-size: 40px; padding: 10px;"><label>Enter it here:<br /><input onblur="if (assist) {document.querySelector('#assistPad').hidden = 'hidden'; document.querySelector('#assistPad input').blur();}" type="text" oninput="document.querySelector('#enter').value = this.value; document.querySelector('#enter').oninput();" style="font-size: 20px;" /></div> 
 <style>#enter:focus { border: none; outline: none; }</style>
</div>
   `);
			document.querySelector('#enter').focus();
			newLevel1Problem();
			globalThis.zathInterval = setInterval(level1update, 10);
			break;
		case 2:
			title('Uh-oh.')
			clearInterval(globalThis.zathInterval);
			zathCurrentAnswer = '';
			write(`OK, so you took a total of ${zathMS / 1000} seconds for 20 problems. You also earned ${zathScore} points. Does that matter? Not right now.`);
			currentMoney += Math.round(zathScore / 10);
			next = false;
			if (zathMS >= 25000) {
				add('<p>Bro, you suck. Do it again. <button onclick="goto3(1)">I will do better!</button></p>');
			} else if (zathMS >= 15000) {
				add('<p>Meh...</p>');
				next = true;
			} else {
				add('<p>Wow so fast! nice hecking skills!</p><button onclick="goto3(1)">I will not heck this time!</button>');
			}
			if (next) {
				add('<p>Nice.</p>');
				add('You get to move on: <button onclick="goto3(3)">Go on</button>')
			}
			zathInterval = 0;
			zathBonus = 10000;
			zathMS = 0;
			zathQuestion = 0;
			zathAnswer = 0;
			zathScore = 0;
			break;
		case 3:
			title('Uh-oh.')
			write('<h1>This test will try your reaction times.</h1>Get ready or you will... not get rick rolled!? wait, that is illegal.');
			add(`<p>Press A in time.</p><div id="prompt1" hidden="hidden"><kbd>A</kbd> Do it</div><div id="prompt2"><kbd>A</kbd> Fail</div>`);
			if (assist) {
				add(`<p>Mobile assist:<br />
<button style="font-size: 40px;" onclick="if (!level3) return; if (failNow) fail(); else goto3(4);">A</button><br />	
Press that key in time.
 </p>`)
			}
			failNow = true;
			level3 = true;
			document.addEventListener('keydown', function(ev) {
				console.log('key down');
				if (!level3) return;
				if (ev.key.toLowerCase() !== 'a') return;
                level3 = false;
				if (failNow) fail();
				else goto3(4);
			});
			var timeout = Math.random() * 6942.0 + 500;
			setTimeout(() => {
				document.querySelector('#prompt1').hidden = '';
				document.querySelector('#prompt2').hidden = 'hidden';
				failNow = false;
			}, timeout);
			setTimeout(() => {
				document.querySelector('#prompt1').hidden = 'hidden';
				failNow = true;
				add(`<p>You failed! <button onclick="goto3(3)">Again!</button></p>`);
			}, timeout + 1000);
			break;
		case 4:
			title('good');
			write(`<h1>Alright that's enough mental abuse to humans.</h1> You can continue your quest for free money now.<br><button onclick='goto3(5)'>continue</button>`);
			level3 = false;
			break;
		case 5:
			title("where u wanna go?")
			write(`<h1>Where do u wanna go?</h1> OHIO??? <br><button onclick = 'goto3(6)'>Yeah</button><button onclick = 'goto3(-2)'>No</button>`);
			break;
		case 6:
			title("oh ok");
			write(`<h1>oh, there's a flight today.</h1> in an hour, in fact. even though there's a hurricane.<br>anyway, better hurry up. get ur ticket at that kiosk over there.<br><button onclick = 'goto3(7)'>Continue</button>`)
			break;
		case 7:
            title("wait time: 69 minutes");
			write(`<h1><span onclick = 'document.getElementById("joke").style.display = "block";'>oh crap</span> that line is long!</h1><p id='joke' style='display: none;'>There were three people on the roof of a tall building. A magician tells them that if they jump off, whatever they say while falling will appear on the bottom. The first person jumps off and says, "Pillows!", and a pile of pillows appears on the bottom. The third person pushes the second person off. The second person says, "Hey!", and he falls on a pile of hay. The third person trips on the side of the roof and yells, "Oh crap!"</p>Estimated wait time: 69 minutes.<br><button onclick='goto3(7.1)'>Wait</button><button onclick='goto3(-2)'>Leave</button>`)
			break;
        case 7.1:
            title("waiting")
            write(`<h1>You expect the estimated wait time to be wrong, but this time it appears to be correct.</h1><button onclick='goto3(7.2)'>Cut the line</button><button onclick = 'goto3(7.3)'>Keep waiting</button>`)
            break;
        case 7.2:
            title("cutting the line")
            write(`<h1>You sneak forward in the line.</h1>YES! they didn't notice!<br> You do it again. It all seems to be going really well until...`)
            setTimeout(function(){
                write(`<h1>Hey! weren't you just behind me? Why'd you cut?</h1>`);
                setTimeout(function(){
                    write(`<h1>oh no</h1>`);
                    setTimeout(function(){goto3(-1)}, 1000);
                }, 2000);
            }, 3000);
            break;
        case 7.3:
            title("dang")
            write(`<h1>well, it looks like you'll miss your flight, so you should leave the line.</h1><br><button onclick = 'goto3(-2)'>Leave</button><button onclick = 'goto3(7.4)'>Keep waiting</button`)
            break;
        case 7.4:
            title("nice");
            write(`<h1>oh look! people in front of you are leaving the line! apparently they had the same thought as you but decided to leave.</h1>You look at the wait time estimate again. ONLY 13 MINUTES? nice!`);
            setTimeout(function(){goto3(8)}, 13000);
            break;
		case 8:
			title('oh');
			write(`<h1>oh your in the front already?</h1>you must have fallen asleep while waiting (yes, i know that doesnt make any sense). Anyways, about that ticket... wait why is it so expensive? you spent all your money on the bus ride!<br><button onclick = 'goto3(-2)'>Leave</button><button onclick='goto3(9)'>Hack the kiosk</button>`);
			break;
		case 9:
			title('Hacking the kiosk');
			write(`<h1>Kiosk code: </h1>
<textarea id='code' style='width: 888px; height: 300px;'>
globalThis.inputtedMoney = 0;
globalThis.ticketPrice = 888;
globalThis.ticket = false;
globalThis.seatsLeft = [133];
globalThis.seat = -1;
if (globalThis.inputtedMoney > globalThis.ticketPrice - 222){
    globalThis.ticket = true;
}
if (globalThis.ticket){
    globalThis.seat = globalThis.seatsLeft[randint(0, globalThis.seatsLeft.length - 1)];
}
else {
    displayText("Input more money!");
}
</textarea><br> <button onclick = "runCode()" >done</button`);
			break;
        case 9.3:
            title("you hecked it wrong")
            write(`<h1>wait a minute, that seat is already occupied or doesnt exist at all!</h1>`)
            setFail();
            break;
        case 9.6:
            title("crap")
            write(`<h1>the kiosk starts making weird noises.</h1>`)
            setTimeout(function(){
                write(`<h1> oh no! get out of there! </h1>`);
                setTimeout(function(){
                    write(`<h1> The kiosk explodes. </h1>`);
                    setTimeout(function(){
                        goto3(-3);
                    }, 1000)
                }, 1000)
            }, 2000);
            break;
		case 10:
			title('what a weird kiosk');
			write('<h1>That was a very weird kiosk.</h1> It gave you a random seat and there was only one seat available. oh well, you have your ticket, and theres still like half an hour until the flight. Time to go to the waiting area...');
            setTimeout(function(){goto3(11)}, 5000);
			break;
        case 11:
            title("hmm?")
            write(`<h1>Ay you there! Trying to sneak past security?</h1>oh you forgot about the bag checks and stuff. <br><button onclick = ></button>`);
            break;
		default:
			align("center");
			title("404 page and everything");
			write("<h1>404. since the only way you could have reached this page is by hecking and hecking is illegal, you're gonna get tasered.</h1><h2>Wait, that's illegal.</h2>");
			setTimeout(fail, 5000);
			break;
	}
}
function level1update() {
	if (localStorage.getItem('level') != '3' || (localStorage.getItem('minilevel') != '1')) clearInterval(globalThis.zathInterval);
	zathBonus -= 12;
	zathMS += 10;
	if (zathBonus <= 0) zathBonus = 0;
	document.querySelector('#bonus').textContent = zathBonus;
	document.querySelector('#score').textContent = zathScore;
	document.querySelector('#questionnum').textContent = zathQuestion + " / 20";
	document.querySelector('#sec').textContent = String((Math.round(zathMS / 100) / 10)).padEnd(Math.floor(Math.log10(zathMS)), '.0') + "s";
	if (zathCurrentAnswer == zathAnswer) {
		document.querySelector('#enter').value = '';
		document.querySelector('#assistPad input').value = '';
		zathScore += 500;
		zathScore += zathBonus;
		newLevel1Problem();
	}
}
function newLevel1Problem() {
	if (zathQuestion > 20) return;

	zathBonus = 10000;
	zathQuestion += 1;

	if (zathQuestion > 20) return goto3(2);
	var operations = ['+', '-', '*'];
	var operation = operations[Math.floor(Math.random() * 3)];
	var num1 = Math.floor(Math.random() * 12 + 1);
	var num2 = Math.floor(Math.random() * 12 + 1);

	document.querySelector('#question').textContent = `${num1} ${operation} ${num2}`;
	zathAnswer = eval(`${num1} ${operation} ${num2}`);
}
function runCode(){
    try {
        eval(document.getElementById('code').value)
        if (globalThis.seat == 42){
            goto3(10);
        }
        else {
            goto3(9.3);
        }
    }
    catch(error) {
        console.error(error);
        goto3(9.6);
    }
}