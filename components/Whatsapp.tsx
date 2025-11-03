import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FloatingWhatsApp() {
  return (
    <Link
        href="https://wa.me/250780158711?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
        aria-label="Chat on WhatsApp"
    >
        <MessageCircle size={28} />
    </Link>
  )
}
