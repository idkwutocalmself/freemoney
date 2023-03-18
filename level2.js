var money = randint(1000, 20000)
var colors = ['red', 'red', 'orange', 'orange', 'yellow', 'yellow', 'green', 'green', 'blue', 'blue', 'rgb(255, 138, 198)', 'rgb(255, 138, 198)', 'purple', 'purple', 'cyan', 'cyan', 'black', 'black', 'rgb(150, 89, 18)', 'rgb(150, 89, 18)'];
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
var umbrella = false;
var first = true;
var numdone = 0;
var done = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var before = -1;
var startedGame = false;
let windSpeed = 0;
shuffleArray(colors);
function goto2(minilevel) {
    numdone = 0;
    done = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    startedGame = false;
    before = -1;
    money = randint(1000, 20000)
    shuffleArray(colors);
    // saving banned on level 9
    // (depends on previous one)
    if (minilevel > 0 && [9, 11.7, 16, 18].indexOf(minilevel) === -1) save(2, minilevel);
    switch (minilevel) {
        case -7:
            title("You died of hurricane.")
            write("<h1> You died of exposure to the hurricane.</h1>");
            setTimeout(fail, 3000);
            break;
        case -5:
            title("You died!");
            write(`<h1>You died!</h1>
            <br><p>A BIG NUB fell from a high place</p>`);
            setTimeout(fail, 3000);
            break;
        case -4:
            title("You broke your hand");
            write("<h1> You broke your hand trying to bust your way in.</h1>")
            setTimeout(fail, 3000);
            break;
        case -3:
            title('You have children inside you?')
            write("<h1>Ayo thats a little sus bro.</h1>")
            setTimeout(function() { fail() }, 4321)
            break;
        case -2:
            title('You were kicked off')
            write('<h1>The driver kicked you off.</h1>')
            setTimeout(function() { fail() }, 4321)
            break;
        case -1:
            title('You died')
            write('<h1>You have died of fall damage.</h1>')
            setTimeout(function() { fail() }, 4321)
            break;
        case 0:
            title("taking forever");
            write('Road trips take forever. Unless you are already in Ohio. <br> <button onclick="fail()">drive into the ocean instead</button>')
            break;
        case 1:
            align('center');
            title('How do you go to Ohio?');
            write(`<h1>So, how do you get to Ohio? You are in 1290 Parkmoor Ave.</h1><button onclick = "goto2(0)">Car</button><button onclick='goto2(2)'>Plane</button>`);
            break;
        case 2:
            align('center');
            title('How do you get to the Airport?');
            write(`<h1>The Airport is in San Francisco.</h1> <div style = 'border:4px solid black; height: 196px; width: 370px; display: inline-block; border-radius: 10px; font-size: 33px; cursor: pointer;' onmouseover = "globalThis.gTimeout = setTimeout(function(){document.getElementById('bus').style.display = '';}, 2314);" onmouseout = "clearTimeout(globalThis.gTimeout); document.getElementById('bus').style.display='none';">Hover to wait for the bus to San Francisco. The bus will leave if you stop hovering.</div><br><br><br><br><button style='display: none; font-size: 30px;' id='bus' tabindex='-1' onclick = 'goto2(3)'>Board the Bus!</button><br><br><br><div style='font-size: ${assist ? 10 : 2}px;display: inline-block;' onclick = 'document.getElementById("bus").style.display="";'>force show</div>`)
            break;
        case 3:
            title('All aboard the SUS BUS')
            write(`<h1>We're going to San Francisco Airport.</h1><p>WHAAAT!? I NEED TO PAY!?</p> I only have bald dolls, but no dollhairs! I think I need to pull my own hair! Wait, I'm bald! <br><br><button onclick='goto2(4)'>get some money from your bank account</button><!-- yikes. if you are seeing this, good for you. -->`);
            break;
        case 4:
            title(`Bank account`)
            write(`<div><h1>Welcome to your bank account!</h1><p>You can only withdraw as much as you have. The bus ticket costs 99% of your money.</p><input type='number' id='number'><button onclick = 'if (document.getElementById("number").value >= 0.99*money && document.getElementById("number").value <= money) goto2(5); else fail();'>Submit</button><br><br><br><p style='color: ${assist ? 'black' : 'rgb(198, 255, 255)'};'>You have ${money} dollhairs.</p></div>`)
            break;
        case 5:
            title('Now that you got the money...')
            write(`<h1>All the seats are taken!</h1><p>oh, there are seats on the roof. <br>WHY ARE THERE SEATS ON THE ROOF? BUSSES ARENT SUPPOSED TO HAVE THAT!<br>Oh whatever, it's fineeeee at least its a seat.</p>Oh no, its locked! <br> solve this matching puzzle within 1 minute to unlock.<br><button onclick = 'this.disabled = "disabled"; globalThis.abcdef = setTimeout(fail, 60000); enable();'>Start</button><br><br>`)
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 5; j++) {
                    add(`<button style="display: inline-block; width: 100px; height: 80px; border: 1px solid black; border-radius: 4px; background-color: rgb(215, 255, 255);" id="${5 * i + j}" onclick="clickcolor(this.id)" disabled='disabled'></button> `)
                }
                add('<br>')
            }
            break;
        case 6:
            clearTimeout(globalThis.abcdef);
            title('Roof news');
            write(`<h1>You have successfully got onto the roof!</h1><p>Oh look, there is a radio on here.</p><audio controls="controls">
<source src="news.mp3" type="audio/mpeg" />
</audio><br>Wait, what natural disaster is coming again? I didnt hear.<br><br><input type='text' id='hurricane'><button onclick='if (document.getElementById("hurricane").value.toLowerCase() == "hurricane") goto2(7); else fail();'>submit</button>`);
            break;
        case 7:
            title('Hurricane?')
            write(`<h1>Wait, it's heading for where we're going!</h1><p>Oh, no! The driver doesn't know!</p>What do you do? <br> <select style="margin-top: 10px" id='select'><option>Jump off</option><option>Yell at the driver</option><option>I am a bus</option><option>Stay on</option></select><button onclick="if (document.getElementById('select').selectedIndex == 3) goto2(8); else goto2(document.getElementById('select').selectedIndex*(-1)-1);">Submit</button>`);
            break;
        case 8:
            var first = true;
            title('The feeway')
            write(`<h1>The bus has turned onto the feeway.</h1><p>Oh crap it's so windy!</p><p>However, not all is lost - the bus actually runs on wind (yes, I know that makes absolutely no sense)</p><p>Wait until the wind reaches a certain speed to continue.</p><span style="font-size: 40px;">Wind speed: <span id="speed">0</span> mph</span>`);
            int = setInterval(function() {
                windSpeed += Math.random() * 0.8;
                document.querySelector("#speed").innerText = String(Math.round(windSpeed * 10) / 10).padEnd(Math.floor(Math.log10(windSpeed) + 3), '.0');

                if (windSpeed >= 40 && first) {
                    goto2(9);
                    first = false;
                }
                if (localStorage.getItem('level') != '2' || (localStorage.getItem('minilevel') != '8' && localStorage.getItem('minilevel') != '9')) clearInterval(int);
                if (windSpeed >= 120) {
                    goto2(10);
                    clearInterval(int);
                }
            }, 300);
            break;
        case 9:
            document.getElementById("level").innerHTML = '9';
            title("Junk tion")
            add(`<h1>The bus turns onto the junk tion to US 101 north.</h1><p style="margin: 40px">also, you are freezing to death due to the wind. It looks like you are getting closer to the hurricane. Luckily, you found a box of hand warmers with the radio. Wait, speaking of the radio, there's another news report!</p><audio controls="controls">
<source src="fake-crash.mp3" type="audio/mpeg" />
</audio><br>You continue to watch as the wind speedometer gets higher.<br><br><button onclick="if (confirm('ARE YOU SUREEE??!!')) {goto2(10); clearInterval(int)}">Skip the best news report ever</button>`)
            break;
        case 10:
            title(`Please repeat`);
            write(`<p>How many miles long was the slowdown? Sorry again.</p> <input type="number" id="number-2"><button onclick="if (document.getElementById('number-2').value === '5') goto2(11); else fail()" style="margin-left: 10px">Soooobmit</button>`);
            break;
        case 11:
            int = setInterval(function() {
                windSpeed += Math.random() * 0.3;
                document.querySelector("#speed2").innerText = String(Math.round(windSpeed * 10) / 10).padEnd(Math.floor(Math.log10(windSpeed) + 3), '.0');
                if (windSpeed > 150) {
                    clearInterval(int);
                }
                if (localStorage.getItem('level') != '2' || localStorage.getItem('minilevel') != '11') clearInterval(int);
            }, 300);

            title("Rush hour be like");
            write(`<h1>A FIVE MILE SLOWDOWN?</h1>
            <p>What are you gonna do now?</p>
            <select id="slowdown-select">
                <option>Walk there</option>
                <option>Watch YouNoob</option>
                <option>Just wait</option>
            </select>
            <button onclick="goto2(Math.round((document.getElementById('slowdown-select').selectedIndex * 0.1 + 11.1)*10)/10); clearInterval(${int})" style="margin-left: 3px">Sooooooooooooooooobmit </button>

            <h2 style="margin-top: 15vh">Wind Speed: <span id="speed2"></span> mph</h2>
            <p>Meanwhile, the wind continues blowing faster...</p>
            <p>Good thing you brought those extra clothes.</p><br>`);
            break;

        case 11.1:
            title("Are you sure?");
            write(`<h1>You ask to exit the bus.</h1>
            <p>The driver asks whether you are sure.</p>
            <p>Are you sure?</p>
            <button onclick="goto2(11.6)">Yes</button>
            <button onclick="goto2(11.5)">No</button>`);
            break;

        case 11.2:
            title("YouNoob");
            write(`<h1>WHAT IS IN YOUR RECOMMENDED AAA</h1>
            <p>And also, you have like 0.69420 MB of mobile data left...</p>
            <p>You should probably save some of that.</p>
            <p>Well, at least you didn't fail.</p>
            <button onclick="goto2(11)">Back</button>`)
            break;

        case 11.3:
            timeout = setTimeout(() => goto2(12), 20 * 1000);
            title("Waiting...");
            write(`<h1>I recommend you wait, but you'll be waiting for a while.</h1>
            <p>3 hours and 14 minutes, according to Geegle Mops.</p>
            <button onclick="goto2(11); clearTimeout(${timeout})">Back</button>`);
            break;

        case 11.5:
            title("To the roof");
            add("<h1>Back to your seat!</h1>");
            setTimeout(() => goto2(11), 1000);
            break;

        case 11.6:
            title("The walk");
            write(`<h1>You exit the bus.</h1>
            <p>And now you're next to the road on the highway. And you're freezing in the wind.</p>`);
            setTimeout(() => add(`<p>Suddenly, the bus starts "running" on the wind. It flies into the air, and glides off into the distance.</p>
            <img src="bus.gif" width="408" height="300"/>`), 2000);
            setTimeout(() => add(`<p>You're kinda stuck out here. And it's a fifteen mile walk.</p>
            <button onclick="goto2(11.7)">Ask for a ride</button>`), 4000);
            break;

        case 11.7:
            title("Asking around on the highway lol imagine");
            write(`<h1>You ask for a ride.</h1>
            <p>"WHAT?! You're going to the airport?! Sorry, we're going to turn around," they say. "Somewhere."</p>
            <p>So no one wants to take you to the airport.</p>`);
            setTimeout(fail, 8000);
            break;

        case 12:
            title("Patience is pog");
            write(`<h1>Patience is key!</h1>
            <p>Patience is key! Why trust that Geegle Mops thingy?! The wind picks up speed, and the bus starts gliding across the wind! It literally "runs" on wind! Woohoo!</p><br>
            <img src="bus.gif"/><br><br>
            <button onclick="goto2(13)">Continue</button>`);
            break;
        case 13:
            title("Oh nice!");
            write(`<h1>Everything seems to be well currently.</h1><p>You are inside a hurricane, but that doesn't seem to matter when you're surrounded by a tower of hand warmers.</p><h3>You look below the bus and you find that you are flying above the traffic you would have been stuck in!</h3>The advantages of a bus that runs on wind. <br><br> <button onclick='goto2(14)'>Continue</button>`)
            break;
        case 14:
            title("News Report");
            write(`<h1>Another News Report</h1>
            <p>The radio turns on after a few minutes, and a news report plays.</p>
            <audio controls>
                <source src="flying_bus.mp3"></source>
            </audio><br>
            <p>Meanwhile, a tower of monkey poop slowly comes into view.</p>
            <button onclick="goto2(15)">Oh no... Continue</button>`);
            break;
        case 15:
            title("Oh crap.")
            write(`<div id="crash"></div>
            <h1>You check the wind speed again.</h1>
            <h2>169 mph???</h2> 
            That's a category 5 hurricane! (it also means you broke the speed limit and have to pay 500 dollhairs. oh well, the police isn't here yet.)<br><br>
            Oh, no! you are about to crash!<br><br>
            <button onclick = "goto2(16); document.getElementById('crash').setAttribute('class', 'flash2');">just get it over with</button>`)
            break;
        case 16:
            title("CRASH!")
            document.getElementById('crash').setAttribute("class", "");
            setTimeout(() => write(`
            <h1>The bus crashes into the tower of monkey poop.</h1>
            <p>You got catapulted up and away from the bus and the tower, due to the conservation of momentum.</p>
            <br><br><img src='psychics.png'/><br><br>
            You land in a tree. <br>
            The tree bends and snaps under the force of you travelling at 169 miles per hour.<br>
            You land on the window of the airport. Unfortunately, it is boarded up and you cannot get in. What do you do? 
            <br><br>
            <select id='select'>
                <option>Bust your way in</option>
                <option>Jump off</option>
                <option>Reach the front door</option>
                <option>Wait patiently</option>
            </select>
            <button onclick="if (document.getElementById('select').selectedIndex == 2) goto2(17); else goto2(document.getElementById('select').selectedIndex*(-1)-4);">Soooooooooobmit</button>`), 8000);
            break;
        case 17:
            umbrella = false;
            title("Stuck")
            write(`<h1>Oh no! You climed off the window ledge, but there is nowhere to climb to!</h1><button onclick = 'goto2(18)'>Jump off</button><br><p id='umbrella' style='display:none;'>Oh wait, is that a supersized umbrella being blown right next to you?</p>`);
            setTimeout(() => {
                umbrella = true;
                document.getElementById('umbrella').style.display = 'block';
                setTimeout(function() {
                    umbrella = false;
                    document.getElementById('umbrella').style.display = 'none';
                }, 1000)
            }, 5000 + Math.random() * 100);
            break;
        case 18:
            if (umbrella) {
                title("You catch the umbrella.")
                write(`<h1>Oh my god it's so big!</h1><small>Thats what she said</small><br>The umbrella lowers your terminal velocity enough so that you don't get injured from the fall. Psychics is fun.<br>You land at the front door of the airport. But the real question is, WHY IS THE AIRPORT STILL OPEN? ISN'T THERE A HURRICANE AND A TOWER OF MONKEY POOP OUTSIDE?<br> Oh well, nobody cares. Oh wait, the door is locked! I guess  everyone inside forced the door open. Time to do just that.<br><button onclick='goto2(19)'>Continue</button>`)
            }
            else {
                goto2(-1);
            }
            break;
        case 19:level19totalenergy = 15;
 level19energy = 15;
 level19progress = 0;
 level19active = false;
 level19interval = -1;
 regainCounter = 0;
            write(`...and no one asked. Hey, that's sus. You're getting <del>listed</del> <ins>reported</ins>. However, the doors are magnetic, and a strong magnetic strike should be able to force them open. However, there's a <em>reason</em> they're closed right now...
   <p>Keep holding the button to pull. Run out of energy and you die.</p>
   <div>
   <div id="level19energy"></div>
   <div style="width: 50%; background-color: gray; height: 50px; margin: auto;">
   <div id="level19progress" style="background-color: green; width: 0%; height: 50px;">&nbsp;</div></div>
   </div>
   <button onclick="fail()">I won't have enough</button>
   <button onmousedown="level19active = true;" onmouseup="level19active = false;">Keep pulling (hold this button)</button>
   `);
			if (assist) add(`
   <button onclick="level19active = true;">Permanently start (click this if ur having issues)</button>`);
            globalThis.level19interval = setInterval(updateLevel19, 1000);
            break;
        case 20:
            title("The end of level 2");
            write(`<h1>You got into the airport.</h1>
            <p>So, that's the end for level 2! Have a horrible day!</p>
            <button onclick="fail()">Ragequit</button> <button style="margin-left: 5px" onclick="goto3(1)">Continue</button>`);
            break;
        default:
            align("center");
            title("404 page and everything");
            write("<h1>404. since the only way you could have reached this page is by hecking and hecking is illegal, you're gonna get tasered.</h1><h2>Wait, that's illegal.</h2>");
            setTimeout(fail, 5000);
            break;
    }

    for (const el of document.querySelectorAll("input"))
        el.setAttribute("autocomplete", "off")
}
function disable() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 5; j++) {
            document.getElementById(i * 5 + j).disabled = "disabled";
        }
    }
}
function enable() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 5; j++) {
            if (done[i * 5 + j] == 1) {
                continue;
            }
            document.getElementById(i * 5 + j).disabled = "";
        }
    }
}

