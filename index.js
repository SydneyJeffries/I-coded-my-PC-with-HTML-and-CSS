var glassCase = document.querySelector('.glass');
var glassFlipedCase = document.querySelector('.flip');
var floor = document.querySelector('.floor');
var button = document.querySelector('.case_power');
var logo2 = document.querySelector('.case_logo2');
var powerPic = document.querySelector('.case_power-pic')
//var inputLit = document.querySelectorAll('.case_input-lit');


function inputLightsOn() {
   var inputLit = document.querySelectorAll(".case_input-lit");
    var inputUSBlit = document.querySelectorAll(".case_usb-lit");
  var i;
  for (i = 0; i < inputLit.length; i++) {
  inputLit[i].style.cssText="background-color: var(--lights-on)";
  inputUSBlit[i].style.cssText="background-color: var(--lights-on)"}
  }
//

//function inputLightsOff() {
//  var inputLit = document.querySelectorAll(".case_input-lit");
//    var inputUSBlit = document.querySelectorAll(".case_usb-lit");
//  var x;
//  for (x = 0; x < inputLit.length; x++) {
 // inputLit[i].style.cssText="background-color: var(--lights-off)";
 // inputUSBlit[i].style.cssText="background-color: var(--lights-off)"} }


function turnOn() {
  glassCase.style.cssText = "animation: turnOn 3s linear 1 forwards;"//"border-right: 190px solid var(--lights-on); box-shadow: 0px -120px 77px 11px rgba(100,181,246,.3)"
  glassFlipedCase.style.cssText= "animation: turnOnn 3s linear 1 forwards;"
  floor.style.cssText= "animation: turnOnnn 3s linear 1 forwards;";
  logo2.style.cssText="background-color: var(--lights-on);"
 //button.style.cssText="background-color: var(--lights-on);"
  powerPic.style.cssText="background-Color: var(--lights-on ) ;"
  inputLightsOn();
  var p = 1
}






button.addEventListener('click', turnOn);



