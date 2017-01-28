import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { ipAddress } from "../../EnvironmentVariables";

const CardFeedItem = ({data}) => {
    let cardWidth = Dimensions.get("window").width;
    let cardHeight = cardWidth * (data.cardInfo.imageHeight / data.cardInfo.imageWidth);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: `${ipAddress}/api/users/profileImages?id=${data.userInfo.profileImageId}` }} />
                <Text style={styles.profileName}>{data.userInfo.username}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={{ height: cardHeight, width: cardWidth }}
                    source={{ uri: `${ipAddress}/api/cards/images?id=${data.cardInfo.imageId}` }} />
            </View>
            <View style={styles.cardInfoContainer}>
                <Text style={styles.cardSetInfo}>{data.cardInfo.cardSet} {data.cardInfo.cardSubset} {data.cardInfo.year}</Text>
                <Text style={styles.playerName}>{data.cardInfo.playerName}</Text>
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
    imageContainer: {
        backgroundColor: "#e9e9e9"
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
        color: "#767d8e",
        fontWeight: "500",
        fontSize: 13
    }
});

export default CardFeedItem;