export const kingW = {
    game: null,
    coordinates: {
        frameX: 24,
        frameY: 24,
        frameW: 165,
        frameH: 168,
        canvasX: 0,
        canvasY: 0,
        canvasW: 0,
        canvasH: 0
    },
    position: {
        col: 4,
        row: 7
    },
    init(game) {
        this.game = game;
        this.coordinates.canvasW = this.game.c.canvas.height / 8 - 10;
        this.coordinates.canvasH = this.game.c.canvas.height / 8 - 10;
        this.coordinates.canvasX = this.game.c.canvas.height / 8 * this.position.col + this.game.canvas.height / 16 - this.coordinates.canvasW / 2;
        this.coordinates.canvasY = this.game.c.canvas.height / 8 * this.position.row + this.game.canvas.height / 16 - this.coordinates.canvasH / 2;
    },
    draw() {
        this.game.renderSpriteFrame(this.coordinates);
    }
};