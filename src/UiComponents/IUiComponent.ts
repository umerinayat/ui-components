import UiComponent from "./UiComponent";

interface IUiComponent {

    name: string;

    innerHtml?: string;
    jsonDom?: {};
    classes?: string[];
    inlineStyleAttr?: {}[];
    cssRule?: {};
}


export default IUiComponent;