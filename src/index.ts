import { Canvas, Component } from './Widget';


const canvas = new Canvas(document.body);
console.log(canvas);

const firstComponent = new Component();
console.log(firstComponent);
console.log(firstComponent.shape);
console.log(firstComponent.shape.attributes);
firstComponent.height = 5;
firstComponent.locationLeft = 7;
firstComponent.shape.backgroundColor = 'red';

canvas.addComponent(firstComponent);
console.log(canvas);
console.log(canvas.components);

const secondComponent = new Component();
secondComponent.locationTop = 4
secondComponent.locationLeft = 2;

canvas.addComponent(secondComponent);