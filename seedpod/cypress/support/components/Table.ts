import CypressWidget from "../relish-cypress/CypressWidget";
import Component from "../relish-core/Component";
import TableRow from "../relish-core/TableRow";

export default class Table extends CypressWidget {
    sel: string;

    constructor(selector: string, parent: Component) {
        super(selector, parent);
        this.sel = selector;
    }

    matches(rows: string | TableRow | object[]) {
        if (!(rows instanceof TableRow) && typeof rows !== "string") {
            const headings = rows[0] as string[];
            for (let j = 0; j < headings.length; j++) {
                cy.get(this.sel)
                    .xpath("./thead/tr[1]/th[" + (j + 1) + "]")
                    .should($el => {
                        expect($el.text()).to.equal(headings[j]);
                    });
            }
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i] as string[];
                for (let j = 0; j < row.length; j++) {
                    cy.get(this.sel)
                        .xpath("./tbody/tr[" + i + "]/td[" + (j + 1) + "]")
                        .should($el => {
                            expect($el.text()).to.equal(row[j]);
                        });
                }
            }
            this.cell(rows.length, 0).assertInvisible();
        }
    }

    heading(colNo: number) {
        return new CypressWidget("./thead/tr[1]/th[" + (colNo + 1) + "]", this);
    }

    cell(rowNo: number, colNo: number) {
        return new CypressWidget(
            "./tbody/tr[" + (rowNo + 1) + "]/td[" + (colNo + 1) + "]",
            this
        );
    }
}
