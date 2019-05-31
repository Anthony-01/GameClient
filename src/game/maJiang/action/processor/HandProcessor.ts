namespace MaJ {
    export class HandProcessor {




        assertAdd(host: IMaJActionHost, tiles: number[]) {
            return true;
        }

        addTiles(host: IMaJActionHost, tiles: number[]) {
            let hands = host.hands.concat(tiles);
            host.hands = hands;
        }
    }
}