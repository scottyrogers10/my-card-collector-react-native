import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { popScreen } from "../actions";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.backButtonPress = this.backButtonPress.bind(this);
    }

    backButtonPress() {
        this.props.popScreen();
    }

    render() {
        return (
            <View>
                <Icon.ToolbarAndroid
                    style={styles.toolbar}
                    title="Settings"
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        navigator: state.navigator
    };
};

const mapDispatchToProps = {
    popScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);