import { 
    Canvas, 
    Component,
    RightLeaningContainer,
    CircleContainer,
    ThickContainer,
} from './Widget';


const canvas = new Canvas(document.body);
console.log(canvas);

const firstComponent = new Component();
console.log(firstComponent);
console.log(firstComponent.shape);
console.log(firstComponent.shape.attributes);
firstComponent.height = 3;
firstComponent.width = 3;
firstComponent.locationLeft = 7;
firstComponent.shape.backgroundColor = 'red';

canvas.addComponent(firstComponent);
console.log(canvas);
console.log(canvas.components);

const secondComponent = new Component();
secondComponent.locationTop = 4
secondComponent.locationLeft = 2;
secondComponent.shape = new RightLeaningContainer();

canvas.addComponent(secondComponent);


const myCircleComponent = new Component();
myCircleComponent.shape = new CircleContainer();
myCircleComponent.shape.borderColor = 'blue';
myCircleComponent.shape.backgroundColor = 'orange';

canvas.addComponent(myCircleComponent);

const anotherComponent = new Component();
anotherComponent.locationTop = 8
anotherComponent.locationLeft = 8
anotherComponent.shape = new ThickContainer();
anotherComponent.shape.borderStyle = 'dotted';

canvas.addComponent(anotherComponent);