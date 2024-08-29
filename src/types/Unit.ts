export type UnitType = 'cup' | 'teaspoon' | 'tablespoon' | 'strawberry' | 'raspberry' | 'banana' | 
    'orange' | 'blueberry' | 'grape' | 'blackberry' | 'pound' | 'egg';

export class Unit {
    type: UnitType;

    constructor(type: UnitType) {
        this.type = type;
    }

    getLabel(amount: number): string {
        let label: string;
        switch (this.type) {
            case 'cup':
                label = amount <= 1 ? 'cup' : 'cups';
                break;
            case 'teaspoon':
                label = amount <= 1 ? 'teaspoon' : 'teaspoons';
                break;
            case 'tablespoon':
                label = amount <= 1 ? 'tablespoon' : 'tablespoons';
                break;
            case 'banana':
                label = amount <= 1 ? 'banana' : 'bananas';
                break;
            case 'orange':
                label = amount <= 1 ? 'orange' : 'oranges';
                break;
            case 'blueberry':
                label = amount <= 1 ? 'blueberry' : 'blueberries';
                break;
            case 'strawberry':
                label = amount <= 1 ? 'strawberry' : 'strawberries';
                break;
            case 'raspberry':
                label = amount <= 1 ? 'raspberry' : 'raspberries';
                break;
            case 'grape':
                label = amount <= 1 ? 'grape' : 'grapes';
                break;
            case 'blackberry':
                label = amount <= 1 ? 'blackberry' : 'blackberries';
                break;
            case 'pound':
                label = amount <= 1 ? 'pound' : 'pounds';
                break;
            case 'egg':
                label = amount <= 1 ? 'egg' : 'eggs';
                break;
            default:
                throw new Error('Invalid unit type');
        }
        return `${amount} ${label}`;
    }
}

