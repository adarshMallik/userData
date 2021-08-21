import "./App.css";
import Create from "./component/create";
import Read from "./component/read";
import Update from "./component/update";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path="/" component={Create} />
        </div>
        <div>
          <Route exact path="/read" component={Read} />
        </div>
        <Route exact path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
