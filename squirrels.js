<!DOCTYPE html>
<html>
<body>
<style>
/*
/
/
/ Practice javascript code for my furture foraging task 
/
/
/
/ 
/
/
/ Last updated on: 20/03/2020
/
/
/
/
*/
	

/* Background colour */
body { background-color: grey;
}

/* Properties of the A button */
.button1 {position: absolute;
    left: 16cm;
    top: 20cm;
	padding: 10px;
}
/* Properties of the B button */
.button2 {position: absolute;
    left: 19cm;
    top: 20cm;
	padding: 10px;
}
/* Properties of the C button */
.button3 { position: absolute;
    left: 22cm;
    top: 20cm;
	padding: 10px;
}

/* Properties of the BEGIN EXPERIMENT  button */
.button4 { position: absolute;
    left: 22cm;
    top: 20cm;
	padding: 10px;
}

/* Properties of the BEGIN EXPERIMENT  button */
.button5 { position: absolute;
    left: 18.5cm;
    top: 10cm;
	padding: 10px;
}

/* Properties for "Incorrect" feedback */
p{  position: absolute;
    left: 18cm;
    top: 9cm;
	font-size: 1cm;
}
p2{ position: absolute;
    left: 14.5cm;
    top: 2cm;
	font-size: 0.5cm;
}
p3{ position: absolute;
    left: 24.5cm;
    top: 6cm;
	font-size: 0.5cm;
}
p4{ position: absolute;
    left: 9.5cm;
    top: 10cm;
	font-size: 0.5cm;
}

/* Properties for the instructions header */
h1{position: absolute;
    left: 16cm;
    top: 0cm;}

/* Properties for instructions text */
p01{position: absolute;
    left: 11cm;
	top: 3cm;}
	
