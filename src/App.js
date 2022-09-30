import { ReactComponents } from "./components/index";
import "./tileStyles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*
export default function App() {
  return (
    <div className="App">
      <Pinyin />
    </div>
  );
}
*/

export default function App() {
  return (
    <Router>
      <ReactComponents.Meta />
      <body>
        <ReactComponents.Header />
        <Switch>
          <Route path="/type" component={ReactComponents.Pinyin} />
          <Route exact path="/" component={ReactComponents.LandingPage} />
          <Route path="/test" component={ReactComponents.PinyinTest} />
          <Route path="/about" component={ReactComponents.About} />
          <Route path="/base" component={ReactComponents.ExampleTemplate} />
        </Switch>
      </body>
      <ReactComponents.Footer />
    </Router>
  );
}
