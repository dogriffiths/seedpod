import CypressWidget from "../relish-cypress/CypressWidget";
import ImageWidget from "./ImageWidget";
import EpisodeDetails from "./EpisodeDetails";
import EpisodeMedia from "./EpisodeMedia";

export default class Episode extends CypressWidget {
    title() {
        return new CypressWidget('.Episode-title', this)
    }

    description() {
        return new CypressWidget('.Episode-description', this)
    }

    duration() {
        return new CypressWidget('.duration', this)
    }

    details() {
        return new EpisodeDetails('.Episode-details', this)
    }

    fileType() {
        return new CypressWidget('.fileType', this)
    }

    fileSize() {
        return new CypressWidget('.fileSize', this)
    }

    image() {
        return new ImageWidget('.image', this)
    }

    media() {
        return new EpisodeMedia('.EpisodeMedia', this);
    }
}