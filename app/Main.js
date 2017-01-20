import React, { Component } from "react";
import { Navigator } from "react-native";
import { user } from "./MockApi";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import MyAlbums from "./screens/MyAlbums";
import Settings from "./screens/Settings";

const screenComponents = {
    "home": Home,
    "profile": Profile,
    "my-albums": MyAlbums,
    "settings": Settings
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: user
        };

        this.renderScreen = this.renderScreen.bind(this);
        this.configureSegues = this.configureSegues.bind(this);
    }

    renderScreen(screen, navigator) {
        const Screen = screenComponents[screen.name]
        return <Screen navigator={navigator} user={this.state.user} />
    }

    configureSegues(screen, screenStack) {
        return Navigator.SceneConfigs.FloatFromRight;
    }

    render() {
        return (
            <Navigator
                ref={(navigator) => this.navigator = navigator}
                initialRoute={{name: "home"}}
                renderScene={this.renderScreen}
                configureScene={ this.configureSegues } />
        );
    }
}

export default Main;