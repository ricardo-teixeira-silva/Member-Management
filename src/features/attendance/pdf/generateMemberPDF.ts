import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { MemberReport } from "./MemberReport";

export async function generateMemberPDF(member: any) {
  const html = MemberReport(member);

  const { uri } = await Print.printToFileAsync({
    html,
  });

  await Sharing.shareAsync(uri);

  return uri;
}
