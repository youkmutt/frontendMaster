export const MenuItems = [
  {
    id: "import-statement",
    name: "Import Statement",
    href: "/bank-reconcile/import-statement",
    description: "Upload and process bank statements.",
  },
  {
    id: "dashboard",
    name: "Dashboard",
    href: "/bank-reconcile/dashboard",
    description: "Overview of bank reconciliation status.",
  },
  {
    id: "download-file", // Changed from 'downloadfile' for consistency in href
    name: "Download Files",
    href: "/bank-reconcile/downloadfile",
    description: "Download reconciliation reports and templates.",
  },
];

// You might also define types for your menu items
export type MenuItem = (typeof MenuItems)[0];
