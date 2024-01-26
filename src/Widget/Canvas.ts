import Component from './Component';

export default class Canvas{

    constructor(private parent:HTMLElement, private _components: Component[] = []){
        this.parent.innerHTML = '';
        this.parent.id = 'canvas';
        const newStyle:Partial<CSSStyleDeclaration> = {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'repeat(12, 1fr)',
            height: '100vh',
            columnGap: '5px',
            rowGap: '5px',
            aspectRatio: '1 / 1'
        }
        Object.assign(this.parent.style, newStyle)
    }

    public get components():Component[]{
        return this._components
    }

    public addComponent(component:Component):void{
        this.components.push(component);
        component.canvas = this;
        this.render()
    }

    private render():void{
        this.parent.innerHTML = '';
        for (const component of this.components){
            // build the HTML for the component
            this.buildComponent(component)
        }
    }

    private buildComponent(component:Component):void{
        // Method to create the HTML Div Element
        let div = this.initializeComponentDiv(component);
        // Place the container on the grid
        this.placeComponent(component, div);
    }

    private initializeComponentDiv(component:Component):HTMLDivElement{
        let div = document.createElement('div');
        div.id = component.id
        const newStyle: Partial<CSSStyleDeclaration> = {
            margin: 'auto',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '3%',
            aspectRatio: '1 / 1'
        }
        // Set the div styling
        Object.assign(div.style, newStyle);
        // Set Up the Shape for the component
        Object.assign(div.style, component.shape.attributes);
        // Set the innerHTML of the div to the component's content
        div.innerHTML = component.content
        return div
    }

    private placeComponent(component:Component, div:HTMLDivElement):void{
        const newStyle: Partial<CSSStyleDeclaration> = {
            gridColumnStart: component.locationLeft.toString(),
            gridColumnEnd: "span " + component.width,
            gridRowStart: component.locationTop.toString(),
            gridRowEnd: "span " + component.height
        }
        Object.assign(div.style, newStyle)
        this.parent.append(div)
    }
}
