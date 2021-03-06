<!DOCTYPE html>
<html>
<body>

<meta name="viewport" content="width=device-width, initial-scale=1">
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
/ Last updated on: 12/05/2020
/
/
/
/
*/

/* Rotate image: */
.turn1 {
  transform: rotate(0deg);
}

/* Manipulate Opacity For Leafs: */
.opa {
  opacity: 0.6;
}

/* Manipulate Opacity For Trees: */
.opatree {
  opacity: 0.5;
}

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

/* Properties of the A (m3) button */
.button1 {position: absolute;
    left: 15.5cm;
    top: 10cm;
	padding: 10px;
}
/* Properties of the B (m3) button */
.button2 {position: absolute;
    left: 18.5cm;
    top: 10cm;
	padding: 10px;
}
/* Properties of the C (m3) button: */
.button3 { position: absolute;
    left: 21.5cm;
    top: 10cm;
	padding: 10px;
}

/* Properties of the A (m5) button */
.button100 {position: absolute;
    left: 12.5cm;
    top: 10cm;
	padding: 10px;
}
/* Properties of the B (m5) button */
.button200 {position: absolute;
    left: 15.5cm;
    top: 10cm;
	padding: 10px;
}
/* Properties of the C (m5) button: */
.button300 { position: absolute;
    left: 18.5cm;
    top: 10cm;
	padding: 10px;
}

/* Properties of the D (m5) button: */
.button400 { position: absolute;
    left: 21.5cm;
    top: 10cm;
	padding: 10px;
}

/* Properties of the E (m5) button: */
.button500 { position: absolute;
    left: 24.5cm;
    top: 10cm;
	padding: 10px;
}

/* Properties of the Absent  button: */
.button04 { position: absolute;
    left: 21cm;
    top: 10cm;
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

/*.opClass {
    opacity:0.4;
}*/
	
	
	
</style>
<!-- STYLING TEXT: -->

<!-- Patch Tree Pics For All Blocks: -->
<img id="pic2" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:16cm;top:1cm;display:none">
<img id="pic3" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:27cm;top:8cm;display:none">
<img id="pic1" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:6cm;top:8cm;display:none">
<img id="pic02" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:16cm;top:1cm;display:none">
<img id="pic03" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:27cm;top:8cm;display:none">
<img id="pic01" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:6cm;top:8cm;display:none">
<img id="pic04" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:27cm;top:14cm;display:none">
<img id="pic05" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:6cm;top:14cm;display:none">

<!-- Single Patch Tree Cover: -->
<img id="pic5" src="https://i.ibb.co/hZnLpRw/tree.jpg" alt="grass" style="width:200px;height:200px;position:absolute;left:16cm;top:1cm;display:none">

<!-- Single Patch Buttons: -->
<button id="button001" style="display:none" class="button1" type="button" onclick="Presbutton()">Present</button>
<button id="button002" style="display:none" class="button04" type="button" onclick="Abbutton()">Absent</button>

<!-- Multi (3) Patch Buttons: -->
<button id="button01" style="display:none" class="button1" type="button" onclick="Abutton()">A</button>
<button id="button02" style="display:none" class="button2" type="button" onclick="Bbutton()">B</button>
<button id="button03" style="display:none" class="button3" type="button" onclick="Cbutton()">C</button>

<!-- Multi (5) Patch Buttons: -->
<button id="button100" style="display:none" class="button100" type="button" onclick="Abutton()">A</button>
<button id="button200" style="display:none" class="button200" type="button" onclick="Bbutton()">B</button>
<button id="button300" style="display:none" class="button300" type="button" onclick="Cbutton()">C</button>
<button id="button400" style="display:none" class="button400" type="button" onclick="Dbutton()">D</button>
<button id="button500" style="display:none" class="button500" type="button" onclick="Ebutton()">E</button>

<!-- Save Data At End Of Experiment Button: -->
<button id="savebutton" style="display:none" class="button4" type="button" onclick="saveFile()">sava data as file</button>

<!-- Begin Trial Buttons: -->
<button id="bT" style="display:none" class="button5" type="button" onclick="showTrial()">Begin Trial</button>
<button id="bTS" style="display:none" class="button6" type="button" onclick="introbut()">Begin Trial1st</button>  <!--Begin 1 patch trial -->
<button id="bTS-Mintro" style="display:none" class="button7" type="button" onclick="beginTrial()">Start the next set of trials</button>
<button id="bTM5" style="display:none" class="button7" type="button" onclick="beginTrialM5()">Start the next set of trials</button>
<button id="bTm5" style="display:none" class="button6" type="button" onclick="introbut()">Begin Trial</button>

<!-- Correc/Incorrect Text: -->
<p id="incorrect" style="display:none">Incorrect</p>
<p id="correct" style="display:none">Correct</p>

<!-- Patch Label Text: -->
<p2 id="atext" style="display:none"></p2>
<p3 id="Atext" style="display:none"></p3>
<p3 id="btext" style="display:none"></p3>
<p4 id="ctext" style="display:none"></p4>
<p5 id="dtext" style="display:none"></p5>

<!-- Introudction Landing Page Text And Initial Begin Expt Button: -->
<h1 id="header" style="display:none">INSTRUCTIONS</h1>
<p01 id="introtext" style="display:none"> Try and find the nut!</p01>
<button id="introbutton" style="display:none" class="introbutton01" type="button" onclick="introbut()">Begin Experiment</button>

<!-- Instruction Text For 3 Patch Trials: -->
<p01 id="singleTrials" style="display:none"> Here there is going to be some text on instructions for multiple (3) patch trials.</p01>

<!-- Instruction Text For 5 Patch Trials: -->
<p01 id="5patchtext" style="display:none"> Here there is going to be some text on instructions for multiple (5) patch trials.</p01>

<!-- End Of Expt Text: -->
<p id="endexpt" style="display:none">Finshed!</p>

<!-- Some Identifiers To Check Code Is Working Correctly: -->
<p id="demo"></p>
<p id="demo2" class="button2"></p>

<!-- Single Patch Image Grid and Top pic in 3 and 5 patch trials: -->
<img id="i1" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:16.8cm;top:1.5cm;display:none">
<img id="i2" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:17.4cm;top:1.5cm;display:none">
<img id="i3" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:18cm;top:1.5cm;display:none">
<img id="i4" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:18.6cm;top:1.5cm;display:none">
<img id="i5" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:19.2cm;top:1.5cm;display:none">
<img id="i6" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:19.8cm;top:1.5cm;display:none">

<img id="i7" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:16.8cm;top:2.2cm;display:none">
<img id="i8" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:17.4cm;top:2cm;display:none">
<img id="i9" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:18cm;top:2cm;display:none">
<img id="i10" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:18.6cm;top:2cm;display:none">
<img id="i11" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:19.2cm;top:2cm;display:none">
<img id="i12" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:19.8cm;top:2cm;display:none">

<img id="i13" src="https://i.ibb.co/GWB3qnZ/leaf-1.png" class="opa" style="width:25px;height:25px;position:absolute;left:16.8cm;top:2.6cm;display:none">
<img id="i14" src="https://i.ibb.co/qB5g0kz/leaf-2.png" class="opa" style="width:25px;height:25px;position:absolute;left:17.4cm;top:2.6cm;display:none">
<img id="i15" src="https://i.ibb.co/rHbrn2T/leaf-3.png" class="opa" style="width:25px;height:25px;position:absolute;left:18cm;top:2.6cm;display:none">
<img id="i16" src="https://i.ibb.co/Zm6XnmZ/leaf-4.png" class="opa" style="width:25px;height:25px;position:absolute;left:18.6cm;top:2.6cm;display:none">
<img id="i17" src="https://i.ibb.co/kDW5ZCC/leaf-5.png" class="opa" style="width:25px;height:25px;position:absolute;left:19.2cm;top:2.6cm;display:none">
<img id="i18" src="https://i.ibb.co/6y92DWB/leaf-6.png" class="opa" style="width:25px;height:25px;position:absolute;left:19.8cm;top:2.6cm;display:none">

<img id="i19" src="https://i.ibb.co/dmf9tPs/leaf-7.png" class="opa" style="width:25px;height:25px;position:absolute;left:16.8cm;top:3.2cm;display:none">
<img id="i20" src="https://i.ibb.co/XZ6Gzxk/leaf-8.png" class="opa" style="width:25px;height:25px;position:absolute;left:17.4cm;top:3.2cm;display:none">
<img id="i21" src="https://i.ibb.co/r2xrGWj/leaf-9.png" class="opa" style="width:25px;height:25px;position:absolute;left:18cm;top:3.2cm;display:none">
<img id="i22" src="https://i.ibb.co/HFYCqL3/leaf-10.png" class="opa" style="width:25px;height:25px;position:absolute;left:18.6cm;top:3.2cm;display:none">
<img id="i23" src="https://i.ibb.co/sq1XPj5/leaf-11.png" class="opa" style="width:25px;height:25px;position:absolute;left:19.2cm;top:3.2cm;display:none">
<img id="i24" src="https://i.ibb.co/TvJgb4m/leaf-12.png" class="opa" style="width:25px;height:25px;position:absolute;left:19.8cm;top:3.2cm;display:none">
<img id="i25" src="https://i.ibb.co/hZnLpRw/tree.jpg" class="opatree" alt="grass" style="width:200px;height:200px;position:absolute;left:16cm;top:1cm;display:none">

<!-- Multi (3) Patch Image Grid on Left: -->
<img id="3l1" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:6.7cm;top:8.5cm;display:none">
<img id="3l2" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.3cm;top:8.5cm;display:none">
<img id="3l3" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.9cm;top:8.5cm;display:none">
<img id="3l4" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:8.5cm;top:8.5cm;display:none">
<img id="3l5" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.1cm;top:8.5cm;display:none">
<img id="3l6" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.7cm;top:8.5cm;display:none">

<img id="3l7" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:6.6cm;top:9.2cm;display:none">
<img id="3l8" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.2cm;top:9cm;display:none">
<img id="3l9" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.8cm;top:9cm;display:none">
<img id="3l10" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:8.4cm;top:9cm;display:none">
<img id="3l11" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9cm;top:9cm;display:none">
<img id="3l12" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.6cm;top:9cm;display:none">

<img id="3l13" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:6.6cm;top:9.6cm;display:none">
<img id="3l14" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.2cm;top:9.6cm;display:none">
<img id="3l15" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.8cm;top:9.6cm;display:none">
<img id="3l16" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:8.4cm;top:9.6cm;display:none">
<img id="3l17" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9cm;top:9.6cm;display:none">
<img id="3l18" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.6cm;top:9.6cm;display:none">

<img id="3l19" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:6.6cm;top:10.2cm;display:none">
<img id="3l20" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.2cm;top:10.2cm;display:none">
<img id="3l21" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.8cm;top:10.2cm;display:none">
<img id="3l22" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:8.4cm;top:10.2cm;display:none">
<img id="3l23" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9cm;top:10.2cm;display:none">
<img id="3l24" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.6cm;top:10.2cm;display:none">
<img id="3l25" src="https://i.ibb.co/hZnLpRw/tree.jpg" class="opatree" alt="grass" style="width:200px;height:200px;position:absolute;left:6cm;top:8cm;display:none">


<!-- Multi (3) Patch Image Grid on Right: -->
<img id="3r1" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:27.9cm;top:8.5cm;display:none">
<img id="3r2" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:28.5cm;top:8.5cm;display:none">
<img id="3r3" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.1cm;top:8.5cm;display:none">
<img id="3r4" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.7cm;top:8.5cm;display:none">
<img id="3r5" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.3cm;top:8.5cm;display:none">
<img id="3r6" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.9cm;top:8.5cm;display:none">

<img id="3r7" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:27.9cm;top:9.2cm;display:none">
<img id="3r8" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:28.5cm;top:9cm;display:none">
<img id="3r9" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.1cm;top:9cm;display:none">
<img id="3r10" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.7cm;top:9cm;display:none">
<img id="3r11" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.3cm;top:9cm;display:none">
<img id="3r12" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.9cm;top:9cm;display:none">

<img id="3r13" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:27.9cm;top:9.6cm;display:none">
<img id="3r14" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:28.5cm;top:9.6cm;display:none">
<img id="3r15" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.1cm;top:9.6cm;display:none">
<img id="3r16" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.7cm;top:9.6cm;display:none">
<img id="3r17" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.3cm;top:9.6cm;display:none">
<img id="3r18" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.9cm;top:9.6cm;display:none">

<img id="3r19" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:27.9cm;top:10.2cm;display:none">
<img id="3r20" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:28.5cm;top:10.2cm;display:none">
<img id="3r21" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.1cm;top:10.2cm;display:none">
<img id="3r22" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.7cm;top:10.2cm;display:none">
<img id="3r23" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.3cm;top:10.2cm;display:none">
<img id="3r24" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.9cm;top:10.2cm;display:none">
<img id="3r25" src="https://i.ibb.co/hZnLpRw/tree.jpg"class="opatree" alt="grass" style="width:200px;height:200px;position:absolute;left:27cm;top:8cm;display:none">

<!-- Multi (5) 4th Patch Image Grid on Right: -->
<img id="41" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:27.9cm;top:14.5cm;display:none">
<img id="42" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:28.5cm;top:14.5cm;display:none">
<img id="43" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.1cm;top:14.5cm;display:none">
<img id="44" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.7cm;top:14.5cm;display:none">
<img id="45" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.3cm;top:14.5cm;display:none">
<img id="46" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.9cm;top:14.5cm;display:none">

<img id="47" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:27.9cm;top:15.2cm;display:none">
<img id="48" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:28.5cm;top:15cm;display:none">
<img id="49" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.1cm;top:15cm;display:none">
<img id="410" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.7cm;top:15cm;display:none">
<img id="411" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.3cm;top:15cm;display:none">
<img id="412" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.9cm;top:15cm;display:none">

<img id="413" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:27.9cm;top:15.5cm;display:none">
<img id="414" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:28.5cm;top:15.5cm;display:none">
<img id="415" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.1cm;top:15.5cm;display:none">
<img id="416" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.7cm;top:15.5cm;display:none">
<img id="417" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.3cm;top:15.5cm;display:none">
<img id="418" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.9cm;top:15.5cm;display:none">

<img id="419" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:27.9cm;top:16cm;display:none">
<img id="420" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:28.5cm;top:16cm;display:none">
<img id="421" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.1cm;top:16cm;display:none">
<img id="422" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:29.7cm;top:16cm;display:none">
<img id="423" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.3cm;top:16cm;display:none">
<img id="424" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:30.9cm;top:16cm;display:none">
<img id="425" src="https://i.ibb.co/hZnLpRw/tree.jpg" class="opatree" alt="grass" style="width:200px;height:200px;position:absolute;left:27cm;top:14cm;display:none">

<!-- Multi (5) 5th Patch Image Grid on Left: -->
<img id="51" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:6.7cm;top:14.5cm;display:none">
<img id="52" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.3cm;top:14.5cm;display:none">
<img id="53" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.9cm;top:14.5cm;display:none">
<img id="54" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:8.5cm;top:14.5cm;display:none">
<img id="55" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.1cm;top:14.5cm;display:none">
<img id="56" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.7cm;top:14.5cm;display:none">

<img id="57" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:6.6cm;top:15.2cm;display:none">
<img id="58" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.2cm;top:15cm;display:none">
<img id="59" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.8cm;top:15cm;display:none">
<img id="510" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:8.4cm;top:15cm;display:none">
<img id="511" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9cm;top:15cm;display:none">
<img id="512" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.6cm;top:15cm;display:none">

<img id="513" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:6.6cm;top:15.5cm;display:none">
<img id="514" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.2cm;top:15.5cm;display:none">
<img id="515" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.8cm;top:15.5cm;display:none">
<img id="516" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:8.4cm;top:15.5cm;display:none">
<img id="517" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9cm;top:15.5cm;display:none">
<img id="518" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.6cm;top:15.5cm;display:none">

<img id="519" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:6.6cm;top:16cm;display:none">
<img id="520" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.2cm;top:16cm;display:none">
<img id="521" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:7.8cm;top:16cm;display:none">
<img id="522" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:8.4cm;top:16cm;display:none">
<img id="523" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9cm;top:16cm;display:none">
<img id="524" src="https://i.ibb.co/CQkdQRv/leaf.jpg" class="opa" style="width:25px;height:25px;position:absolute;left:9.6cm;top:16cm;display:none">
<img id="525" src="https://i.ibb.co/hZnLpRw/tree.jpg" class="opatree" alt="grass" style="width:200px;height:200px;position:absolute;left:6cm;top:14cm;display:none">


<script>

// Experimental variables
var Ttracker = 1; // Variable to keep track of trials
var Mtracker = -1; // Variable to keep track of multi (3) trials
var M5tracker = -1; // Variable to keep track of multi (5) trials
var ptrials = 2; // Total number of single patch trials
var ntrials = ptrials+2; // Total number of trials = single + multiple (3) patch trials
var total_5trials = 1; // Total number of 5 patch trials
var trial_num = [1]; // Keeps track of the number of trials we performed
var RTs = []; // Stores all RTs
var conditions = []; // Store the different conditions for sinlge patches
var conditionsM3 = []; // Store the different conditions for multi patches (3)
var conditionsM5 = []; // Store the different conditions for multi patches (5)
var con_num; // Condition number for sinlge patches
var conM_num; // Condition number for multi (3) patches
var conM5_num; // Condition number for multi (5) patches
var responses = []; // Store responses
var CONDITIONS = []; // Store the trial condition
var i; // Indexing variable
var k; // Indexing variable
// Get the elements with class="column"
var nut_position = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]; // The nut image position
var n_position = [];
var tracker_5patch;
var number_trials;
var patch_one = document.getElementsByClassName("turn1");

