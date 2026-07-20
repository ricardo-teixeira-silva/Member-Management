import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const stats = [
  {
    title: "Pastores",
    value: 4,
    icon: (
      <MaterialCommunityIcons name="medal-outline" size={30} color="#8A5A00" />
    ),
  },
  {
    title: "Presbíteros",
    value: 8,
    icon: <FontAwesome5 name="user-tie" size={30} color="#8A5A00" />,
  },
  {
    title: "Diáconos(as)",
    value: 24,
    icon: <MaterialCommunityIcons name="face-man" size={30} color="#8A5A00" />,
  },
  {
    title: "Missionárias",
    value: 24,
    icon: (
      <MaterialCommunityIcons name="face-woman" size={30} color="#8A5A00" />
    ),
  },
  {
    title: "Membros",
    value: 50,
    icon: <FontAwesome6 name="users" size={30} color="#8A5A00" />,
  },
  {
    title: "Levitas",
    value: 1,
    icon: (
      <MaterialCommunityIcons name="account-music" size={30} color="#8A5A00" />
    ),
  },
];
