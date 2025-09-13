import { Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/thesharpproductions/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="mailto:thesharpproductionsllc@gmail.com"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Email</span>
            </a>
          </div>
          <p className="text-sm text-gray-400">Copyright © 2025 Francisco Useche. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
