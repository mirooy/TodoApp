import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={MainPage} />
      </Router>
    </div>
  );
}

export default App;
