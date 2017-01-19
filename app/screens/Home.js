import React, { Component } from "react";
import { View, Text, ListView } from "react-native";
import CardFeed from "../components/home/CardFeed";
import { cards } from "../MockApi";

class Home extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(cards)
        };
    }

    render() {
        return (
            <CardFeed dataSource={this.state.dataSource} user={this.props.user} />
        );
    }
}

export default Home;