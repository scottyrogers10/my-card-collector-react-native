import React, { Component, } from "react";
import { View, StyleSheet, TouchableNativeFeedback, } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class FloatingActionButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.bgColor }]} elevation={6}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackgroundBorderless()} onPress={this.props.onPress}>
                    <View style={styles.iconContainer}>
                        <Icon name={this.props.iconName} color="#f5f5f5" size={25} style={styles.icon} />
                    </View>
                </TouchableNativeFeedback>
            </View>
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
    },
    iconContainer: {
        height: 56,
        width: 56,
        justifyContent: "center"
    },
    icon: {
        alignSelf: "center"
    }
});

export default FloatingActionButton;