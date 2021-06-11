import CypressAbstractListWidget from "../relish-cypress/CypressAbstractListWidget";
import Podcast from "./Podcast";
import Component from "../relish-core/Component";

export default class PodcastList extends CypressAbstractListWidget<Podcast> {
    constructor(
        selector: string | HTMLElement,
        parent: Component
    ) {
        super(selector, '.Podcast', (e) => new Podcast(e, this), parent);
    }

    item(itemNo: number) {
        return new Podcast(
            "//a[./div[contains(@class, 'Podcast')]][" + (itemNo + 1) + "]/div[contains(@class, 'Podcast')]",
            this
        );
    }
}