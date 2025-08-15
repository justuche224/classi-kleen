"use client";

import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ShoppingCart,
  Shield,
  MessageCircle,
  Heart,
  Award,
  Users,
  MapPin,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUpStagger = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const values = [
    {
      icon: Heart,
      title: "Heartfelt Quality",
      description:
        "We pour passion into every product and service, ensuring freshness that touches your life.",
    },
    {
      icon: Shield,
      title: "Unwavering Trust",
      description:
        "Rooted in Lekki&apos;s community, we build bonds through reliable, honest care.",
    },
    {
      icon: Users,
      title: "You-Centered Approach",
      description:
        "Your stories inspire us; your glow and clean spaces drive our every decision.",
    },
    {
      icon: Sparkles,
      title: "Pursuit of Radiance",
      description:
        "We chase excellence to transform ordinary routines into extraordinary freshness and beauty.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Adebayo",
      role: "Lekki Phase 1 Resident",
      content:
        "Classi Kleen&apos;s laundry revives my wardrobe like magic! Always prompt, always perfect—true Lekki lifesavers.",
      rating: 5,
    },
    {
      name: "Michael Okafor",
      role: "Frequent Glow-Seeker",
      content:
        "Their skincare treasures via WhatsApp? Pure convenience and quality. My skin thanks them daily!",
      rating: 5,
    },
    {
      name: "Aisha Ibrahim",
      role: "Ikoyi Homeowner",
      content:
        "The cleaning team brought new life to my space—professional, eco-conscious, and utterly transformative.",
      rating: 5,
    },
  ];

  const serviceAreas = [
    "Lekki Phase 1",
    "Lekki Phase 2",
    "Victoria Island",
    "Ikoyi",
    "Banana Island",
    "Ajah",
    "Sangotedo",
    "Abraham Adesanya",
  ];

  return (
    <>
      <style jsx global>{`
        body {
          font-family: "Playfair Display", serif;
        }
        h1,
        h2,
        h3 {
          font-family: "Playfair Display", serif;
        }
        .wave-bg {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2300BFA5' fill-opacity='0.1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")
              repeat-x bottom / cover,
            linear-gradient(180deg, #f0fdfa 0%, #e0f7fa 100%);
        }
      `}</style>
      <Navbar01
        onSignInClick={() => {
          router.push("/sign-in");
        }}
        onCtaClick={() => {
          router.push("/sign-up");
        }}
      />
      <div className="min-h-screen w-full relative overflow-hidden wave-bg">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="container mx-auto px-4 py-16"
        >
          <motion.div variants={fadeInUpStagger} className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-teal-100 text-teal-700"
            >
              <Award className="w-4 h-4 mr-2" />
              Est. 2020
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-gold-600 bg-clip-text text-transparent mb-6">
              Discover Classi Kleen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rooted in Lekki&apos;s spirit, we blend fresh home care with
              radiant beauty—delivering transformation to Lagos lives.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Lekki Journey
              </h2>
              <p className="text-gray-600 mb-4">
                Classi Kleen sprouted from a Lekki entrepreneur&apos;s dream: to
                infuse everyday Lagos life with effortless cleanliness and glow.
              </p>
              <p className="text-gray-600 mb-4">
                Beginning as a neighborhood laundry pickup, we&apos;ve blossomed
                into a holistic haven—merging eco-friendly home services with
                curated beauty essentials.
              </p>
              <p className="text-gray-600">
                Now nurturing thousands across Lagos, we honor our roots with
                unwavering quality, community warmth, and innovative WhatsApp
                simplicity.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-gold-400 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">200+</div>
                    <div className="text-sm opacity-90">Curated Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">Transformed Lives</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-sm opacity-90">Core Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm opacity-90">Years of Freshness</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpStagger} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our Guiding Light & Principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-teal-500 to-gold-500 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUpStagger} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Where We Bring the Glow
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-teal-600" />
                <p className="text-gray-600">
                  Spreading freshness across Lagos neighborhoods
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-teal-50 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpStagger} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Voices from Our Community
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUpStagger} className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-teal-600 to-gold-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Join the Fresh Revolution?
                </h3>
                <p className="mb-6 opacity-90">
                  Become part of our growing Lekki family—experience the Classi
                  Kleen difference today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-teal-600 hover:bg-gray-100"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Explore Products
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-teal-600"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Schedule Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
