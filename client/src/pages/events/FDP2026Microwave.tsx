import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ExternalLink, GraduationCap, Radio, Wifi } from "lucide-react";

const speakers = [
    {
        name: "Dr. Tapas Chakravarty",
        title: "Ex Chief Scientist",
        affiliation: "TCS Research",
    },
    {
        name: "Prof. Bhaskar Gupta",
        title: "Ex VC and Professor",
        affiliation: "Dept. of ETCE, Jadavpur University",
    },
    {
        name: "Prof. Shiban K. Koul",
        title: "Honorary Professor",
        affiliation: "CARE, IIT Delhi",
    },
    {
        name: "Dr. Somak Bhattacharyya",
        title: "Associate Professor",
        affiliation: "Department of Electronics Engineering, IIT (BHU), Varanasi, India",
    },
    {
        name: "Dr. Arindam Deb",
        title: "Associate Professor",
        affiliation: "Department of Electronics and Communication Engineering, IEM, School of UEM, Kolkata",
    },
];

const organizers = {
    patron: {
        name: "Prof. (Dr.) Satyajit Chakraborti",
        title: "Director, IEM Kolkata",
    },
    convener: {
        name: "Prof. (Dr.) Malay Gangopaadhyay",
        title: "Vice Principal and HOD of Department of ECE, IEM, Kolkata",
    },
    coordinators: [
        {
            name: "Prof. (Dr.) Sutanu Ghosh",
            title: "Professor, ECE, IEM",
        },
        {
            name: "Prof. (Dr.) Subhabrata Banerje",
            title: "Professor, ECE, IEM",
        },
    ],
};

export default function FDP2026Microwave() {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="mb-6 bg-cyan-400 text-blue-900 px-6 py-2 text-lg font-bold">
                        Five Day FDP 2026
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Faculty Development Program
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto font-medium">
                        Frontier Research in Microwave, Antenna and Communication
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-lg mt-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>8th - 16th January, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>IEM, Kolkata</span>
                        </div>
                    </div>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-8"></div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">About the Program</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            This Five Day Faculty Development Program focuses on frontier research in
                            Microwave, Antenna, and Communication technologies. Organized by the
                            Department of Electronics and Communication Engineering in collaboration
                            with HRDC, IEM UEM Group and Innovation and Entrepreneurship Development
                            Center (IEDC-ECE).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <Card className="border-t-4 border-blue-600">
                            <CardContent className="p-6 text-center">
                                <Radio className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Microwave Technology</h3>
                                <p className="text-gray-600">
                                    Explore advanced concepts in microwave engineering and applications
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-t-4 border-cyan-500">
                            <CardContent className="p-6 text-center">
                                <Wifi className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Antenna Design</h3>
                                <p className="text-gray-600">
                                    Learn cutting-edge antenna design methodologies and innovations
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-t-4 border-blue-400">
                            <CardContent className="p-6 text-center">
                                <GraduationCap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Communication Systems</h3>
                                <p className="text-gray-600">
                                    Deep dive into modern communication systems and protocols
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Distinguished Speakers</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {speakers.map((speaker, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{speaker.name}</h3>
                                    <p className="text-blue-600 font-medium text-sm mb-2">{speaker.title}</p>
                                    <p className="text-gray-600 text-sm">{speaker.affiliation}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Organizers Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Organizing Committee</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="border-l-4 border-blue-600">
                            <CardContent className="p-6">
                                <Badge className="mb-3 bg-blue-100 text-blue-800">Patron</Badge>
                                <h3 className="text-lg font-bold text-gray-800">{organizers.patron.name}</h3>
                                <p className="text-gray-600 text-sm">{organizers.patron.title}</p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-cyan-500">
                            <CardContent className="p-6">
                                <Badge className="mb-3 bg-cyan-100 text-cyan-800">Convener</Badge>
                                <h3 className="text-lg font-bold text-gray-800">{organizers.convener.name}</h3>
                                <p className="text-gray-600 text-sm">{organizers.convener.title}</p>
                            </CardContent>
                        </Card>

                        {organizers.coordinators.map((coordinator, index) => (
                            <Card key={index} className="border-l-4 border-blue-400">
                                <CardContent className="p-6">
                                    <Badge className="mb-3 bg-blue-100 text-blue-800">Coordinator</Badge>
                                    <h3 className="text-lg font-bold text-gray-800">{coordinator.name}</h3>
                                    <p className="text-gray-600 text-sm">{coordinator.title}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-cyan-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Register Now
                    </h2>
                    <p className="text-xl mb-8">
                        Join us for this comprehensive Faculty Development Program on frontier research
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://forms.gle/FV4RQoGWNrbUJrRk6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            Register Here
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
