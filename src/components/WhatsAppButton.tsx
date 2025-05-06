
import { PhoneCall } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Número de telefone do WhatsApp (retirei o "+" para funcionar corretamente no link)
    window.open("https://wa.me/351962703371", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center transition-all duration-300 hover:scale-105"
      aria-label="Contacte-nos pelo WhatsApp"
    >
      <PhoneCall className="h-6 w-6" />
      <span className="ml-2 hidden md:inline">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