// Define timers for the different pics:
var st1; // Variable to initialise start timer for pic1
var et1; // Variable to initialise end timer for pic1
var st2; // Variable to initialise start timer for pic2
var et2; // Variable to initialise end timer for pic2
var st3; // Variable to initialise start timer for pic3
var et3; // Variable to initialise end timerfor pic3
var st4; // Variable to initialise start timer for pic4
var et4; // Variable to initialise end timerfor pic4
var st05; // Variable to initialise start timer for pic5
var et05; // Variable to initialise end timerfor pic5
var st5; // Variable to initialise start timer for pic1 single patch
var et5; // Variable to initialise end timerfor pic1 single patch

// Text to label the images:
document.getElementById("atext").innerHTML = "A"; // Multi patch A
document.getElementById("Atext").innerHTML = "A"; // Single patch
document.getElementById("btext").innerHTML = "B"; // Multi patch B
document.getElementById("ctext").innerHTML = "C"; // Multi patch C

// Function to determine nut position in top patch:
function show_single() {
  if (n_position == 1){
      document.getElementById("i1").src = "https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 2) {
      document.getElementById("i2").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 3) {
      document.getElementById("i3").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 4) {
      document.getElementById("i4").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 5) {
      document.getElementById("i5").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 6) {
      document.getElementById("i6").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 7) {
      document.getElementById("i7").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 8) {
      document.getElementById("i8").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 9) {
      document.getElementById("i9").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 10) {
      document.getElementById("i10").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 11) {
      document.getElementById("i11").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 12) {
      document.getElementById("i12").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 13) {
      document.getElementById("i13").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 14) {
      document.getElementById("i14").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 15) {
      document.getElementById("i15").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 16) {
      document.getElementById("i16").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 17) {
      document.getElementById("i17").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 18) {
      document.getElementById("i18").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 19) {
      document.getElementById("i19").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 20) {
      document.getElementById("i20").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 21) {
      document.getElementById("i21").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 22) {
      document.getElementById("i22").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 23) {
      document.getElementById("i23").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 24) {
      document.getElementById("i24").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } 
  }
  

// Function to CALL LEFT 3 patch image grid:
function show_single_3l() {
  if (n_position == 1){
      document.getElementById("3l1").src = "https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 2) {
      document.getElementById("3l2").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 3) {
      document.getElementById("3l3").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 4) {
      document.getElementById("3l4").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 5) {
      document.getElementById("3l5").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 6) {
      document.getElementById("3l6").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 7) {
      document.getElementById("3l7").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 8) {
      document.getElementById("3l8").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 9) {
      document.getElementById("3l9").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 10) {
      document.getElementById("3l10").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 11) {
      document.getElementById("3l11").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 12) {
      document.getElementById("3l12").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 13) {
      document.getElementById("3l13").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 14) {
      document.getElementById("3l14").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 15) {
      document.getElementById("3l15").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 16) {
      document.getElementById("3l16").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 17) {
      document.getElementById("3l17").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 18) {
      document.getElementById("3l18").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 19) {
      document.getElementById("3l19").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 20) {
      document.getElementById("3l20").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 21) {
      document.getElementById("3l21").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 22) {
      document.getElementById("3l22").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 23) {
      document.getElementById("3l23").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 24) {
      document.getElementById("3l24").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  }
  }

