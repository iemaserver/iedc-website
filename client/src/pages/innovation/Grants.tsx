import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Building2, Calendar, Clock } from "lucide-react";

type SponsoredResearch = {
  title: string;
  projectLeaders: string;
  supportingAgency: string;
  duration: string;
  status: string;
};

type AcademicYearData = {
  year: string;
  projects: SponsoredResearch[];
};

const sponsoredResearchData: AcademicYearData[] = [
  {
    year: "July 2025 - June 2026",
    projects: [
      {
        title: "Binary Coding Sequence Reconfigurable Array Antenna for Pattern Diversity Applications at ISM Band",
        projectLeaders: "Prof. Dr. Gobinda Sen (PI), Prof. Dr. Malay Gangopadhyay (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Portable Low-Cost Food Detoxification System",
        projectLeaders: "Prof. Dr. Gobinda Sen (PI), Dr. Subhabrata Banerjee (CO-PI), Prof. Dr. Malay Gangopadhyay (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Photosynthetic Air Purifier (PAP)",
        projectLeaders: "Prof. Dr. Gobinda Sen (PI), Dr. Subhabrata Banerjee (CO-PI), Prof. Dr. Malay Gangopadhyay (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Design and Development of Autonomous Mars Rover Oddity Phase II",
        projectLeaders: "Prof. Dr. Malay Gangopadhyay (PI), Prof. Dr. Subhabrata Banerjee (CO-PI), Prof. Mihir Lal Saha (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Design and Development of Semi-Autonomous Robotic Manipulator",
        projectLeaders: "Prof. Dr. Malay Gangopadhyay (PI), Prof. Dr. Subhabrata Banerjee (CO-PI), Prof. Mihir Lal Saha (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "UAV based Disaster Management System for non-GPS location with Artificial Intelligence",
        projectLeaders: "Prof. Dr. Malay Gangopadhyay (PI), Dr. Ardhendu Kundu (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Design and Development of an Autonomous Navigation Aerial Vehicle (ANAV) for GPS-Denied Operations in Mars-like conditions",
        projectLeaders: "Prof. Dr. Malay Gangopadhyay (PI), Dr. Ardhendu Kundu (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Design and Development of an Aquatic Battlebot with a Horizontal Spinning Hammer Weapon",
        projectLeaders: "Prof. Mihir Lal Saha (PI), Dr. Subhabrata Banerjee (CO-PI), Prof. Dr. Malay Gangopadhyay (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Emulation of Quantum Gates and Circuits Inspired by Lilavati Bhaskaracharya Arithmetic Using FPGA Hardware",
        projectLeaders: "Prof. Dr. Mili Sarkar (PI), Prof. Samit Karmakar (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Smart Fog Harvester",
        projectLeaders: "Prof. Dr. Mili Sarkar (PI), Prof. Samit Karmakar (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Design and Development of Autonomous Livestock Health Monitoring Rover",
        projectLeaders: "Prof. Dr. Subhabrata Banerjee (PI), Prof. Mihir Lal Saha (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Design and Development of a Low-Cost Portable Automated Telescope with Autofocus Capability for Astronomical Observation",
        projectLeaders: "Dr. Sutanu Ghosh (PI), Dr. Ardhendu Kundu (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Design and Development of RiverMind: Smart Greywater Treatment",
        projectLeaders: "Dr. Sutanu Ghosh (PI), Dr. Subhabrata Banerjee (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Design and Development of Vending Machine",
        projectLeaders: "Prof. Soham Kanti Bishnu (PI), Dr. Subhabrata Banerjee (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
      {
        title: "Escalator-Based Water Trash Collector With Passive Mechanical Sorting System",
        projectLeaders: "Prof. Soham Kanti Bishnu (PI), Dr. Subhabrata Banerjee (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "1 year",
        status: "Ongoing",
      },
    ],
  },
  {
    year: "July 2024 - June 2025",
    projects: [
      {
        title: "TenaVision: Innovating the Future of Disaster Response and Recovery",
        projectLeaders: "Prof. Amit Kumar Das (PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "IoT-Driven Electric Bike with Smart Navigation and Predictive Maintenance",
        projectLeaders: "Prof. Amit Kumar Das (PI), Prof. Rajib Ghosh (Co-PI), Prof. Rintu Kumar Gayen (Co-PI), Prof. Mohidur Rahaman (Co-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Stationary Three Axis Fire Emergency Response Base (STAFERB)",
        projectLeaders: "Dr. Gobinda Sen (PI), Dr. Malay Gangopadhyay (Co-PI), Dr. Sayan Sarkar (Co-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Harnessing Drone Technology for Precision Agriculture: Advancing Crop Monitoring and Pesticide Application",
        projectLeaders: "Prof. Mihir Lal Saha (PI), Dr. Subhabrata Banerjee (Co-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Next-Gen Smart Low Cost EV with Cutting-Edge Charging Technology",
        projectLeaders: "Prof. Rajib Ghosh (PI), Prof. Amit Kumar Das (Co-PI), Prof. Rintu Kumar Gayen (Co-PI), Prof. Mohidur Rahaman (Co-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Design and Development of Autonomous Mars Rover Oddity",
        projectLeaders: "Dr. Malay Gangopadhyay (PI), Prof. Dr. Subhabrata Banerjee (CO-PI), Prof. Mihir Lal Saha (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Design and Development of A System for Personal Cooling through Cold Water Showering",
        projectLeaders: "Prof. Mihir Lal Saha (PI), Dr. Subhabrata Banerjee (CO-PI), Mr. Souhridya Bhattacharjee (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Design and Development of a Low-Cost Precise Electrometer for I-V Characterization of Carbon Thin Films",
        projectLeaders: "Prof. Samit Karmakar (PI), Dr. Mili Sarkar (CO-PI), Prof. Dr. G.S. Taki (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Design and Fabrication of Microwave Biosensors on Unconventional 3D Printed Substrate for Medical Diagnosis",
        projectLeaders: "Dr. Malay Gangopadhyay (PI), Prof. Srijita Chakraborty (CO-PI), Dr. Ardhendu Kundu (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Smart Attendance System (Gen 2.0)",
        projectLeaders: "Dr. Mili Sarkar (PI), Prof. Samit Karmakar (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Design and Development of an Accurate Pedometer using variable capacitor",
        projectLeaders: "Dr. Mili Sarkar (PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Design and Fabrication of Low Cost Portable Microwave Sensors for Food Adulteration Detection",
        projectLeaders: "Dr. Gobinda Sen (PI), Dr. Ardhendu Kundu (CO-PI), Dr. Sayan Sarkar (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Development of an AI-based Stock Market Analysis Application Integrating Mood Monitoring, Geopolitics and Industry-specific Factors",
        projectLeaders: "Prof. Soumik Kumar Kundu (PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "AI-based Smart Farming for Enhanced Agricultural Productivity and Sustainability",
        projectLeaders: "Prof. Soumik Kumar Kundu (PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Smart Safety Glasses for the Visually Impaired: Integrating Object Detection, Sound Analysis and Speech Recognition",
        projectLeaders: "Prof. Amit Kumar Das (PI), Prof. Sutanu Ghosh (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Reconfigurable Intelligent Surfaces for next generation wireless communication",
        projectLeaders: "Dr. Sutanu Ghosh (PI), Dr. Gobinda Sen (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
    ],
  },
  {
    year: "July 2023 - June 2024",
    projects: [
      {
        title: "Wearable Antenna Design for Defense Application",
        projectLeaders: "Prof. Dr. Malay Gangopadhyay (PI), Dr. Ardhendu Kundu (CO-PI), Dr. Sayan Sarkar (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Reconfigurable Intelligent Surfaces (RIS) Using Metasurfaces for 5G, IoT and Smart Applications",
        projectLeaders: "Prof. Dr. Malay Gangopadhyay (PI), Dr. Sayan Sarkar (CO-PI), Dr. Ardhendu Kundu (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Design and Hardware Implementation of Lightweight Cryptographic Algorithm for Resource Constrained IoT Devices and Sensors",
        projectLeaders: "Dr. Sanghamitra Poddar (PI), Prof. Mihir Lal Saha (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Implementation of IoT Based Smart Refrigerator System",
        projectLeaders: "Dr. Gobinda Sen (PI), Dr. Subhabrata Banerjee (CO-PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "AI Based Waste Detection and Classification for Water Body",
        projectLeaders: "Dr. Ratna Chakraborty (PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
      {
        title: "Guidance BOT for Visually Impaired People",
        projectLeaders: "Dr. Ratna Chakraborty (PI)",
        supportingAgency: "Institute of Engineering & Management (School of University of Engineering and Management Kolkata)",
        duration: "2 years",
        status: "Ongoing",
      },
    ],
  },
];

export default function InnovationGrants() {
  const getStatusColor = (status: string) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes("ongoing") || lowerStatus.includes("mou")) {
      return "bg-green-100 text-green-800";
    }
    if (lowerStatus.includes("completed")) {
      return "bg-blue-100 text-blue-800";
    }
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Sponsored Research</h1>
          <p className="text-xl">Funded research projects driving innovation and discovery</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sponsoredResearchData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Academic Year: {yearData.year}
                </h2>
                <div className="w-20 h-1 bg-iedc-blue"></div>
                <p className="text-gray-600 mt-2">{yearData.projects.length} Projects</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearData.projects.map((project, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge className={`mb-3 ${getStatusColor(project.status)}`}>
                          <Clock className="w-3 h-3 mr-1" />
                          {project.status}
                        </Badge>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-3">
                          {project.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <User className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Project Leaders</p>
                            <p className="text-sm text-gray-600">{project.projectLeaders}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Building2 className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Supporting Agency</p>
                            <p className="text-sm text-gray-600">{project.supportingAgency}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Calendar className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Duration</p>
                            <p className="text-sm text-gray-600">{project.duration}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
