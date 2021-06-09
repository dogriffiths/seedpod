import CypressPage from "../relish-cypress/CypressPage";
import InputText from "../relish-cypress/InputText";
import CypressWidget from "../relish-cypress/CypressWidget";

// <reference path="cypress/types/index.d.ts" />

export default class Home extends CypressPage {
    constructor() {
        super("/");
    }

    get urlFeed() {
        return new InputText(".urlFeed", this);
    }

    get viewURLButton() {
        return new CypressWidget("button", this);
    }
}
