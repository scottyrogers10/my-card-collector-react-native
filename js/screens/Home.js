import React, { Component } from "react";
import { View, Text, ListView, DrawerLayoutAndroid, ToolbarAndroid, StyleSheet, InteractionManager } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DrawerContent from "../components/home/DrawerContent";
import CardFeed from "../components/home/CardFeed";
import { cards } from "../MockApi";

class Home extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(cards)
        };

        this._openDrawer = this._openDrawer.bind(this);
        this._closeDrawer = this._closeDrawer.bind(this);
        this._pushToScreen = this._pushToScreen.bind(this);

        this.drawerCloseHandle = null;
    }


    _openDrawer() {
        this.drawerLayoutAndroid.openDrawer();
    }

    _closeDrawer() {
        this.drawerLayoutAndroid.closeDrawer();
    }

    _pushToScreen(screen) {
        this.drawerCloseHandle = InteractionManager.createInteractionHandle();
        this._closeDrawer();

        InteractionManager.runAfterInteractions(() => {
            this.props.pushToScreen(screen);
        });
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(drawerLayoutAndroid) => { this.drawerLayoutAndroid = drawerLayoutAndroid } }
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                onDrawerClose={() => InteractionManager.clearInteractionHandle(this.drawerCloseHandle)}
                renderNavigationView={() => (
                    <DrawerContent
                        user={this.props.user}
                        closeDrawer={this._closeDrawer}
                        pushToScreen={this._pushToScreen} />
                )}>

                <Icon.ToolbarAndroid
                    style={styles.toolbar}
                    title="Home"
                    titleColor="#fff"
                    navIconName="menu"
                    elevation={5}
                    onIconClicked={this._openDrawer}
                    />

                <CardFeed dataSource={this.state.dataSource} user={this.props.user} />

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

export default Home;