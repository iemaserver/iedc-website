import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Crown, Building, Users, ChevronRight } from "lucide-react";
import drSatyajitImg from "@assets/Dr. Satyajit Chakrabarti_1753771851795.png";
import drMalayImg from "@assets/Dr. Malay Gangopadhyay_1753771851795.png";
import drSubhabrataImg from "@assets/Dr. Subhabrata Banerjee_1753771851796.png";
import drIndranilImg from "@assets/Dr. Indranil Maity_1753771851795.png";

const facultyMembers = [
  {
    name: "Dr. Satyajit Chakrabarti",
    designation: "President, IEM-UEM Group",
    role: "Provides strategic leadership and vision for the IEM-UEM Group, overseeing academic and entrepreneurial initiatives.",
    image: drSatyajitImg,
    icon: Crown,
    bgColor: "bg-purple-600",
    category: "Leadership",
  },
  {
    name: "Dr. Malay Gangopadhyay",
    designation: "Head of Department (HOD), Dept. of ECE",
    role: "Leads the Electrical and Electronics Engineering (ECE) department, fostering research and innovation in engineering technologies.",
    image: drMalayImg,
    icon: Building,
    bgColor: "bg-iedc-blue",
    category: "Department Head",
  },
  {
    name: "Dr. Subhabrata Banerjee",
    designation: "Coordinator, IEM IEDC ECE",
    role: "Oversees the Innovation and Entrepreneurship Development Cell (IEDC) within the ECE department, driving student-driven projects, patents, and product development.",
    image: drSubhabrataImg,
    icon: Users,
    bgColor: "bg-green-600",
    category: "IEDC Coordinator",
  },
  {
    name: "Dr. Indranil Maity",
    designation: "Coordinator, IEM IEDC ECE",
    role: "Collaborates with Dr. Subhabrata Banerjee to manage IEDC activities, focusing on research grants, industry partnerships, and entrepreneurial training.",
    image: drIndranilImg,
    icon: Users,
    bgColor: "bg-iedc-light-blue",
    category: "IEDC Coordinator",
  },
];

export default function Team() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Team</h1>
          <p className="text-xl">Meet the faculty members driving innovation and excellence at IEDC</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 iedc-gray">
            Faculty Members
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-iedc-blue">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Faculty Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Faculty Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold iedc-gray mb-1">{member.name}</h3>
                          <Badge className={`${member.bgColor} text-white text-xs`}>
                            {member.category}
                          </Badge>
                        </div>
                        <div className={`w-8 h-8 ${member.bgColor} rounded-full flex items-center justify-center`}>
                          <member.icon className="text-white h-4 w-4" />
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="font-semibold iedc-blue text-sm mb-1">Designation</p>
                        <p className="text-gray-700 text-sm">{member.designation}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold iedc-blue text-sm mb-1">Role</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Faculty Expertise Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 iedc-gray">Our Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-iedc-blue text-white">
                <CardContent className="p-6 text-center">
                  <Crown className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Strategic Leadership</h4>
                  <p className="text-sm">Providing vision and direction for academic and entrepreneurial excellence</p>
                </CardContent>
              </Card>
              
              <Card className="bg-iedc-light-blue text-white">
                <CardContent className="p-6 text-center">
                  <Building className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Research & Innovation</h4>
                  <p className="text-sm">Leading cutting-edge research in engineering and technology domains</p>
                </CardContent>
              </Card>
              
              <Card className="bg-iedc-gray text-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Entrepreneurship Development</h4>
                  <p className="text-sm">Fostering student-driven innovation and startup development</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-white border-2 border-iedc-blue max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-black">Faculty Mentorship Program</h3>
                <p className="text-lg leading-relaxed mb-6 text-black">
                  Our distinguished faculty members provide dedicated mentorship to students, guiding them through 
                  cutting-edge research, innovation projects, and entrepreneurial ventures across multiple technology domains.
                </p>
                <div className="flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-iedc-blue" />
                  <span className="font-semibold text-black">Fostering the next generation of innovators and entrepreneurs</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
