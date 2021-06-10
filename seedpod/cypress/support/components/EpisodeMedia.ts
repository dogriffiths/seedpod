import CypressWidget from "../relish-cypress/CypressWidget";
import Component from "../relish-core/Component";
import ImageWidget from "./ImageWidget";

export default class EpisodeMedia extends CypressWidget {
    image() {
        return new ImageWidget('img', this)
    }
}