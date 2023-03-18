var mouseX = 0, mouseY = 0;
onmousemove = (ev) => { mouseX = ev.clientX; mouseY = ev.clientY; };
function save(level, minilevel) {
	document.querySelector('#saving').hidden = '';
	localStorage.setItem('money', money);
	localStorage.setItem('level', level);
	localStorage.setItem('minilevel', minilevel);
	localStorage.setItem('saved', 'true');
    if (!localStorage.getItem('checkpoint')) localStorage.setItem('checkpoint', level);
    else localStorage.setItem('checkpoint', Math.max(parseFloat(localStorage.getItem('checkpoint')), parseFloat(level)));
    document.getElementById('stage').innerHTML = localStorage.getItem('level');
    document.getElementById('level').innerHTML = localStorage.getItem('minilevel');
	setTimeout(() => document.querySelector('#saving').hidden = 'hidden', 1000);
}
var currentMoney = 0;
function load() {
	if (!localStorage.getItem('saved')) return false;
    if (localStorage.getItem('level') == '0') {fail(); return true;}
	window['goto' + localStorage.getItem('level')](parseFloat(localStorage.getItem('minilevel')));
	currentMoney = Number(localStorage.getItem('money'));
    return true;
}
function write(s = 'LAA LAA LAA I AM A NOOBY IDIOT'){
    document.getElementById('baudy').innerHTML = s;
}
function title(s = 'LAA LAA LAA I AM A NOOBY IDIOT'){
    document.getElementById('taitl').innerHTML = s;
}
function add(s = 'LAA LAA LAA I AM A NOOBY IDIOT'){
    document.getElementById('baudy').innerHTML += s;
}
function align(s = 'center'){
    document.getElementById('baudy').style.textAlign = s;
}
function randint(s, e){
    return Math.floor(Math.random()*(e-s+1)) + s;
}
function fail(){
    save(0, 0);
    align('center');
    title('Breaking news!')
    write(`	<h1 class="flash">Breaking news! Someone just failed!</h1>
	<!-- My intention is to add information about
	the player with frightening accuracy -->
	<p>Someone has just failed. It <em>might</em> be you, but it may be a nuby player who is visiting freemoney by
		idkwutocalmself at
	<span id="date"></span>
	</p> <br> <h1>In about 3 seconds, someone is going to be rickrolled.</h1><h2>I really do wonder who the person who is a big nub, failed, and is about to get rickrolled is...</h2><br><button onclick="window['goto' + localStorage.getItem('checkpoint')](1); clearTimeout(globalThis.failTimeout)">ME</button><br><br><br>
 <p>Hrm... I wonder who has failed... whoever sees a rick roll in the next З seconds has failed. Definitely not you. You're safe. But if you do get rick rolled, it's a skill issue.</p>`);
	document.querySelector('#date').textContent = new Date();
	
    globalThis.failTimeout = setTimeout(function(){add(`<iframe width="688" height="387" src="https://www.youtube.com/embed/dQw4w9WgXcQ?loop=1&playlist=dQw4w9WgXcQ&mute=1&autoplay=1" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <iframe width="688" height="387" src="https://www.youtube.com/embed/BjDebmqFRuc?loop=1&playlist=BjDebmqFRuc&mute=1&autoplay=1" title="Rick Astley - Never Gonna Give You Up (Voice Crack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>`)}, 3328);
    // use the add() function
}
function setFail(duration = 3000) {
    setTimeout(fail, duration);
}
console.log("one error is ok. a gazillion is bad.");