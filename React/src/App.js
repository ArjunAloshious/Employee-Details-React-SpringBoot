import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { Container } from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Router>
          <HeaderComponent />
            <Container>
              <Switch>
                <Route path="/" exact component={ListEmployeeComponent}></Route>
                <Route path="/employees" component={ListEmployeeComponent}></Route>
                <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
              </Switch>
            </Container>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
