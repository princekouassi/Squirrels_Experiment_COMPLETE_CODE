<!DOCTYPE html>
<html>
<body>
  
<div id="mouseOnMe">

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
/ Last updated on: 07/04/2020
/
/
/
/
*/

body {
   cursor: grab;            
}

#mouseOnMe {
  position: absolute;
  width: 100%;
  height: 100%;
}
	

/* Background colour */
body { background-color: white;
}

/* Properties of the A button */
.button1 {position: absolute;
    left: 14cm;
    top: 20cm;
	padding: 10px;
}
/* Properties of the B button */
.button2 {position: absolute;
    left: 17cm;
    top: 20cm;
	padding: 10px;
}
/* Properties of the C button: */
.button3 { position: absolute;
    left: 20cm;
    top: 20cm;
	padding: 10px;
}

/* Properties of the D  button: */
.button04 { position: absolute;
    left: 23cm;
    top: 20cm;
	padding: 10px;
}

/* Properties of the BEGIN EXPERIMENT  button: */
.button4 { position: absolute;
    left: 22cm;
    top: 20cm;
	padding: 10px;
}

/* Properties of the BEGIN EXPERIMENT  button for mutliple patches: */
.button5 { position: absolute;
    left: 18.5cm;
    top: 10cm;
	padding: 10px;
}

/* Properties of the BEGIN EXPERIMENT button for single patches: */
.button6 { position: absolute;
    left: 18.5cm;
    top: 10cm;
	padding: 10px;
}

/* Properties of the BEGIN EXPERIMENT button for multiple patch trials on the instructions page: */
.button7 { position: absolute;
    left: 18.5cm;
    top: 16cm;
	padding: 10px;
}

/* Properties for "Incorrect" feedback: */
p{  position: absolute;
    left: 18cm;
    top: 9cm;
	font-size: 1cm;
}

/* Properties for "A" text: */
p2{ position: absolute;
    left: 5cm;
    top: 8cm;
	font-size: 0.5cm;
}

/* Properties for "B" text: */
p3{ position: absolute;
    left: 15cm;
    top: 1cm;
	font-size: 0.5cm;
}

/* Properties for "C" text: */
p4{ position: absolute;
    left: 27cm;
    top: 8cm;
	font-size: 0.5cm;
}

/* Properties for "D" text: */
p5{ position: absolute;
    left: 15cm;
    top: 14cm;
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
	left: 18.5cm;
	top: 19cm;
	padding: 8px;}
	
	
	
	
	
	
	
// STYLING TEXT: 	
</style>


<img id="pic1" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:16cm;top:1cm;display:none">
<img id="pic2" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:28cm;top:8cm;display:none">
<img id="pic3" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:6cm;top:8cm;display:none">
<img id="pic4" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:16cm;top:14cm;display:none">
<img id="pic5" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:16cm;top:1cm;display:none">

<button id="button01" style="display:none" class="button1" type="button" onclick="Abutton()">A</button>
<button id="button001" style="display:none" class="button1" type="button" onclick="Presbutton()">Present</button>
<button id="button02" style="display:none" class="button2" type="button" onclick="Bbutton()">B</button>
<button id="button03" style="display:none" class="button3" type="button" onclick="Cbutton()">C</button>
<button id="button04" style="display:none" class="button04" type="button" onclick="Dbutton()">D</button>
<button id="button002" style="display:none" class="button04" type="button" onclick="Abbutton()">Absent</button>
<button id="savebutton" style="display:none" class="button4" type="button" onclick="saveFile()">sava data as file</button>
<button id="bT" style="display:none" class="button5" type="button" onclick="showTrial()">Begin Trial</button>
<button id="bTS" style="display:none" class="button6" type="button" onclick="introbut()">Begin Trial</button>
<button id="bTS-Mintro" style="display:none" class="button7" type="button" onclick="beginTrial()">Start the next set of trials</button>

