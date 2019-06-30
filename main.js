import React from 'react'
import {View, Text, Image, ActivityIndicator} from 'react-native'

//路由组件
import {Router, Stack, Scene} from 'react-native-router-flux'

//APP组件
import App from './App.js'
import MovieList from './component/movie/MovieList.js'
import MovieDatil from './component/movie/movieDatil.js'

export default class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Router sceneStyle={{
                backgroundColor:'white'
            }}>
                <Stack key="root">
                    {/* 路由规则 */}
                    {/* 第一个 Scene 就是默认的页面 */}
                    {/* key 表示路由名称 */}
                    <Scene key="app" component={App} title="app" hideNavBar={true}/>
                    <Scene key="MovieList" component={MovieList} title="热映电影列表"/>
                    <Scene key="MovieDatil" component={MovieDatil} title="电影详情"/>
                </Stack>
            </Router>
        );
      }
}