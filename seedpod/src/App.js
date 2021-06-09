import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import URLForm from "./URLForm";
import Episodes from "./Episodes";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path='/episodes'>
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