<p id="incorrect" style="display:none">Incorrect</p>
<p id="correct" style="display:none">Correct</p>
<p2 id="atext" style="display:none"></p2>
<p3 id="Atext" style="display:none"></p3>
<p3 id="btext" style="display:none"></p3>
<p4 id="ctext" style="display:none"></p4>
<p5 id="dtext" style="display:none"></p5>

<h1 id="header" style="display:none">INSTRUCTIONS</h1>
<p01 id="introtext" style="display:none"> Try and find the nut!</p01>
<button id="introbutton" style="display:none" class="introbutton01" type="button" onclick="introbut()">Begin Experiment</button>

<p01 id="singleTrials" style="display:none"> Here there is going to be some text on instructions for multiple patch trials.</p01>


<p id="endexpt" style="display:none">Finshed!</p>


<p id="demo" class="bu"></p>
<p id="demo2" class="button2"></p>


<script>

// Experimental variables
var Ttracker = 1; // Variable to keep track of trials
var ntrials = 6; // Total number of trials = single + multiple patch trials
var ptrials = 3; // Total number of single patch trials
var trial_num = [1]; // Keeps track of the number of trials we performed
var RTs = []; // Stores all RTs
var conditions = []; // Store the different conditions
var i; // Indexing variable

// Define timers for the different pics:
var st1; // Variable to initialise start timer for pic1
var et1; // Variable to initialise end timer for pic1
var st2; // Variable to initialise start timer for pic2
var et2; // Variable to initialise end timer for pic2
var st3; // Variable to initialise start timer for pic3
var et3; // Variable to initialise end timerfor pic3
var st4; // Variable to initialise start timer for pic4
var et4; // Variable to initialise end timerfor pic4
var st5; // Variable to initialise start timer for pic4
var et5; // Variable to initialise end timerfor pic4

// Text to label the images:
document.getElementById("atext").innerHTML = "A";
document.getElementById("Atext").innerHTML = "A";
document.getElementById("btext").innerHTML = "B";
document.getElementById("ctext").innerHTML = "C";
document.getElementById("dtext").innerHTML = "D";

// This function is to shuffle an array:      
function shuffle(condition) {
  var currentIndex = condition.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = condition[currentIndex];
    condition[currentIndex] = condition[randomIndex];
    condition[randomIndex] = temporaryValue;
  }
  return condition;
}

// Create how many conditions we want then shuffle the order
for (i = 1; i < 5; i++) {
conditions.push(1); // Codnition 1
conditions.push(2); // Condition 2
conditions.push(3); // Condition 3
}
shuffle(conditions); // Shuffle the actual conditions


// What happens when cursor IS OVER pic1: 
function mouseOver() {
	document.getElementById("pic1").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
	};
	// What happens when cursor IS NOT OVER pic1: 
function mouseOut() {
	document.getElementById("pic1").src = "https://i.ibb.co/hZnLpRw/tree.jpg"
	};
// What happens when cursor IS OVER pic2:
function mouseOver2() {
	document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
	};
	// What happens when cursor IS NOT OVER pic2:
function mouseOut2() {
	document.getElementById("pic2").src = "https://i.ibb.co/hZnLpRw/tree.jpg"
};
// What happens when cursor IS OVER pic3: 
function mouseOver3() {
	document.getElementById("pic3").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
	};
	// What happens when cursor IS NOT OVER pic3: 
function mouseOut3() {
	document.getElementById("pic3").src = "https://i.ibb.co/hZnLpRw/tree.jpg"
	};
  // What happens when cursor IS OVER pic4: 
function mouseOver4() {
	document.getElementById("pic4").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
	};
	// What happens when cursor IS NOT OVER pic3: 
function mouseOut4() {
	document.getElementById("pic4").src = "https://i.ibb.co/hZnLpRw/tree.jpg"
	};
    // What happens when cursor IS OVER pic4: 
