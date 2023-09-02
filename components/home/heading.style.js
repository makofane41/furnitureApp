import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "semiBold",
    fontSize: SIZES.xLarge,
    color: COLORS.red,
  },
});

export default styles;
