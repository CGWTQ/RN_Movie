/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//tab 组件
import TabNavigator from 'react-native-tab-navigator';

//导入图标
import Icon from 'react-native-vector-icons/FontAwesome';



//自定义组件
import Home from './component/tabbars/Home.js'
import Me from './component/tabbars/Me.js'
import Search from './component/tabbars/Search.js'
import Shop from './component/tabbars/Shop.js'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedTab:'home'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* tab栏区域 */}
        <TabNavigator>

          {/* Home */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'} //判断 tab 栏是否选中
            title="Home"
            renderIcon={() => <Icon name="home" size={25} color="gray" />} //未选中时显示的图标
            renderSelectedIcon={() => <Icon name="home" size={25} color="skyblue" />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })} //点击修改 selectedTab值
            >
            <Home></Home>
          </TabNavigator.Item>

          {/* 搜索 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'} //判断 tab 栏是否选中
            title="search"
            renderIcon={() => <Icon name="search" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="search" size={25} color="skyblue" />}

            onPress={() => this.setState({ selectedTab: 'search' })} //点击修改 selectedTab值
            >
            <Search></Search>
          </TabNavigator.Item>

          {/* 购物车 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'shop'} //判断 tab 栏是否选中
            title="shop"
            renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="skyblue" />}
            badgeText="0"
            onPress={() => this.setState({ selectedTab: 'shop' })} //点击修改 selectedTab值
            >
            <Shop></Shop>
          </TabNavigator.Item>

          {/* Me */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'me'}
            title="Me"
            renderIcon={() => <Icon name="user-circle" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="user-circle" size={25} color="skyblue" />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'me' })}
            >
            <Me></Me>
          </TabNavigator.Item>

        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