function mouseOver5() {
	document.getElementById("pic5").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
	};
	// What happens when cursor IS NOT OVER pic3: 
function mouseOut5() {
	document.getElementById("pic5").src = "https://i.ibb.co/hZnLpRw/tree.jpg"
	};
  
  
// Function to clear the screen and show the BEGIN TRIAL BUTTON for multiple patches:
function beginTrial() {
	document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('pic4').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('button04').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('dtext').style.display='none';
  document.getElementById('incorrect').style.display='none';
  document.getElementById('correct').style.display='none';
	document.getElementById('bT').style.display='block';
  document.getElementById('bTS-Mintro').style.display='none';
  document.getElementById('singleTrials').style.display='none';
  document.getElementById('bTS-Mintro').style.display='none';
}

// Function to clear the screen and show the BEGIN TRIAL BUTTON for single patches:
function beginTrialS() {
  if (Ttracker == ptrials+1) { // Have an instructions page before beginning multiple patch trials
    document.getElementById('pic1').style.display='none';
    document.getElementById('pic2').style.display='none';
    document.getElementById('pic3').style.display='none';
    document.getElementById('pic4').style.display='none';
    document.getElementById('button01').style.display='none';
    document.getElementById('button02').style.display='none';
    document.getElementById('button03').style.display='none';
    document.getElementById('button04').style.display='none';
    document.getElementById('atext').style.display='none';
    document.getElementById('btext').style.display='none';
    document.getElementById('ctext').style.display='none';
    document.getElementById('dtext').style.display='none';
    document.getElementById('incorrect').style.display='none';
    document.getElementById('correct').style.display='none';
    document.getElementById('singleTrials').style.display='block';
    document.getElementById('bTS-Mintro').style.display='block';
  } else { // Show the button that just brings you directly to the next multiple patch trial
    document.getElementById('pic1').style.display='none';
    document.getElementById('pic2').style.display='none';
    document.getElementById('pic3').style.display='none';
    document.getElementById('pic4').style.display='none';
    document.getElementById('button01').style.display='none';
    document.getElementById('button02').style.display='none';
    document.getElementById('button03').style.display='none';
    document.getElementById('button04').style.display='none';
    document.getElementById('atext').style.display='none';
    document.getElementById('btext').style.display='none';
    document.getElementById('ctext').style.display='none';
    document.getElementById('dtext').style.display='none';
    document.getElementById('incorrect').style.display='none';
    document.getElementById('correct').style.display='none';
    document.getElementById('bTS').style.display='block';
  }
}


// Function to display what happens after the experiment is finished:
function endExperiment(){
	document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('pic4').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('button04').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('dtext').style.display='none';
  document.getElementById('incorrect').style.display='none';
  document.getElementById('correct').style.display='none';
	document.getElementById('endexpt').style.display='block';
	document.getElementById("demo").style.display='none';
	document.getElementById('savebutton').style.display='block'
}

