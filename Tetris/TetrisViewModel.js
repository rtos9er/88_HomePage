// JavaScript source code
'use strict';

class TetrisViewModel {
    constructor() {
        this._panelLineNumber = 10; // Panel �� ��
        this._panelCellNumber = 10; // Panel �� ��
        this._tetrisModel = new TetrisModel(this._panelLineNumber, this._panelCellNumber);
        this._tetrisView = new TetrisView(this._panelLineNumber, this._panelCellNumber);
    }

    run() {
        this._tetrisView.makeTetrisPanel();
    }

    test() {
        this._tetrisView.testRandomColor();
    }
}
