import React from "react";
import { Text } from "react-native-paper";
import styles from "./onboarding.style";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Heading } from "..";

type OnboardingCardType = {
  title?: string;
  style?: any;
};

const OnboardingCard = ({ title = "", style }: OnboardingCardType) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardSubContainer}>
          <Image
            source={require("../../assets/images/delivery.png")}
            style={styles.deliveryIcon}
            resizeMode="contain"
          />
          <Heading title={title} style={styles.margin} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingCard;
