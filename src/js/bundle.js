const game = {
    canvas: document.getElementById('chessboard'),
    c: null,
    spriteUrl: '../images/sprite.png',
    spriteImg: new Image(),
    init() {
        this.c = this.canvas.getContext('2d');
        this.spriteImg.src = this.spriteUrl;
        this.spriteImg.addEventListener('load', () => {

            this.animate();
        })
    },
    animate(){
        this.c.clearRect(0,0,this.canvas.width, this.canvas.height);

        requestAnimationFrame(() => {
            this.animate();
        });
    },
    renderSpriteFrame(coordinates) {
        this.c.drawImage(this.spriteImg,
            coordinates.frameX,
            coordinates.frameY,
            coordinates.frameW,
            coordinates.frameH,
            coordinates.canvasX,
            coordinates.canvasY,
            coordinates.canvasW,
            coordinates.canvasH
        );
    }
};
game.init();
