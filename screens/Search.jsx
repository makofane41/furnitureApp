import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              value=""
              onPressIn={() => {}}
              placeholder="What are you looking for?"
              style={styles.searchInput}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.seatchBtn}>
              <Feather name="search" size={24} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
