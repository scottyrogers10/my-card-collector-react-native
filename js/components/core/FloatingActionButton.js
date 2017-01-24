import React, { Component, } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class FloatingActionButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={[styles.container, {backgroundColor: this.props.bgColor}]} elevation={5}>
                    <Icon name={this.props.iconName} color="#fff" size={25} style={styles.icon} />
                </View>
            </TouchableWithoutFeedback>
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


