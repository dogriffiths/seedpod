import CypressPage from "../relish-cypress/CypressPage";
import Table from "../components/Table";

// <reference path="cypress/types/index.d.ts" />

export default class Home extends CypressPage {
    constructor() {
        super("/episodes");
    }

    get episodes() {
        return new Table('table', this)
    }
}
