import React, { Component, } from "react";
import { View, NavigationExperimental, Easing, StyleSheet, Animated, } from "react-native";
import { connect, } from "react-redux";
import { user, } from "./MockApi";
import { getUser, } from "./actions";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import MyAlbums from "./screens/MyAlbums";
import Settings from "./screens/Settings";
import AddCard from "./screens/AddCard";

const { Transitioner: NavigationTransitioner, } = NavigationExperimental;

const screenContainers = {
    "home": Home,
    "profile": Profile,
    "my-albums": MyAlbums,
    "settings": Settings,
    "add-card": AddCard
};

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getUser(0);
    }

    _render(transitionProps) {
        const screens = transitionProps.scenes;
        return screens.map((screen) => {
            const screenProps = {
                ...transitionProps,
                screen,
            };
            return this._renderScreen(screenProps);
        });
    }

    _renderScreen(screenProps) {
        const screen = screenProps.screen;
        const Screen = screenContainers[screen.route.key];

        return (
            <Animated.View key={screen.route.key} style={[styles.screen, this._getAnimatedStyle(screenProps)]}>
                <Screen />
            </Animated.View>
        );
    }

    _getAnimatedStyle(screenProps) {
        const { layout, position, screen, } = screenProps;
        const { index, } = screen;

        const inputRange = [index - 1, index, index + 1];
        const width = layout.initWidth;
        const translateX = position.interpolate({
            inputRange,
            outputRange: ([width, 0, -10]),
        });

        return {
            transform: [
                { translateX },
            ],
        };
    }

    _configureTransition() {
        const easing = Easing.inOut(Easing.ease);
        return {
            duration: 300,
            easing,
        };
    }

    render() {
        return (
            <NavigationTransitioner
                navigationState={this.props.navigator}
                render={(transitionProps) => this._render(transitionProps)}
                configureTransition={this._configureTransition}
                />
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        position: "absolute",
        backgroundColor: "#f2f2f2",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
});

const mapStateToProps = (state) => {
    return {
        navigator: state.navigator,
    };
};

const mapDispatchToProps = {
    getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);