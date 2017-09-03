import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class BaseComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    联系人列表sssssssss
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});