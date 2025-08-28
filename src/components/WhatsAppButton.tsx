import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in joining your gym. Can you help me?";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-large hover:shadow-energy transition-all duration-300 hover:scale-110 z-50 animate-pulse-energy"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;