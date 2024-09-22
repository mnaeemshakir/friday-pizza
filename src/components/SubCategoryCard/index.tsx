import React from "react";
import { Text, Image, View } from "react-native";
import CustomButton from "../CustomButton";
import styles from "./subCategoryCard.style";
// import { Badge } from 'react-native-paper';

type SubCategoryType = {
  title?: string;
  price?: string;
  description?: string;
  image?: any;
  onPressCustomise?: any;
  onAddToCart?: any;
  modifier?: Boolean;
  compulsoryModifier?: boolean;
  isDeal?: boolean;
  dealItems?: object[];
};

const SubCategoryCard = ({
  title = "",
  image = "",
  onPressCustomise,
  onAddToCart,
  price,
  description = "",
  modifier = false,
  compulsoryModifier = false,
  isDeal,
  dealItems = [],
}: SubCategoryType) => {
  return (
    <View style={styles.container}>
      {/* <Badge style={styles.badge}>3</Badge> */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.imageSize} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inner}>
          <Text style={styles.titleStyle} numberOfLines={2}>
            {title}
          </Text>

          <View>
            <Text style={styles.priceStyle}>{price}</Text>
          </View>
        </View>
        {dealItems.length === 0 && (
          <View style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
            <Text numberOfLines={3} style={styles.description}>
              {description}
            </Text>
          </View>
        )}
        {dealItems.length > 0 &&
          dealItems.map((item: any) => {
            return (
              <View style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
                <Text numberOfLines={3} style={styles.description}>
                  {item.componentName}
                </Text>
              </View>
            );
          })}

        <View style={styles.footer}>
          {isDeal ||
            (modifier && (
              <CustomButton
                label="Customize"
                styles={styles.customizebuttonContainer}
                textStyles={styles.customizeText}
                onClick={onPressCustomise}
              />
            ))}
          {!compulsoryModifier && (
            <CustomButton
              label="Add to Cart"
              styles={styles.buttonContainer}
              textStyles={styles.buttonText}
              onClick={onAddToCart}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default SubCategoryCard;
