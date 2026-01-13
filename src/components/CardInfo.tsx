import { StyleSheet, Text, View } from "react-native";

type CardInfoProps = {
  title: string;
  value: number;
  valueColor?: string
};

export default function CardInfo({ title, value, valueColor}: CardInfoProps) {
  const valueFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, {
        color: valueColor
      }]}>
        {valueFormatted}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins_Bold",

  },
  value: {
    fontFamily: "Saira_Medium",
    fontSize: 32,
    textAlign: "right"
  },
});
