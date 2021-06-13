import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Episodes from "./Episodes";
import URLForm from "./components/URLForm";

import './App.css';
import PopularPodcasts from "./PopularPodcasts";
import AudioProvider from "./hooks/useAudio/AudioProvider";
import MediaView from "./MediaView";


function App() {
  return (
    <div className="App">
        <AudioProvider>
            <BrowserRouter>
                <MediaView>
                    <Switch>
                        <Route path={'/episodes'}>
                            <Episodes/>
                        </Route>
                        <main>
                            <URLForm/>
                            <PopularPodcasts/>
                        </main>
                    </Switch>
                </MediaView>
            </BrowserRouter>
        </AudioProvider>
    </div>
  );
}

export default App;
