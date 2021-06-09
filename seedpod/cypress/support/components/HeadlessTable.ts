import Component from "../relish-core/Component";
import TableRow from "../relish-core/TableRow";
import Table from "./Table";

export default class HeadlessTable extends Table {
    sel: string;

    constructor(selector: string, parent: Component) {
        super(selector, parent);
        this.sel = selector;
    }

    matches(rows: string | TableRow | object[]) {
        if (!(rows instanceof TableRow) && typeof rows !== "string") {
            cy.get(this.sel).get('table')
                .should($table => {
                    const trs = $table.find('tr');
                    if (trs.length !== rows.length) {
                        throw new Error("Wrong number of rows. Was " + trs.length + " but expected " + rows.length);
                    }
                    for (let i = 0; i < rows.length; i++) {
                        const row = (rows[i] as object[]);
                        const tr = trs[i];
                        const cells = tr.children;
                        if (cells.length !== row.length) {
                            throw new Error("Wrong number of columns in row " + (i + 1)
                                + ". Was " + cells.length + " but expected " + row.length);
                        }
                        for (let j = 0; j < cells.length; j++) {
                            const cell = cells[j];
                            if ((cell as HTMLElement).innerText !== (row[j].toString())) {
                                throw new Error("Wrong value in cell [" + (i + 1) + ", "
                                    + (j + 1) + "]. Was " + (cell as HTMLElement).innerText + " but expected " + row[j]);
                            }
                        }
                    }
                });
        }
    }
}
