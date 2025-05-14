
import { Mail } from "lucide-react";

const EmailButton = () => {
  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToContactForm}
      className="fixed bottom-24 right-6 bg-iberico-600 hover:bg-iberico-700 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center transition-all duration-300 hover:scale-105"
      aria-label="Envie-nos um email"
    >
      <Mail className="h-6 w-6" />
      <span className="ml-2 hidden md:inline">Email</span>
    </button>
  );
};

export default EmailButton;
