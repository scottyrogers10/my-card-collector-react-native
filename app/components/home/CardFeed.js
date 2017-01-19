import React from "react";
import { View, Text, StyleSheet, ListView, RecyclerViewBackedScrollView } from "react-native";
import CardFeedItem from "./CardFeedItem";

const CardFeed = ({ dataSource, user }) => {
    const renderRow = (data) => {
        return (
            <CardFeedItem data={data} user={user} />
        );
    };

    return (
        <ListView
            style={styles.listView}
            dataSource={dataSource}
            renderRow={renderRow}
            renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            />
    );
};

const styles = StyleSheet.create({
    listView: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    }
});

export default CardFeed;