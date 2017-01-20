import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class MyAlbums extends Component {
    constructor(props) {
        super(props);
        this.backButtonPress = this.backButtonPress.bind(this);
    }

    backButtonPress() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View>
                <Icon.ToolbarAndroid
                    style={styles.toolbar}
                    title="My Albums"
                    titleColor="#424242"
                    navIconName="arrow-back"
                    elevation={5}
                    onIconClicked={this.backButtonPress}
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

export default MyAlbums;