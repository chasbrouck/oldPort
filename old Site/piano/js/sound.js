var level = 1;

var loopSound = 0;
var attackRate = .02;
var dampenRate = .02;
var sampleRateCustom = 44100;
var modulateRate = 1;
document.onkeydown = checkKey;
document.onkeyup = changeColor;
var customCount = 0;
var duration = 2;
var octaveNumber  = 3;
var instrument = "piano";
var instrumentFake = "custom";

if (level ==1)
{
    instrumentFake = "Custom";
}
if (level ==2)
{
    instrumentFake = "Piano";
}
if (level ==3)
{
    instrumentFake = "Organ";
}
if (level ==4)
{
    instrumentFake = "Acoustic";
}
if (level ==5)
{
    instrumentFake = "EDM";
}

window.onload = function() {
    checkOctave();
    checkCustom();
}
function updateSlide()
{
    slider1Out.value = slider1In.value;
    checkCustom();
}
function updateSlide2()
{
    slider2Out.value = slider2In.value;
    checkCustom();
}function updateSlide3()
{
    slider3Out.value = slider3In.value;
    checkCustom();
}function updateSlide4()
{
    slider4Out.value = slider4In.value;
    checkCustom();
}
function checkCustom()
{   
    customCount++;
    attackRate = document.getElementById("slider1In").value;
    dampenRate = document.getElementById("slider2In").value;
    modulateRate = document.getElementById("slider3In").value;
    sampleRateCustom = document.getElementById("slider4In").value;
    Synth.loadSoundProfile({
        name: 'custom' + customCount,
        attack: function() { return attackRate; },
        dampen: function(sampleRate, frequency, volume) {
            return Math.pow(0.5*Math.log((frequency*volume)/sampleRate),dampenRate);
        },
        wave: function(i, sampleRate, frequency, volume) {
            var base = this.modulate[0];
            return this.modulate[modulateRate](
                i,
                sampleRateCustom,
                frequency,
                Math.pow(base(i, sampleRate, frequency, 0), 2) +
                    (0.75 * base(i, sampleRate, frequency, 0.25)) +
                    (0.1 * base(i, sampleRate, frequency, 0.5))
            );
        }
    });
    instrument = "custom"+customCount;
    level =1;
    checkOctave();

}
function checkOctave() {
    document.getElementById("O3").innerHTML = instrumentFake;
    document.getElementById("O1").innerHTML = octaveNumber;
    document.getElementById("O2").innerHTML = duration;
}
function changeColor(e){
    document.getElementById("c").style.background='#45B29A';
    document.getElementById("d").style.background='#45B29A';
    document.getElementById("e").style.background='#45B29A';
    document.getElementById("f").style.background='#45B29A';
    document.getElementById("g").style.background='#45B29A';
    document.getElementById("a").style.background='#45B29A';
    document.getElementById("b").style.background='#45B29A';
    document.getElementById("c#").style.background='#45B29A';
    document.getElementById("d#").style.background='#45B29A';
    document.getElementById("f#").style.background='#45B29A';
    document.getElementById("g#").style.background='#45B29A';
    document.getElementById("a#").style.background='#45B29A';

}

//function to play notes
function C()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('C', octaveNumber, duration); 
}
function CSharp()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('C#', octaveNumber, duration); 
}
function D()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('D', octaveNumber, duration); 
}
function DSharp()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('D#', octaveNumber, duration);     
}
function E()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('E', octaveNumber, duration); 
}
function F()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('F', octaveNumber, duration);   
}
function FSharp()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('F#', octaveNumber, duration);  
}
function G(){
    var piano = Synth.createInstrument(instrument);
    piano.play('G', octaveNumber, duration);  
}
function GSharp()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('G#', octaveNumber, duration); 
}
function A()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('A', octaveNumber, duration); 
}
function ASharp()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('A#', octaveNumber, duration); 
}
function B()
{
    var piano = Synth.createInstrument(instrument);
    piano.play('B', octaveNumber, duration);
}

