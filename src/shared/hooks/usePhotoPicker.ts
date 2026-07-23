import * as ImagePicker from "expo-image-picker";

export function usePhotoPicker() {
  const pickImage = async (): Promise<string | undefined> => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (result.canceled) return;

    return result.assets[0].uri;
  };

  return { pickImage };
}
