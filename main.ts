controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_up == 0) {
        left = 0
        down = 0
        right = 0
        up = -1
        while (up == -1) {
            mySprite.top += up
            up_pos += -1
            down_pos += -1
            pause(speed)
        }
        is_up = 1
    }
    is_left = 0
    is_right = 0
    is_down = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_left == 0) {
        left = -1
        down = 0
        right = 0
        up = 0
        while (left == -1) {
            mySprite.left += left
            left_pos += -1
            right_pos += -1
            pause(speed)
        }
        is_left = 1
    }
    is_up = 0
    is_right = 0
    is_down = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_right == 0) {
        left = 0
        down = 0
        right = 1
        up = 0
        while (right == 1) {
            mySprite.right += right
            right_pos += 1
            left_pos += 1
            pause(speed)
        }
        is_right = 1
    }
    is_left = 0
    is_up = 0
    is_down = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_down == 0) {
        left = 0
        down = 1
        right = 0
        up = 0
        while (down == 1) {
            mySprite.bottom += down
            down_pos += 1
            up_pos += 1
            pause(speed)
        }
        is_down = 1
    }
    is_left = 0
    is_up = 0
    is_right = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    if (speed < 10) {
        speed = 10
    } else {
        speed += -10
    }
})
let is_down = 0
let is_right = 0
let is_up = 0
let is_left = 0
let speed = 0
let down = 0
let up = 0
let right = 0
let left = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 f 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . . . 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setStayInScreen(true)
mySprite.setPosition(80, 60)
left = -1
right = 0
up = -1
down = 0
speed = 100
let left_pos = 80
let up_pos = 60
let down_pos = 60
let right_pos = 80
is_left = 0
is_up = 0
is_right = 0
is_down = 0
game.onUpdate(function () {
    if (left_pos <= 0) {
        game.gameOver(false)
    }
})
game.onUpdate(function () {
    if (up_pos <= 0) {
        game.gameOver(false)
    }
})
game.onUpdate(function () {
    if (down_pos >= 120) {
        game.gameOver(false)
    }
})
game.onUpdate(function () {
    if (right_pos >= 160) {
        game.gameOver(false)
    }
})
