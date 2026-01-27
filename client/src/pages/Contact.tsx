import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-light-blue to-iedc-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
          <p className="text-xl">Get in touch with the IEDC team</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold iedc-gray mb-8 text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-iedc-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold iedc-gray mb-2">Address</h3>
                    <p className="text-gray-600">
                      Street Number 18, Block EP&GP<br />
                      Sector V, IEM IEDC ECE, Godrej Genesis<br />
                      5th Floor, Bidhannagar<br />
                      North Twenty Four Parganas<br />
                      West Bengal, India, 700091
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-iedc-light-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold iedc-gray mb-2">Phone</h3>
                    <p className="text-gray-600">+91 9433569949</p>
                    <p className="text-gray-600">+91 8017764037</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-iedc-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold iedc-gray mb-2">Email</h3>
                    <p className="text-gray-600">iedc.ece@iem.edu.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-iedc-light-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Share2 className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold iedc-gray mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.instagram.com/iedc_ece/" target="_blank" rel="noopener noreferrer" className="iedc-blue hover:text-pink-600 transition-colors">
                        <FaInstagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="iedc-blue hover:text-blue-600 transition-colors">
                        <FaTwitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="iedc-blue hover:text-blue-600 transition-colors">
                        <FaFacebook className="h-6 w-6" />
                      </a>
                      <a href="#" className="iedc-blue hover:text-blue-600 transition-colors">
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
