let display = document.getElementById('display')
function press(val){
    display.value = display.value + val;

}
function calculate(){
display.value = eval(display.value)
}
function clearDisplay(){
display.value = ""
}
function squreroot(){
display.value = Math.sqrt(display.value)
}