export type UnitType = 'cup' | 'teaspoon' | 'tablespoon' | 'strawberry' | 'raspberry' | 'banana' | 
    'orange' | 'blueberry' | 'grape';

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
            default:
                throw new Error('Invalid unit type');
        }
        return `${amount} ${label}`;
    }
}

// // Example usage:
// const cupUnit = new Unit('cup');
// console.log(cupUnit.getLabel(1)); // Output: "1 cup"
// console.log(cupUnit.getLabel(3)); // Output: "3 cups"

// const teaspoonUnit = new Unit('teaspoon');
// console.log(teaspoonUnit.getLabel(1)); // Output: "1 teaspoon"
// console.log(teaspoonUnit.getLabel(2)); // Output: "2 teaspoons"

// const tablespoonUnit = new Unit('tablespoon');
// console.log(tablespoonUnit.getLabel(1)); // Output: "1 tablespoon"
// console.log(tablespoonUnit.getLabel(4)); // Output: "4 tablespoons"