function clickcolor(index) {
    document.getElementById(index).style.backgroundColor = colors[parseInt(index)];
    // console.log(before);
    // console.log(numdone);
    document.getElementById(index).disabled = 'disabled';
    if (before == '-1') {
        before = index
    }
    else {
        if (document.getElementById(before).style.backgroundColor != document.getElementById(index).style.backgroundColor) {
            disable();
            setTimeout(function() {
                document.getElementById(index).style.backgroundColor = 'rgb(215, 255, 255)';
                document.getElementById(before).style.backgroundColor = 'rgb(215, 255, 255)';
                enable()
                before = '-1';
            }, 1000)
        }
        else {
            done[parseInt(before)] = 1;
            done[parseInt(index)] = 1;
            numdone += 2;
            document.getElementById(before).disabled = "disabled";
            document.getElementById(index).disabled = "disabled";
            before = '-1';
            if (numdone == 20) {
                goto2(6);
            }
        }
    }
}
var level19totalenergy = 15;
var level19energy = 15;
var level19progress = 0;
var level19active = false;
var level19interval = -1;
var regainCounter = 0;
function updateLevel19() {
    if (localStorage.getItem('level') != '2' || localStorage.getItem('minilevel') != '19') clearInterval(globalThis.level19interval);
    if (level19active) {
        level19energy--;
        level19progress += 0.9;
    } else {
        level19progress = 0;
        regainCounter++;
        if (regainCounter >= 3) {
            regainCounter = 0;
            level19energy += 1;
        }
        if (level19energy > level19totalenergy) level19energy = level19totalenergy;
    }
    document.querySelector('#level19energy').innerHTML = '';

    for (var i = 0; i < level19totalenergy; i++) {
        var circle = document.createElement('div');
        circle.style.borderRadius = `10px`;
        circle.style.width = "20px";
        circle.style.height = "20px";
        circle.innerHTML = '&nbsp;';
        circle.style.display = 'inline-block';
        if (level19energy <= i) circle.style.backgroundColor = 'lightgray';
        else circle.style.backgroundColor = `rgb(${(level19totalenergy - level19energy) / level19totalenergy * 255}, ${level19energy * 255 / level19totalenergy}, 0)`;
        circle.style.margin = '3px';
        document.querySelector('#level19energy').appendChild(circle);
    }
    document.querySelector('#level19progress').style.width = `${100 * level19progress / 13}%`;
    if (level19progress >= 13) {
        clearInterval(globalThis.level19interval);
        setTimeout(() => goto2(20), 500);
        return;
    }
    if (level19energy <= 0) {
        clearInterval(globalThis.level19interval);
        var div = document.createElement('div');
        div.textContent = 'You ran out!';
        document.body.appendChild(div);
        setTimeout(fail, 500);
        clearInterval(globalThis.level19interval);
    }
}