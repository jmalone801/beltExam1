import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PetForm from './components/PetForm';
import PetList from './components/PetList';
import Update from './views/Update';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <h1>Pet Shop</h1>
      <BrowserRouter>
        <Switch>

          <Route exact path="/pets/new">
            <PetForm />
          </Route>

          <Route exact path="/pets/all">
            <PetList />
          </Route>

          <Route path="/pet/update/:_id">
            <Update />
          </Route>

          <Route exact path="/pet/:_id">
            <Detail />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
