import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Single from "./pages/single/Single";
import Search from './pages/serachPage/Search'
import Write from "./pages/write/Write";
import Blogs from "./pages/Blog/Blogs";
import BlogReducer from "./store/reducer/BlogReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const rootReducer = combineReducers({
    blogdata:BlogReducer
  });
  const store=createStore(rootReducer)
  return (
    <Provider store={store}>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/blogs/:id">
            <Single />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/write">
            {" "}
            <Write />{" "}
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
