import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './assets/styles/AppStyle'
import Header from './components/Header'
import Info from './data/headerInfo'
import Card from './components/Card'
import deserts from './data/deserts';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header 
      title={Info.title}
      subtitle={Info.subtitle}
      createBy={Info.createBy}
      />
      <View style={styles.content}>
        {deserts.map((d) => (
          <Card 
          key={d.id}
          id={d.id}
          name={d.name}
          price={d.price}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default App