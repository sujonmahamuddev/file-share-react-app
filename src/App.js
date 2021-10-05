import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Upload from './components/Upload';
import Table from './components/Table';

function App() {
  return (
    <div className="apps">
      <BrowserRouter>
        <Switch>
          <Route>
            <Header />
            <Upload />
            <Table />
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
