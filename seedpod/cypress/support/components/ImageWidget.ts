import CypressWidget from "../relish-cypress/CypressWidget";
import Component from "../relish-core/Component";

export default class ImageWidget extends CypressWidget {
    mySelector: string;

    constructor(selector: string, parent: Component) {
        super(selector, parent);
        this.mySelector = selector;
    }

    matches(s: string) {
        expect((this.get() as HTMLElement).getAttribute('src')).equals(s)
    }
}