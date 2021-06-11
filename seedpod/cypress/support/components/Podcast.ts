import CypressWidget from "../relish-cypress/CypressWidget";
import ImageWidget from "./ImageWidget";

export default class Podcast extends CypressWidget {
    title() {
        return new CypressWidget('.Podcast-title', this)
    }

    description() {
        return new CypressWidget('.Podcast-description', this)
    }

    image() {
        return new ImageWidget('.Podcast-image', this)
    }
}