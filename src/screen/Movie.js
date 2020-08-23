import React from 'react'
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet, FlatList, StatusBar, TouchableOpacity} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'

const bannerlogo = {
    id: 'forest_gump',
    uri: require('../../assets/forest_gump_faded.jpg')
}
const servianflixlogo = {
    id: 'servianflix',
    uri: require('../../assets/servianflix.png')
}
const action_movies = [
    { id: '2', uri: require('../../assets/posters/action/2.jpg') },
    { id: '15', uri: require('../../assets/posters/action/15.jpg') },
    { id: '145', uri: require('../../assets/posters/action/145.jpg') },
    { id: '208', uri: require('../../assets/posters/action/208.jpg') },
    { id: '95', uri: require('../../assets/posters/action/95.jpg') },
    { id: '112', uri: require('../../assets/posters/action/112.jpg') },    
]
const animation_movies = [
    { id: '1', uri: require('../../assets/posters/animation/1.jpg') },
    { id: '13', uri: require('../../assets/posters/animation/13.jpg') },
    { id: '34', uri: require('../../assets/posters/animation/34.jpg') },
    { id: '48', uri: require('../../assets/posters/animation/48.jpg') },
    { id: '239', uri: require('../../assets/posters/animation/239.jpg') },
    { id: '313', uri: require('../../assets/posters/animation/313.jpg') },    
]
const comedy_movies = [
    { id: '63', uri: require('../../assets/posters/comedy/63.jpg') },
    { id: '69', uri: require('../../assets/posters/comedy/69.jpg') },
    { id: '87', uri: require('../../assets/posters/comedy/87.jpg') },
    { id: '104', uri: require('../../assets/posters/comedy/104.jpg') },
    { id: '122', uri: require('../../assets/posters/comedy/122.jpg') },
    { id: '231', uri: require('../../assets/posters/comedy/231.jpg') },    
]

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        };
    };

    movie_list(name, movie_list) {
        const { navigation } = this.props;
        return(
            <View style={{padding: 10}}>
                <Text style={styles.ntext}>{name}</Text>
                <FlatList
                    style={{flex: 1}}
                    data={movie_list}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableOpacity style={{flex:1}} onPress={() => {navigation.navigate('MovieDetail')}}>
                                    <Image style={{ height: 150, width: 100, margin: 20 }} source={item.uri}/>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }
                />  
            </View>
        )
    }

    top_bar() {
        return (
            <View style={{flex: 1, flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
                <Image style={{height: 20, width: 100}} source = {servianflixlogo.uri}/>
                <Text style={styles.ntext}>TV Shows</Text>
                <Text style={styles.ntext}>Movies</Text>
                <Text style={styles.ntext}>MyList</Text>
            </View>
        )
    }
    
    banner_bottom_bar() {
        return (
            <View style={{flex: 1, position: 'absolute', flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
                <IonIcon name="md-people" color='grey' size={15}/>
                <IonIcon name="md-people" color='grey' size={15}/> 
                <IonIcon name="md-information-circle-outline" color='grey' size={15}/> 
            </View>
        )
    }    

    banner() {
        return (
            <Image style={{ height: 300, width: '100%'}} source={bannerlogo.uri}/>
        )
    }

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
                    {this.top_bar()}
                    {this.banner()}
                    {this.movie_list("You may also like", animation_movies)}
                    {this.movie_list("Action", action_movies)}
                    {this.movie_list("Comedies", comedy_movies)}
                    {this.movie_list("Animation", animation_movies)}
                </ScrollView> 
            </SafeAreaView>           
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
})