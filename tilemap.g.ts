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

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`32001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001020104000000000000000000000000000000000000000000000000000000000000000d0000000000000000000c0c0000000000000000000000000d00000000000d00000000060102010402040202010202040401020101010102010101020101070a030303030303080701010201020102010101020401010202020402040404010102040101020202040404040204020202090b0505050505050a070404020404010204040201040201020202010201020102020402020401020104020101040401010207080505050505050b090101020401040401020401010101`, img`
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
..................................................
..................................................
..................................................
..................................................
.............................2222.................
..................................................
2222222222222222222222222222......2222222222222222
2222222222222222222222222222......2222222222222222
2222222222222222222222222222......2222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,myTiles.tile1,sprites.dungeon.floorLight4,myTiles.tile2,myTiles.tile3,sprites.dungeon.floorMixed,sprites.dungeon.floorDark0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,myTiles.tile4,myTiles.tile6], TileScale.Sixteen);
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
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