// Function to CALL RIGHT 3 patch image grid:
function show_single_3r() {
  if (n_position == 1){
      document.getElementById("3r1").src = "https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 2) {
      document.getElementById("3r2").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 3) {
      document.getElementById("3r3").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 4) {
      document.getElementById("3r4").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 5) {
      document.getElementById("3r5").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 6) {
      document.getElementById("3r6").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 7) {
      document.getElementById("3r7").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 8) {
      document.getElementById("3r8").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 9) {
      document.getElementById("3r9").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 10) {
      document.getElementById("3r10").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 11) {
      document.getElementById("3r11").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 12) {
      document.getElementById("3r12").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 13) {
      document.getElementById("3r13").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 14) {
      document.getElementById("3r14").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 15) {
      document.getElementById("3r15").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 16) {
      document.getElementById("3r16").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 17) {
      document.getElementById("3r17").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 18) {
      document.getElementById("3r18").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 19) {
      document.getElementById("3r19").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 20) {
      document.getElementById("3r20").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 21) {
      document.getElementById("3r21").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 22) {
      document.getElementById("3r22").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 23) {
      document.getElementById("3r23").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 24) {
      document.getElementById("3r24").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  }
  }

// Function to CALL RIGHT 4 patch image grid:
function show_single_4() {
  if (n_position == 1){
      document.getElementById("41").src = "https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 2) {
      document.getElementById("42").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 3) {
      document.getElementById("43").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 4) {
      document.getElementById("44").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 5) {
      document.getElementById("45").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 6) {
      document.getElementById("46").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 7) {
      document.getElementById("47").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 8) {
      document.getElementById("48").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 9) {
      document.getElementById("49").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 10) {
      document.getElementById("410").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 11) {
      document.getElementById("411").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 12) {
      document.getElementById("412").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 13) {
      document.getElementById("413").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 14) {
      document.getElementById("414").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 15) {
      document.getElementById("415").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 16) {
      document.getElementById("416").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 17) {
      document.getElementById("417").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 18) {
      document.getElementById("418").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 19) {
      document.getElementById("419").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 20) {
      document.getElementById("420").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 21) {
      document.getElementById("421").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 22) {
      document.getElementById("422").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 23) {
      document.getElementById("423").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 24) {
      document.getElementById("424").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  }
  }
  
// Function to CALL RIGHT 5 patch image grid:
function show_single_5() {
  if (n_position == 1){
      document.getElementById("51").src = "https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 2) {
      document.getElementById("52").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 3) {
      document.getElementById("53").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 4) {
      document.getElementById("54").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 5) {
      document.getElementById("55").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 6) {
      document.getElementById("56").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 7) {
      document.getElementById("57").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 8) {
      document.getElementById("58").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 9) {
      document.getElementById("59").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 10) {
      document.getElementById("510").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 11) {
      document.getElementById("511").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 12) {
      document.getElementById("512").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 13) {
      document.getElementById("513").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 14) {
      document.getElementById("514").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 15) {
      document.getElementById("515").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 16) {
      document.getElementById("516").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 17) {
      document.getElementById("517").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 18) {
      document.getElementById("518").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 19) {
      document.getElementById("519").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 20) {
      document.getElementById("520").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 21) {
      document.getElementById("521").src ="https://i.ibb.co/PxM3KCK/m-nut.jpg";
  } else if (n_position == 22) {
      document.getElementById("522").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 23) {
      document.getElementById("523").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  } else if (n_position == 24) {
      document.getElementById("524").src ="https://i.ibb.co/7Nss3jc/n-nut.jpg";
  }
  }
  
  function show_leaves_top() {
  document.getElementById("i1").src ="https://i.ibb.co/56wxrYF/leaf-1.png";
  document.getElementById("i1").style.display = "block";
  document.getElementById("i2").src ="https://i.ibb.co/qB5g0kz/leaf-2.png";
  document.getElementById("i2").style.display = "block";
  document.getElementById("i3").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("i3").style.display = "block";
  document.getElementById("i4").src ="https://i.ibb.co/GpYz3b9/leaf-4.png";
  document.getElementById("i4").style.display = "block";
  document.getElementById("i5").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("i5").style.display = "block";
  document.getElementById("i6").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("i6").style.display = "block";
  document.getElementById("i7").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("i7").style.display = "block";
  document.getElementById("i8").src ="https://i.ibb.co/XZ6Gzxk/leaf-8.png";
  document.getElementById("i8").style.display = "block";
  document.getElementById("i9").src ="https://i.ibb.co/fY3gTC3/leaf-9.png";
  document.getElementById("i9").style.display = "block";
  document.getElementById("i10").src ="https://i.ibb.co/HFYCqL3/leaf-10.png";
  document.getElementById("i10").style.display = "block";
  document.getElementById("i11").src ="https://i.ibb.co/5WGKbXf/leaf-11.png";
  document.getElementById("i11").style.display = "block";
  document.getElementById("i12").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("i12").style.display = "block";
  document.getElementById("i13").src ="https://i.ibb.co/GWB3qnZ/leaf-1.png";
  document.getElementById("i13").style.display = "block";
  document.getElementById("i14").src ="https://i.ibb.co/GC7vc2h/leaf-2.png";
  document.getElementById("i14").style.display = "block";
  document.getElementById("i15").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("i15").style.display = "block";
  document.getElementById("i16").src ="https://i.ibb.co/Zm6XnmZ/leaf-4.png";
  document.getElementById("i16").style.display = "block";
  document.getElementById("i17").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("i17").style.display = "block";
  document.getElementById("i18").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("i18").style.display = "block";
  document.getElementById("i19").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("i19").style.display = "block";
  document.getElementById("i20").src ="https://i.ibb.co/Z67GFGZ/leaf-8.png";
  document.getElementById("i20").style.display = "block";
  document.getElementById("i21").src ="https://i.ibb.co/r2xrGWj/leaf-9.png";
  document.getElementById("i21").style.display = "block";
  document.getElementById("i22").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
  document.getElementById("i22").style.display = "block";
  document.getElementById("i23").src ="https://i.ibb.co/sq1XPj5/leaf-11.png";
  document.getElementById("i23").style.display = "block";
  document.getElementById("i24").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("i24").style.display = "block";
  document.getElementById("i25").style.display = "block";}
  
function show_leaves_left() {
  document.getElementById("3l1").src ="https://i.ibb.co/56wxrYF/leaf-1.png";
  document.getElementById("3l1").style.display = "block";
  document.getElementById("3l2").src ="https://i.ibb.co/qB5g0kz/leaf-2.png";
  document.getElementById("3l2").style.display = "block";
  document.getElementById("3l3").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("3l3").style.display = "block";
  document.getElementById("3l4").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
  document.getElementById("3l4").style.display = "block";
  document.getElementById("3l5").src ="https://i.ibb.co/GWB3qnZ/leaf-1.png";
  document.getElementById("3l5").style.display = "block";
  document.getElementById("3l6").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("3l6").style.display = "block";
  document.getElementById("3l7").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("3l7").style.display = "block";
  document.getElementById("3l8").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("3l8").style.display = "block";
  document.getElementById("3l9").src ="https://i.ibb.co/fY3gTC3/leaf-9.png";
  document.getElementById("3l9").style.display = "block";
  document.getElementById("3l10").src ="https://i.ibb.co/Z67GFGZ/leaf-8.png";
  document.getElementById("3l10").style.display = "block";
  document.getElementById("3l11").src ="https://i.ibb.co/5WGKbXf/leaf-11.png";
  document.getElementById("3l11").style.display = "block";
  document.getElementById("3l12").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("3l12").style.display = "block";
  document.getElementById("3l13").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("3l13").style.display = "block";
  document.getElementById("3l14").src ="https://i.ibb.co/GC7vc2h/leaf-2.png";
  document.getElementById("3l14").style.display = "block";
  document.getElementById("3l15").src ="https://i.ibb.co/XZ6Gzxk/leaf-8.png";
  document.getElementById("3l15").style.display = "block";
  document.getElementById("3l16").src ="https://i.ibb.co/Zm6XnmZ/leaf-4.png";
  document.getElementById("3l16").style.display = "block";
  document.getElementById("3l17").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("3l17").style.display = "block";
  document.getElementById("3l18").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("3l18").style.display = "block";
  document.getElementById("3l19").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("3l19").style.display = "block";
  document.getElementById("3l20").src ="https://i.ibb.co/GpYz3b9/leaf-4.png";
  document.getElementById("3l20").style.display = "block";
  document.getElementById("3l21").src ="https://i.ibb.co/r2xrGWj/leaf-9.png";
  document.getElementById("3l21").style.display = "block";
  document.getElementById("3l22").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
  document.getElementById("3l22").style.display = "block";
  document.getElementById("3l23").src ="https://i.ibb.co/sq1XPj5/leaf-11.png";
  document.getElementById("3l23").style.display = "block";
  document.getElementById("3l24").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("3l24").style.display = "block";
  document.getElementById("3l25").style.display = "block";}
    
function show_leaves_right() {
  document.getElementById("3r1").src ="https://i.ibb.co/qB5g0kz/leaf-2.png";
  document.getElementById("3r1").style.display = "block";
  document.getElementById("3r2").src ="https://i.ibb.co/56wxrYF/leaf-1.png";
  document.getElementById("3r2").style.display = "block";
  document.getElementById("3r3").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("3r3").style.display = "block";
  document.getElementById("3r4").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("3r4").style.display = "block";
  document.getElementById("3r5").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("3r5").style.display = "block";
  document.getElementById("3r6").src ="https://i.ibb.co/GpYz3b9/leaf-4.png";
  document.getElementById("3r6").style.display = "block";
  document.getElementById("3r7").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("3r7").style.display = "block";
  document.getElementById("3r8").src ="https://i.ibb.co/XZ6Gzxk/leaf-8.png";
  document.getElementById("3r8").style.display = "block";
  document.getElementById("3r9").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("3r9").style.display = "block";
  document.getElementById("3r10").src ="https://i.ibb.co/GC7vc2h/leaf-2.png";
  document.getElementById("3r10").style.display = "block";
  document.getElementById("3r11").src ="https://i.ibb.co/5WGKbXf/leaf-11.png";
  document.getElementById("3r11").style.display = "block";
  document.getElementById("3r12").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("3r12").style.display = "block";
  document.getElementById("3r13").src ="https://i.ibb.co/GWB3qnZ/leaf-1.png";
  document.getElementById("3r13").style.display = "block";
  document.getElementById("3r14").src ="https://i.ibb.co/HFYCqL3/leaf-10.png";
  document.getElementById("3r14").style.display = "block";
  document.getElementById("3r15").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("3r15").style.display = "block";
  document.getElementById("3r16").src ="https://i.ibb.co/Zm6XnmZ/leaf-4.png";
  document.getElementById("3r16").style.display = "block";
  document.getElementById("3r17").src ="https://i.ibb.co/fY3gTC3/leaf-9.png";
  document.getElementById("3r17").style.display = "block";
  document.getElementById("3r18").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("3r18").style.display = "block";
  document.getElementById("3r19").src ="https://i.ibb.co/Z67GFGZ/leaf-8.png";
  document.getElementById("3r19").style.display = "block";
  document.getElementById("3r20").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("3r20").style.display = "block";
  document.getElementById("3r21").src ="https://i.ibb.co/r2xrGWj/leaf-9.png";
  document.getElementById("3r21").style.display = "block";
  document.getElementById("3r22").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
  document.getElementById("3r22").style.display = "block";
  document.getElementById("3r23").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("3r23").style.display = "block";
  document.getElementById("3r24").src ="https://i.ibb.co/sq1XPj5/leaf-11.png";
  document.getElementById("3r24").style.display = "block";
  document.getElementById("3r25").style.display = "block";
  }
  
