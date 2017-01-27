import React, { Component, } from "react";
import { View, StyleSheet, } from "react-native";
import { connect, } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { popScreen, } from "../actions";

class MyAlbums extends Component {
    constructor(props) {
        super(props);

        this._backArrowPressed = this._backArrowPressed.bind(this);
    }

    _backArrowPressed() {
        this.props.popScreen();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Icon.ToolbarAndroid
                    style={styles.toolbar}
                    title="My Albums"
                    titleColor="#424242"
                    navIconName="arrow-back"
                    elevation={5}
                    onIconClicked={this._backArrowPressed}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: "#fff",
        height: 56
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    popScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAlbums);