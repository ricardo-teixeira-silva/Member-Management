import { ListSelectTypes } from "@/shared/componentes/forms/select";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const memberRoles: Array<ListSelectTypes> = [
  {
    icon: <FontAwesome6 name="user-tie" size={24} color="#374151" />,
    name: "Pastor",
    value: "Pastor",
  },
  {
    icon: <FontAwesome6 name="user-tie" size={24} color="#374151" />,
    name: "Presbítero",
    value: "Presbítero",
  },
  {
    icon: <FontAwesome6 name="user-tie" size={24} color="#374151" />,
    name: "Diacono",
    value: "Diacono",
  },
  {
    icon: (
      <MaterialCommunityIcons name="face-woman" size={24} color="#374151" />
    ),
    name: "Diaconisa",
    value: "Diaconisa",
  },
  {
    icon: (
      <MaterialCommunityIcons name="face-woman" size={24} color="#374151" />
    ),
    name: "Missionária",
    value: "Missionária",
  },
];
