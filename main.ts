/**
 * RECEPTOR
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 130) {
        basic.showString("1")
    } else {
        basic.clearScreen()
    }
    if (receivedNumber > 130) {
        basic.showString("2")
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
let habitación1 = 0
let habitación2 = 0
/**
 * EMISOR 1
 */
basic.forever(function () {
    habitación1 += input.lightLevel()
    basic.pause(1000)
})
/**
 * EMISOR 2
 */
basic.forever(function () {
    habitación2 += input.lightLevel()
    basic.pause(1000)
})
basic.forever(function () {
    radio.sendNumber(input.lightLevel())
    basic.pause(1000)
})
