export const controller = {
    "game": null,
    mousePos: null,
    init(game) {
        this.game = game;

        window.addEventListener('click', (e) => {
            const rect = this.game.canvas.getBoundingClientRect();
            this.mousePos = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };

            if (this.game.clickedPiece.length === 0){
                this.game.getClickedPiece(this.mousePos);
            } else {
                this.game.renewPiecePosition(this.mousePos);
            }


        });
        window.addEventListener('touch', (e) => {
            const rect = this.game.canvas.getBoundingClientRect();
            this.mousePos = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };

            if (this.game.clickedPiece.length === 0){
                this.game.getClickedPiece(this.mousePos);
            } else {
                this.game.renewPiecePosition(this.mousePos);
            }


        });

    },
}