// Function to save data file:
let saveFile = () => {
    
    // This variable stores all the data.
    let data = 
        'Trial Response RT Condition:' + '\r\n ' + 
        trial_num + '\r\n' +
				RTs;
    
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


// Function to determine a trial's content for multiple patche trials:
function showTrial(){
  // Make the images, image-labels and buttons visible after pressing the "Begin Experiment" button:
	document.getElementById('pic5').style.display='none';
	document.getElementById('button001').style.display='none';
  document.getElementById('button002').style.display='none';
	document.getElementById('Atext').style.display='none';
	document.getElementById('bTS').style.display='none';
  
  document.getElementById('pic1').style.display='block';
	document.getElementById('pic2').style.display='block';
	document.getElementById('pic3').style.display='block';
	document.getElementById('pic4').style.display='block';
	document.getElementById('button01').style.display='block';
	document.getElementById('button02').style.display='block';
	document.getElementById('button03').style.display='block';
	document.getElementById('button04').style.display='block';
	document.getElementById('atext').style.display='block';
	document.getElementById('btext').style.display='block';
	document.getElementById('ctext').style.display='block';
	document.getElementById('dtext').style.display='block';
	document.getElementById('incorrect').style.display='none';
  document.getElementById('correct').style.display='none';
	document.getElementById('singleTrials').style.display='none';
  document.getElementById('bTS-Mintro').style.display='none';
  document.getElementById('bT').style.display='none';
	//document.getElementById("demo2").innerHTML = Ttracker;
	//document.getElementById("demo").innerHTML = trial_num;
	
	// Defining functions to change image pic1 when mouse moves over it or not: 
	document.getElementById("pic1").onmouseover = function() {
		mouseOver();
		st1 = new Date(); // Define start timer as variable
		starttime1 = st1.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic1").onmouseout = function() {
		mouseOut();
		et1 = new Date(); // Define end timer as variable
		endtime1 = et1.getTime(); // Determine when the cursor is no longer over image
    rt1 = (endtime1 - starttime1)/1000+"AM"; // Calcuate rt for pic1:
		RTs.push(rt1); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt1;
		};
	// Defining functions to change image pic2 when mouse moves over it or not: 
	document.getElementById("pic2").onmouseover = function() {
		mouseOver2();
		st2 = new Date(); // Define start timer as variable
		starttime2 = st2.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic2").onmouseout = function() {
		mouseOut2();
		et2 = new Date(); // Define end timer as variable
		endtime2 = et2.getTime(); // Determine when the cursor is no longer over image
    rt2 = (endtime2 - starttime2)/1000+"BM"; // Calcuate rt for pic1:
		RTs.push(rt2); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt2;
		};
	// Defining functions to change image pic3 when mouse moves over it or not: 
	document.getElementById("pic3").onmouseover = function() {
		mouseOver3();
		st3 = new Date(); // Define start timer as variable
		starttime3 = st3.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic3").onmouseout = function() {
		mouseOut3();
		et3 = new Date(); // Define end timer as variable
		endtime3 = et3.getTime(); // Determine when the cursor is no longer over image
		// Calcuate rt for pic1:
    rt3 = (endtime3 - starttime3)/1000+"CM";
		RTs.push(rt3); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt3;
		};
    // Defining functions to change image pic4 when mouse moves over it or not: 
	document.getElementById("pic4").onmouseover = function() {
		mouseOver4();
		st4 = new Date(); // Define start timer as variable
		starttime4 = st4.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic4").onmouseout = function() {
		mouseOut4();
		et4 = new Date(); // Define end timer as variable
		endtime4 = et4.getTime(); // Determine when the cursor is no longer over image
		// Calcuate rt for pic1:
    rt4 = (endtime4 - starttime4)/1000+"DM";
		RTs.push(rt4); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt4;
		};
}


// Function to determine a trial's content for single patches:
function showTrialS(){
// Make the images, image-labels and buttons visible after pressing the "Begin Experiment" button:
	document.getElementById('pic5').style.display='block';
	document.getElementById('button001').style.display='block';
  document.getElementById('button002').style.display='block';
	document.getElementById('Atext').style.display='block';
	document.getElementById('incorrect').style.display='none';
  document.getElementById('correct').style.display='none';
	document.getElementById('bTS').style.display='none';
  document.getElementById('bT').style.display='none';
	//document.getElementById("demo2").innerHTML = Ttracker;
	//document.getElementById("demo").innerHTML = trial_num;
	
	// Defining functions to change image pic5 when mouse moves over it or not: 
	document.getElementById("pic5").onmouseover = function() {
		mouseOver5();
		st5 = new Date(); // Define start timer as variable
		starttime5 = st5.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic5").onmouseout = function() {
		mouseOut5();
		et5 = new Date(); // Define end timer as variable
		endtime5 = et5.getTime(); // Determine when the cursor is no longer over image
    rt5 = (endtime5 - starttime5)/1000+"AS"; // Calcuate rt for pic1:
		RTs.push(rt5); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt1;
		};
}

// What happens when you press the Presbutton:
function Presbutton() { 
  document.getElementById('pic5').style.display='none';
	document.getElementById('button001').style.display='none';
  document.getElementById('button002').style.display='none';
	document.getElementById('Atext').style.display='none';
	document.getElementById('incorrect').style.display='block';
  document.getElementById('correct').style.display='none';
	document.getElementById('bTS').style.display='none';
  document.getElementById('bT').style.display='none';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrialS, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
}

// What happens when you press the Abbutton:
function Abbutton() { 
  document.getElementById('pic5').style.display='none';
	document.getElementById('button001').style.display='none';
  document.getElementById('button002').style.display='none';
	document.getElementById('Atext').style.display='none';
	document.getElementById('incorrect').style.display='none';
  document.getElementById('correct').style.display='block';
	document.getElementById('bTS').style.display='none';
  document.getElementById('bT').style.display='none';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrialS, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
}

// Define what happens AFTER you press the intro button: 
function introbut() {
	if (Ttracker == 1){ // This is the first trial
		document.getElementById('header').style.display='none';
		document.getElementById('introtext').style.display='none';
		document.getElementById('introbutton').style.display='none';
		setTimeout(beginTrialS(), 1000); // 1 seconds after pressing begin experiment button begin first trial
	}
	else if (Ttracker<=ntrials){ // These are all subsequent trials after the first one
		showTrial();
		//document.getElementById("demo2").innerHTML = Ttracker;
		//document.getElementById("demo").innerHTML = trial_num;
	}
}

// What happens when you press the A button:
function Abutton() { 
  document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('pic4').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('button04').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('dtext').style.display='none';
  document.getElementById('incorrect').style.display='block';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	}
}

