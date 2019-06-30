import React from 'react'

import {View, Button, Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class Me extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        imgURL: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%9B%BE%E7%89%87%20%E7%BE%8E%E5%A5%B3&step_word=&hs=0&pn=0&spn=0&di=149930&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=24401&cl=2&lm=-1&st=-1&cs=3408119357%2C2467563644&os=696172477%2C4001858692&simid=0%2C0&adpicid=0&lpn=0&ln=1998&fr=ala&fmq=1402900904181_R&fm=&ic=0&s=&se=1&sme=&tab=&width=&height=&face=0&ist=&jit=&cg=girl&bdtype=0&oriquery=&objurl=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc999a12ebdc52d6be8592404254f36e4a76266241e90d-cNSF1k_fw658&fromurl=ippr_z2C%24qAzdH3FAzdH3Fi7wkwg_z%26e3Bv54AzdH3FrtgfAzdH3F0n0mb9ad0AzdH3F&gsm=0&islist=&querylist='
      }
    }

    render() {
        return (
          <View style={{ alignItems:'center' ,paddingTop:100}}>
            <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200,borderRadius:100 ,margin:10}}></Image>
            <Button title="拍照" onPress={this.cameraAction}></Button>
          </View>
        );
    }

      cameraAction = () => {
        ImagePicker.showImagePicker(photoOptions, (response) => {
          console.log('response' + response);
          if (response.didCancel) {
            return
          }
          this.setState({
            imgURL: response.uri
          });
        })
      }
}