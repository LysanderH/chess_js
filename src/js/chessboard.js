export const chessboard = {
    game: null,
    color_1: null,
    color_2: null,

    originX: 0,
    originY: 0,
    fieldSide: 0,
    init(game) {
        this.game = game;
        // calculate the Side
        this.fieldSide = this.game.canvas.height / 8;
    },
    draw() {
        this.drawColumn();
    },
    drawColumn() {
        for (let j = 0; j <= 8; j++) {
            this.originY = this.game.canvas.height * j / 8;
            if (j%2 === 0){
                this.color_1 = '#fff';
                this.color_2 = '#3c3c3c';
            } else {
                this.color_1 = '#3c3c3c';
                this.color_2 = '#fff';
            }
            this.drawLine();
        }
    },
    drawLine() {
        for (let i = 0; i <= 8; i++) {
            this.originX = this.game.canvas.height * i / 8;
            this.game.c.beginPath();
            if (i % 2 === 0) {
                this.game.c.fillStyle = this.color_1;
            } else {
                this.game.c.fillStyle = this.color_2;
            }
            this.game.c.rect(this.originX, this.originY, this.fieldSide, this.fieldSide);
            this.game.c.fill();
        }
    },
}
