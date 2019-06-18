import {chessboard} from './chessboard';
import {Piece} from './piece';
// import {piece_obj} from './piece';
import {defaultPosition} from './defaultPositions';
import {controller} from './controller';

const game = {
    canvas: document.getElementById('chessboard'),
    c: null,
    spriteUrl: '../images/sprite.png',
    spriteImg: new Image(),

    chessboard: chessboard,
    Piece: Piece,
    piece: [],
    defaultPosition: defaultPosition,
    controller: controller,
    // piece_obj: piece_obj,

    clickedPiece: [],
    deletedPieces: [],
    index: null,
    indexTaken: null,

    init() {
        this.c = this.canvas.getContext('2d');
        if (window.innerHeight < window.innerWidth) {
            this.canvas.height = window.innerHeight / 1.2;
            this.canvas.width = window.innerHeight / 1.2;
        } else {
            this.canvas.width = window.innerWidth / 1.2;
            this.canvas.height = window.innerWidth / 1.2;
        }
        window.addEventListener('resize', () => {
            if (window.innerHeight < window.innerWidth) {
                this.canvas.height = window.innerHeight / 1.2;
                this.canvas.width = window.innerHeight / 1.2;
            } else {
                this.canvas.width = window.innerWidth / 1.2;
                this.canvas.height = window.innerWidth / 1.2;
            }

            this.initPieces();
            this.chessboard.init(this);
        })

        this.spriteImg.src = this.spriteUrl;
        this.spriteImg.addEventListener('load', () => {
            this.chessboard.init(this);
            this.controller.init(this);
            this.initPieces();
            this.animate();
        })
    },
    animate() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.chessboard.draw();
        this.drawPieces();
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
    calculatePosition(coordinates, position) {
        coordinates.canvasW = this.c.canvas.height / 8 - 10;
        coordinates.canvasH = this.c.canvas.height / 8 - 10;
        coordinates.canvasX = this.c.canvas.height / 8 * position.row + this.canvas.height / 16 - coordinates.canvasW / 2;
        coordinates.canvasY = this.c.canvas.height / 8 * position.col + this.canvas.height / 16 - coordinates.canvasH / 2;
    },
    getClickedPiece(mousePosition) {
        this.index = this.defaultPosition.findIndex(element => element.position.col === Math.floor(mousePosition.y / (this.canvas.height / 8))
            && element.position.row === Math.floor(mousePosition.x / (this.canvas.height / 8)));
        if (this.defaultPosition[this.index] !== undefined) {
            this.clickedPiece.push(this.defaultPosition[this.index])
        }
        // console.log(this.clickedPiece)
    },
    renewPiecePosition(mousePosition) {
        this.defaultPosition[this.index].position.col = Math.floor(mousePosition.y / (this.canvas.height / 8));
        this.defaultPosition[this.index].position.row = Math.floor(mousePosition.x / (this.canvas.height / 8));
        this.getTakenPieceIndex();
        console.log(this.indexTaken)
        if (this.indexTaken >= 0) {
            this.defaultPosition.splice(this.indexTaken, 1);
        }
        this.piece = [];
        this.initPieces();
        this.drawPieces();
        this.clickedPiece = [];
        this.index = null;

    },
    initPieces() {
        this.defaultPosition.forEach((el) => {
            this.piece.push(new Piece(game, el.coordinates, el.position));
        });
        this.piece.forEach((elt) => {
            elt.init(this);
        });
    },
    drawPieces() {
        this.piece.forEach((elt) => {
            elt.draw();
        });
    },
    getTakenPieceIndex() {
        this.indexTaken = this.defaultPosition.findIndex(element => element.position.col === this.clickedPiece[0].position.col
            && element.position.row === this.clickedPiece[0].position.row && element.name !== this.clickedPiece[0].name);

    }
};
game.init();
