import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import Appheader from '../appheader';

export default class WriteStoryscreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions: null,
            scanned: false,
            scannedBookID: '',
            scannedStudentID:'',
            buttonState: 'normal'
        }
    }

    /*cameraPermissions=async(ID)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions: status==='granted',
            buttonState:ID,
            scanned: 'false'
        })
    }

    handleBarcodeScanned=async({type, data})=>{
        const {buttonState}=this.state
        if(buttonState==='BookID'){
            this.setState({
                scanned: true,
                scannedBookID: data,
                buttonState:'normal'
            })
        }
        else if(buttonState==='StudentID'){
            this.setState({
                scanned: true,
                scannedStudentID: data,
                buttonState:'normal'
            })
        }
    }*/

  render(){  
      return(
          <View style={styles.container}>
              <Appheader/>
              <View style={styles.inputView}>
                 <TextInput
                 style={styles.inputBox}
                 placeholder='Story Title'
                 /> 
              </View>
              <View style={styles.inputView}>
                 <TextInput
                 style={styles.inputBox}
                 placeholder='Author'
                 />
              </View>
              <View style={styles.inputView}>
                 <TextInput
                 style={styles.inputBox}
                 placeholder='Write your story'
                 />
              </View>
          </View>
      )
  
}
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor: 'blue',
        width: 50,
        borderWidth: 1.5
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        color: 'white'
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20
    }
})