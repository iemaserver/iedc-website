import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Construction, Clock, Users } from "lucide-react";

export default function InnovationProjects() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
          <p className="text-xl">Ongoing and completed research and development projects</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      {/* Project Videos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold iedc-gray mb-4">Project Videos</h2>
            <p className="text-lg text-gray-600">Watch our innovative projects in action</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Aquamind Video */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/g66RTGWSeRI"
                  title="Aquamind: Gray Water Filtration and Monitoring System"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold iedc-blue">Aquamind: Gray Water Filtration and Monitoring System</h3>
              </div>
            </div>

            {/* Telescope Video */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/CL1bzSZaZ2Q"
                  title="Telescope"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold iedc-blue">Telescope</h3>
              </div>
            </div>

            {/* Ecolink Video */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/bBgU_rnqkQ0"
                  title="Ecolink"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold iedc-blue">Ecolink</h3>
              </div>
            </div>

            {/* Autonomous Cattle Video */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5-x59Pa10oc"
                  title="Autonomous Cattle"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold iedc-blue">Autonomous Cattle</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming Soon Section */}
          <div className="text-center">
            <Card className="bg-iedc-light-gray shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-12">
                <div className="w-24 h-24 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Construction className="text-white h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold iedc-gray mb-4">Projects Section</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We're currently organizing and documenting our extensive portfolio of research and development projects. This section will showcase:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-iedc-light-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="text-white h-8 w-8" />
                    </div>
                    <h3 className="font-semibold iedc-gray mb-2">Ongoing Projects</h3>
                    <p className="text-sm text-gray-600">Current research and development initiatives</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-iedc-light-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-white h-8 w-8" />
                    </div>
                    <h3 className="font-semibold iedc-gray mb-2">Collaborative Work</h3>
                    <p className="text-sm text-gray-600">Student-faculty collaborative projects</p>
                  </div>
                </div>

                <Badge className="bg-iedc-blue text-white text-lg px-6 py-2">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 iedc-blue">Research Projects</h3>
                <p className="text-gray-600">Detailed documentation of ongoing and completed research initiatives across various technology domains.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 iedc-blue">Student Projects</h3>
                <p className="text-gray-600">Showcase of innovative student projects and their contributions to cutting-edge technology development.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 iedc-blue">Industry Collaborations</h3>
                <p className="text-gray-600">Projects developed in partnership with industry leaders and research organizations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}