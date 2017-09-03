/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavigationBar from '../common/NavigationBar'
import CustomerList from '../page/customer/CustomerList'
import ContactList from '../page/contacts/ContactList'
import TabNavigator from 'react-native-tab-navigator';

export default class HivescmCRM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            title: "客户列表"
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    // title={'boy'}
                    title={this.state.title}
                />

                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="客户"
                        selectedTitleStyle={styles.tabLabel}
                        renderIcon={() => <Image style={styles.tabIcon}
                                                 source={require('../../res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.tabIcon, styles.tabIconSelected]}
                                                         source={require('../../res/images/ic_polular.png')}/>}
                        onPress={() => this.setState({selectedTab: 'home', title: '客户列表'})}>
                        <CustomerList/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="联系人"
                        selectedTitleStyle={styles.tabLabel}
                        renderIcon={() => <Image style={styles.tabIcon}
                                                 source={require('../../res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.tabIcon, styles.tabIconSelected]}
                                                         source={require('../../res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'profile', title: '联系人'})}>
                        <ContactList/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'favorite'}
                        title="收藏"
                        selectedTitleStyle={styles.tabLabel}
                        renderIcon={() => <Image style={styles.tabIcon}
                                                 source={require('../../res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.tabIcon, styles.tabIconSelected]}
                                                         source={require('../../res/images/ic_favorite.png')}/>}
                        onPress={() => this.setState({selectedTab: 'favorite', title: '收藏'})}>
                        <Text style={styles.welcome}>
                            Welcome to 收藏!
                        </Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'my'}
                        title="我的"
                        selectedTitleStyle={styles.tabLabel}
                        renderIcon={() => <Image style={styles.tabIcon}
                                                 source={require('../../res/images/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.tabIcon, styles.tabIconSelected]}
                                                         source={require('../../res/images/ic_my.png')}/>}
                        onPress={() => this.setState({selectedTab: 'my', title: '我的'})}>
                        <Profile/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    我的
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
    tabIcon: {
        height: 22,
        width: 22,
    },
    tabLabel: {
        color: '#2196F3',
        fontSize: 11,
    },
    tabIconSelected: {
        tintColor: '#2196F3'
    },
});
