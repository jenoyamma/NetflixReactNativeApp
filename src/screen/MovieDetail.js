import React from 'react'
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const s_movie = { 
    id: '1', 
    uri: require('../../assets/posters/animation/1.jpg') 
}

const dummy_text= {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
        };
    };

    selected_movie_banner() {
        return (
            <View style={{flex: 12 }}>
                <ImageBackground style={{ flex:4 }} source = {s_movie.uri} blurRadius={10}>
                    <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{height: 150, width: 100}} source = {s_movie.uri}/>
                    </View>  
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        <Text style={[styles.ntext, {color: 'green'}]}>98% match</Text>
                        <Text style={styles.ntext}>2020</Text>
                        <Text style={styles.ntext}>1h 50m</Text>
                        <Text style={styles.ntext}>HD</Text>
                    </View>  
                </ImageBackground> 
                <View style={{flex: 9, padding: 10}}>
                    <TouchableOpacity style={{backgroundColor: 'red', alignItems: 'center', padding: 5}}>
                            <IonIcon name="md-play" color='white' size={15}> Play</IonIcon>
                    </TouchableOpacity>
                    <View style={{paddingTop: 10}}>
                        <Text style={styles.dtext}>{dummy_text.text}</Text>
                    </View>
                </View>                   
            </View>
        )
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: 'black'}}>
                {this.selected_movie_banner()}
            </View>           
        )
    }
}

const styles = StyleSheet.create({
    ntext: {
        fontWeight: 'bold', 
        fontSize: 15, 
        color: '#ffffff',
        fontFamily: 'Avenir'        
    },
    dtext: {
        fontSize: 10, 
        color: '#ffffff',
        fontFamily: 'Avenir'        
    },    
})