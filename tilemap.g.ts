// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101030d0d0d0301010101010101010a0b030400000003030a0202010101010d00000000000000040a0101010101010d00000000000000030a01010101010a0a00000000000000000b0b0b0a0a0200000000000000000000000000000b01000000000000000000000a0a0a000b01000000000000000000000a010a000b010a0000000000000000000a010b000a01010a0a0b0a0b000b0a0a0a010b000b0101010000000c090c00000a010a000a010101050607060006070606010a000b010101060000000000000000060a000a0101010600080000000000000000000a010101060000000000000000060a0a0a0101010106070606060706060102010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 
2 2 . . . . . . . 2 2 2 2 2 2 2 
2 2 . . . . . . . 2 2 2 2 2 2 2 
2 2 . 2 . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . 2 2 2 . 2 2 
. . . . . . . . . . 2 2 2 . 2 2 
2 . . . . . . . . . 2 2 2 . 2 2 
2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 
2 2 . . . 2 . 2 . . 2 2 2 . 2 2 
2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 
2 2 2 . . . . . . . . 2 2 . 2 2 
2 2 2 . 2 . . . . . . . . . 2 2 
2 2 2 . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile7,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.chestClosed,sprites.dungeon.doorClosedNorth,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.dungeon.floorLight0,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
