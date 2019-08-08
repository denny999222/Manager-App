// Takes in props of {name, imageURL, containerStyle, contentStyle}
// "name" : which is the text it will show
// "imageURL" : (could be logo, etc) which has a fixed size to fit into header
// "containerStyle" : pertains to the view surrounding the content (whether text or image) 
//                    and can override existing styling
// "contentStyle" : pertains to the content inside the view (text or image)
//                  and can also override existing styling

import React,{Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class Header extends Component{

    renderHeader = () => {
        const {imageURL, name, contentStyle} = this.props;

        if (typeof imageURL !== 'undefined'){
            return <Image style={[styles.imageStyle, contentStyle]} source={{uri: imageURL}} />
        }
        else if (name !== 'undefined'){
            return <Text  style={[styles.textStyle, contentStyle]}> {name} </Text>
        }
    }

    render(){
        const {containerStyle} = this.props;
        return(
            <View style={[styles.container, containerStyle]} >
                {this.renderHeader()}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:.2,
        height:'8%',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset: {width:0, height:2} ,
        shadowOpacity:.8,
    },
    imageStyle :{
        width:'30%', 
        aspectRatio:4.3, 
        marginTop:'8%'
    },
    textStyle:{
        fontSize: 25, 
        fontWeight:'bold', 
        paddingTop:'8%'
    }
});

export {Header};