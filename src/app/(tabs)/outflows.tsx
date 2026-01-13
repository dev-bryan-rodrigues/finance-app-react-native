import { StyleSheet, Text, View } from 'react-native'

export default function Outflows(){
  return (
    <View style={styles.container}>
      <View style={styles.wrapperCards}>
        <Text>Tela de saídas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    gap: 16,
  },
  wrapperCards: {
    paddingTop: 100,
    flexDirection: 'column',
    gap: 18
  }
})
