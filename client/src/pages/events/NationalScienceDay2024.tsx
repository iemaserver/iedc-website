import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Atom, Microscope, Lightbulb, GraduationCap, FlaskConical, Rocket } from "lucide-react";

const highlights = [
    {
        name: "Scientific Exhibitions",
        description: "Interactive displays showcasing cutting-edge research and innovations from students and faculty.",
        icon: Microscope,
    },
    {
        name: "Research Presentations",
        description: "Platform for students to present their research projects and innovative ideas.",
        icon: FlaskConical,
    },
    {
        name: "Guest Lectures",
        description: "Inspiring talks from eminent scientists and researchers from leading institutions.",
        icon: GraduationCap,
    },
    {
        name: "Innovation Contests",
        description: "Competitions challenging students to solve real-world problems using scientific principles.",
        icon: Lightbulb,
    },
    {
        name: "Science Quiz",
        description: "Exciting quiz competitions testing knowledge across various scientific disciplines.",
        icon: Atom,
    },
    {
        name: "Project Demonstrations",
        description: "Live demonstrations of student projects in electronics, robotics, and AI.",
        icon: Rocket,
    },
];

export default function NationalScienceDay2024() {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="mb-6 bg-cyan-400 text-blue-900 px-6 py-2 text-lg font-bold">
                        🔬 Celebrating Science
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        National Science Day<br />Celebration
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Commemorating the Discovery of the Raman Effect by Sir C.V. Raman
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-lg">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>February 28, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>IEM Salt Lake Campus</span>
                        </div>
                    </div>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-8"></div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">About the Celebration</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            National Science Day is celebrated in India on February 28th each year to mark the
                            discovery of the Raman Effect by Indian physicist Sir Chandrasekhara Venkata Raman
                            in 1928. This discovery earned him the Nobel Prize in Physics in 1930. At IEM IEDC,
                            we celebrate this day to promote scientific temper, encourage innovation, and inspire
                            the next generation of scientists and engineers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <Card className="border-t-4 border-blue-600">
                            <CardContent className="p-6 text-center">
                                <Atom className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Scientific Temper</h3>
                                <p className="text-gray-600">
                                    Promoting rational thinking and scientific approach to problem-solving
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-t-4 border-cyan-500">
                            <CardContent className="p-6 text-center">
                                <Lightbulb className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                                <p className="text-gray-600">
                                    Encouraging creative solutions and breakthrough discoveries
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-t-4 border-blue-400">
                            <CardContent className="p-6 text-center">
                                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration</h3>
                                <p className="text-gray-600">
                                    Fostering teamwork and knowledge sharing among students
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* About Sir C.V. Raman Section */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">The Raman Effect</h2>
                            <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                            <p className="text-gray-600 mb-4">
                                On February 28, 1928, Sir C.V. Raman announced his groundbreaking discovery
                                that when light passes through a transparent material, some of the deflected
                                light changes in wavelength. This phenomenon, now known as the Raman Effect,
                                revolutionized our understanding of molecular structure and behavior.
                            </p>
                            <p className="text-gray-600 mb-4">
                                The Raman Effect has since become an essential tool in scientific research,
                                with applications ranging from identifying chemical compounds to studying
                                biological systems and even detecting art forgeries.
                            </p>
                            <p className="text-gray-600">
                                Sir C.V. Raman was awarded the Nobel Prize in Physics in 1930 for this
                                discovery, becoming the first Asian to receive a Nobel Prize in any branch
                                of science.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white text-center">
                            <Atom className="w-24 h-24 mx-auto mb-6 opacity-90" />
                            <blockquote className="text-xl italic mb-4">
                                "Ask the right questions, and nature will open the doors to her secrets."
                            </blockquote>
                            <p className="text-lg font-semibold">— Sir C.V. Raman</p>
                            <p className="text-sm mt-2 opacity-80">Nobel Laureate in Physics, 1930</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Highlights Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Event Highlights</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A day filled with scientific exploration, innovation, and celebration of human curiosity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.map((highlight, index) => {
                            const IconComponent = highlight.icon;
                            return (
                                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{highlight.name}</h3>
                                        <p className="text-gray-600">{highlight.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-cyan-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ignite Your Scientific Curiosity
                    </h2>
                    <p className="text-xl mb-8">
                        Join us in celebrating science and innovation. Together, let's build a future
                        driven by discovery and rational thinking.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-lg">
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                            <Users className="w-5 h-5" />
                            <span>100+ Participants</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                            <Microscope className="w-5 h-5" />
                            <span>20+ Projects Showcased</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                            <GraduationCap className="w-5 h-5" />
                            <span>Expert Speakers</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
