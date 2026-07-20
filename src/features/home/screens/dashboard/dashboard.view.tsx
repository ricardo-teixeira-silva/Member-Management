import { Container } from "@/shared/componentes";
import { useCurrentMember } from "@/shared/hooks/useCurrentMember";
import { Text, View } from "react-native";
import { MenuStats } from "../../components/menu-stats";
import { QuickActions } from "../../components/quick-actions";
import { TotalMembersCard } from "../../components/total-members-card";

export default function Dashboard() {
  const member = useCurrentMember();

  const firstName = (): string => {
    return member?.name.split(" ")[0] ?? "";
  };

  return (
    <Container>
      <View className=" gap-1 w-[80%]">
        <Text className="text-calor_darkblue text-2xl font-semibold">
          Paz do Senhor {firstName()}! Bem vindo a gestão
        </Text>
        <Text className="text-color_silver text-sm">
          Confira os dados atualizados da sua congregação hoje.
        </Text>
      </View>
      <TotalMembersCard total={48} growth="+12 este mês" />
      <MenuStats />
      <QuickActions />
    </Container>
  );
}
