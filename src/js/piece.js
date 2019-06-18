export class Piece {
    constructor(game, coordinates, position) {
        this.game = game;
        this.coordinates = coordinates;
        this.position = position;
    }

    init(game) {
        this.game = game;
        this.game.calculatePosition(this.coordinates, this.position);
    }

    draw() {
        this.game.renderSpriteFrame(this.coordinates);
    }
}

// export const piece_obj = {
//     game: null,
//     piece: [],
//     init(game) {
//         this.game = game;
//         this.game.defaultPosition.forEach((el) => {
//             this.piece.push(new Piece(game, el.coordinates, el.position));
//         });
//         this.piece.forEach((elt) => {
//             elt.init(this);
//         });
//     },
//     draw() {
//         this.piece.forEach((elt) => {
//             elt.draw();
//         });
//     }
// }