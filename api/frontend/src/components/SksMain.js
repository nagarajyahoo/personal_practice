import React from 'react';
import Some from "./some/Some";
import Hello from "./dummy/Hello";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";

export default class SksMain extends React.Component {
    render() {
        return (<div>
            <Link to={'/hello'}>Hello</Link>
            &nbsp;<Link to={'/some'}>Some</Link>
            <Switch>
                <Route path='/hello' component={Hello}/>
                <Route path='/some' component={Some}/>
            </Switch>
        </div>);
    }
}