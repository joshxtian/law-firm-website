import Layout from "./Layouts/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TestimoniesPage from "../pages/TestimoniesPage";
import VictoriesPage from "../pages/VictoriesPage";

const Index = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/testimony" component={TestimoniesPage} />
                        <Route path="/victories" component={VictoriesPage}/>
                    </Switch>
                </Layout>
            </Router>
        </>
    );
};

export default Index;
