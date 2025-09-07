// src/types/index.ts
export type Page = "home" | "about" | "projects" | "contact";

export interface NavButtonProps {
  page: Page;
  label: string;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isMobile: boolean;
}

export interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}
