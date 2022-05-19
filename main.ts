let nombre_1 = 0
let nombre_2 = 0
input.onButtonPressed(Button.A, function () {
    nombre_1 += 1
    basic.showString("" + (nombre_1))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("+")
    nombre_1 = 0
    nombre_2 = 0
})
input.onButtonPressed(Button.B, function () {
    nombre_2 += 1
    basic.showString("" + (nombre_2))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (nombre_1 + nombre_2))
})
basic.forever(function () {
	
})
