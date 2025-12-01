import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/styles/HeaderStyle'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      <Text style={styles.createBy}>{props.createBy}</Text>
    </View>
  )
}

export default Header