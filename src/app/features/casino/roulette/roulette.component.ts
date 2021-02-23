import { Component } from "@angular/core";

@Component({
    selector: 'app-roulette',
    templateUrl: './roulette.component.html',
    styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent {
    slots: RouletteSlot[];
    showMainBoard = false;
    rotating = false;
    result: number;
    get wheelTransition() {
        if (!this.result)
            return undefined;

        return `rotate(${this.result}deg)`;
    }

    get mainBoardSlotsFirstRow() {
        return this.slots.filter(x => x.value % 3 == 0).sort((a, b) => (a.mainBoardOrdering > b.mainBoardOrdering) ? 1 : -1)
    }

    get mainBoardSlotsSecondRow() {
        return this.slots.filter(x => (x.value + 1) % 3 == 0).sort((a, b) => (a.mainBoardOrdering > b.mainBoardOrdering) ? 1 : -1)
    }

    get mainBoardSlotsThirdRow() {
        return this.slots.filter(x => (x.value + 2) % 3 == 0).sort((a, b) => (a.mainBoardOrdering > b.mainBoardOrdering) ? 1 : -1)
    }

    ngOnInit() {
        this.slots = [{
            name: '1',
            value: 1,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 25
        }, {
            name: '2',
            value: 2,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 13
        }, {
            name: '3',
            value: 3,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 1
        }, {
            name: '4',
            value: 4,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 26
        }, {
            name: '5',
            value: 5,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 14
        }, {
            name: '6',
            value: 6,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 2
        }, {
            name: '7',
            value: 7,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 27
        }, {
            name: '8',
            value: 8,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 15
        }, {
            name: '9',
            value: 9,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 3
        }, {
            name: '10',
            value: 10,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 28
        }, {
            name: '11',
            value: 11,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 16
        }, {
            name: '12',
            value: 12,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 4
        }, {
            name: '13',
            value: 13,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 29
        }, {
            name: '14',
            value: 14,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 17
        }, {
            name: '15',
            value: 15,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 5
        }, {
            name: '16',
            value: 16,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 30
        }, {
            name: '17',
            value: 17,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 18
        }, {
            name: '18',
            value: 18,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 6
        }, {
            name: '19',
            value: 19,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 31
        }, {
            name: '20',
            value: 20,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 19
        }, {
            name: '21',
            value: 21,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 7
        }, {
            name: '22',
            value: 22,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 32
        }, {
            name: '23',
            value: 23,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 20
        }, {
            name: '24',
            value: 24,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 8
        }, {
            name: '25',
            value: 25,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 33
        }, {
            name: '26',
            value: 26,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 21
        }, {
            name: '27',
            value: 27,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 9
        }, {
            name: '28',
            value: 28,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 34
        }, {
            name: '29',
            value: 29,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 22
        }, {
            name: '30',
            value: 30,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 10
        }, {
            name: '31',
            value: 31,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 35
        }, {
            name: '32',
            value: 32,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 23
        }, {
            name: '33',
            value: 33,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 11
        }, {
            name: '34',
            value: 34,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 36
        }, {
            name: '35',
            value: 35,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 24
        }, {
            name: '36',
            value: 36,
            color: RouletteSlotColor.Red,
            mainBoardOrdering: 12
        }];
    }

    toggleMainBoard() {
        this.showMainBoard = !this.showMainBoard;
    }

    startSpin() {
        this.rotating = true;
    }

    stopSpin() {
        this.rotating = false;
        this.result = Math.floor(Math.random() * 36) * 10
    }
}

interface RouletteSlot {
    name: string;
    value: number;
    color: RouletteSlotColor;
    mainBoardOrdering: number;
    miniBoardOrdering?: number;
}

enum RouletteSlotColor {
    Black = '#000000',
    Red = '#ff0000',
    Green = '#218f2f'
}