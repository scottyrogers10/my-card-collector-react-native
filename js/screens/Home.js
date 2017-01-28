import React, { Component, } from "react";
import { View, ListView, DrawerLayoutAndroid, ToolbarAndroid, StyleSheet, InteractionManager, } from "react-native";
import { connect, } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import ActionButton from "react-native-action-button";
import { pushScreen, getCardFeedBatch } from "../actions";
import DrawerContent from "../components/home/DrawerContent";
import CardFeed from "../components/home/CardFeed";
import FloatingActionButton from "../components/core/FloatingActionButton";

class Home extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds
        };

        this._openDrawer = this._openDrawer.bind(this);
        this._closeDrawer = this._closeDrawer.bind(this);
        this._pushToScreen = this._pushToScreen.bind(this);

        this.drawerHandle = null;
    }

    componentWillMount() {
        this.props.getCardFeedBatch();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.cards !== nextProps.cards) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.cards)
            });
        }
    }

    _openDrawer() {
        this.drawerHandle = InteractionManager.createInteractionHandle();
        this.drawerLayoutAndroid.openDrawer();
    }

    _closeDrawer() {
        this.drawerLayoutAndroid.closeDrawer();
    }

    _pushToScreen(screen) {
        this._closeDrawer();

        InteractionManager.runAfterInteractions(() => {
            this.props.pushScreen(screen);
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <DrawerLayoutAndroid
                    ref={(drawerLayoutAndroid) => { this.drawerLayoutAndroid = drawerLayoutAndroid } }
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    onDrawerClose={() => InteractionManager.clearInteractionHandle(this.drawerHandle)}
                    renderNavigationView={() => (
                        <DrawerContent
                            user={this.props.user}
                            closeDrawer={this._closeDrawer}
                            pushToScreen={this._pushToScreen} />
                    )}>

                    <Icon.ToolbarAndroid
                        style={styles.toolbar}
                        title="My Feed"
                        titleColor="#fff"
                        navIconName="menu"
                        elevation={5}
                        onIconClicked={this._openDrawer}
                        />

                    <CardFeed dataSource={this.state.dataSource} />

                    <FloatingActionButton bgColor="#d23f31" iconName="add" onPress={() => this.props.pushScreen({ key: "add-card" })} />

                </DrawerLayoutAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: "#1e88e5",
        height: 56
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cards: state.cards
    };
};

const mapDispatchToProps = {
    pushScreen,
    getCardFeedBatch
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);