import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Section = () => {

    const [data, setData] = useState([]);
    const getData =  async() => {
        // const response = await axios.get(`https://reactnative.dev/movies.json`);
        // console.log(response.data);
        // const movies = response.data.movies
        const movies = [
            {
                "id": "1",
                "title": "Star Wars",
                "releaseYear": "1977"
            },
            {
                "id": "2",
                "title": "Back to the Future",
                "releaseYear": "1977"
            },
            {
                "id": "3",
                "title": "The Matrix",
                "releaseYear": "1999"
            },
            {
                "id": "4",
                "title": "Inception",
                "releaseYear": "2010"
            },
            {
                "id": "5",
                "title": "Interstellar",
                "releaseYear": "2010"
            }
        ]
        // console.log(movies)
        const newdata = []
        let flag = 0;
        for (let index = 0; index < movies.length; index++) {
            const element = movies[index];
            for (let j = 0; j < newdata.length; j++){
                if (newdata[j].title === element.releaseYear){
                    newdata[j].data.push(element.title)
                    flag = 1;
                }
            }
            if (flag == 0){
                newdata.push({"title": element.releaseYear, "data": [element.title]})
            }
            flag = 0;
            
        }
        setData(newdata);
        console.log(newdata);

    };
    useEffect(() => {
        getData();
    }, []);
    // const data =
    //     [
    //         { title: 'Starting', data: ['ALTERED', 'ABBY', 'ACTION U.S.A.', 'AMUCK', 'ANGUISH'] },
    //         { title: 'B', data: ['BEST MEN', 'BEYOND JUSTICE', 'BLACK GUNN', 'BLOOD RANCH', 'BEASTIES'] },
    //         { title: 'C', data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',] },
    //     ]

    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5ead97"
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor: '#8fb1aa',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

export default Section;