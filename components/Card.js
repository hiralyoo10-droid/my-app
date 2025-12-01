import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/styles/CardStyle'

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.id}># {props.id}</Text>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>{props.price} บาท</Text>
    </View>
  )
}

export default Card