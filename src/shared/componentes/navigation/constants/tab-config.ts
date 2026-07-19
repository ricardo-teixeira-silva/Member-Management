import { TabConfig } from "../types/type-config-item";

export const TAB_CONFIG: TabConfig = {
  dashboard: {
    label: "Inicio",
    activeIcon: "home",
    inactiveIcon: "home-outline",
  },

  members: {
    label: "Membros",
    activeIcon: "account-supervisor",
    inactiveIcon: "account-supervisor-outline",
  },

  register: {
    label: "Registro",
    activeIcon: "notebook-edit",
    inactiveIcon: "notebook-edit-outline",
  },

  attendance: {
    label: "Presença",
    activeIcon: "clipboard-list",
    inactiveIcon: "clipboard-list-outline",
  },
};
