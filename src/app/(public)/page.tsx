"use client";

import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { motion } from "framer-motion";
import { FlipButton } from "@/components/ui/shadcn-io/flip-button";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageCircle,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Shield,
  Clock,
} from "lucide-react";
import { Parallax } from "react-parallax";

import "@fontsource/playfair-display";
import { Badge } from "@/components/ui/badge";
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

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");
        body {
          font-family: "Playfair Display", serif;
        }
        h1,
        h2,
        h3 {
          font-family: "Playfair Display", serif;
        }
        .custom-cursor {
          cursor: url("/cursor-sparkle.png"), auto;
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
      <div className="min-h-screen w-full relative overflow-hidden wave-bg custom-cursor pt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-md:pt-26 flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-12 lg:gap-16 min-h-svh py-16 lg:py-20">
            <motion.div
              className="text-center lg:text-left lg:max-w-2xl space-y-8 lg:space-y-10 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-teal-700 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4 text-teal-500 animate-pulse" />
                  Crafted with Care in Lekki
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-gray-900"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Revive Your World with{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-gold-600 bg-clip-text text-transparent">
                    Immaculate Care
                  </span>
                  <br />
                  <span className="text-teal-600">Classi Kleen</span> Transforms
                  Homes & Beauty
                </motion.h1>

                <motion.p
                  className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Born in Lekki&apos;s vibrant streets, we blend premium beauty
                  essentials with trusted home services—delivered fresh via
                  simple WhatsApp chats.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <FlipButton
                  frontText="Discover Beauty"
                  backText="Glow Up Now"
                  className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  frontClassName="bg-gradient-to-r from-teal-600 to-teal-700 text-white border-2 border-teal-600"
                  backClassName="bg-gradient-to-r from-gold-600 to-teal-600 text-white"
                  onClick={() => {
                    window.location.href = "#products";
                  }}
                />
                <FlipButton
                  onClick={() => {
                    window.location.href = "#services";
                  }}
                  frontText="Book Freshness"
                  backText="Cleanse Your Space"
                  className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  frontClassName="bg-white text-teal-700 border-2 border-teal-600 hover:bg-teal-50"
                  backClassName="bg-gradient-to-r from-teal-600 to-gold-600 text-white"
                />
              </motion.div>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-8 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-teal-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gold-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-200 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    500+ Lekki Families Transformed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-600">
                    4.9/5 Local Love
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <Parallax
              strength={300}
              className="relative order-1 lg:order-2 lg:flex-1 flex justify-center"
            >
              <motion.div
                className="relative w-full max-w-lg lg:max-w-none"
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-105"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src="/images/hero.jpg"
                    alt="Classi Kleen: Clean homes, radiant beauty in Lekki"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover aspect-square"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-800/20 via-transparent to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -left-6 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/20 animate-bounce"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="text-3xl">🫧</span>{" "}
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/20 animate-pulse"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <span className="text-2xl">✨</span>{" "}
                </motion.div>
              </motion.div>
            </Parallax>
          </div>
        </div>

        {/* Our Journey Section - Adding Soul */}
        <section className="py-20 bg-white/50 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Lekki Roots: A Story of Fresh Starts
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Founded by a local entrepreneur tired of unreliable services,
              Classi Kleen began as a simple laundry pickup in Lekki Phase 1.
              Today, we&apos;re your partner in elevating daily life—combining
              eco-friendly home care with handpicked beauty treasures. Every
              order supports our community, one fresh fold and flawless glow at
              a time.
            </motion.p>
            <Image
              src="/images/hero-2.jpg"
              // TODO: replace with authentic photo of founder/team in Lekki
              alt="Classi Kleen journey in Lekki"
              width={800}
              height={400}
              className="mx-auto rounded-xl shadow-lg"
            />
          </div>
        </section>

        <section id="products" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Handpicked Beauty Essentials
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Curated for radiant skin, sourced with care for your daily glow.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "CeraVe Foaming Cleanser",
                  price: "₦8,500",
                  image: "/images/hero.jpg",
                  category: "Face Care",
                  rating: 4.8,
                },
                {
                  name: "Neutrogena Hydro Boost",
                  price: "₦6,200",
                  image: "/images/hero.jpg",
                  category: "Face Care",
                  rating: 4.7,
                },
                {
                  name: "Palmer's Cocoa Butter",
                  price: "₦3,800",
                  image: "/images/hero.jpg",
                  category: "Body Care",
                  rating: 4.9,
                },
                {
                  name: "SheaMoisture Shampoo",
                  price: "₦4,500",
                  image: "/images/hero.jpg",
                  category: "Hair Care",
                  rating: 4.6,
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpStagger}
                  whileHover={{ y: -10, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group py-4 rounded-lg hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3">
                        {product.category}
                      </Badge>
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-2xl font-bold">
                        {product.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button className="w-full font-semibold py-3">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-semibold px-8 py-3">
                Explore Full Collection
              </Button>
            </motion.div>
          </div>
        </section>

        <section
          id="services"
          className="py-20 bg-gradient-to-br from-teal-50 to-gold-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Premium Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional home services delivered with care and precision
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Laundry Pickup",
                  description:
                    "Professional laundry service with pickup and delivery in Lekki",
                  price: "From ₦2,500",
                  image: "/images/hero.jpg",
                  features: [
                    "Same Day Service",
                    "Free Pickup",
                    "Premium Detergents",
                  ],
                },
                {
                  title: "Home Cleaning",
                  description:
                    "Comprehensive house and apartment cleaning services",
                  price: "From ₦15,000",
                  image: "/images/hero.jpg",
                  features: [
                    "Deep Cleaning",
                    "Eco-friendly",
                    "Flexible Scheduling",
                  ],
                },
                {
                  title: "Barbing Services",
                  description:
                    "Professional barbing and grooming at your convenience",
                  price: "From ₦3,000",
                  image: "/images/hero.jpg",
                  features: [
                    "Home Service",
                    "Premium Tools",
                    "Expert Stylists",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpStagger}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group py-4 rounded-lg hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-lg font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <CardHeader>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full font-semibold">Book Now</Button>
                    </CardContent>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Classi Kleen?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;re committed to delivering excellence in every service
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  description: "Same-day delivery for urgent orders",
                },
                {
                  icon: Shield,
                  title: "Trusted Service",
                  description: "500+ satisfied customers and counting",
                },
                {
                  icon: Clock,
                  title: "Affordable Prices",
                  description: "Premium quality at competitive rates",
                },
                {
                  icon: MessageCircle,
                  title: "Easy WhatsApp Orders",
                  description: "Order anytime, anywhere via WhatsApp",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={fadeInUpStagger}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-teal-600 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-teal-50 to-gold-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real feedback from our satisfied customers
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Sarah Johnson",
                  service: "Laundry Service",
                  rating: 5,
                  comment:
                    "Amazing service! My clothes came back fresh and perfectly pressed. Will definitely use again!",
                },
                {
                  name: "Michael Chen",
                  service: "Home Cleaning",
                  rating: 5,
                  comment:
                    "Professional, thorough, and reliable. My apartment has never looked better!",
                },
                {
                  name: "Aisha Bello",
                  service: "Cosmetics",
                  rating: 5,
                  comment:
                    "Great quality products and fast delivery. Love their skincare selection!",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpStagger}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border-0 shadow-lg bg-white">
                    <div className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">
                        &ldquo;{testimonial.comment}&rdquo;
                      </p>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-teal-600">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className="bg-teal-500 hover:bg-teal-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          onClick={() =>
            window.open(
              "https://wa.me/234XXXXXXXXX?text=Hi%20Classi%20Kleen,%20I'd%20like%20to%20order...",
              "_blank"
            )
          }
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </motion.div>
    </>
  );
};

export default Page;
