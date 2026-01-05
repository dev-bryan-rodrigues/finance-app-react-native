import { Input } from '@/components/Input'
import { Product } from '@/components/Product'
import { ProductDatabase, useProductDatabase } from '@/database/useProductDatabase'
import { useEffect, useState } from 'react'
import { Alert, Button, FlatList, StyleSheet, View } from 'react-native'


export default function Index(){

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [search, setSearch] = useState("")
  const [quantity, setQuantity] = useState("")
  const [products, setProducts] = useState<ProductDatabase[]>([])

  const productDatabase = useProductDatabase()

  async function create() {
    try {
      const response = await productDatabase.create({name, quantity: Number(quantity)})   
      Alert.alert("Produto cadastrado com o ID:" + response.insertedRowId)
    } catch (error) {
      return Alert.alert(`${error}`)
    }
  }

  async function update() {
    try {
      await productDatabase.update({id: Number(id), name, quantity: Number(quantity)})
      Alert.alert("Produto atualizado")
    } catch (error) {
      return Alert.alert(`${error}`)
    }
  }

  async function list () {
    try { 
      const response = await productDatabase.searchByName(search);

      setProducts(response);
    } catch (error) {
      return Alert.alert(`${error}`)
    }
  }

  function details (item: ProductDatabase) { 
    setName(item.name)
    setQuantity(String(item.quantity))
    setId(String(item.id))
  }

  async function handleSave() {
    if(id) {
      update()
    } else {
      create()
    }

    setId("")
    setName("")
    setQuantity("")
    await list()
  }

  async function remove(id: number) {
    try {
      await productDatabase.remove(id)

      await list()
      Alert.alert(`Produto com ID: ${id} removido`)
    } catch (error) {
      Alert.alert(`${error}`)
    }
  }

  useEffect (() => {
    list()
  }, [search])

  return (
    <View style={styles.container}>
      <Input placeholder='Nome' onChangeText={setName} value={name}/>
      <Input placeholder='Quantidade' onChangeText={setQuantity} value={quantity}/>
      
      <Button title='Salvar' onPress={handleSave}/>

      <Input placeholder='Pesquisar' onChangeText={setSearch} value={search}/>

      <FlatList 
        data={products} 
        keyExtractor={(item) => String(item.id) }
        renderItem={({item}) => <Product data={item} onPress={() => details(item) } onDelete={() => remove(item.id)}/>}  
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    gap: 16
  }
})
