import CypressPage from "../relish-cypress/CypressPage";
import Table from "../components/Table";
import CypressWidget from "../relish-cypress/CypressWidget";
import EpisodeList from "../components/EpisodeList";

// <reference path="cypress/types/index.d.ts" />

export default class Home extends CypressPage {
    constructor() {
        super("/episodes");
    }

    matchesUrl(currentUrl: string): boolean {
        return currentUrl.indexOf(`${Cypress.config().baseUrl}${this.getPath()}`) === 0;
    }

    get errorMessage() {
        return new CypressWidget('.error', this)
    }

    get episodes() {
        return new EpisodeList('.EpisodeList', this)
    }
}
