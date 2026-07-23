export const formatDate = (date?: string | null) => {
  if (!date) return "--";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};
