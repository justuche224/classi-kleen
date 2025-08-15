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

const Page = () => {
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
      title: "Quality First",
      description:
        "We never compromise on the quality of our products and services.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Building lasting relationships through consistent, dependable service.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority in everything we do.",
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description:
        "Striving for excellence in every product and service we offer.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Lekki Resident",
      content:
        "Classi Kleen's laundry service is a lifesaver! They always deliver on time and my clothes come back perfectly clean.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      content:
        "The skincare products are amazing quality and the WhatsApp ordering is so convenient. Highly recommend!",
      rating: 5,
    },
    {
      name: "Aisha Bello",
      role: "Home Owner",
      content:
        "Their home cleaning service transformed my apartment. Professional, thorough, and reasonably priced.",
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
      <Navbar01 />
      <div className="min-h-screen w-full relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
              radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
              radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
              linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
            `,
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="container mx-auto px-4 py-16"
        >
          <motion.div variants={fadeInUpStagger} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Since 2020
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              About Classi Kleen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From fresh laundry to flawless skin, we&apos;re your trusted
              partner for premium products and exceptional services in Lagos.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Classi Kleen was born from a simple vision: to provide premium
                quality products and services that make life easier and more
                beautiful for our customers in Lagos.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small laundry service in Lekki has grown into
                a comprehensive lifestyle brand, offering everything from
                professional cleaning services to premium skincare and beauty
                products.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of satisfied customers across Lagos,
                maintaining the same commitment to quality, reliability, and
                exceptional customer service that we started with.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">200+</div>
                    <div className="text-sm opacity-90">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-sm opacity-90">Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">4+</div>
                    <div className="text-sm opacity-90">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpStagger} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our Mission & Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
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
              Service Areas
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                <p className="text-gray-600">
                  We proudly serve these areas in Lagos
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg"
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
              What Our Customers Say
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
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Experience Classi Kleen?
                </h3>
                <p className="mb-6 opacity-90">
                  Join thousands of satisfied customers who trust us for their
                  beauty and lifestyle needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Shop Products
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-purple-600"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Services
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
