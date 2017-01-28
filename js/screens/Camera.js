import React, { Component } from "react";
import { Dimensions, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { connect, } from "react-redux";
import NativeCamera from "react-native-camera";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getCardImagePath, popScreen } from "../actions";

class Camera extends Component {
    constructor(props) {
        super(props)
        this._takePicture = this._takePicture.bind(this);
    }

    _takePicture() {
        this.camera.capture().then((data) => {
            this.props.getCardImagePath(data.path);
            this.props.popScreen()
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <NativeCamera
                    ref={(cameraElement) => this.camera = cameraElement}
                    style={styles.preview}
                    aspect={NativeCamera.constants.Aspect.fill}
                    captureTarget={NativeCamera.constants.CaptureTarget.disk}
                    defaultOnFocusComponent={true}>
                    <TouchableWithoutFeedback style={styles.captureBtn} onPress={this._takePicture}>
                        <View style={styles.captureBtn} elevation={5}>
                            <Icon name="photo-camera" color="#646464" size={27} style={styles.icon} />
                        </View>
                    </TouchableWithoutFeedback>
                </NativeCamera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    captureBtn: {
        flex: 0,
        marginBottom: 16,
        backgroundColor: "#f2f2f2",
        height: 56,
        width: 56,
        borderRadius: 50,
        justifyContent: "center"
    },
    icon: {
        alignSelf: "center"
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    popScreen,
    getCardImagePath
};

export default connect(mapStateToProps, mapDispatchToProps)(Camera);