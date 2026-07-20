import { ReactNode } from "react";
import { Text, View } from "react-native";

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <View className="w-[48%] mb-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <View className="mb-5 h-16 w-16 items-center justify-center rounded-full bg-amber-100">
        {icon}
      </View>
      <Text className="text-[18px] font-medium text-slate-700">{title}</Text>
      <Text className="mt-2 text-[22px] font-bold text-[#1E3A8A]">{value}</Text>
    </View>
  );
}
