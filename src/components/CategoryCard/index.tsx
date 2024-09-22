import React from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from "react-native";
import styles from "./categoryCard.style";
import colors from "../../utils/colors";

type CategoryType = {
  title?: any;
  image?: any;
  onPress?: any;
  backgroundColor?: string;
};

const CategoryCard = ({
  title = "",
  image = "",
  onPress,
  backgroundColor,
}: CategoryType) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.titleContainer,
        backgroundColor: backgroundColor,
      }}
      onPress={onPress}
      activeOpacity={0.2}
    >
      {/* <ImageBackground
        source={require("../../assets/images/Background.png")}
        style={{ ...styles.background }}
      > */}
      <View style={{ paddingHorizontal: 5, width: "90%" }}>
        <Text
          style={{
            ...styles.text,
            color:
              backgroundColor === "#ffffff"
                ? "#000000"
                : backgroundColor === "#EF6065"
                ? "#ffffff"
                : backgroundColor === "#525D70"
                ? "#ffffff"
                : backgroundColor === "#dddfe0"
                ? "#000000"
                : backgroundColor === "#b24f4d"
                ? "#ffffff"
                : colors.textColor,
          }}
          numberOfLines={2}
        >
          {title}
        </Text>
      </View>

      <Image source={image} style={styles.imageSize} resizeMode="contain" />
      {/* </ImageBackground> */}
    </TouchableOpacity>
  );
};

export default CategoryCard;
