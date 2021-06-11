import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Episodes from "./Episodes";
import URLForm from "./components/URLForm";

import './App.css';
import PopularPodcasts from "./PopularPodcasts";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path={'/episodes'}>
                    <Episodes/>
                </Route>
                <main>
                    <URLForm/>
                    <PopularPodcasts/>
                </main>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
