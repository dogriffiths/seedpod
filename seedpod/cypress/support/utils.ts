function table(s: TemplateStringsArray) {
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

const stringSized = (n: number): string => Array(n + 1).join("x");

export { table, stringSized };
