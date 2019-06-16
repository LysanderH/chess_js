import {chessboard} from './chessboard';
import {Piece} from './piece';
import {defaultPosition} from './defaultPositions';

const game = {
    canvas: document.getElementById('chessboard'),
    c: null,
    spriteUrl: '../images/sprite.png',
    spriteImg: new Image(),

    chessboard: chessboard,
    Piece: Piece,
    piece: [],
    defaultPosition: defaultPosition,

    init() {
        this.c = this.canvas.getContext('2d');
        this.canvas.height = window.innerHeight / 2;
        this.canvas.width = window.innerHeight / 2;

        this.spriteImg.src = this.spriteUrl;
        this.spriteImg.addEventListener('load', () => {
            this.chessboard.init(this);
            this.defaultPosition.forEach((el)=>{
                this.piece.push(new Piece(game,el.coordinates,el.position));
            });
            this.piece.forEach((elt)=>{
                elt.init(this);
            });
            console.log(this.piece);
            this.animate();
        })
    },
    animate() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.chessboard.draw();
        this.piece.forEach((elt)=>{
            elt.draw();
        });
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
    },
    calculatePosition(coordinates,position){
        coordinates.canvasW = this.c.canvas.height / 8 - 10;
        coordinates.canvasH = this.c.canvas.height / 8 - 10;
        coordinates.canvasX = this.c.canvas.height / 8 * position.row + this.canvas.height / 16 - coordinates.canvasW / 2;
        coordinates.canvasY = this.c.canvas.height / 8 * position.col + this.canvas.height / 16 - coordinates.canvasH / 2;
    }
};
game.init();
