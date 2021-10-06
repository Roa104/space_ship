controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceship, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.spray, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    scene.cameraShake(8, 500)
    info.changeLifeBy(-1)
})
let enemy11: Sprite = null
let projectile: Sprite = null
let spaceship: Sprite = null
info.player2.changeScoreBy(1)
spaceship = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f 3 3 5 3 3 5 3 d f f . . 
    . . . f d f 3 5 5 3 f f d f . . 
    . . . f d f 3 3 3 3 3 f f . . . 
    . . . f f 3 5 3 3 5 3 3 f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . . . . f f . . . . . 
    `, SpriteKind.Player)
animation.runMovementAnimation(
spaceship,
animation.animationPresets(animation.shake),
500,
false
)
controller.moveSprite(spaceship, 200, 200)
spaceship.setStayInScreen(true)
info.setScore(3)
game.onUpdateInterval(500, function () {
    enemy11 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemy11,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b 5 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . b 5 5 5 5 5 5 5 b b b b b . 
        . . b 5 5 5 5 5 5 5 5 b 5 d b . 
        . . f 4 d 5 f 1 d 5 b 5 5 b . . 
        . . c 4 4 5 f f 1 b 5 5 d b . . 
        . b 4 4 4 4 b f d 5 5 5 b d b b 
        b 4 4 4 4 4 4 5 b 5 5 d c d d b 
        . b 5 5 5 5 5 5 5 b c c d d d c 
        . b 5 5 5 5 5 5 5 d d d d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . b 5 5 5 5 5 5 5 b b b b b . 
        . . b 5 5 5 5 5 5 5 5 b 5 d b . 
        . . f 4 d 5 f 1 d 5 b 5 5 b . . 
        . . c 4 4 5 f f 1 b 5 5 d b . . 
        b 4 4 4 4 4 b f d 5 5 5 b d b b 
        . b 4 4 4 4 4 5 b 5 5 d c d d b 
        . b 5 5 5 5 5 5 5 b c c d d d c 
        . b 5 5 5 5 5 5 5 d d d d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . . c b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . f d 5 5 f 1 d 5 b b . . . . 
        . . c 4 d 5 f f 1 5 5 b . . . . 
        . . 4 4 d d b f d 5 5 b . . . . 
        b 4 4 4 4 4 5 5 5 d b b d d d b 
        . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
        . . b 5 5 5 5 5 d 5 5 5 5 c d b 
        . b 5 5 5 5 5 5 b 5 5 d c d d c 
        . b 5 5 5 5 5 5 5 b c c d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . c 4 d 5 f 1 d 5 b b . . . . 
        b 4 4 4 d d f f 1 5 5 b . . . . 
        . b 4 4 4 4 b f d 5 5 b . . . . 
        . . b 4 4 4 4 5 5 5 5 d b . . . 
        . . b 5 5 5 5 5 5 5 5 d d b . . 
        . b 5 5 5 5 5 5 5 5 d d d d b . 
        . b 5 5 5 5 5 5 5 b b b d d d b 
        . b 5 5 5 5 5 5 c d 5 5 b d d c 
        . b 5 5 5 5 5 5 d c d 5 d b b c 
        . b d 5 5 5 5 5 d d c b 5 5 b . 
        . . b b 5 5 5 d d d d c c c b b 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . c 4 d 5 f 1 d 5 b b . . . . 
        b 4 4 4 d d f f 1 5 5 b . . . . 
        . b 4 4 4 4 b f d 5 5 b . . . . 
        . . b 4 4 4 4 5 5 5 5 d b . . . 
        . . b 5 5 5 5 5 5 5 d d d b b . 
        . b 5 5 5 5 5 5 5 b b b d d d b 
        . b 5 5 5 5 5 5 c d 5 5 b d d c 
        . b 5 5 5 5 5 5 d c d 5 d b b c 
        . b 5 5 5 5 5 5 d d c b 5 5 b c 
        . b d 5 5 5 5 5 d d d c c c b b 
        . . b b 5 5 5 d d d c c . . . . 
        . . . b b c c c c c . . . . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . f d 5 5 f 1 d 5 b b . . . . 
        . . c 4 d 5 f f 1 5 5 b . . . . 
        . . 4 4 d d b f d 5 5 b . . . . 
        b 4 4 4 4 4 5 5 5 5 5 d b b b . 
        . b 4 4 4 4 4 5 5 d b b d d d b 
        . . b 5 5 5 5 5 5 b 5 5 5 d b b 
        . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
        . b 5 5 5 5 5 5 b 5 5 d c d b c 
        . b d 5 5 5 5 5 d b c c d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
    enemy11.setVelocity(-100, 0)
    enemy11.setPosition(160, randint(10, 110))
})
