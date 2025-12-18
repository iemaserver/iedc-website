import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import img1 from "@assets/bengal_e_summit_2025_1.jpg";
import img2 from "@assets/bengal_e_summit_2025_2.jpg";
import img3 from "@assets/bengal_e_summit_2025_3.jpg";
import img4 from "@assets/bengal_e_summit_2025_4.jpg";
import img5 from "@assets/bengal_e_summit_2025_5.jpg";
import img6 from "@assets/bengal_e_summit_2025_6.jpg";
import img7 from "@assets/bengal_e_summit_2025_7.jpg";

const galleryImages = [
  {
    src: img1,
    alt: "Bengal E-Summit 2025 Inauguration",
    title: "Inauguration Ceremony",
    description: "Grand opening of Bengal E-Summit 2025",
  },
  {
    src: img2,
    alt: "Bengal E-Summit 2025 Investopia",
    title: "Investopia Competition",
    description: "Entrepreneurs pitching to investors",
  },
  {
    src: img3,
    alt: "Bengal E-Summit 2025 Startup Expo",
    title: "Startup Expo",
    description: "Innovative prototypes on display",
  },
  {
    src: img4,
    alt: "Bengal E-Summit 2025 Pitch Perfect",
    title: "Pitch Perfect",
    description: "Competitive pitching event",
  },
  {
    src: img5,
    alt: "Bengal E-Summit 2025 Business Event",
    title: "This is Buziness",
    description: "Business simulation competition",
  },
  {
    src: img6,
    alt: "Bengal E-Summit 2025 Mind Master",
    title: "Mind Master Quiz",
    description: "Knowledge testing competition",
  },
];

export default function Gallery() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Gallery</h1>
          <p className="text-xl">Showcasing our recent activities and achievements</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={img7}
              alt="Bengal E-Summit 2025 CHATJPG Event"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold iedc-gray">Bengal E-Summit 2025</h3>
              <p className="text-gray-600">Moments from our flagship entrepreneurship summit</p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="mt-4">
                  <h4 className="text-lg font-semibold iedc-gray">{image.title}</h4>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-iedc-blue text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Join Our Innovation Journey</h3>
                <p className="text-lg mb-6">
                  Be part of the next generation of innovators and entrepreneurs. Experience cutting-edge technology and build solutions for tomorrow.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-black hover:bg-gray-100 font-semibold border-2 border-white">
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

