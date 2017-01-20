import React, { Component } from "react";
import { View, Text, ListView, DrawerLayoutAndroid, ToolbarAndroid, StyleSheet } from "react-native";
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

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.changeScreen = this.changeScreen.bind(this);
    }

    openDrawer() {
        this.drawerLayoutAndroid.openDrawer();
    }

    closeDrawer() {
        this.drawerLayoutAndroid.closeDrawer();
    }

    changeScreen(name) {
        this.closeDrawer();
        this.props.navigator.push({
            name
        });
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(drawerLayoutAndroid) => { this.drawerLayoutAndroid = drawerLayoutAndroid } }
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => (
                    <DrawerContent
                        user={this.props.user}
                        closeDrawer={this.closeDrawer}
                        changeScreen={this.changeScreen} />
                )}>

                <Icon.ToolbarAndroid
                    style={styles.toolbar}
                    title="Home"
                    titleColor="#fff"
                    navIconName="menu"
                    elevation={5}
                    onIconClicked={this.openDrawer}
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