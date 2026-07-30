import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#001f40] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpeg"
                alt="NOVATAX Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-2xl font-bold text-white">NOVATAX</h3>
            </div>
            <p className="text-gray-300">
              Professional tax consulting and financial services. Your trusted partner for all tax-related matters.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>G-10A Ground Floor,Pace Tower, Model Town</li>
              {/* <li>New York, NY 10001</li> */}
              <li>Phone: 0326-0860148</li>
              <li>Email: novatax.online@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} NOVATAX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