function show_leaves_4() {
  document.getElementById("41").src ="https://i.ibb.co/GpYz3b9/leaf-4.png";
  document.getElementById("41").style.display = "block";
  document.getElementById("42").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("42").style.display = "block";
  document.getElementById("43").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("43").style.display = "block";
  document.getElementById("44").src ="https://i.ibb.co/56wxrYF/leaf-1.png";
  document.getElementById("44").style.display = "block";
  document.getElementById("45").src ="https://i.ibb.co/qB5g0kz/leaf-2.png";
  document.getElementById("45").style.display = "block";
  document.getElementById("46").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("46").style.display = "block";
  document.getElementById("47").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("47").style.display = "block";
  document.getElementById("48").src ="https://i.ibb.co/XZ6Gzxk/leaf-8.png";
  document.getElementById("48").style.display = "block";
  document.getElementById("49").src ="https://i.ibb.co/fY3gTC3/leaf-9.png";
  document.getElementById("49").style.display = "block";
  document.getElementById("410").src ="https://i.ibb.co/HFYCqL3/leaf-10.png";
  document.getElementById("410").style.display = "block";
  document.getElementById("411").src ="https://i.ibb.co/5WGKbXf/leaf-11.png";
  document.getElementById("411").style.display = "block";
  document.getElementById("412").src ="https://i.ibb.co/sq1XPj5/leaf-11.png";
  document.getElementById("412").style.display = "block";
  document.getElementById("413").src ="https://i.ibb.co/GC7vc2h/leaf-2.png";
  document.getElementById("413").style.display = "block";
  document.getElementById("414").src ="https://i.ibb.co/GWB3qnZ/leaf-1.png";
  document.getElementById("414").style.display = "block";
  document.getElementById("415").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("415").style.display = "block";
  document.getElementById("416").src ="https://i.ibb.co/Zm6XnmZ/leaf-4.png";
  document.getElementById("416").style.display = "block";
  document.getElementById("417").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("417").style.display = "block";
  document.getElementById("418").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("418").style.display = "block";
  document.getElementById("419").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("419").style.display = "block";
  document.getElementById("420").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("420").style.display = "block";
  document.getElementById("421").src ="https://i.ibb.co/r2xrGWj/leaf-9.png";
  document.getElementById("421").style.display = "block";
  document.getElementById("422").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
  document.getElementById("422").style.display = "block";
  document.getElementById("423").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("423").style.display = "block";
  document.getElementById("424").src ="https://i.ibb.co/Z67GFGZ/leaf-8.png";
  document.getElementById("424").style.display = "block";
  document.getElementById("425").style.display = "block";
  }
  
  function show_leaves_5() { 
  document.getElementById("51").src ="https://i.ibb.co/56wxrYF/leaf-1.png";
  document.getElementById("51").style.display = "block";
  document.getElementById("52").src ="https://i.ibb.co/qB5g0kz/leaf-2.png";
  document.getElementById("52").style.display = "block";
  document.getElementById("53").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("53").style.display = "block";
  document.getElementById("54").src ="https://i.ibb.co/GpYz3b9/leaf-4.png";
  document.getElementById("54").style.display = "block";
  document.getElementById("55").src ="https://i.ibb.co/Zm6XnmZ/leaf-4.png";
  document.getElementById("55").style.display = "block";
  document.getElementById("56").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("56").style.display = "block";
  document.getElementById("57").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("57").style.display = "block";
  document.getElementById("58").src ="https://i.ibb.co/fY3gTC3/leaf-9.png";
  document.getElementById("58").style.display = "block";
  document.getElementById("59").src ="https://i.ibb.co/XZ6Gzxk/leaf-8.png";
  document.getElementById("59").style.display = "block";
  document.getElementById("510").src ="https://i.ibb.co/HFYCqL3/leaf-10.png";
  document.getElementById("510").style.display = "block";
  document.getElementById("511").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("511").style.display = "block";
  document.getElementById("512").src ="https://i.ibb.co/5WGKbXf/leaf-11.png";
  document.getElementById("512").style.display = "block";
  document.getElementById("513").src ="https://i.ibb.co/GWB3qnZ/leaf-1.png";
  document.getElementById("513").style.display = "block";
  document.getElementById("514").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("514").style.display = "block";
  document.getElementById("515").src ="https://i.ibb.co/GC7vc2h/leaf-2.png";
  document.getElementById("515").style.display = "block";
  document.getElementById("516").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("516").style.display = "block";
  document.getElementById("517").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("517").style.display = "block";
  document.getElementById("518").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("518").style.display = "block";
  document.getElementById("519").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("519").style.display = "block";
  document.getElementById("520").src ="https://i.ibb.co/Z67GFGZ/leaf-8.png";
  document.getElementById("520").style.display = "block";
  document.getElementById("521").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
  document.getElementById("521").style.display = "block";
  document.getElementById("522").src ="https://i.ibb.co/r2xrGWj/leaf-9.png";
  document.getElementById("522").style.display = "block";
  document.getElementById("523").src ="https://i.ibb.co/sq1XPj5/leaf-11.png";
  document.getElementById("523").style.display = "block";
  document.getElementById("524").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("524").style.display = "block";
  document.getElementById("525").style.display = "block";}

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

// Create how many conditions we want for SINGLE PATCHES then shuffle the order
for (i = 1; i < 10; i++) {
conditions.push(1); // Codnition 1 = NUT THERE
conditions.push(2); // Condition 2 = NO NUT THERE
}
shuffle(conditions); // Shuffle the actual single patch conditions

// Create how many conditions we want for MULTI PATCHES (3) then shuffle the order
for (i = 1; i < 10; i++) {
conditionsM3.push(1); // Codnition 1 = NUT IS IN A NO WEHERE ELSE
conditionsM3.push(2); // Condition 2 = NUT IS IN B NO WEHERE ELSE
conditionsM3.push(3); // Condition 3 = NUT IS IN C NO WEHERE ELSE
}
shuffle(conditionsM3); // Shuffle the actual multi patch conditions

// Create how many conditions we want for MULTI PATCHES (5) then shuffle the order
for (i = 1; i < 10; i++) {
conditionsM5.push(1); // Codnition 1 = NUT IS IN A NO WEHERE ELSE
conditionsM5.push(2); // Condition 2 = NUT IS IN B NO WEHERE ELSE
conditionsM5.push(3); // Condition 3 = NUT IS IN C NO WEHERE ELSE
conditionsM5.push(4); // Condition 2 = NUT IS IN B NO WEHERE ELSE
conditionsM5.push(5); // Condition 3 = NUT IS IN C NO WEHERE ELSE
}
shuffle(conditionsM5); // Shuffle the actual multi patch conditions


// What happens when cursor IS OVER pic1 multi (3) left: 
function mouseOver() {
  if (M5tracker < 0) {
    if (conM_num == 1) {
      show_leaves_left();
      n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
      show_single_3l();
      document.getElementById('pic1').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    } else if (conM_num == 2){
      show_leaves_left();
      document.getElementById('pic1').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
    } else if (conM_num == 3){
      show_leaves_left();
      document.getElementById('pic1').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
  }}
  else if (M5tracker > -1) {
    if (conM5_num == 1) {
      show_leaves_left();
      n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
      show_single_3l();
      document.getElementById('pic01').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    } else if (conM5_num == 2){
      show_leaves_left();
      document.getElementById('pic01').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
    } else if (conM5_num == 3){
      show_leaves_left();
      document.getElementById('pic01').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    } else if (conM5_num == 4){
      show_leaves_left();
      document.getElementById('pic01').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    } else if (conM5_num == 5) {
      show_leaves_left();
      document.getElementById('pic01').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    }
    }}
	// What happens when cursor IS NOT OVER pic1: 
function mouseOut() {
  document.getElementById("3l1").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l1").style.display = "none";
  document.getElementById("3l2").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l2").style.display = "none";
  document.getElementById("3l3").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l3").style.display = "none";
  document.getElementById("3l4").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l4").style.display = "none";
  document.getElementById("3l5").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l5").style.display = "none";
  document.getElementById("3l6").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l6").style.display = "none";
  document.getElementById("3l7").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l7").style.display = "none";
  document.getElementById("3l8").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l8").style.display = "none";
  document.getElementById("3l9").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l9").style.display = "none";
  document.getElementById("3l10").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l10").style.display = "none";
  document.getElementById("3l11").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l11").style.display = "none";
  document.getElementById("3l12").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l12").style.display = "none";
  document.getElementById("3l13").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l13").style.display = "none";
  document.getElementById("3l14").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l14").style.display = "none";
  document.getElementById("3l15").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l15").style.display = "none";
  document.getElementById("3l16").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l16").style.display = "none";
  document.getElementById("3l17").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l17").style.display = "none";
  document.getElementById("3l18").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l18").style.display = "none";
  document.getElementById("3l19").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l19").style.display = "none";
  document.getElementById("3l20").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l20").style.display = "none";
  document.getElementById("3l21").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l21").style.display = "none";
  document.getElementById("3l22").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l22").style.display = "none";
  document.getElementById("3l23").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l23").style.display = "none";
  document.getElementById("3l24").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3l24").style.display = "none";
  document.getElementById("3l25").style.display = "none";
  if (M5tracker < 0) {
    document.getElementById("pic1").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
    document.getElementById('pic1').style.display='block'; // Show tree
  } else if (M5tracker > -1) {
    document.getElementById("pic01").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
    document.getElementById('pic01').style.display='block'; // Show tree
  }
  }
  
// What happens when cursor IS OVER pic2:
function mouseOver2() {
  if (M5tracker < 0) {
    if (conM_num == 1) {
      show_leaves_top();  
      document.getElementById('pic2').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    } else if (conM_num == 2){
      show_leaves_top();  
      n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
      show_single();
      document.getElementById('pic2').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
    } else if (conM_num == 3){
      show_leaves_top();  
      document.getElementById('pic2').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
  }}
  else if (M5tracker > -1) {
    if (conM5_num == 1) {
      show_leaves_top();  
      document.getElementById('pic02').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    } else if (conM5_num == 2){
      show_leaves_top();  
      n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
      show_single();
      document.getElementById('pic02').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
    } else if (conM5_num == 3){
      show_leaves_top();  
      document.getElementById('pic02').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    } else if (conM5_num == 4) {
      show_leaves_top();  
      document.getElementById('pic02').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    } else if (conM5_num == 5) {
      show_leaves_top();  
      document.getElementById('pic02').style.display='none'; // Hide tree
      //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
    }
  }
  }
	// What happens when cursor IS NOT OVER pic2:
