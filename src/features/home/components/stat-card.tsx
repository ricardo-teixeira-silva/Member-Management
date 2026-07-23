import { ReactNode } from "react";
import { Text, View } from "react-native";

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <View className="w-[48%] mb-4 rounded-3xl border border-slate-200 bg-white p-4 gap-2 shadow-sm">
      <View className="h-14 w-14 items-center justify-center rounded-full bg-amber-100">
        {icon}
      </View>
      <Text className="text-lg leading-none font-medium text-slate-700">
        {title}
      </Text>
      <Text className="text-[19px] leading-none font-bold text-[#1E3A8A]">
        {value}
      </Text>
    </View>
  );
}
