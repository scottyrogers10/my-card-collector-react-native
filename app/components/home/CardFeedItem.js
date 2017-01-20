import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const CardFeedItem = ({data, user}) => {
    let cardWidth = Dimensions.get("window").width;
    let cardHeight = cardWidth * (data.frontCardImageSrcHeight / data.frontCardImageSrcWidth);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={user.profileImage} />
                <Text style={styles.profileName}>{user.username}</Text>
            </View>
            <Image
                style={{ height: cardHeight, width: cardWidth }}
                source={data.frontCardImageSrc} />
            <View style={styles.cardInfoContainer}>
                <Text style={styles.cardSetInfo}>{data.year} {data.set} {data.subset}</Text>
                <Text style={styles.playerName}>{data.playerName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: 16,
    },
    header: {
        height: 80,
        paddingLeft: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    profileImage: {
        height: 44,
        width: 44
    },
    profileName: {
        fontSize: 15,
        fontWeight: "500",
        color: "#424242",
        paddingLeft: 14
    },
    cardInfoContainer: {
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16
    },
    cardSetInfo: {
        color: "#1e88e5",
        fontWeight: "500",
        fontSize: 17
    },
    playerName: {
        color: "#757575",
        fontWeight: "500",
        fontSize: 13
    }
});

export default CardFeedItem;