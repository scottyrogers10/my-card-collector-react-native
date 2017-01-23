import React, { Component, } from "react";
import { View, StyleSheet, TouchableNativeFeedback, } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class FloatingActionButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={styles.container} elevation={5}>
                    <Icon name="add" color="#fff" size={25} style={styles.icon} />
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 16,
        right: 16,
        backgroundColor: "#d23f31",
        height: 56,
        width: 56,
        borderRadius: 50,
        justifyContent: "center"
    },
    icon: {
        alignSelf: "center"
    }
});

export default FloatingActionButton;