import CypressPage from "../relish-cypress/CypressPage";
import Table from "../components/Table";

// <reference path="cypress/types/index.d.ts" />

export default class Home extends CypressPage {
    constructor() {
        super("/episodes");
    }

    matchesUrl(currentUrl: string): boolean {
        return currentUrl.indexOf(`${Cypress.config().baseUrl}${this.getPath()}`) === 0;
    }

    get episodes() {
        return new Table('table', this)
    }
}
