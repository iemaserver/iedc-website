import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Sparkles, Wand2, Brain, Zap, Gift, ExternalLink } from "lucide-react";
import img1 from "@/assets/triwizard-trials/tri-wizard_trials.jpeg";
import img2 from "@/assets/triwizard-trials/wizards_welcome.jpeg";
import img3 from "@/assets/triwizard-trials/presentations.jpeg";
import img4 from "@/assets/triwizard-trials/different_schools.jpeg";
import img5 from "@/assets/triwizard-trials/tri-wizard_trials_geo_tag.jpeg";

const subEvents = [
  {
    name: "Defence Against Dark Prompts",
    image: img1,
    description: "Generative AI track focused on multimodal prompting, retrieval-augmented generation, and creative content with strong safety practices.",
    icon: Wand2,
  },
  {
    name: "The Chambers of Agents",
    image: img2,
    description: "Agentic AI challenge where participants build intelligent agents that can reason, plan, and execute complex tasks autonomously.",
    icon: Brain,
  },
  {
    name: "Charms Without Wands",
    image: img3,
    description: "No-Code AI track empowering participants to create magical AI solutions without writing traditional code.",
    icon: Zap,
  },
];

const funEvents = [
  {
    name: "Wizarding Trivia",
    description: "Rapid-fire AI & Hogwarts lore quiz",
    icon: Sparkles,
  },
  {
    name: "Spellcasting Charades",
    description: "Act it out—no words allowed!",
    icon: Wand2,
  },
  {
    name: "Wand-Coding Dash",
    description: "Tiny build challenges at blazing speed",
    icon: Zap,
  },
];

export default function TriWizardTrials2025() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-700 to-amber-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-amber-400 text-purple-900 px-6 py-2 text-lg font-bold">
            ✨ AI Challenge 2025
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Triwizard Trials
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A Hogwarts-Inspired AI Challenge – Where Magic Meets Machine Learning
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Godrej Genesis, Kolkata</span>
            </div>
          </div>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-8"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About the Trials</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Triwizard Trials is a magical AI challenge inspired by the wizarding world.
              Three extraordinary events await—Defence Against Dark Prompts (Generative AI),
              The Chambers of Agents (Agentic AI), and Charms Without Wands (No-Code AI).
              A perfect blend of creativity, problem-solving, and innovation, the Trials
              crown the most brilliant minds as the Triwizard Champions of AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-t-4 border-purple-600">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Creativity</h3>
                <p className="text-gray-600">
                  Unleash your creative potential with cutting-edge AI tools and techniques
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-amber-500">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Problem Solving</h3>
                <p className="text-gray-600">
                  Tackle real-world challenges using the power of artificial intelligence
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-400">
              <CardContent className="p-6 text-center">
                <Wand2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Push the boundaries of what's possible with AI innovation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Event Gallery</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src={img1}
                alt="Triwizard Trials"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src={img2}
                alt="Wizards Welcome"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src={img3}
                alt="Presentations"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
              <img
                src={img4}
                alt="Different Schools"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:col-span-2">
              <img
                src={img5}
                alt="Triwizard Trials Venue"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">The Three Trials</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three magical AI challenges designed to test your skills and crown the Triwizard Champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-6 h-6 text-amber-400" />
                        <h3 className="text-xl font-bold text-white">{event.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fun Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fun Events Between Sessions</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick mini-events where winners snag surprise gifts & goodies!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <div className="flex items-center justify-center gap-2 text-amber-600">
                      <Gift className="w-4 h-4" />
                      <span className="text-sm font-medium">Gifts for winners!</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Point of Contact</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Tanisha Chakrabarti</h3>
                <p className="text-gray-600 text-sm">+91 90070 65860</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Souptik Biswas</h3>
                <p className="text-gray-600 text-sm">+91 90622 12729</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Saheli Deb</h3>
                <p className="text-gray-600 text-sm">+91 86172 24294</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Anwesha Ghosh</h3>
                <p className="text-gray-600 text-sm">+91 90077 19690</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Magical AI Adventure
          </h2>
          <p className="text-xl mb-8">
            Prove your worth in the Triwizard Trials and become the ultimate AI Champion!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://triwizard-trials.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-800 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Visit Official Website
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
