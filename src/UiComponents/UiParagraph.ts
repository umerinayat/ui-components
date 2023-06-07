import IUiComponent from "./IUiComponent";
import UiComponent from "./UiComponent";

class UiParagraph extends UiComponent {

    constructor(componentData: IUiComponent) {
        super(componentData);

        console.log(`${this.name} created`);

        this.element = document.createElement('p');
        const textNode = document.createTextNode(this.name);
        this.element.appendChild(textNode);

        this.setBgColorStyle('blue');
        this.setTextColorStyle('green');

        this.bindTextColorStyleChangeControl();
        this.bindBgColorStyleChangeControl();
    }
}

export default UiParagraph;