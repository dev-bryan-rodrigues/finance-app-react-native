import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native";

type Props = PressableProps & {
  data: {
    name: string,
    quantity: number
  }

  onDelete: () => void
}

export function Product({data, onDelete, ...rest}: Props){
  return (
    <Pressable style={{flexDirection: 'row'}} {...rest}>
      <Text>
        {data.quantity} - {data.name}
      </Text>

      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name='delete' size={24} color='red'/>
      </TouchableOpacity>
    </Pressable>
  )
}