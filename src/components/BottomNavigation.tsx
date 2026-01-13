import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/Colors";
import NavItem from "./NavItem";

const BottomNavigation = ({ current }: { current: string }) => {
  const router = useRouter();

  const goTo = (route: string) => {
    if (current !== route) {
      router.push(`/${route}`);
    }
  };

  const navItems = [
    { route: "dashboard", icon: "home", label: "Início", match: "home" },
    { route: "orders", icon: "list", label: "Pedidos" },
    { route: "finance/statement", icon: "wallet", label: "Carteira", match: "wallet"  },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => {
        const isActive = current === (item.match || item.route);
        return (
          <NavItem
            key={item.route}
            item={item}
            isActive={current === (item.match || item.route)}
            onPress={() => goTo(item.route)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    backgroundColor: colors.neutralLightGrey1,
    paddingTop: 12,
    paddingBottom: 45,
    borderTopWidth: 1,
    borderTopColor: colors.neutralLightGrey2,
  },
});

export default BottomNavigation;
