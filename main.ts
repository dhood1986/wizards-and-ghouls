controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . 2 2 . . . . 
            . . . . . 2 2 4 2 2 2 2 . . . . 
            . . . . 2 4 4 4 4 2 2 2 . . . . 
            . . . . 2 4 4 5 4 4 2 . . . . . 
            . . . . 2 4 4 5 5 4 2 . . . . . 
            . . . . 2 4 5 5 5 4 2 . . . . . 
            . . . . 2 2 4 4 4 4 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, randint(-100, 100), randint(-100, 100))
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 5 2 2 5 . . . . . . 
    . . . . . . 5 2 2 5 . . . . . . 
    . . . . . 5 2 2 2 2 5 . . . . . 
    . . . . 2 4 2 2 2 2 4 2 . . . . 
    . . . 2 2 4 4 2 2 4 4 2 2 . . . 
    . . . 2 2 2 4 4 4 4 2 2 2 . . . 
    . . . e 2 2 2 2 2 2 2 2 e . . . 
    . . . e e 9 f d d f 9 e e . . . 
    . . . e e 1 f 3 3 f 1 e e . . . 
    . . . e e 3 3 3 3 3 3 e e . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . 3 b 5 5 2 3 3 2 5 5 b 3 . . 
    . . 3 3 f 2 2 2 2 2 2 f 3 3 . . 
    . . . . 5 5 2 2 2 2 5 5 . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite.ay += 200
game.onUpdateInterval(500, function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`myImage`, randint(-100, 100), randint(-100, 100))
    projectile2.setKind(SpriteKind.Enemy)
})
