import React, { Component } from "react";
import { Navigator, Text, DrawerLayoutAndroid, ToolbarAndroid, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DrawerContent from "./components/main/DrawerContent";
import { user } from "./MockApi";
import Home from "./screens/Home";
import MyAlbums from "./screens/MyAlbums";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";

const routes = [
    { index: 0, name: "Home", component: Home },
    { index: 1, name: "My Albums", component: MyAlbums },
    { index: 2, name: "Profile", component: Profile },
    { index: 3, name: "Settings", component: Settings }
];

class AppMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: user,
            currentRoute: routes[0]
        };

        this.onCloseDrawerPress = this.onCloseDrawerPress.bind(this);
        this.onRouteChange = this.onRouteChange.bind(this);
        this.renderScene = this.renderScene.bind(this);
    }

    onCloseDrawerPress() {
        this.drawerLayoutAndroid.closeDrawer();
    }

    onRouteChange(routeIndex) {
        this.setState({
            currentRoute: routes[routeIndex]
        });

        this.onCloseDrawerPress();
        this.navigator.replace(routes[routeIndex]);
    }

    renderScene(route, navigator) {
        const RouteComponent = routes[route.index].component
        return (
            <RouteComponent user={this.state.user} />
        )
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(drawerLayoutAndroid) => { this.drawerLayoutAndroid = drawerLayoutAndroid } }
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => (
                    <DrawerContent
                        user={this.state.user}
                        onCloseDrawerPress={this.onCloseDrawerPress}
                        currentRoute={this.state.currentRoute}
                        onRouteChange={this.onRouteChange} />
                )}>

                <Icon.ToolbarAndroid
                    style={styles.toolbar}
                    title={this.state.currentRoute.name}
                    titleColor="#fff"
                    navIconName="menu"
                    elevation={5}
                    onIconClicked={() => this.drawerLayoutAndroid.openDrawer()}
                    />

                <Navigator
                    ref={(navigator) => this.navigator = navigator}
                    initialRoute={this.state.currentRoute}
                    renderScene={this.renderScene} />

            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: "#1e88e5",
        height: 56
    }
});

export default AppMain;