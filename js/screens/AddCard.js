import React, { Component, } from "react";
import { View, StyleSheet, TextInput, Image, Text } from "react-native";
import { connect, } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { popScreen, pushScreen } from "../actions";
import FloatingActionButton from "../components/core/FloatingActionButton";

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: "",
            year: "",
            set: "",
            subset: "",
            number: ""
        }

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

                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Gordon Hayward"
                        underlineColorAndroid="#1e88e5"
                        onChangeText={(playerName) => this.setState({ playerName })}
                        value={this.state.playerName}
                        />

                    <TextInput
                        style={styles.input}
                        placeholder="2016-17"
                        underlineColorAndroid="#1e88e5"
                        onChangeText={(year) => this.setState({ year })}
                        value={this.state.year}
                        />

                    <TextInput
                        style={styles.input}
                        placeholder="Panini Prizm"
                        underlineColorAndroid="#1e88e5"
                        onChangeText={(set) => this.setState({ set })}
                        value={this.state.set}
                        />

                    <TextInput
                        style={styles.input}
                        placeholder="BK HRX"
                        underlineColorAndroid="#1e88e5"
                        onChangeText={(subset) => this.setState({ subset })}
                        value={this.state.subset}
                        />

                    <TextInput
                        style={styles.input}
                        placeholder="2"
                        underlineColorAndroid="#1e88e5"
                        onChangeText={(number) => this.setState({ number })}
                        value={this.state.number}
                        />
                </View>
                
                <Text>File Location: {this.props.uploadedImage}</Text>

                <FloatingActionButton bgColor="#1e88e5" iconName="photo-camera" onPress={() => this.props.pushScreen({key: "camera"})} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: "#fff",
        height: 56
    },
    inputsContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25
    },
    input: {
        color: "#424242",
        fontSize: 17
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user,
        uploadedImage: state.uploadedImage
    };
};

const mapDispatchToProps = {
    popScreen,
    pushScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);