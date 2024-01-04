export type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type CarouselProps = {
  items: React.ReactNode[];
};
export type DarkModeContextProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
