import CardInfo from '@/components/CardInfo'
import { StyleSheet, View } from 'react-native'

export default function Home(){
  return (
    <View style={styles.container}>
      <View style={styles.wrapperCards}>
        <CardInfo
          title='Total'
          value={400}
        />
        <CardInfo
          title='Ganhos'
          value={400}
          valueColor='green'
        />
        <CardInfo
          title='Despesas'
          value={40230}
          valueColor='red'
        />
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
