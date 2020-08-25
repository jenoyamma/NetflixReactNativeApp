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

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from "../graphql/queries";

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mymovies: [],
            action_movies: [],
            animation_movies: [],
            comedy_movies: [],

        };
    };

    getValue = async () => {  
        try {
            const rs = await API.graphql(graphqlOperation(queries.listRecmovies, {filter: { user: {eq: 'jeno' } }} )); 
            this.setState({mymovies: rs.data.listRecmovies.items})

            const action = await API.graphql(graphqlOperation(queries.listRecmovies, {filter: { type: {eq: 'action' } }} )); 
            this.setState({action_movies: action.data.listRecmovies.items})

            const animation = await API.graphql(graphqlOperation(queries.listRecmovies, {filter: { type: {eq: 'animation' } }} )); 
            this.setState({animation_movies: animation.data.listRecmovies.items})

            const comedy = await API.graphql(graphqlOperation(queries.listRecmovies, {filter: { type: {eq: 'comedy' } }} )); 
            this.setState({comedy_movies: comedy.data.listRecmovies.items})            
        } catch (err) {
            console.error(err);
        }
    }      
    
    componentDidMount() {
        this.getValue()         
    }   

    movie_list(name, movie_list) {
        const { navigation } = this.props;
        return(
            <View style={{padding: 10, flex: 1}}>
                <Text style={styles.ntext}>{name}</Text>
                <FlatList
                    style={{flex: 1}}
                    data={movie_list}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableOpacity style={{flex:1}} onPress={() => {navigation.navigate('MovieDetail', {item})}}>
                                    <Image style={{ height: 150, width: 100, margin: 20 }} source={{uri: item.movieUri}}/>
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
                <Image style={{height: 20, width: 100}} source={servianflixlogo.uri} />
                <Text style={styles.ntext}>TV Shows</Text>
                <Text style={styles.ntext}>Movies</Text>
                <Text style={styles.ntext}>MyList</Text>
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
                    {this.movie_list("You may also like", this.state.mymovies)}
                    {this.movie_list("Action", this.state.action_movies)}
                    {this.movie_list("Comedies", this.state.comedy_movies)}
                    {this.movie_list("Animation", this.state.animation_movies)}
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