function mouseOut2() {
	document.getElementById("i1").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i1").style.display = "none";
  document.getElementById("i2").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i2").style.display = "none";
  document.getElementById("i3").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i3").style.display = "none";
  document.getElementById("i4").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i4").style.display = "none";
  document.getElementById("i5").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i5").style.display = "none";
  document.getElementById("i6").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i6").style.display = "none";
  document.getElementById("i7").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i7").style.display = "none";
  document.getElementById("i8").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i8").style.display = "none";
  document.getElementById("i9").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i9").style.display = "none";
  document.getElementById("i10").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i10").style.display = "none";
  document.getElementById("i11").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i11").style.display = "none";
  document.getElementById("i12").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i12").style.display = "none";
  document.getElementById("i13").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i13").style.display = "none";
  document.getElementById("i14").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i14").style.display = "none";
  document.getElementById("i15").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i15").style.display = "none";
  document.getElementById("i16").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i16").style.display = "none";
  document.getElementById("i17").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i17").style.display = "none";
  document.getElementById("i18").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i18").style.display = "none";
  document.getElementById("i19").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i19").style.display = "none";
  document.getElementById("i20").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i20").style.display = "none";
  document.getElementById("i21").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i21").style.display = "none";
  document.getElementById("i22").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i22").style.display = "none";
  document.getElementById("i23").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i23").style.display = "none";
  document.getElementById("i24").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("i24").style.display = "none";
  document.getElementById("i25").style.display = "none";
  
  if (M5tracker < 0) {
    document.getElementById("pic2").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
    document.getElementById('pic2').style.display='block'; // Show tree
  } else if (M5tracker > -1) {
    document.getElementById("pic02").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
    document.getElementById('pic02').style.display='block'; // Show tree
  }
  }
  
// What happens when cursor IS OVER pic3: 
function mouseOver3() {
  if (M5tracker < 0) {
	if (conM_num == 1) {
    show_leaves_right();
    document.getElementById('pic3').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
	} else if (conM_num == 2){
    show_leaves_right();
    document.getElementById('pic3').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  } else if (conM_num == 3){
    show_leaves_right();
    n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
    show_single_3r();
    document.getElementById('pic3').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
  }}
  else if (M5tracker > -1) {
    if (conM5_num == 1) {
    show_leaves_right();
    document.getElementById('pic03').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
	} else if (conM5_num == 2){
    show_leaves_right();
    document.getElementById('pic03').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  } else if (conM5_num == 3){
    show_leaves_right();
    n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
    show_single_3r();
    document.getElementById('pic03').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
  } else if (conM5_num == 4){
    show_leaves_right();
    document.getElementById('pic03').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  } else if (conM5_num == 5) {
    show_leaves_right();
    document.getElementById('pic03').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  }}}
	// What happens when cursor IS NOT OVER pic3: 
function mouseOut3() {
  document.getElementById("3r1").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r1").style.display = "none";
  document.getElementById("3r2").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r2").style.display = "none";
  document.getElementById("3r3").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r3").style.display = "none";
  document.getElementById("3r4").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r4").style.display = "none";
  document.getElementById("3r5").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r5").style.display = "none";
  document.getElementById("3r6").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r6").style.display = "none";
  document.getElementById("3r7").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r7").style.display = "none";
  document.getElementById("3r8").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r8").style.display = "none";
  document.getElementById("3r9").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r9").style.display = "none";
  document.getElementById("3r10").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r10").style.display = "none";
  document.getElementById("3r11").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r11").style.display = "none";
  document.getElementById("3r12").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r12").style.display = "none";
  document.getElementById("3r13").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r13").style.display = "none";
  document.getElementById("3r14").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r14").style.display = "none";
  document.getElementById("3r15").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r15").style.display = "none";
  document.getElementById("3r16").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r16").style.display = "none";
  document.getElementById("3r17").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r17").style.display = "none";
  document.getElementById("3r18").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r18").style.display = "none";
  document.getElementById("3r19").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r19").style.display = "none";
  document.getElementById("3r20").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r20").style.display = "none";
  document.getElementById("3r21").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r21").style.display = "none";
  document.getElementById("3r22").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r22").style.display = "none";
  document.getElementById("3r23").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r23").style.display = "none";
  document.getElementById("3r24").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("3r24").style.display = "none";
  document.getElementById("3r25").style.display = "none";
  
  if (M5tracker < 0) {
  document.getElementById("pic3").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
  document.getElementById('pic3').style.display='block'; // Show tree
  } else if (M5tracker > -1) {
    document.getElementById("pic03").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
    document.getElementById('pic03').style.display='block'; // Show tree
  }}
  
// What happens when cursor IS OVER pic4: 
function mouseOver4() {
    if (conM5_num == 1) {
    show_leaves_4();
    document.getElementById('pic04').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
	} else if (conM5_num == 2){
    show_leaves_4();
    document.getElementById('pic04').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  } else if (conM5_num == 3){
    show_leaves_4();
    document.getElementById('pic04').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
  } else if (conM5_num == 4){
    show_leaves_4();
    n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
    show_single_4();
    document.getElementById('pic04').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  } else if (conM5_num == 5) {
    show_leaves_4();
    document.getElementById('pic04').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  }}
	// What happens when cursor IS NOT OVER pic3: 
function mouseOut4() {
  document.getElementById("41").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("41").style.display = "none";
  document.getElementById("42").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("42").style.display = "none";
  document.getElementById("43").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("43").style.display = "none";
  document.getElementById("44").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("44").style.display = "none";
  document.getElementById("45").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("45").style.display = "none";
  document.getElementById("46").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("46").style.display = "none";
  document.getElementById("47").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("47").style.display = "none";
  document.getElementById("48").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("48").style.display = "none";
  document.getElementById("49").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("49").style.display = "none";
  document.getElementById("410").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("410").style.display = "none";
  document.getElementById("411").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("411").style.display = "none";
  document.getElementById("412").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("412").style.display = "none";
  document.getElementById("413").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("413").style.display = "none";
  document.getElementById("414").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("414").style.display = "none";
  document.getElementById("415").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("415").style.display = "none";
  document.getElementById("416").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("416").style.display = "none";
  document.getElementById("417").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("417").style.display = "none";
  document.getElementById("418").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("418").style.display = "none";
  document.getElementById("419").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("419").style.display = "none";
  document.getElementById("420").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("420").style.display = "none";
  document.getElementById("421").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("421").style.display = "none";
  document.getElementById("422").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("422").style.display = "none";
  document.getElementById("423").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("423").style.display = "none";
  document.getElementById("424").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("424").style.display = "none";
  document.getElementById("425").style.display = "none";
  
  document.getElementById("pic04").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
  document.getElementById('pic04').style.display='block'; // Show tree
  }
  
// What happens when cursor IS OVER pic5: 
function mouseOver05() {
    if (conM5_num == 1) {
    show_leaves_5();
    document.getElementById('pic05').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
	} else if (conM5_num == 2){
    show_leaves_5();
    document.getElementById('pic05').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  } else if (conM5_num == 3){
    show_leaves_5();
    document.getElementById('pic05').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/CQkdQRv/leaf.jpg"
  } else if (conM5_num == 4){
    show_leaves_5();
    document.getElementById('pic05').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  } else if (conM5_num == 5) {
    show_leaves_5();
    n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
    show_single_5();
    document.getElementById('pic05').style.display='none'; // Hide tree
    //document.getElementById("pic2").src = "https://i.ibb.co/q7vHqDz/nut.jpg"
  }}
	// What happens when cursor IS NOT OVER pic3: 
function mouseOut05() {
  document.getElementById("51").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("51").style.display = "none";
  document.getElementById("52").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("52").style.display = "none";
  document.getElementById("53").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("53").style.display = "none";
  document.getElementById("54").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("54").style.display = "none";
  document.getElementById("55").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("55").style.display = "none";
  document.getElementById("56").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("56").style.display = "none";
  document.getElementById("57").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("57").style.display = "none";
  document.getElementById("58").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("58").style.display = "none";
  document.getElementById("59").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("59").style.display = "none";
  document.getElementById("510").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("510").style.display = "none";
  document.getElementById("511").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("511").style.display = "none";
  document.getElementById("512").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("512").style.display = "none";
  document.getElementById("513").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("513").style.display = "none";
  document.getElementById("514").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("514").style.display = "none";
  document.getElementById("515").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("515").style.display = "none";
  document.getElementById("516").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("516").style.display = "none";
  document.getElementById("517").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("517").style.display = "none";
  document.getElementById("518").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("518").style.display = "none";
  document.getElementById("519").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("519").style.display = "none";
  document.getElementById("520").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("520").style.display = "none";
  document.getElementById("521").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("521").style.display = "none";
  document.getElementById("522").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("522").style.display = "none";
  document.getElementById("523").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("523").style.display = "none";
  document.getElementById("524").src ="https://i.ibb.co/CQkdQRv/leaf.jpg";
  document.getElementById("524").style.display = "none";
  document.getElementById("525").style.display = "none";
  
  document.getElementById("pic05").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
  document.getElementById('pic05').style.display='block'; // Show tree
  }
  
