import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function ContactPage() {
  return (
    <div className="h-screen bg-[#364652]">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
