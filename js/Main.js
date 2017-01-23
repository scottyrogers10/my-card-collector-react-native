import React, { Component } from "react";
import { NavigationExperimental } from "react-native";
import { connect } from "react-redux";
import { user } from "./MockApi";
import { getUser, pushScreen } from "./actions";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import MyAlbums from "./screens/MyAlbums";
import Settings from "./screens/Settings";

const { CardStack: NavigationCardStack } = NavigationExperimental;

class Main extends Component {
    constructor(props) {
        super(props);

        this._renderScreen = this._renderScreen.bind(this);
        this._pushToScreen = this._pushToScreen.bind(this);
    }

    componentWillMount() {
        this.props.getUser(0);
    }

    _pushToScreen(screen) {
        this.props.pushScreen(screen);
    }

    _renderScreen(screenProps) {
        //TODO: Throw these into a map
        const screen = screenProps.scene;
        
        if (screen.route.key === "home") {
            return <Home user={this.props.user} pushToScreen={this._pushToScreen} />
        }

        if (screen.route.key === "profile") {
            return <Profile />
        }

        if (screen.route.key === "my-albums") {
            return <MyAlbums />
        }

        if (screen.route.key === "settings") {
            return <Settings />
        }
    }

    render() {
        return (
            <NavigationCardStack
                direction="horizontal"
                navigationState={this.props.navigator}
                renderScene={this._renderScreen}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        navigator: state.navigator
    };
};

const mapDispatchToProps = {
    getUser,
    pushScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);