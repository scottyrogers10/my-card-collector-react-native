import React, { Component } from "react";
import { user } from "./MockApi";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import MyAlbums from "./screens/MyAlbums";
import Settings from "./screens/Settings";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: user
        };
    }

    render() {
        return (
            <Home user={this.state.user} />
        );
    }
}

export default Main;