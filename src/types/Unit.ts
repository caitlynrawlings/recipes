type UnitType = 'cup' | 'teaspoon' | 'tablespoon' | 'strawberry' | 'raspberry' | 'banana' | 
    'orange' | 'blueberry' | 'grape' | 'blackberry' | 'pound' | 'egg' | 'ounce' | 'clove' | 
    'piece';

export class Unit {
    type: UnitType;

    constructor(type: UnitType) {
        this.type = type;
    }

    // returns the singular or plural version of the unit based on given amount
    getLabel(amount: number): string {
        let label: string;
        switch (this.type) {
            case 'cup':
                label = amount <= 1 && amount !== 0 ? 'cup' : 'cups';
                break;
            case 'teaspoon':
                label = amount <= 1 && amount !== 0 ? 'teaspoon' : 'teaspoons';
                break;
            case 'tablespoon':
                label = amount <= 1 && amount !== 0 ? 'tablespoon' : 'tablespoons';
                break;
            case 'banana':
                label = amount <= 1 && amount !== 0 ? 'banana' : 'bananas';
                break;
            case 'orange':
                label = amount <= 1 && amount !== 0 ? 'orange' : 'oranges';
                break;
            case 'blueberry':
                label = amount <= 1 && amount !== 0 ? 'blueberry' : 'blueberries';
                break;
            case 'strawberry':
                label = amount <= 1 && amount !== 0 ? 'strawberry' : 'strawberries';
                break;
            case 'raspberry':
                label = amount <= 1 && amount !== 0 ? 'raspberry' : 'raspberries';
                break;
            case 'grape':
                label = amount <= 1 && amount !== 0 ? 'grape' : 'grapes';
                break;
            case 'blackberry':
                label = amount <= 1 && amount !== 0 ? 'blackberry' : 'blackberries';
                break;
            case 'pound':
                label = amount <= 1 && amount !== 0 ? 'pound' : 'pounds';
                break;
            case 'egg':
                label = amount <= 1 && amount !== 0 ? 'egg' : 'eggs';
                break;
            case 'ounce':
                label = amount <= 1 && amount !== 0 ? 'ounce' : 'ounces';
                break;
            case 'clove':
                label = amount <= 1 && amount !== 0 ? 'clove' : 'cloves';
                break;
            case 'piece':
                label = amount <= 1 && amount !== 0 ? 'piece' : 'pieces';
                break;
            default:
                throw new Error('Invalid unit type');
        }
        return `${amount} ${label}`;
    }
}

