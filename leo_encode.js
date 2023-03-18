function encrypt(s) {
    var n = s.length;
    var s1 = "";
    for (var i = 0; i < n; i++) {
        s1 += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
        s1 += String.fromCharCode(158 - s[i].charCodeAt(0));
    }
    s1.split("").reverse().join("");
    var mid = Math.floor(Math.random() * (2 * n));
    var s2 = `${mid}z`;
    for (var i = mid; i < 2 * n; i++) s2 += s1[i];
    for (var i = 0; i < mid; i++) s2 += s1[i];
    var n1 = s2.length;
    var spaceLeft = 118 - n1;
    var front = Math.floor(Math.random() * (spaceLeft + 1));
    for (var i = 0; i < front; i++) {
        s2 = String.fromCharCode(Math.floor(Math.random() * 93) + 33) + s2;
    }
    for (var i = 0; i < spaceLeft - front; i++) {
        s2 += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
    }
    if (front >= 100) {
        s2 = `${front}` + s2;
    } else if (front >= 10) {
        s2 = `0${front}` + s2;
    } else {
        s2 = `00${front}` + s2;
    }
    s2 = String.fromCharCode(Math.floor(Math.random() * 93) + 33) + String.fromCharCode(Math.floor(Math.random() * 93) + 33) + s2;
    if (n1 >= 100) {
        s2 += `${n1}`;
    } else if (n1 >= 10) {
        s2 += `0${n1}`;
    } else {
        s2 += `00${n1}`;
    }
    s2 += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
    console.log(s2);
    return s2;
}

function decrypt(s) {
    var front = parseInt(s.slice(2, 5));
    var n1 = parseInt(s.slice(123, 126));
    s = s.slice(5 + front, 5 + front + n1);
    var current = "";
    var times = 1;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "z") {
            break;
        }
        current += s[i];
        times++;
    }
    current = parseInt(current);
    var s1 = "";
    for (var i = times; i < s.length; i++) {
        s1 += s[i];
    }
    var temp = "";
    for (var i = s1.length - current; i < s1.length; i++) {
        temp += s1[i];
    }
    for (var i = 0; i < s1.length - current; i++) {
        temp += s1[i];
    }
    s1 = temp;
    s1.split("").reverse().join("");
    var s2 = "";
    for (var i = 0; i < s1.length; i++) {
        s2 += String.fromCharCode(158 - s1[i].charCodeAt(0));
    }
    var s3 = "";
    for (var i = 1; i < s2.length; i += 2) {
        s3 += s2[i];
    }
    console.log(s3);
    return s3;
}
