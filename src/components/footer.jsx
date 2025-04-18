import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Play
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2860c7] text-white pt-10 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/images/footer.png"
              className="w-12 h-12 mr-3 drop-shadow-lg"
              alt="Omifod Logo"
            />
            <h2 className="text-xl font-bold leading-tight">
              OMIFOD FOREIGN LINKS <br className="hidden md:block" />
              EDUCATION CONSULT LTD
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/90">
            Empowering students with global academic opportunities through expert
            guidance and personalized education consulting.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="space-y-2 text-sm text-white/90">
            <div className="flex items-start">
              <Mail className="w-4 h-4 mt-1 mr-2" />
              <span> omifodforeignlinkeducation@gmail.com</span>
            </div>
            <div className="flex items-start">
              <Phone className="w-4 h-4 mt-1 mr-2" />
              <span>+234 812 345 6789</span>
            </div>
            <div className="flex items-start">
              <Phone className="w-4 h-4 mt-1 mr-2" />
              <span>+91 79869 17876</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mt-1 mr-2" />
              <span>
              Located in Port Harcourt Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* Social & Developer */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              {/* <a href="#" aria-label="Facebook" className="hover:text-gray-200">
                <Facebook size={20} />
              </a> */}
              <a href="https://x.com/omifodforeign" aria-label="Twitter" className="hover:text-gray-200">
                <Twitter size={20} />
              </a>
              {/* <a href="#" aria-label="Instagram" className="hover:text-gray-200">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-200">
                <Linkedin size={20} />
              </a> */}
              <a href="https://www.youtube.com/@omifodforeign" aria-label="Youtube" className="hover:text-gray-200">
                <Play size={20} />
              </a>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/80">
            Developed by{" "}
            <a
              href="https://linktr.ee/questionaire001?utm_source=linktree_admin_share"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Team_questionaire
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-white/70">
        &copy; {new Date().getFullYear()} OMIFOD FOREIGN LINKS EDUCATION CONSULT LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