// What happens when cursor IS OVER single patch trial: 
function mouseOver5() {
  if (con_num == 1) {  
    document.getElementById('pic5').style.display='none'; // Hide tree
    document.getElementById("i1").src ="https://i.ibb.co/56wxrYF/leaf-1.png";
    document.getElementById("i1").style.display = "block";
    document.getElementById("i2").src ="https://i.ibb.co/qB5g0kz/leaf-2.png";
    document.getElementById("i2").style.display = "block";
    document.getElementById("i3").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
    document.getElementById("i3").style.display = "block";
    document.getElementById("i4").src ="https://i.ibb.co/GpYz3b9/leaf-4.png";
    document.getElementById("i4").style.display = "block";
    document.getElementById("i5").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
    document.getElementById("i5").style.display = "block";
    document.getElementById("i6").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
    document.getElementById("i6").style.display = "block";
    document.getElementById("i7").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
    document.getElementById("i7").style.display = "block";
    document.getElementById("i8").src ="https://i.ibb.co/XZ6Gzxk/leaf-8.png";
    document.getElementById("i8").style.display = "block";
    document.getElementById("i9").src ="https://i.ibb.co/fY3gTC3/leaf-9.png";
    document.getElementById("i9").style.display = "block";
    document.getElementById("i10").src ="https://i.ibb.co/HFYCqL3/leaf-10.png";
    document.getElementById("i10").style.display = "block";
    document.getElementById("i11").src ="https://i.ibb.co/5WGKbXf/leaf-11.png";
    document.getElementById("i11").style.display = "block";
    document.getElementById("i12").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
    document.getElementById("i12").style.display = "block";
    document.getElementById("i13").src ="https://i.ibb.co/GWB3qnZ/leaf-1.png";
    document.getElementById("i13").style.display = "block";
    document.getElementById("i14").src ="https://i.ibb.co/GC7vc2h/leaf-2.png";
    document.getElementById("i14").style.display = "block";
    document.getElementById("i15").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
    document.getElementById("i15").style.display = "block";
    document.getElementById("i16").src ="https://i.ibb.co/Zm6XnmZ/leaf-4.png";
    document.getElementById("i16").style.display = "block";
    document.getElementById("i17").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
    document.getElementById("i17").style.display = "block";
    document.getElementById("i18").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
    document.getElementById("i18").style.display = "block";
    document.getElementById("i19").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
    document.getElementById("i19").style.display = "block";
    document.getElementById("i20").src ="https://i.ibb.co/Z67GFGZ/leaf-8.png";
    document.getElementById("i20").style.display = "block";
    document.getElementById("i21").src ="https://i.ibb.co/r2xrGWj/leaf-9.png";
    document.getElementById("i21").style.display = "block";
    document.getElementById("i22").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
    document.getElementById("i22").style.display = "block";
    document.getElementById("i23").src ="https://i.ibb.co/sq1XPj5/leaf-11.png";
    document.getElementById("i23").style.display = "block";
    document.getElementById("i24").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
    document.getElementById("i24").style.display = "block";
    document.getElementById("i25").style.display = "block";
    // Rotate Stimuli:
    //for (k = 0; k < patch_one.length; k++) {
    // patch_one[k].style.transform = "rotate(90deg)";
    //}
    n_position = nut_position[0]; // The first number in the shuffled list of possible nut positions is the position that the nut will actually take
    show_single(); // Show grid in pic 1 position
  } else if (con_num == 2) {
    document.getElementById('pic5').style.display='none'; // Hide tree
    document.getElementById("i1").src ="https://i.ibb.co/56wxrYF/leaf-1.png";
    document.getElementById("i1").style.display = "block";
    document.getElementById("i2").src ="https://i.ibb.co/qB5g0kz/leaf-2.png";
    document.getElementById("i2").style.display = "block";
    document.getElementById("i3").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
    document.getElementById("i3").style.display = "block";
    document.getElementById("i4").src ="https://i.ibb.co/GpYz3b9/leaf-4.png";
    document.getElementById("i4").style.display = "block";
    document.getElementById("i5").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
    document.getElementById("i5").style.display = "block";
    document.getElementById("i6").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
    document.getElementById("i6").style.display = "block";
    document.getElementById("i7").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
    document.getElementById("i7").style.display = "block";
    document.getElementById("i8").src ="https://i.ibb.co/Z67GFGZ/leaf-8.png";
    document.getElementById("i8").style.display = "block";
    document.getElementById("i9").src ="https://i.ibb.co/fY3gTC3/leaf-9.png";
    document.getElementById("i9").style.display = "block";
    document.getElementById("i10").src ="https://i.ibb.co/HFYCqL3/leaf-10.png";
    document.getElementById("i10").style.display = "block";
    document.getElementById("i11").src ="https://i.ibb.co/5WGKbXf/leaf-11.png";
    document.getElementById("i11").style.display = "block";
    document.getElementById("i12").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
    document.getElementById("i12").style.display = "block";
    document.getElementById("i13").src ="https://i.ibb.co/GWB3qnZ/leaf-1.png";
    document.getElementById("i13").style.display = "block";
    document.getElementById("i14").src ="https://i.ibb.co/GC7vc2h/leaf-2.png";
    document.getElementById("i14").style.display = "block";
    document.getElementById("i15").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
    document.getElementById("i15").style.display = "block";
    document.getElementById("i16").src ="https://i.ibb.co/Zm6XnmZ/leaf-4.png";
    document.getElementById("i16").style.display = "block";
    document.getElementById("i17").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
    document.getElementById("i17").style.display = "block";
    document.getElementById("i18").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
    document.getElementById("i18").style.display = "block";
    document.getElementById("i19").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
    document.getElementById("i19").style.display = "block";
    document.getElementById("i20").src ="https://i.ibb.co/XZ6Gzxk/leaf-8.png";
    document.getElementById("i20").style.display = "block";
    document.getElementById("i21").src ="https://i.ibb.co/r2xrGWj/leaf-9.png";
    document.getElementById("i21").style.display = "block";
    document.getElementById("i22").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
    document.getElementById("i22").style.display = "block";
    document.getElementById("i23").src ="https://i.ibb.co/sq1XPj5/leaf-11.png";
    document.getElementById("i23").style.display = "block";
    document.getElementById("i24").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
    document.getElementById("i24").style.display = "block";
    document.getElementById("i25").style.display = "block";
    //Rotate stimuli:
    //for (k = 0; k < patch_one.length; k++) {
    //  patch_one[k].style.transform = "rotate(90deg)";
    //}
  }}
  // What happens when cursor IS NOT OVER single patch trial: 
function mouseOut5() {
  document.getElementById("i1").src ="https://i.ibb.co/GWB3qnZ/leaf-1.png";
  document.getElementById("i1").style.display = "none";
  document.getElementById("i2").src ="https://i.ibb.co/qB5g0kz/leaf-2.png";
  document.getElementById("i2").style.display = "none";
  document.getElementById("i3").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("i3").style.display = "none";
  document.getElementById("i4").src ="https://i.ibb.co/GpYz3b9/leaf-4.png";
  document.getElementById("i4").style.display = "none";
  document.getElementById("i5").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("i5").style.display = "none";
  document.getElementById("i6").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("i6").style.display = "none";
  document.getElementById("i7").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("i7").style.display = "none";
  document.getElementById("i8").src ="https://i.ibb.co/Z67GFGZ/leaf-8.png";
  document.getElementById("i8").style.display = "none";
  document.getElementById("i9").src ="https://i.ibb.co/fY3gTC3/leaf-9.png";
  document.getElementById("i9").style.display = "none";
  document.getElementById("i10").src ="https://i.ibb.co/HFYCqL3/leaf-10.png";
  document.getElementById("i10").style.display = "none";
  document.getElementById("i11").src ="https://i.ibb.co/5WGKbXf/leaf-11.png";
  document.getElementById("i11").style.display = "none";
  document.getElementById("i12").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("i12").style.display = "none";
  document.getElementById("i13").src ="https://i.ibb.co/56wxrYF/leaf-1.png";
  document.getElementById("i13").style.display = "none";
  document.getElementById("i14").src ="https://i.ibb.co/GC7vc2h/leaf-2.png";
  document.getElementById("i14").style.display = "none";
  document.getElementById("i15").src ="https://i.ibb.co/Z1L4K6g/leaf-3.png";
  document.getElementById("i15").style.display = "none";
  document.getElementById("i16").src ="https://i.ibb.co/Zm6XnmZ/leaf-4.png";
  document.getElementById("i16").style.display = "none";
  document.getElementById("i17").src ="https://i.ibb.co/kDW5ZCC/leaf-5.png";
  document.getElementById("i17").style.display = "none";
  document.getElementById("i18").src ="https://i.ibb.co/hmt8npF/leaf-6.png";
  document.getElementById("i18").style.display = "none";
  document.getElementById("i19").src ="https://i.ibb.co/mXwkBv8/leaf-7.png";
  document.getElementById("i19").style.display = "none";
  document.getElementById("i20").src ="https://i.ibb.co/XZ6Gzxk/leaf-8.png";
  document.getElementById("i20").style.display = "none";
  document.getElementById("i21").src ="https://i.ibb.co/r2xrGWj/leaf-9.png";
  document.getElementById("i21").style.display = "none";
  document.getElementById("i22").src ="https://i.ibb.co/NtCmfks/leaf-10.png";
  document.getElementById("i22").style.display = "none";
  document.getElementById("i23").src ="https://i.ibb.co/sq1XPj5/leaf-11.png";
  document.getElementById("i23").style.display = "none";
  document.getElementById("i24").src ="https://i.ibb.co/64SdcXL/leaf-12.png";
  document.getElementById("i24").style.display = "none";
  document.getElementById("i25").style.display = "none";
  
  document.getElementById("pic5").src = "https://i.ibb.co/hZnLpRw/tree.jpg";
  document.getElementById('pic5').style.display='block'; // Show tree
  }
  
  
  
// Function to clear the screen and show the BEGIN TRIAL BUTTON for multiple (3) patches:
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
  document.getElementById('correct').style.display='none';
	document.getElementById('bT').style.display='block';
  document.getElementById('bTS-Mintro').style.display='none';
  document.getElementById('singleTrials').style.display='none';
  document.getElementById('bTS-Mintro').style.display='none';
  Mtracker = Mtracker+1; // Update the multi patch variable tracker
  conM_num = conditionsM3[Mtracker]; // Define multi (3) patch trial condition BEFORE THE FIRST MULTI (3) PATCH TRIAL BEGINS
  //show_single_prep(); // Clear the stimuli patch ready for the next trial
  //show_single_prep_3l(); // Clear the stimuli patch ready for the next trial
  //show_single_prep_3r(); // Clear the stimuli patch ready for the next trial
}

// Function to clear the screen and show the BEGIN TRIAL BUTTON for single patches:
function beginTrialS() {
  if (Ttracker == ptrials+1) { // Have an instructions page before beginning multiple (3) patch trials
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
    document.getElementById('correct').style.display='none';
    document.getElementById('singleTrials').style.display='block'; // Intro text
    document.getElementById('bTS-Mintro').style.display='block';
    //show_single_prep(); // Clear the stimuli patch ready for the next trial
  } else { // Show the button that just brings you directly to the next single patch trial
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
    document.getElementById('correct').style.display='none';
    document.getElementById('bTS').style.display='block';
    //show_single_prep(); // Clear the stimuli patch ready for the next trial
  }
}

// Function to clear the screen and show the BEGIN TRIAL BUTTON for multiple (5) patches:
function beginTrialM5() {
	document.getElementById('incorrect').style.display='none';
  document.getElementById('correct').style.display='none';
  document.getElementById('5patchtext').style.display='none';
  document.getElementById('bTM5').style.display='none';
  document.getElementById('bTm5').style.display='block';
  M5tracker = M5tracker+1; // Keep track of the trial number
  conM5_num = conditionsM5[M5tracker]; // Determine what condition to show for 5 patch
}

