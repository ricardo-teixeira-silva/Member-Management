/// <reference types="nativewind/types" />
/// <reference types="expo/types" />

declare module "*.png" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.webp";
