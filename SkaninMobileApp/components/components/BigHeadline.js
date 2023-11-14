import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
import { Feather } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

export default function BigHeadline ({Headline}) {
    const [fontsLoaded] = useFonts({
        'Monsteratt': require('../fonts/Montserrat/static/Montserrat-Regular.ttf'),
      });
    return (
        <View style={styles.topContainer}>
            <View style={styles.headerContainer}>
                <Feather name="chevron-left" size={24} color="black" />
            </View>
            <Text style={[styles.headerText,{fontStyle:'Monsteratt'}]}>{Headline}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    headerContainer: {
        // display: 'flex',
        // flex:0,
        flexDirection:'row',
        margin: 0,
        width: '100%',
        // height: '44px',
        // paddingTop: '8px',
        // paddingBottom: '4px',
        // paddingLeft: '4px',
        // paddingRight: '8px',
        // alignItems: 'flex-end',
        padding: 0,
        justifyContent: 'space-between',
    },
    topContainer: {
        margin: 0,
        padding:0,
    },
    headerText:{
        // flex:1,
        textAlign: 'left',
        color: '#222222',
        fontSize: '34px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        padding: 0,
        margin:0,
        // paddingTop: '0px',
        // paddingLeft: '8px',
        // paddingBottom: '16px',
    },
})