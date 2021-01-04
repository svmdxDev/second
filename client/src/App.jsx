import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
import { useContext } from "react";
import { RootContext } from "./context";

function App() {
    const { state } = useContext(RootContext);

    return (
        <ThemeProvider
            theme={state.darkMode ? state.darkTheme : state.lightTheme}
        >
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
