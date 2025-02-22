controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    is_up = 1
    is_down = 0
    is_left = 0
    is_right = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    is_left = 1
    is_up = 0
    is_right = 0
    is_down = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    is_right = 1
    is_down = 0
    is_left = 0
    is_up = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    is_down = 1
    is_left = 0
    is_right = 0
    is_up = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(randint(0, 153), randint(0, 117))
    if (Delay < 10) {
        Delay = 10
    } else {
        Delay += -5
    }
})
let is_down = 0
let is_right = 0
let is_up = 0
let is_left = 0
let Delay = 0
let mySprite2: Sprite = null
scene.setBackgroundColor(15)
let mySprite = sprites.create(img`
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
Delay = 100
is_left = 0
is_up = 0
is_right = 0
is_down = 0
let x_loc = 80
let y_loc = 60
game.onUpdate(function () {
    if (y_loc <= 3 || y_loc >= 117) {
        game.gameOver(false)
    }
})
game.onUpdate(function () {
    if (x_loc <= 3 || x_loc >= 157) {
        game.gameOver(false)
    }
})
forever(function () {
    while (is_left == 1) {
        mySprite.left += -1
        x_loc += -1
        pause(Delay)
    }
})
forever(function () {
    while (is_right == 1) {
        mySprite.right += 1
        x_loc += 1
        pause(Delay)
    }
})
forever(function () {
    while (is_up == 1) {
        mySprite.top += -1
        y_loc += -1
        pause(Delay)
    }
})
forever(function () {
    while (is_down == 1) {
        mySprite.bottom += 1
        y_loc += 1
        pause(Delay)
    }
})
