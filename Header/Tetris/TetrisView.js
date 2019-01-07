// JavaScript source code
'use strict';

class TetrisView {
    constructor(lineNumber, cellNumber) {
        this._panelLineNumber = lineNumber; // Panel 행 수
        this._panelCellNumber = cellNumber; // Panel 열 수
    }
    _makeRandomColor() {    // #ccddee 문자열 만들기
        const ColorNumber = '0123456789abcdef';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            let num = Math.floor(Math.random() * ColorNumber.length);
            color += ColorNumber[num];
        }
        return color;
    }
    makeTetrisPanel() {
        let tetrisPanel = document.getElementById('tetris');
        for (let i = 0; i < this._panelLineNumber; i++) {
            let panelLine = document.createElement('div');
            panelLine.className = 'tetrisLine' + ' tetrisLine' + i;
            for (let j = 0; j < this._panelCellNumber; j++) {
                let panelCell = document.createElement('span');
                panelCell.className = 'tetrisCell' + ' tetrisCell' + i + j;
                //panelCell.style.backgroundColor = this._makeRandomColor();
                panelLine.appendChild(panelCell);
            }
            tetrisPanel.appendChild(panelLine);
        }
        let panel = document.getElementById('tetris');
    }
    testRandomColor() {
        let cells = document.getElementsByClassName('tetrisCell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = this._makeRandomColor();
        }
    }
}
