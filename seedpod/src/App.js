import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import './App.css';

const URLForm = () => {
    const history = useHistory()


    return <>
        <input className='urlFeed'/>
        <button onClick={() => history.push('/episodes')}>
            View URL
        </button>
    </>
}

const Episodes = () => {
    return <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Episode 1</td>
            <td>All about fish</td>
        </tr>
        <tr>
            <td>Episode 2</td>
            <td>All about dogs</td>
        </tr>
        </tbody>
    </table>
}

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
