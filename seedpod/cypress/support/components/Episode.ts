import CypressWidget from "../relish-cypress/CypressWidget";
import Component from "../relish-core/Component";

export default class extends CypressWidget {
    constructor(selector: HTMLElement, parent: Component) {
        super(selector, parent);
    }

    title() {
        return new CypressWidget('.title', this)
    }

    description() {
        return new CypressWidget('.description', this)
    }

    duration() {
        return new CypressWidget('.duration', this)
    }

    file() {
        return new CypressWidget('.file', this)
    }

    fileType() {
        return new CypressWidget('.fileType', this)
    }

    fileSize() {
        return new CypressWidget('.fileSize', this)
    }

    image() {
        return new CypressWidget('.image', this)
    }
}