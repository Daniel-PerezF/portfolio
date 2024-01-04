import { Contact } from "../components/Contact";
import { useDarkMode } from "../context/useDarkMode";

export function ContactPage() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`max-h-screen slow ${darkMode ? "bg-dark" : "bg-[#EBEBEB]"}`}
    >
      <Contact />
    </div>
  );
}
