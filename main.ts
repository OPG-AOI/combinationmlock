input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    user_key = temp
    serial.writeLine(user_key)
    if (user_key == key) {
        basic.showNumber(secret)
    }
})
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    user_key = temp
    serial.writeLine(user_key)
    if (user_key == key) {
        basic.showNumber(secret)
    }
})
let temp = ""
let user_key = ""
let key = ""
let secret = 0
secret = 2021032132134
key = "AABBABABABBAABBA"
user_key = ""
