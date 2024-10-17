basic.forever(function () {
    music.play(music.stringPlayable("B A G F A D B C5 ", 135), music.PlaybackMode.LoopingInBackground)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
})
