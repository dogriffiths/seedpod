import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Episodes from "./Episodes";
import URLForm from "./components/URLForm";

import './App.css';

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
                </main>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
