import React from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./orderType.style";
import { Heading, OnboardingCard } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/Routes";
import { setOrderType } from "./orderType.slice";
import { useAppDispatch } from "../../hooks/redux";

type OrderTypeCard = {
  onPress: any;
  title: string;
  image: any;
};

const OrderTypeCard = ({ title, onPress, image }: OrderTypeCard) => {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.innerContainer} onPress={onPress}>
        <Image
          source={image}
          style={styles.deliveryIcon}
          resizeMode="contain"
        />
        <Heading title={title} />
      </TouchableOpacity>
    </View>
  );
};

const OrderType = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  const navigateToDelivery = () => {
    dispatch(setOrderType("delivery"));
    navigation.navigate(Routes.Outlets);
  };

  const navigateToPickup = () => {
    dispatch(setOrderType("pickup"));
    navigation.navigate(Routes.Pickup);
  };

  return (
    <View style={styles.areaView}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Banner.png")}
          style={styles.bannerImageContainer}
        />
        <View style={styles.outerWrapper}>
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.outerStyle}>
              <Image source={require("../../assets/images/Shop.png")} />
            </View>
            <View style={styles.outer}>
              <OrderTypeCard
                title="Delivery"
                onPress={navigateToDelivery}
                image={require("../../assets/images/delivery.png")}
              />
              <OrderTypeCard
                title="Pickup"
                onPress={navigateToPickup}
                image={require("../../assets/images/pickup.png")}
              />
            </View>
            <OnboardingCard title="Menu" />
            <OnboardingCard title="Deals & Offers" />
            <OnboardingCard title="Loyalty Points" />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default OrderType;
