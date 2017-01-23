import React, { Component, } from "react";
import { View, StyleSheet, } from "react-native";
import { connect, } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { popScreen, } from "../actions";

class AddCard extends Component {
    constructor(props) {
        super(props);

        this._backButtonPress = this._backButtonPress.bind(this);
    }

    _backButtonPress() {
        this.props.popScreen();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Icon.ToolbarAndroid
                    style={styles.toolbar}
                    title="Add Card"
                    titleColor="#424242"
                    navIconName="arrow-back"
                    elevation={5}
                    onIconClicked={this._backButtonPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);