// What happens when you press the B button:
function Bbutton() { 
  document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('pic4').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('button04').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('dtext').style.display='none';
  document.getElementById('incorrect').style.display='block';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
}

// What happens when you press the C button:
function Cbutton() { 
  document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('pic4').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('button04').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('dtext').style.display='none';
  document.getElementById('correct').style.display='block';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
}

// What happens when you press the D button:
function Dbutton() { 
  document.getElementById('pic1').style.display='none';
  document.getElementById('pic2').style.display='none';
  document.getElementById('pic3').style.display='none';
  document.getElementById('pic4').style.display='none';
  document.getElementById('button01').style.display='none';
  document.getElementById('button02').style.display='none';
  document.getElementById('button03').style.display='none';
  document.getElementById('button04').style.display='none';
  document.getElementById('atext').style.display='none';
  document.getElementById('btext').style.display='none';
  document.getElementById('ctext').style.display='none';
  document.getElementById('dtext').style.display='none';
  document.getElementById('incorrect').style.display='block';
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
}

// Define what happens AFTER you press the intro button: 
function introbut() {
	if (Ttracker == 1){ // This is the first trial
		document.getElementById('header').style.display='none';
		document.getElementById('introtext').style.display='none';
		document.getElementById('introbutton').style.display='none';
		setTimeout(showTrialS(), 1000); // 1 seconds after pressing begin experiment button begin first trial
	}
	else if (Ttracker<=ptrials){ // These are all subsequent trials after the first one
		showTrialS(); // Show single patch trials
		//document.getElementById("demo2").innerHTML = Ttracker;
		//document.getElementById("demo").innerHTML = trial_num;
	} else if (Ttracker > ptrials && Ttracker <= ntrials) {
    showTrial(); // Show multiple patch trials
  }
}





// Make the landing instructions page:
document.getElementById('header').style.display='block';
document.getElementById('introtext').style.display='block';
document.getElementById('introbutton').style.display='block';
	
</script>


</body>
</html>
