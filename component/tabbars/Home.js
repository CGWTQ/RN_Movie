import React from 'react'
import { View, Text, StyleSheet,Image,TouchableHighlight } from 'react-native'
//导入轮播图组件
import Swiper from 'react-native-swiper'

//路由组件
import {Actions} from 'react-native-router-flux'

//轮播图样式
const styles = StyleSheet.create({
    stretch: {
        width: "100%",
        height: "100%"
    },
    Icon:{
        width:'33.33%',
        alignItems:'center',
        marginTop:15
    },
    Icon01:{
        
        height:60,
        width:60
    }
    
})

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <View >
                <View style={{ height:220 }}>
                    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                        <View>
                            <Image style={styles.stretch} source={require("../../images/lunbo01.jpg")}></Image>
                        </View>
                        <View >
                        <Image style={styles.stretch} source={require("../../images/lunbo02.jpg")}></Image>
                        </View>
                        <View >
                        <Image style={styles.stretch} source={require("../../images/lunbo03.jpg")}></Image>
                        </View>
                    </Swiper>
                </View>
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                }}>
                    <View style={styles.Icon}>
                        <Image style={styles.Icon01} source={require('../../images/menu1.png')}></Image>
                        <Text>新闻资讯</Text>
                    </View>
                    <View style={styles.Icon}>
                        <Image style={styles.Icon01} source={require('../../images/menu2.png')}></Image>
                        <Text>图片分享</Text>
                    </View>
                    <View style={styles.Icon}>
                        <Image style={styles.Icon01} source={require('../../images/menu3.png')}></Image>
                        <Text>商品购买</Text>
                    </View>
                    <View style={styles.Icon}>
                        <Image style={styles.Icon01} source={require('../../images/menu4.png')}></Image>
                        <Text>留言反馈</Text>
                    </View>
                    <TouchableHighlight style={styles.Icon} onPress={this.goMovieList} underlayColor='white'>
                        <View>
                            <Image style={styles.Icon01} source={require('../../images/menu5.png')}></Image>
                            <Text style={{textAlign:'center'}}>热映电影</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.Icon}>
                        <Image style={styles.Icon01} source={require('../../images/menu6.png')}></Image>
                        <Text>联系我们</Text>
                    </View>
                </View>
            </View>
        );
    }

    goMovieList = () => {
        // console.warn('ok')
        Actions.MovieList()
    }
}
