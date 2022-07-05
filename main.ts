namespace SpriteKind {
    export const thing = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
function image2 (myImage: Image, x: number, y: number) {
    mySprite3 = sprites.create(myImage, SpriteKind.thing)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(x, y))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, 16, 500)
})
let mySprite3: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 4))
mySprite = Render.getRenderSpriteVariable()
Render.setViewMode(ViewMode.raycastingView)
Render.moveWithController(2, 3, 0)
image2(assets.image`myImage1`, 5, 1)
image2(assets.image`myImage1`, 6, 1)
image2(assets.image`myImage1`, 7, 1)
image2(assets.image`myImage3`, 8, 8)
image2(assets.image`myImage4`, 0, 5)
image2(assets.image`myImage4`, 0, 6)
image2(assets.image`myImage4`, 0, 7)
image2(assets.image`myImage5`, 1, 5)
image2(assets.image`myImage5`, 1, 6)
image2(assets.image`myImage5`, 1, 7)
image2(assets.image`myImage5`, 1, 8)
scene.setBackgroundImage(assets.image`myImage2`)
