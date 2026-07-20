export const mapDayLabelToName = (dayLabel: string) => {
  switch (dayLabel) {
    case "Segunda-feira":
      return "2ª_feira";
    case "Terça-feira":
      return "3ª_feira";
    case "Quarta-feira (Culto Principal)":
      return "4ª_feira";
    case "Quinta-feira":
      return "5ª_feira";
    case "Sexta-feira":
      return "6ª_feira";
    case "Sábado":
      return "sab";
    case "Domingo (Dia do Senhor)":
      return "dom";
    default:
      return dayLabel.toLowerCase();
  }
};