// Function to show introduction text for the multi 5 patch trials:
function  begin5patch(){
  document.getElementById('incorrect').style.display='none';
  document.getElementById('correct').style.display='none';
  document.getElementById('5patchtext').style.display='block';
  document.getElementById('bTM5').style.display='block';
  Ttracker = Ttracker+1;
  tracker_5patch = Ttracker-1; // Define and set a new trial tracker for 5 patch trials
  //document.getElementById("demo").innerHTML = Ttracker;
  
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
  document.getElementById('correct').style.display='none';
	document.getElementById('endexpt').style.display='block';
	document.getElementById("demo").style.display='none';
	document.getElementById('savebutton').style.display='block';
}

// Function to save data file:
let saveFile = () => {
    
    // This variable stores all the data.
    let data = 
        'Trial Response RTs Condition:' + '\r\n ' + 
        trial_num + '\r\n' +
				responses + '\r\n' +
        RTs + '\r\n' +
        CONDITIONS;
    
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


// Function to determine a trial's content for multiple (3) patch trials:
function showTrial(){
  // Shuffle the position that the nut should take:
  shuffle(nut_position);
  n_position = nut_position[0];
  
  // Make the images, image-labels and buttons visible after pressing the "Begin Experiment" button:
	document.getElementById('pic5').style.display='none';
	document.getElementById('button001').style.display='none';
  document.getElementById('button002').style.display='none';
	document.getElementById('Atext').style.display='none';
	document.getElementById('bTS').style.display='none';
  
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
  document.getElementById('correct').style.display='none';
	document.getElementById('singleTrials').style.display='none';
  document.getElementById('bTS-Mintro').style.display='none';
  document.getElementById('bT').style.display='none';
	//document.getElementById("demo2").innerHTML = Ttracker;
	//document.getElementById("demo").innerHTML = trial_num;
  //document.getElementById("demo").innerHTML = Mtracker;
  //document.getElementById("demo").innerHTML = conM_num;
  //document.getElementById("demo2").innerHTML = conM_num;
  //document.getElementById("demo").innerHTML = n_position;
	
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
    rt1 = (endtime1 - starttime1)/1000+"AM3"; // Calcuate rt for pic1:
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
    rt2 = (endtime2 - starttime2)/1000+"BM3"; // Calcuate rt for pic1:
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
    rt3 = (endtime3 - starttime3)/1000+"CM3";
		RTs.push(rt3); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt3;
		};
}

// Function to determine a trial's content for multiple (5) patche trials:
function showTrial5(){
  // Make the images, image-labels and buttons visible after pressing the "Begin Experiment" button:
	document.getElementById('pic5').style.display='none';
	document.getElementById('button001').style.display='none';
  document.getElementById('button002').style.display='none';
	document.getElementById('Atext').style.display='none';
	document.getElementById('bTm5').style.display='none';
  
  document.getElementById('pic01').style.display='block';
	document.getElementById('pic02').style.display='block';
	document.getElementById('pic03').style.display='block';
  document.getElementById('pic04').style.display='block';
	document.getElementById('pic05').style.display='block';
	document.getElementById('button100').style.display='block';
	document.getElementById('button200').style.display='block';
	document.getElementById('button300').style.display='block';
  document.getElementById('button400').style.display='block';
	document.getElementById('button500').style.display='block';
	document.getElementById('atext').style.display='block';
	document.getElementById('btext').style.display='block';
	document.getElementById('ctext').style.display='block';
	document.getElementById('incorrect').style.display='none';
  document.getElementById('correct').style.display='none';

	//document.getElementById("demo2").innerHTML = Ttracker;
	//document.getElementById("demo").innerHTML = trial_num;
  //document.getElementById("demo").innerHTML = Mtracker;
  //document.getElementById("demo").innerHTML =  conM5_num;
  //document.getElementById("demo").innerHTML =  M5tracker;
	
	// Defining functions to change image pic1 when mouse moves over it or not: 
	document.getElementById("pic01").onmouseover = function() {
		mouseOver();
		st1 = new Date(); // Define start timer as variable
		starttime1 = st1.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic01").onmouseout = function() {
		mouseOut();
		et1 = new Date(); // Define end timer as variable
		endtime1 = et1.getTime(); // Determine when the cursor is no longer over image
    rt1 = (endtime1 - starttime1)/1000+"AM5"; // Calcuate rt for pic1:
		RTs.push(rt1); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt1;
		};
    
	// Defining functions to change image pic2 when mouse moves over it or not: 
	document.getElementById("pic02").onmouseover = function() {
		mouseOver2();
		st2 = new Date(); // Define start timer as variable
		starttime2 = st2.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic02").onmouseout = function() {
		mouseOut2();
		et2 = new Date(); // Define end timer as variable
		endtime2 = et2.getTime(); // Determine when the cursor is no longer over image
    rt2 = (endtime2 - starttime2)/1000+"BM5"; // Calcuate rt for pic1:
		RTs.push(rt2); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt2;
		};

	// Defining functions to change image pic3 when mouse moves over it or not: 
	document.getElementById("pic03").onmouseover = function() {
		mouseOver3();
		st3 = new Date(); // Define start timer as variable
		starttime3 = st3.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic03").onmouseout = function() {
		mouseOut3();
		et3 = new Date(); // Define end timer as variable
		endtime3 = et3.getTime(); // Determine when the cursor is no longer over image
		// Calcuate rt for pic1:
    rt3 = (endtime3 - starttime3)/1000+"CM5";
		RTs.push(rt3); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt3;
		};
    
  // Defining functions to change image pic4 when mouse moves over it or not: 
	document.getElementById("pic04").onmouseover = function() {
		mouseOver4();
		st4 = new Date(); // Define start timer as variable
		starttime4 = st4.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic04").onmouseout = function() {
		mouseOut4();
		et4 = new Date(); // Define end timer as variable
		endtime4 = et4.getTime(); // Determine when the cursor is no longer over image
		// Calcuate rt for pic1:
    rt4 = (endtime4 - starttime4)/1000+"DM5";
		RTs.push(rt4); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt3;
		};
    
  // Defining functions to change image pic5 when mouse moves over it or not: 
	document.getElementById("pic05").onmouseover = function() {
		mouseOver05();
		st05 = new Date(); // Define start timer as variable
		starttime05 = st05.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic05").onmouseout = function() {
		mouseOut05();
		et05 = new Date(); // Define end timer as variable
		endtime05 = et05.getTime(); // Determine when the cursor is no longer over image
		// Calcuate rt for pic1:
    rt05 = (endtime05 - starttime05)/1000+"EM5";
		RTs.push(rt05); // Store the rt
		// Show your rt on screen in seconds:
		//document.getElementById("demo").innerHTML = rt3;
		};
}


