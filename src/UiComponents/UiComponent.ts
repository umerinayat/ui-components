import IUiComponent from "./IUiComponent";

class UiComponent implements IUiComponent {

    name!: string;

    element!: HTMLElement;
    innerHtml: string = '';
    jsonDom: {} = {};
    classes: string[] = [];
    inlineStyleAttr: {}[] = [];
    cssRule: {} = {};

    constructor(componentData: IUiComponent) {
        console.log('new ui component created');

        this.name = componentData.name;

    }

    setBgColorStyle(colorValue: string) {
        this.setCssStyle('backgroundColor', colorValue);
    }

    setTextColorStyle(colorValue: string) {
        this.setCssStyle('color', colorValue);
    }

    setCssStyle(property: string, value: string) {
        this.element.style[property] = value;

        let rule = this.inlineStyleAttr.find((r => {
            return Object.keys(r).includes(property);
        }));

        if (rule) {

            this.inlineStyleAttr.filter(r => {
                r[property] = value;
            });

        } else {
            this.inlineStyleAttr.push({ [property]: value });
        }



        this.cssRule = { ...this.cssRule, [property]: value };

        console.log(`${this.element.nodeName.toLocaleLowerCase()} ${JSON.stringify(this.cssRule)}`);
        console.log(this.inlineStyleAttr);

    }

    bindTextColorStyleChangeControl() {
        const control = document.createElement('input');
        control.setAttribute('type', 'color');
        document.querySelector('body')?.appendChild(control);

        control.addEventListener('input', () => {
            this.setTextColorStyle(control.value);
        });
    }

    bindBgColorStyleChangeControl() {
        const control = document.createElement('input');
        control.setAttribute('type', 'color');
        document.querySelector('body')?.appendChild(control);

        control.addEventListener('input', () => {
            this.setBgColorStyle(control.value);
        });
    }
}

export default UiComponent;