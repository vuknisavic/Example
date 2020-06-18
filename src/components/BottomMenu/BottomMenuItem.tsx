import React from "react";
import { View } from "react-native";
import { blue, grey } from "../../styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  iconName: string;
  isCurrent?: boolean;
};

export const BottomMenuItem = ({ iconName, isCurrent }: Props) => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Ionicons
        name={iconName}
        size={32}
        style={{ color: isCurrent ? blue : grey }}
      />



    </View>

    
      


    
  );
};

