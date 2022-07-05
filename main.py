@namespace
class SpriteKind:
    thing = SpriteKind.create()

def on_b_pressed():
    Render.toggle_view_mode()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def image2(myImage: Image, x: number, y: number):
    global mySprite3
    mySprite3 = sprites.create(myImage, SpriteKind.thing)
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(x, y))

def on_a_pressed():
    Render.jump_with_height_and_duration(mySprite, 16, 500)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

mySprite3: Sprite = None
mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite2 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
tiles.place_on_tile(mySprite2, tiles.get_tile_location(3, 4))
mySprite = Render.get_render_sprite_variable()
Render.set_view_mode(ViewMode.RAYCASTING_VIEW)
Render.move_with_controller(2, 3, 0)
image2(assets.image("""
    myImage1
"""), 5, 1)
image2(assets.image("""
    myImage1
"""), 6, 1)
image2(assets.image("""
    myImage1
"""), 7, 1)
image2(assets.image("""
    myImage3
"""), 8, 8)
image2(assets.image("""
    myImage4
"""), 0, 5)
image2(assets.image("""
    myImage4
"""), 0, 6)
image2(assets.image("""
    myImage4
"""), 0, 7)
image2(assets.image("""
    myImage5
"""), 1, 5)
image2(assets.image("""
    myImage5
"""), 1, 6)
image2(assets.image("""
    myImage5
"""), 1, 7)
image2(assets.image("""
    myImage5
"""), 1, 8)
scene.set_background_image(assets.image("""
    myImage2
"""))