/* Properties of the "Begin Experiment" button */
.introbutton01 {position: absolute;
	left: 18cm;
	top: 19cm;
	padding: 8px;}
	
	// Delete this later it is just for output purposes:
	bu{  position: absolute;
    left: 18cm;
    top: 3cm;
	font-size: 1cm;
	
	
	
	
	
	
	
	
// STYLING TEXT: 	
</style>

<img id="pic1" src="https://i.ibb.co/37yr9zW/grass.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:15cm;top:2cm;display:none">
<img id="pic2" src="https://i.ibb.co/37yr9zW/grass.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:25cm;top:6cm;display:none">
<img id="pic3" src="https://i.ibb.co/37yr9zW/grass.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:10cm;top:10cm;display:none">

<button id="button01" style="display:none" class="button1" type="button" onclick="Abutton()">A</button>
<button id="button02" style="display:none" class="button2" type="button" onclick="Bbutton()">B</button>
<button id="button03" style="display:none" class="button3" type="button" onclick="Cbutton()">C</button>
<button id="savebutton" style="display:none" class="button4" type="button" onclick="saveFile()">sava data as file</button>
<button id="bT" style="display:none" class="button5" type="button" onclick="showTrial()">Begin Trial</button>

<p id="incorrect" style="display:none">Incorrect</p>
<p id="correct" style="display:none">Correct</p>
<p2 id="atext" style="display:none"></p2>
<p3 id="btext" style="display:none"></p3>
<p4 id="ctext" style="display:none"></p4>

<h1 id="header" style="display:none">INSTRUCTIONS</h1>
<p01 id="introtext" style="display:none"> Try and find the flower!</p01>
<button id="introbutton" style="display:none" class="introbutton01" type="button" onclick="introbut()">Begin Experiment</button>

<p id="endexpt" style="display:none">Finshed!</p>


<p id="demo" class="bu"></p>
<p id="demo2" class="button2"></p>



<script>


var Ttracker = 1; // Variable to keep track of trials
var ntrials = 3; // Total number of trials I want
var trial_num = [1]


// Text to label the images:
var la = "A";  // String written inside quotes
document.getElementById("atext").innerHTML = la;
var lb = "B";  // String written inside quotes
document.getElementById("btext").innerHTML = lb;
var lc = "C";  // String written inside quotes
document.getElementById("ctext").innerHTML = lc;

// Defining functions to change image pic1 when mouse moves over it: 
document.getElementById("pic1").onmouseover = function() {mouseOver()};
document.getElementById("pic1").onmouseout = function() {mouseOut()};
/* Defining functions to change image pic2 when mouse moves over it: */
document.getElementById("pic2").onmouseover = function() {mouseOver2()};
document.getElementById("pic2").onmouseout = function() {mouseOut2()};
/* Defining functions to change image pic3 when mouse moves over it: */
document.getElementById("pic3").onmouseover = function() {mouseOver3()};
document.getElementById("pic3").onmouseout = function() {mouseOut3()};


// What happens when cursor isn't over image pic1: 
function mouseOver() {document.getElementById("pic1").src = "https://i.ibb.co/Q84yRQ1/flower.jpg"};
function mouseOut() {document.getElementById("pic1").src = "https://i.ibb.co/37yr9zW/grass.jpg"};
/* What happens when cursor isn't over image pic2: */
function mouseOver2() {document.getElementById("pic2").src = "https://i.ibb.co/Q84yRQ1/flower.jpg"};
function mouseOut2() {document.getElementById("pic2").src = "https://i.ibb.co/37yr9zW/grass.jpg"};
/* What happens when cursor isn't over image pic3: */
function mouseOver3() {document.getElementById("pic3").src = "https://i.ibb.co/BgppZy8/ladybug.jpg"};
function mouseOut3() {document.getElementById("pic3").src = "https://i.ibb.co/37yr9zW/grass.jpg"};

// Function to clear the screen and show the BEGIN TRIAL BUTTON:
function beginTrial() {
	document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('incorrect').style.display='none';
	document.getElementById('bT').style.display='block';
}


// Function to display what happens after the experiment is finished:
function endExperiment(){
	document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('incorrect').style.display='none';
	document.getElementById('endexpt').style.display='block';
	document.getElementById("demo").style.display='none';
	document.getElementById('savebutton').style.display='block'
}

// Function to save data file:
let saveFile = () => {
    
    // This variable stores all the data.
    let data = 
        '\r Trial Response RT Condition \r\n ' + 
        trial_num;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'Data_File.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click(); 
}


// Function to show a trial's content:
function showTrial(){
// Make the images, image-labels and buttons visible after pressing the "Begin Experiment" button:
	document.getElementById('pic1').style.display='block';
	document.getElementById('pic2').style.display='block';
	document.getElementById('pic3').style.display='block';
	document.getElementById('button01').style.display='block';
	document.getElementById('button02').style.display='block';
	document.getElementById('button03').style.display='block';
	document.getElementById('atext').style.display='block';
	document.getElementById('btext').style.display='block';
	document.getElementById('ctext').style.display='block';
	document.getElementById('incorrect').style.display='none';
	document.getElementById('bT').style.display='none';
}

// What happens when you press the A button:
function Abutton() { 
  document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('incorrect').style.display='block';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // Call function after some defined time
	}
}

// What happens when you press the B button:
function Bbutton() { 
  document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('incorrect').style.display='block';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
	}
}

// What happens when you press the C button:
function Cbutton() { 
  document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('incorrect').style.display='block';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
	}
}

// Define what happens after you press the intro button: 
function introbut() {
	if (Ttracker == 1){ // This is the first trial
		document.getElementById('header').style.display='none';
		document.getElementById('introtext').style.display='none';
		document.getElementById('introbutton').style.display='none';
		setTimeout(beginTrial(), 1000); // 1 seconds after pressing begin experiment button begin first trial
	}
	else if (Ttracker<=ntrials){ // These are all subsequent trials after the first one
		showTrial();
		document.getElementById("demo2").innerHTML = Ttracker;
		document.getElementById("demo").innerHTML = trial_num;
	}
}




// Make the landing instructions page:
document.getElementById('header').style.display='block';
document.getElementById('introtext').style.display='block';
document.getElementById('introbutton').style.display='block';

	
</script>


</body>
</html>
