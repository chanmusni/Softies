import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Profile({navigation}) {
    return(
        <View style={styles.pageContainer}>
            <View style={styles.headerContainer}>
                <AntDesign name="left" size={24} color="black" />
                <Image style={{ width: 24, height: 24 }} 
                source={require('./assets/baseline-search-24px.svg')} />
            </View>
            <View stype={styles.topContainer}>
                <Text style={styles.headerText}>My Profile </Text>
            </View>

            <View stype={styles.profileContainer}>
                <Text>Matilda Brown</Text>
                <Text>matildabrown@mail.com</Text>
            </View>

            <View stype={styles.itemContainer}>
                <Text>My Scans</Text>
                <Text>Already have 12 scans</Text>
            </View>

            <View stype={styles.itemContainer}>
                <Text>Address</Text>
                <Text>Mindoro</Text>
            </View>

            <View stype={styles.itemContainer}>
                <Text>Contact Number</Text>
                <Text>09876543211</Text>
            </View>

            <View stype={styles.itemContainer}>
                <Text>Reviews</Text>
                <Text>Reviews for 4 items</Text>
                <AntDesign name="right" size={24} color="black" />
            </View>

            <View stype={styles.itemContainer}>
                <Text>Settings</Text>
                <Text>Notifications, password</Text>
            </View>

                <Button 
                    title = 'Home'
                    onPress={() => navigation.navigate('Home Page')}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        display: 'flex',
        width: '375px',
        height: '44px',
        padding: '8px 343px 12px 8px',
        alignItems: 'center',
        flexShrink: 0,
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
    },
    profileContainer: {
        flex: 1
    },
    itemContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    headerText:{
        flex:1,
        color: '#222222',
        fontFamily: 'Montserrat',
        fontSize: '34px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal'
    },
    itemText: {
        fontSize: 16,
        color:'#9B9B9B',
    },
    subitemText: {
        fontSize: 11,
        color:'#9B9B9B',
    }
    // appTitle: {
    //   fontSize: '42px',
    //   marginTop: '-4vh',
    //   fontFamily: 'Ultra-Regular',
    //   color: '#D49A42'
    // },
    // continueContainer: {
    //   flex:1,
    // },  
    // continueText: {
    //     fontFamily: 'mosterratt-medium',
    //     fontSize: '13px',
    //     color: '#222222',
    // },
    // touchable: {
    //     margin:0,
    //     flex:1,
    //     paddding:0
    //   },
}) 