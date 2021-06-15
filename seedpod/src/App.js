import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Episodes from "./Episodes";
import URLForm from "./components/URLForm";

import './App.css';
import PopularPodcasts from "./PopularPodcasts";
import AudioProvider from "./hooks/useAudio/AudioProvider";
import MediaView from "./components/MediaView";
import Player from "./components/Player/Player";
import CategoryPodcasts from "./CategoryPodcasts";


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
                        <Route path='/categories/:category'>
                            <main>
                                <URLForm/>
                                <CategoryPodcasts/>
                            </main>
                        </Route>
                        <MediaView>
                            <main>
                                <URLForm/>
                                <h2>Popular</h2>
                                <PopularPodcasts/>
                                <br clear='all'/>
                                <h2>Categories</h2>
                                <ul>
                                    <li><Link to='/categories/Arts'>Arts</Link></li>
                                    <li><Link to='/categories/Business'>Business</Link></li>
                                    <li><Link to='/categories/Comedy'>Comedy</Link></li>
                                    <li><Link to='/categories/Education'>Education</Link></li>
                                    <li><Link to='/categories/Fiction'>Fiction</Link></li>
                                    <li><Link to='/categories/Government'>Government</Link></li>
                                    <li><Link to='/categories/Health%20%26%20Fitness'>Health & Fitness</Link></li>
                                    <li><Link to='/categories/History'>History</Link></li>
                                    <li><Link to='/categories/Leisure'>Leisure</Link></li>
                                    <li><Link to='/categories/Music'>Music</Link></li>
                                    <li><Link to='/categories/News'>News</Link></li>
                                    <li><Link to='/categories/News%20%26%20Politics'>News & Politics</Link></li>
                                    <li><Link to='/categories/Religion%20%26%20Spirituality'>Religion & Spirituality</Link></li>
                                    <li><Link to='/categories/Science'>Science</Link></li>
                                    <li><Link to='/categories/Science%20%26%20Medicine'>Science & Medicine</Link></li>
                                    <li><Link to='/categories/Society%20%26%20Culture'>Society & Culture</Link></li>
                                    <li><Link to='/categories/True%20Crime'>True Crime</Link></li>
                                    <li><Link to='/categories/TV%20%26%20Film'>TV & Film</Link></li>
                                </ul>
                            </main>
                        </MediaView>
                    </Switch>
                </BrowserRouter>
            </AudioProvider>
        </div>
    );
}

export default App;
