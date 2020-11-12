input.onButtonPressed(Button.A, function () {
    offsetHours += 1
    if (offsetHours > 24) {
        offsetHours = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    offsetHours = 0
    offsetMinutes = 0
})
input.onButtonPressed(Button.B, function () {
    offsetMinutes += 1
    if (offsetMinutes > 60) {
        offsetMinutes = 0
    }
})
let timeText = ""
let totalSeconds = 0
let offsetMinutes = 0
let offsetHours = 0
let hours = 0
let minutes = 0
let seconds = 0
basic.forever(function () {
    totalSeconds = Math.round(input.runningTime() / 1000)
    totalSeconds += offsetHours * 3600
    totalSeconds += offsetMinutes * 60
    if (totalSeconds >= 3600) {
        hours = Math.round(totalSeconds / 3600)
        totalSeconds = Math.round(totalSeconds - hours * 3600)
    }
    if (totalSeconds >= 60) {
        minutes = Math.round(totalSeconds / 60)
        totalSeconds = Math.round(totalSeconds - minutes * 60)
    }
    seconds = totalSeconds
    if (seconds < 0) {
        seconds = 60 + seconds
    }
    if (hours < 10) {
        timeText = "0"
    }
    timeText = "" + timeText + hours.toString()
    timeText = "" + timeText + ":"
    if (minutes < 10) {
        timeText = "" + timeText + "0"
    }
    timeText = "" + timeText + minutes.toString()
    timeText = "" + timeText + "."
    if (seconds < 10) {
        timeText = "" + timeText + "0"
    }
    timeText = "" + timeText + seconds.toString() + "    "
    basic.showString(timeText)
})
