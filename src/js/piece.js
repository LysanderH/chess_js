export class Piece {
    constructor(game, coordinates,position) {
        this.game = game;
        this.coordinates = coordinates;
        this.position = position;
    }
    init(game){
        this.game = game;
        this.game.calculatePosition(this.coordinates, this.position);
    }
    draw(){
        this.game.renderSpriteFrame(this.coordinates);
    }
}