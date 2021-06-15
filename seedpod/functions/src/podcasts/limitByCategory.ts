function limitByCategory(data: any, category: string) {
    const result: any = {};
    for (let key in data) {
        const feed = data[key];
        if (feed && feed.categories && feed.categories.indexOf(category) !== -1) {
            result[key] = feed;
        }
    }
    return result;
}

export default limitByCategory;