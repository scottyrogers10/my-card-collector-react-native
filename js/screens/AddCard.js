import React, { Component, } from "react";
import { View, ScrollView, StyleSheet, TextInput, Image, Text, Picker } from "react-native";
import { connect, } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import TextField from "react-native-md-textinput";
import { popScreen, pushScreen } from "../actions";
import FloatingActionButton from "../components/core/FloatingActionButton";

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: "",
            sport: "Basketball",
            year: "2016-17",
            set: "",
            subset: "",
            number: "",
            team: ""
        }

        this._backArrowPressed = this._backArrowPressed.bind(this);
    }

    _backArrowPressed() {
        this.props.popScreen();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Icon.ToolbarAndroid
                    style={styles.toolbar}
                    title="Add Card"
                    titleColor="#424242"
                    navIconName="arrow-back"
                    elevation={5}
                    onIconClicked={this._backArrowPressed}
                    />

                <ScrollView>
                    <View style={styles.formContainer}>
                        <View style={styles.topContainer}>
                            <View style={{ flex: 1, paddingRight: 20 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    underlineColorAndroid="#1e88e5"
                                    onChangeText={(playerName) => this.setState({ playerName })}
                                    value={this.state.playerName}
                                    />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Number"
                                    underlineColorAndroid="#1e88e5"
                                    onChangeText={(number) => this.setState({ number })}
                                    value={this.state.number}
                                    />
                            </View>
                            <View style={styles.imageContainer}>
                                <Image style={{ height: 100, width: 100, alignSelf: "center" }} source={{ uri: this.props.cardImagePath }} resizeMode="center" />
                            </View>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Team"
                            underlineColorAndroid="#1e88e5"
                            onChangeText={(team) => this.setState({ team })}
                            value={this.state.team}
                            />
                        <TextInput
                            style={styles.input}
                            placeholder="Set"
                            underlineColorAndroid="#1e88e5"
                            onChangeText={(set) => this.setState({ set })}
                            value={this.state.set}
                            />
                        <TextInput
                            style={styles.input}
                            placeholder="Subset"
                            underlineColorAndroid="#1e88e5"
                            onChangeText={(subset) => this.setState({ subset })}
                            value={this.state.subset}
                            />
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <Picker
                                style={[styles.input, { flex: 1 }]}
                                selectedValue={this.state.sport}
                                onValueChange={(sport) => this.setState({ sport })}>
                                <Picker.Item label="Basketball" value="Basketball" />
                                <Picker.Item label="Football" value="Football" />
                            </Picker>

                            <Picker
                                style={[styles.input, { flex: 1, marginLeft: 20 }]}
                                selectedValue={this.state.year}
                                onValueChange={(year) => this.setState({ year })}>
                                <Picker.Item label="2016-17" value="2016-17" />
                                <Picker.Item label="2015-16" value="2015-16" />
                            </Picker>
                        </View>
                    </View>
                </ScrollView>

                <FloatingActionButton bgColor="#1e88e5" iconName="photo-camera" onPress={() => this.props.pushScreen({ key: "camera" })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: "#fff",
        height: 56
    },
    formContainer: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    imageContainer: {
        height: 100,
        width: 100,
        marginTop: 19,
        backgroundColor: "#e9e9e9",
        borderColor: "#9e9e9e",
        borderWidth: 1
    },
    input: {
        height: 60
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cardImagePath: state.cardImagePath
    };
};

const mapDispatchToProps = {
    popScreen,
    pushScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);