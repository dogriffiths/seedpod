import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Episodes from "./Episodes";
import URLForm from "./components/URLForm";

import './App.css';
import PopularPodcasts from "./PopularPodcasts";
import AudioProvider from "./hooks/useAudio/AudioProvider";
import MediaView from "./components/MediaView";
import Player from "./components/Player/Player";


function App() {
    return (
        <div className="App">
            <AudioProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/episodes'}>
                            <MediaView>
                                <Episodes/>
                            </MediaView>
                        </Route>
                        <Route path={'/player'}>
                            <Player/>
                        </Route>
                        <MediaView>
                            <main>
                                <URLForm/>
                                <PopularPodcasts/>
                            </main>
                        </MediaView>
                    </Switch>
                </BrowserRouter>
            </AudioProvider>
        </div>
    );
}

export default App;
