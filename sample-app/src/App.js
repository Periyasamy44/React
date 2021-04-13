import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MensWearScreen from "./screens/MensWearScreen";
import WomensWearScreen from "./screens/WomensWearScreen";
import ShoeScreen from "./screens/ShoeScreen.js";
import Help from "./component/Help";
import { useEffect, useState } from "react";
import SlideShow from "./component/SlideShow";

function useMedia(query) {
  let [matche, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matche) {
      setMatches(media.matches);
    }

    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query,matche]);
  return matche;
}

function App() {
  let small = useMedia("(max-width: 1000px)");
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row ">
          <div>
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">
              Shopping
            </Link>
          </div>
          {small?
      (''):(
          <>
          <div>
            <Link to="/mens">Mens</Link>
            <Link to="/womens">womens</Link>
            <Link to="/shoe">shope care</Link>
            <Link to="/help">Help</Link>
          </div>
          </>
          )}
          <div>
          <Link to="/signin">My Account</Link>
          </div>
        </header>
        <aside className={sidebarIsOpen ? "open" : ""}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            <li>
              <Link to="/mens">Mens</Link>
            </li>
            <li>
              <Link to="/womens">womens</Link>
            </li>
            <li>
              <Link to="/shoe">shope care</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/mens" component={MensWearScreen} exact></Route>
          <Route path="/" component={SlideShow} exact></Route>
          <Route path="/shoe" component={ShoeScreen} exact></Route>
          <Route path="/help" component={Help} exact></Route>
          <Route path="/womens" component={WomensWearScreen} exact></Route>
          <Route path="/signin" component={SigninScreen} exact></Route>
          <Route path="/register" component={RegisterScreen} exact></Route>
        </main>
        <footer className="">
          <div className="color row">
            <div className="card-body ">
              <h2>About</h2>
              <p>Founded in 2010 in Amsterdam</p>
            </div>
            <div className="card-body">
              <h2>Address</h2>
              <p>Singel 465 1012 WP Amsterdam 
                The Netherlands</p>
            </div>
            <div className="card-body ">
              <h2>Contact</h2>
              <p>Email us +31 (0) 202 615 614</p>
            </div>
            <div className="card-body ">
              <h2>Info</h2>
              <p>Shipping info Careers Wholesale</p>
            </div>
            <div className="card-body ">
              <h2>Follow as</h2>
              <p>
                Instagram
                <br /> FaceBook
              </p>
            </div>
          </div>
          <div className="row center">All right reserved &copy; 2021</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
