import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { fallbackPersonImage, image185, image342 } from "../api/moviedb";

export default function Cast({ cast, navigation }) {
  return (
    <View
      style={{
        marginVertical: 6,
      }}>
      <Text
        style={{
          color: "white",
          fontSize: 15,
          marginHorizontal: 4,
          marginBottom: 5,
        }}>
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Person", person)}
                style={{
                  marginRight: 4,
                  align: "center",
                }}>
                <View
                  style={{
                    overflow: "hidden",
                    borderRadius: "50%", // 'rounded-full' corresponds to a full circle
                    height: "20px", // You may need to adjust the size as needed
                    width: "20px", // You may need to adjust the size as needed
                    display: "flex", // 'items-center' centers the content horizontally
                    alignItems: "center", // 'items-center' centers the content vertically
                    border: "1px solid #CCCCCC", // 'border' and 'border-neutral-500' set the border styles
                  }}>
                  <Image
                    style={{
                      borderRadius: "1rem",
                      height: "24px",
                      width: "20px",
                    }}
                    source={require("../assets/images/castImage1.png")}
                    // source={{
                    //   uri:
                    //     image185(person?.profile_path) || fallbackPersonImage,
                    // }}
                  />
                </View>

                <Text className="text-white text-xs mt-1">
                  {person?.character.length > 10
                    ? person.character.slice(0, 10) + "..."
                    : person?.character}
                </Text>
                <Text className="text-neutral-400 text-xs">
                  {person?.original_name.length > 10
                    ? person.original_name.slice(0, 10) + "..."
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
