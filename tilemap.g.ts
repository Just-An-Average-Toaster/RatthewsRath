// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

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
            case "level1":return tiles.createTilemap(hex`32001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000e00000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000040404040404040000000000000000000000000000000000000000000000000004040404000004040000000000040c0c04000000000000000000000000000000000000000000000000000000000000000004040404040000000000000004000404040400000000000000000000000000000000000000000000000000000000000000040400000404000000000000040400000000000000000404000000000000000000000000000000000000000000000000000404000e0000040000000e00040404000000000000040000000000000400000000000000000000000000000601020104020402020102020404010d0101010102010c010f0101070a03030303030308070101020000000e000101020401010202020402040404010102040101020202040404040204020202090b1010101010100a070404020404010204040201040201020202010201020102020402020401020104020101040401010207080505050505050b090101020401040401020401010101`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
...........................2.....2................
...........................2222222................
.........2222..22.....2..2........................
........22..........2.2222........................
.......22..........22........22...................
......22....2.....222......2......2...............
222222222222222222222...2222......22..2.....222222
22222222222222222222222..............2222222222222
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,myTiles.tile1,sprites.dungeon.floorLight4,myTiles.tile2,myTiles.tile3,sprites.dungeon.floorMixed,sprites.dungeon.floorDark0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,myTiles.tile4,sprites.dungeon.floorLight5,myTiles.tile6,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "BadWater":
            case "tile2":return tile2;
            case "Sewage":
            case "tile1":return tile1;
            case "EndPipe":
            case "tile3":return tile3;
            case "Spikes":
            case "tile4":return tile4;
            case "Dave":
            case "tile5":return tile5;
            case "Roach":
            case "tile6":return tile6;
            case "Snake":
            case "tile7":return tile7;
            case "Possum":
            case "tile8":return tile8;
            case "myTile":
            case "tile9":return tile9;
            case "fake spikes":
            case "tile10":return tile10;
            case "GoodWater":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
