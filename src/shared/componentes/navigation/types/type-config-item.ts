import { MaterialCommunityIcons } from "@expo/vector-icons";

export type TabConfigItem = {
  label: string;
  activeIcon: keyof typeof MaterialCommunityIcons.glyphMap;
  inactiveIcon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export type TabConfig = Record<string, TabConfigItem>;
