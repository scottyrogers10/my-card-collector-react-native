import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const DrawerContent = ({ user, closeDrawer, pushToScreen }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={user.profileImage} />
                <Text style={styles.username}>{user.username}</Text>
                <TouchableOpacity style={styles.backButton} onPress={closeDrawer}>
                    <Icon
                        name="keyboard-arrow-left"
                        size={28}
                        color="#424242" />
                </TouchableOpacity >
            </View>

            <TouchableNativeFeedback onPress={() => pushToScreen({key: "profile"})}>
                    <View style={styles.route}>
                        <Icon
                            style={styles.routeIcon}
                            name="person"
                            size={24} />
                        <Text style={styles.routeLabel}>Profile</Text>
                    </View>
                </TouchableNativeFeedback>

            <View style={styles.routesContainer}>
                <TouchableNativeFeedback onPress={() => pushToScreen({key: "my-albums"})}>
                    <View style={styles.route}>
                        <Icon
                            style={styles.routeIcon}
                            name="layers"
                            size={24} />
                        <Text style={styles.routeLabel}>My Albums</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => pushToScreen({key: "settings"})}>
                    <View style={styles.route}>
                        <Icon
                            style={styles.routeIcon}
                            name="settings"
                            size={24} />
                        <Text style={styles.routeLabel}>Settings</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <Text style={styles.footer}>Created By Scotty Rogers</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: 56,
        borderBottomColor: "#ddd",
        borderStyle: "solid",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 12,
        marginBottom: 12
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    username: {
        fontSize: 13,
        color: "#424242",
        paddingLeft: 16,
        flex: 1,
        fontWeight: "bold"
    },
    backButton: {
        width: 62,
        height: 56,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    routesContainer: {
        flex: 1
    },
    route: {
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    routeIcon: {
        width: 40,
        color: "#767d8e"
    },
    routeLabel: {
        paddingLeft: 8,
        fontSize: 13,
        fontWeight: "bold",
        color: "#424242"
    },
    footer: {
        fontSize: 9,
        color: "#adadad",
        flexDirection: "row",
        alignSelf: "center",
        paddingBottom: 12,
        fontWeight: "bold"
    }
});

export default DrawerContent;