//key press function
function checkKey(e) {
    e = e || window.event;
    //low C
    if (e.keyCode == '65') {
        {
            C();
            document.getElementById("c").style.background='#4d4d4d';
        }
    }
     //C# or D flat
    else if (e.keyCode == '87') {
            CSharp();
            document.getElementById("c#").style.background='#4d4d4d';
    }
    //D
    else if (e.keyCode == '83') {
            D();
            document.getElementById("d").style.background='#4d4d4d';
    }
    //D# or E flat
    else if (e.keyCode == '69') {
            DSharp();
            document.getElementById("d#").style.background='#4d4d4d';
    }
    //E
    else if (e.keyCode == '68') {
            E();
            document.getElementById("e").style.background='#4d4d4d';
    }
    //F
    else if (e.keyCode == '70') {
            F();  
            document.getElementById("f").style.background='#4d4d4d';

    }
    //F# or G flat
    else if (e.keyCode == '84') {
            FSharp();
            document.getElementById("f#").style.background='#4d4d4d';     
    }
    //G
    else if (e.keyCode == '71') {
            G();  
            document.getElementById("g").style.background='#4d4d4d'; 
    }
    //G# or A flat
    else if (e.keyCode == '89') {
            GSharp();
            document.getElementById("g#").style.background='#4d4d4d';   
    }

    //A
    else if (e.keyCode == '72') {
            A();
            document.getElementById("a").style.background='#4d4d4d';
    }
    //A# or B flat
    else if (e.keyCode == '85') {
            ASharp();
            document.getElementById("a#").style.background='#4d4d4d';
    }
    //B
    else if (e.keyCode == '74') {
            B();
            document.getElementById("b").style.background='#4d4d4d';
    }
    //octave down
    else if (e.keyCode == '90') {
    	if (octaveNumber >1) {
    		octaveNumber--;
            document.getElementById("O1").innerHTML = octaveNumber;
    	}
    }
    //octave up
    else if (e.keyCode == '88') {
    	if (octaveNumber < 5) {
    		octaveNumber++;
            document.getElementById("O1").innerHTML = octaveNumber;
    	}
    }//instrument custom
    else if (e.keyCode == '67') {
        instrument = "custom"+customCount;
            document.getElementById("O3").innerHTML = instrument;
    
    }
    //instrument piano
    else if (e.keyCode == '86') {
        instrument = "piano";
            document.getElementById("O3").innerHTML = instrument;
            level = 2;
    }
    //instrument organ
    else if (e.keyCode == '66') {
        instrument = "organ";
        document.getElementById("O3").innerHTML = instrument;
        level = 3;
    }
    //instrument acoustic
    else if (e.keyCode == '78') {
        instrument = "acoustic";
            document.getElementById("O3").innerHTML = instrument;
            level = 4;
    
    }
    //instrument edm
    else if (e.keyCode == '77') {
        instrument = "edm";
        document.getElementById("O3").innerHTML = instrument;
        level = 5;
    }
    //Duration 1
    else if (e.keyCode == '49') {
        duration = 1;
        document.getElementById("O2").innerHTML = duration;
    }
    //Duration 2
    else if (e.keyCode == '50') {
        duration = 2;
        document.getElementById("O2").innerHTML = duration;
    }
    //Duration 3
    else if (e.keyCode == '51') {
        duration = 3;
        document.getElementById("O2").innerHTML = duration;
    }
    //Duration 4
    else if (e.keyCode == '52') {
        duration = 4;
        document.getElementById("O2").innerHTML = duration;
    }
    //Duration 5
    else if (e.keyCode == '53') {
        duration = 5;
        document.getElementById("O2").innerHTML = duration;
    }
    //Duration 6
    else if (e.keyCode == '54') {
        duration = 6;
        document.getElementById("O2").innerHTML = duration;
    }
    //Duration 7
    else if (e.keyCode == '55') {
        duration = 7;
        document.getElementById("O2").innerHTML = duration;
    }
    //Duration 8
    else if (e.keyCode == '56') {
        duration = 8;
        document.getElementById("O2").innerHTML = duration;
    }
    //Duration 9
    else if (e.keyCode == '57') {
        duration = 9;
        document.getElementById("O2").innerHTML = duration;
    }
}