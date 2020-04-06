import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MostVisitedLinksComponent from "./component/MostVisitedLinks";
import AddUrl from "./component/AddUrl";
import RedirectUrlComponent from "./component/RedirectUrl";
import {TextUrlShortener, Container} from "./style/style";

function App() {
    return (
        <div>
            <TextUrlShortener>Test Shortener URLs</TextUrlShortener>
            <Router>
                <Container>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/search">Home</Link>
                            </li>
                            <li>
                                <Link to="/new">Create Short URL</Link>
                            </li>
                            <li>
                                <Link to="/">Top 100 more visited sites</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/new">
                            <AddUrl/>
                        </Route>
                        <Route path="/search">
                            <RedirectUrlComponent/>
                        </Route>
                        <Route path="/">
                            <MostVisitedLinksComponent/>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;
