import CypressAbstractListWidget from "../relish-cypress/CypressAbstractListWidget";
import Episode from "./Episode";
import Component from "../relish-core/Component";
import TableRow from "../relish-core/TableRow";

export default class extends CypressAbstractListWidget<Episode> {
    constructor(
        selector: string | HTMLElement,
        parent: Component
    ) {
        super(selector, '.Episode', (e) => new Episode(e, this), parent);
    }

    matches(rows: TableRow[]) {
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            cy.get('.Episode').eq(i).should($el => {
                const result = $el.get ? $el.get()[0] : $el;
                (new Episode(result as HTMLElement, this)).matches(row);
            });
        }
    }
}