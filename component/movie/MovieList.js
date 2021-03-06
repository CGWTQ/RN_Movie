import React from 'react'
import {View, Text, Image, ActivityIndicator, FlatList, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'

const styles = StyleSheet.create({
    movieTitle: {
      fontWeight: 'bold'
    }
  })

export default class MovieList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            movies:[],
            nowPage:1,
            totalPage:0,
            pageSize:15,
            isloading:true
        }
    }

    componentWillMount(){
        this.grtMovies()
    }

    render() {
        return (
          <View >
            { this.renderList() }
          </View>
        );
      }

      grtMovies = () => {
        const start = (this.state.nowPage -1) * this.state.pageSize;
        const url = `https://douban-api.now.sh/v2/movie/in_theaters?start=${start}&count=${this.state.pageSize}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                isloading:false,
                movies:this.state.movies.concat(data.subjects),//this.state.movies.concat(data.subjects)
                totalPage:Math.ceil(data.total / this.state.pageSize)
            })
        })
      }

      renderList =() => {
        if(this.state.isloading){
            return <ActivityIndicator size='large'></ActivityIndicator>
        }
        return <FlatList
        data={this.state.movies}
        keyExtractor={(item, i) => i} // 解决 key 问题
        renderItem={({ item }) => this.renderItem(item)} // 调用方法，去渲染每一项
        ItemSeparatorComponent={this.renderSeparator} //渲染分割线的属性方法
        onEndReachedThreshold={0.5} // 距离底部还有多远的时候，触发加载更多的事件
        onEndReached={this.loadNextPage} // 当距离不足 0.5 的时候，触发这个方法，加载下一页数据
      />
      }

      renderItem = (item) => {
        return <TouchableHighlight underlayColor="#fff" onPress={() => { Actions.MovieDatil({ id: item.id }) }}>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image source={{ uri: item.images.small }} style={{ width: 100, height: 140, marginRight: 10 }}></Image>
            <View style={{ justifyContent: 'space-around' }}>
              <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
              <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
              <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
              <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
            </View>
          </View>
        </TouchableHighlight>
      }
      renderSeparator = () => {
          return <View style={{
              borderTopColor:'#ccc',
              borderTopWidth:1,
              borderStyle:"solid",
              marginLeft:10,
              marginRight:10
          }}></View>
      }

      loadNextPage =() => {
          if( (this.state.nowPage +1 ) > this.state.totalPage ){
                return
          }
          this.setState({
              nowPage:this.state.nowPage + 1
          },function(){
                this.grtMovies();
          }
          )
      }
}