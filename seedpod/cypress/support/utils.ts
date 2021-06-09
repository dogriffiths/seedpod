import TableRow from "./relish-core/TableRow";

function table(s: TemplateStringsArray): string[][] {
    return s
        .toString()
        .split("\n")
        .map(i => i.trim())
        .filter(i => i)
        .map(r =>
            r
                .split("|")
                .slice(1, -1)
                .map(d => d.trim())
        );
}

function tableRows(s: TemplateStringsArray): TableRow[] {
    const arrs = table(s);
    const result = [];
    const headings = arrs[0]
    for (let i = 1; i < arrs.length; i++) {
        const obj: any = {}
        for (let j = 0; j < headings.length; j++) {
            obj[headings[j]] = arrs[i][j];
        }
        result.push(new TableRow(obj));
    }
    return result;
}

const stringSized = (n: number): string => Array(n + 1).join("x");

export { table, stringSized, tableRows };
