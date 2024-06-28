import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const index = () => {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('Search')
    }

  return (
    <View>
        {/* Input Box */}
        <Pressable style={styles.inputBox} onPress={goToSearch}>
            <Text style={styles.inputText}>Where To?</Text>
            <View style={styles.timeContainer}>
                <AntDesign name={"clockcircle"} size={16} />
                <Text>Now</Text>
                <MaterialIcons name={"keyboard-arrow-down"} size={16} />
            </View>
        </Pressable>

        {/* Previous Destination */}
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <AntDesign name="clockcircle" size={20} color={"#ffffff"} />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>

        {/* Home Destination */}
        <View style={styles.row}>
            <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
                <Entypo name="home" size={20} color={"#ffffff"} />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>
    </View>
  )
}

export default index