// Function to determine a trial's content for single patches:
function showTrialS(){
  // Shuffle the position that the nut should take:
  shuffle(nut_position);
  n_position = nut_position[0];
  
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
  //document.getElementById("demo2").innerHTML = con_num;
  //document.getElementById("demo").innerHTML = n_position;
	 
	// Defining functions to change image pic5 when mouse moves over it or not: 
	document.getElementById("pic5").onmouseover = function() {
		mouseOver5(); // Call function to determine what happens when mouse is over image 
		st5 = new Date(); // Define start timer as variable
		starttime5 = st5.getTime(); // Start timer when image is uncovered
		};
	document.getElementById("pic5").onmouseout = function() {
		mouseOut5(); // Call function to determine what happens when omuse is not over image
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
	document.getElementById('bTS').style.display='none';
  document.getElementById('bT').style.display='none';
  
  // Determine correct response:
  if (con_num == 1){
    document.getElementById('correct').style.display='block';
    responses.push(1);
  } else if (con_num == 2) {
    document.getElementById('incorrect').style.display='block';
    responses.push(0);
  }
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
    CONDITIONS.push(con_num); // Record the trial condition
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
    CONDITIONS.push(con_num); // Record the trial condition
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
	document.getElementById('bTS').style.display='none';
  document.getElementById('bT').style.display='none';
  
  // Determine correct response:
  if (con_num == 2){
    document.getElementById('correct').style.display='block';
    responses.push(1);
  } else if (con_num == 1) {
    document.getElementById('incorrect').style.display='block';
    responses.push(0);
  }
  
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
    CONDITIONS.push(con_num); // Record the trial condition
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
    CONDITIONS.push(con_num); // Record the trial condition
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
  
  if (M5tracker < 0) {
    document.getElementById('pic1').style.display='none';
    document.getElementById('pic2').style.display='none';
    document.getElementById('pic3').style.display='none';
    document.getElementById('button01').style.display='none';
    document.getElementById('button02').style.display='none';
    document.getElementById('button03').style.display='none';
    document.getElementById('atext').style.display='none';
    document.getElementById('btext').style.display='none';
    document.getElementById('ctext').style.display='none';
  } else if (M5tracker > -1) {
   document.getElementById('pic01').style.display='none';
	 document.getElementById('pic02').style.display='none';
	 document.getElementById('pic03').style.display='none';
   document.getElementById('pic04').style.display='none';
	 document.getElementById('pic05').style.display='none';
	 document.getElementById('button100').style.display='none';
	 document.getElementById('button200').style.display='none';
	 document.getElementById('button300').style.display='none';
   document.getElementById('button400').style.display='none';
	 document.getElementById('button500').style.display='none';
	 document.getElementById('atext').style.display='none';
	 document.getElementById('btext').style.display='none';
	 document.getElementById('ctext').style.display='none';
	 document.getElementById('incorrect').style.display='none';
   document.getElementById('correct').style.display='none';
  }
  
  // Determine correct response:
  if (M5tracker < 0) {
    if (conM_num == 1){
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } else if (conM_num == 2) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM_num == 3) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    }
  } else if  (M5tracker > -1) {
    if (conM5_num == 1){
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } else if (conM5_num == 2) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 3) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 4){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 5) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    }
  }
  
	// Determine when to end multi 3 patch trials and begin 5 patch trials
	if (Ttracker == ntrials){
    CONDITIONS.push(conM_num); // Record the trial condition
		setTimeout(begin5patch, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else if (Ttracker < ntrials ) {
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
    CONDITIONS.push(conM_num); // Record the trial condition
		setTimeout(beginTrial, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	}
  
  // Determine when to end the experiment and continue 5 patch trials:
  if (M5tracker == total_5trials){
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    CONDITIONS.push(conM5_num); // Record the trial condition
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
  } else if (M5tracker > -1 && M5tracker <  total_5trials) {
    CONDITIONS.push(conM5_num); // Record the trial condition
		RTs.push("BREAK"); // Split up RTs for different trials
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    setTimeout(beginTrialM5, 1000); // Call function after some defined time
  }
}

// What happens when you press the B button:
function Bbutton() { 
  if (M5tracker < 0) {
    document.getElementById('pic1').style.display='none';
    document.getElementById('pic2').style.display='none';
    document.getElementById('pic3').style.display='none';
    document.getElementById('button01').style.display='none';
    document.getElementById('button02').style.display='none';
    document.getElementById('button03').style.display='none';
    document.getElementById('atext').style.display='none';
    document.getElementById('btext').style.display='none';
    document.getElementById('ctext').style.display='none';
  } else if (M5tracker > -1) {
   document.getElementById('pic01').style.display='none';
	 document.getElementById('pic02').style.display='none';
	 document.getElementById('pic03').style.display='none';
   document.getElementById('pic04').style.display='none';
	 document.getElementById('pic05').style.display='none';
	 document.getElementById('button100').style.display='none';
	 document.getElementById('button200').style.display='none';
	 document.getElementById('button300').style.display='none';
   document.getElementById('button400').style.display='none';
	 document.getElementById('button500').style.display='none';
	 document.getElementById('atext').style.display='none';
	 document.getElementById('btext').style.display='none';
	 document.getElementById('ctext').style.display='none';
	 document.getElementById('incorrect').style.display='none';
   document.getElementById('correct').style.display='none';
  }
  
  // Determine correct response:
  if (M5tracker < 0) {
    if (conM_num == 1){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM_num == 2) {
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } else if (conM_num == 3) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    }
  } else if  (M5tracker > -1) {
    if (conM5_num == 1){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 2) {
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } else if (conM5_num == 3) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 4){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 5) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    }
  }
  
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
    CONDITIONS.push(conM_num); // Record the trial condition
		setTimeout(begin5patch, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else if (Ttracker < ntrials) {
    CONDITIONS.push(conM_num); // Record the trial condition
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
  
  // Determine when to end the experiment and continue 5 patch trials:
  if (M5tracker == total_5trials){
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    CONDITIONS.push(conM5_num); // Record the trial condition
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
  } else if (M5tracker > -1 && M5tracker <  total_5trials) {
    CONDITIONS.push(conM5_num); // Record the trial condition
		RTs.push("BREAK"); // Split up RTs for different trials
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    setTimeout(beginTrialM5, 1000); // Call function after some defined time
  }
}

// What happens when you press the C button:
function Cbutton() { 
  if (M5tracker < 0) {
    document.getElementById('pic1').style.display='none';
    document.getElementById('pic2').style.display='none';
    document.getElementById('pic3').style.display='none';
    document.getElementById('button01').style.display='none';
    document.getElementById('button02').style.display='none';
    document.getElementById('button03').style.display='none';
    document.getElementById('atext').style.display='none';
    document.getElementById('btext').style.display='none';
    document.getElementById('ctext').style.display='none';
  } else if (M5tracker > -1) {
   document.getElementById('pic01').style.display='none';
	 document.getElementById('pic02').style.display='none';
	 document.getElementById('pic03').style.display='none';
   document.getElementById('pic04').style.display='none';
	 document.getElementById('pic05').style.display='none';
	 document.getElementById('button100').style.display='none';
	 document.getElementById('button200').style.display='none';
	 document.getElementById('button300').style.display='none';
   document.getElementById('button400').style.display='none';
	 document.getElementById('button500').style.display='none';
	 document.getElementById('atext').style.display='none';
	 document.getElementById('btext').style.display='none';
	 document.getElementById('ctext').style.display='none';
	 document.getElementById('incorrect').style.display='none';
   document.getElementById('correct').style.display='none';
  }

  // Determine correct response:
  if (M5tracker < 0) {
    if (conM_num == 1){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM_num == 2) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM_num == 3) {
      document.getElementById('correct').style.display='block';
      responses.push(1);
    }
  } else if  (M5tracker > -1) {
    if (conM5_num == 1){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 2) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 3) {
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } else if (conM5_num == 4){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 5) {
      document.getElementById('correct').style.display='block';
      responses.push(0);
    }
  }
  
  // Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
    CONDITIONS.push(conM_num); // Record the trial condition
		setTimeout(begin5patch, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else if (Ttracker < ntrials) {
    CONDITIONS.push(conM_num); // Record the trial condition
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
  
  // Determine when to end the experiment and continue 5 patch trials:
  if (M5tracker == total_5trials){
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    CONDITIONS.push(conM5_num); // Record the trial condition
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
  } else if (M5tracker > -1 && M5tracker <  total_5trials) {
    CONDITIONS.push(conM5_num); // Record the trial condition
		RTs.push("BREAK"); // Split up RTs for different trials
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    setTimeout(beginTrialM5, 1000); // Call function after some defined time
  }
}


  // What happens when you press the D button:
function Dbutton() { 
  if (M5tracker < 0) {
    document.getElementById('pic1').style.display='none';
    document.getElementById('pic2').style.display='none';
    document.getElementById('pic3').style.display='none';
    document.getElementById('button01').style.display='none';
    document.getElementById('button02').style.display='none';
    document.getElementById('button03').style.display='none';
    document.getElementById('atext').style.display='none';
    document.getElementById('btext').style.display='none';
    document.getElementById('ctext').style.display='none';
  } else if (M5tracker > -1) {
   document.getElementById('pic01').style.display='none';
	 document.getElementById('pic02').style.display='none';
	 document.getElementById('pic03').style.display='none';
   document.getElementById('pic04').style.display='none';
	 document.getElementById('pic05').style.display='none';
	 document.getElementById('button100').style.display='none';
	 document.getElementById('button200').style.display='none';
	 document.getElementById('button300').style.display='none';
   document.getElementById('button400').style.display='none';
	 document.getElementById('button500').style.display='none';
	 document.getElementById('atext').style.display='none';
	 document.getElementById('btext').style.display='none';
	 document.getElementById('ctext').style.display='none';
	 document.getElementById('incorrect').style.display='none';
   document.getElementById('correct').style.display='none';
  }
  
  // Determine correct response:
  if (M5tracker < 0) {
    if (conM_num == 1){
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } else if (conM_num == 2) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM_num == 3) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    }
  } else if  (M5tracker > -1) {
    if (conM5_num == 1){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 2) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 3) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 4){
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } else if (conM5_num == 5) {
      document.getElementById('correct').style.display='block';
      responses.push(0);
    }
  }
  
  // Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
    CONDITIONS.push(conM_num); // Record the trial condition
		setTimeout(begin5patch, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else if (Ttracker < ntrials) {
    CONDITIONS.push(conM_num); // Record the trial condition
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
  
  // Determine when to end the experiment and continue 5 patch trials:
  if (M5tracker == total_5trials){
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    CONDITIONS.push(conM5_num); // Record the trial condition
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
  } else if (M5tracker > -1 && M5tracker <  total_5trials) {
    CONDITIONS.push(conM5_num); // Record the trial condition
		RTs.push("BREAK"); // Split up RTs for different trials
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    setTimeout(beginTrialM5, 1000); // Call function after some defined time
  } 
}
  
// What happens when you press the E button:
function Ebutton() {
  if (M5tracker < 0) {
    document.getElementById('pic1').style.display='none';
    document.getElementById('pic2').style.display='none';
    document.getElementById('pic3').style.display='none';
    document.getElementById('button01').style.display='none';
    document.getElementById('button02').style.display='none';
    document.getElementById('button03').style.display='none';
    document.getElementById('atext').style.display='none';
    document.getElementById('btext').style.display='none';
    document.getElementById('ctext').style.display='none';
  } else if (M5tracker > -1) {
   document.getElementById('pic01').style.display='none';
	 document.getElementById('pic02').style.display='none';
	 document.getElementById('pic03').style.display='none';
   document.getElementById('pic04').style.display='none';
	 document.getElementById('pic05').style.display='none';
	 document.getElementById('button100').style.display='none';
	 document.getElementById('button200').style.display='none';
	 document.getElementById('button300').style.display='none';
   document.getElementById('button400').style.display='none';
	 document.getElementById('button500').style.display='none';
	 document.getElementById('atext').style.display='none';
	 document.getElementById('btext').style.display='none';
	 document.getElementById('ctext').style.display='none';
	 document.getElementById('incorrect').style.display='none';
   document.getElementById('correct').style.display='none';
  }
  
  // Determine correct response:
  if (M5tracker < 0) {
    if (conM_num == 1){
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } else if (conM_num == 2) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM_num == 3) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    }
  } else if  (M5tracker > -1) {
    if (conM5_num == 1){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 2) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 3) {
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 4){
      document.getElementById('incorrect').style.display='block';
      responses.push(0);
    } else if (conM5_num == 5) {
      document.getElementById('correct').style.display='block';
      responses.push(1);
    } 
  }
  
	// Do not count the Finsished Experiment screen as a trial and End the experiment if the number of trials equals ntrials
	if (Ttracker == ntrials){
    CONDITIONS.push(conM_num); // Record the trial condition
		setTimeout(begin5patch, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
	} else if (Ttracker < ntrials) {
    CONDITIONS.push(conM_num); // Record the trial condition
		Ttracker = Ttracker+1;
		trial_num.push(Ttracker);
		setTimeout(beginTrial, 1000); // setTimeout reshows stimuli after 1 second
		RTs.push("BREAK"); // Split up RTs for different trials
	}
  
  // Determine when to end the experiment and continue 5 patch trials:
  if (M5tracker == total_5trials){
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    CONDITIONS.push(conM5_num); // Record the trial condition
		setTimeout(endExperiment, 1000); // Call function after some defined time
		RTs.push("BREAK"); // Split up RTs for different trials
  } else if (M5tracker > -1 && M5tracker <  total_5trials) {
    CONDITIONS.push(conM5_num); // Record the trial condition
		RTs.push("BREAK"); // Split up RTs for different trials
    tracker_5patch = tracker_5patch+1;
		trial_num.push(tracker_5patch);
    setTimeout(beginTrialM5, 1000); // Call function after some defined time
  } 
}


// Define what happens AFTER you press the intro button: 
function introbut() {
	if (Ttracker == 1){ // This is the first trial
		document.getElementById('header').style.display='none';
		document.getElementById('introtext').style.display='none';
		document.getElementById('introbutton').style.display='none';
		con_num = conditions[Ttracker]; // Define single patch trial condition
    setTimeout(showTrialS(), 1000); // 1 seconds after pressing begin experiment button begin first trial
	}
	else if (Ttracker<=ptrials){ // These are all subsequent trials after the first one
		con_num = conditions[Ttracker]; // Define single patch trial condition
    showTrialS(); // Show single patch trials
		//document.getElementById("demo2").innerHTML = Ttracker;
		//document.getElementById("demo").innerHTML = trial_num;
	} else if (Ttracker > ptrials && Ttracker <= ntrials) {
    conM_num = conditionsM3[Ttracker]; // Define multi (3) patch trial condition
    showTrial(); // Show multiple patch trials
  } else if (Ttracker > ntrials && Ttracker < 10000) {
    showTrial5();
  }
}





// Make the landing instructions page:
document.getElementById('header').style.display='block';
document.getElementById('introtext').style.display='block';
document.getElementById('introbutton').style.display='block';
	
</script>


</body>
</html>
