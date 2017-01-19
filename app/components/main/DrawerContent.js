import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const DrawerContent = ({ currentRoute, onCloseDrawerPress, onRouteChange, user }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={user.profileImage} />
                <Text style={styles.username}>{user.username}</Text>
                <TouchableOpacity style={styles.backButton} onPress={onCloseDrawerPress}>
                    <Icon
                        name="keyboard-arrow-left"
                        size={28}
                        color="#757575" />
                </TouchableOpacity >
            </View>

            <View style={styles.routesContainer}>
                <TouchableNativeFeedback onPress={() => onRouteChange(0)}>
                    <View style={[styles.route, currentRoute.name === "Home" ? styles.activeRoute : {}]}>
                        <Icon
                            style={[styles.routeIcon, currentRoute.name === "Home" ? styles.activeRouteIcon : {}]}
                            name="home"
                            size={24}
                            color="#757575" />
                        <Text style={[styles.routeLabel, currentRoute.name === "Home" ? styles.activeRouteLabel : {}]}>Home</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => onRouteChange(1)}>
                    <View style={[styles.route, currentRoute.name === "My Albums" ? styles.activeRoute : {}]}>
                        <Icon
                            style={[styles.routeIcon, currentRoute.name === "My Albums" ? styles.activeRouteIcon : {}]}
                            name="layers"
                            size={24}
                            color="#757575" />
                        <Text style={[styles.routeLabel, currentRoute.name === "My Albums" ? styles.activeRouteLabel : {}]}>My Albums</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => onRouteChange(2)}>
                    <View style={[styles.route, currentRoute.name === "Profile" ? styles.activeRoute : {}]}>
                        <Icon
                            style={[styles.routeIcon, currentRoute.name === "Profile" ? styles.activeRouteIcon : {}]}
                            name="person"
                            size={24}
                            color="#757575" />
                        <Text style={[styles.routeLabel, currentRoute.name === "Profile" ? styles.activeRouteLabel : {}]}>Profile</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => onRouteChange("3")}>
                    <View style={[styles.route, currentRoute.name === "Settings" ? styles.activeRoute : {}]}>
                        <Icon
                            style={[styles.routeIcon, currentRoute.name === "Settings" ? styles.activeRouteIcon : {}]}
                            name="settings"
                            size={24}
                            color="#757575" />
                        <Text style={[styles.routeLabel, currentRoute.name === "Settings" ? styles.activeRouteLabel : {}]}>Settings</Text>
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
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    username: {
        fontSize: 13,
        color: "#757575",
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
        width: 40
    },
    routeLabel: {
        paddingLeft: 8,
        fontSize: 13,
        fontWeight: "bold"
    },
    footer: {
        fontSize: 9,
        color: "#adadad",
        flexDirection: "row",
        alignSelf: "center",
        paddingBottom: 12,
        fontWeight: "bold"
    },
    activeRoute: {
        backgroundColor: "#f2f2f2"
    },
    activeRouteIcon: {
        color: "#1e88e5"
    },
    activeRouteLabel: {
        color: "#1e88e5"
    }
});

export default DrawerContent;