import IUiComponent from "./IUiComponent";
import UiComponent from "./UiComponent";

class UiButton extends UiComponent {

    constructor(componentData: IUiComponent) {
        super(componentData);

        console.log(`${this.name} created`);

        this.element = document.createElement('button');
        const textNode = document.createTextNode(this.name);
        this.element.appendChild(textNode);

        this.setBgColorStyle('yellow');
        this.setTextColorStyle('red');

        this.bindTextColorStyleChangeControl();
        this.bindBgColorStyleChangeControl();
    }
}

export default UiButton;