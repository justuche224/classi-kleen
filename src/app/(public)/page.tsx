"use client";

import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { motion } from "framer-motion";
import { FlipButton } from "@/components/ui/shadcn-io/flip-button";
import Image from "next/image";
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
  Clock,
  Shield,
  Truck,
  MessageCircle,
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-purple-700 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  Premium Quality Guaranteed
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-gray-900"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  From Fresh Laundry to{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Flawless Skin
                  </span>
                  <br />
                  <span className="text-purple-600">Classi Kleen</span> Delivers
                </motion.h1>

                <motion.p
                  className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Your one-stop shop for premium cosmetics, health essentials,
                  and trusted home services — all ordered easily through
                  WhatsApp.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <FlipButton
                  frontText="Shop Products"
                  backText="Get Started"
                  className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  frontClassName="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-2 border-purple-600"
                  backClassName="bg-gradient-to-r from-pink-600 to-purple-600 text-white"
                  onClick={() => {
                    window.location.href = "#products";
                  }}
                />
                <FlipButton
                  onClick={() => {
                    window.location.href = "#services";
                  }}
                  frontText="Book a Service"
                  backText="Contact Us"
                  className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  frontClassName="bg-white text-purple-700 border-2 border-purple-600 hover:bg-purple-50"
                  backClassName="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
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
                    <div className="w-8 h-8 bg-purple-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-pink-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-200 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    500+ Happy Customers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-600">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2 lg:flex-1 flex justify-center"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-lg lg:max-w-none">
                <motion.div
                  className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-105"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src="/images/hero.jpg"
                    alt="Premium laundry and skincare services by Classi Kleen"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover aspect-square"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -left-6 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/20 animate-bounce"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="text-3xl">✨</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/20 animate-pulse"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <span className="text-2xl">🧴</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-ping"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </motion.div>

                <motion.div
                  className="absolute -left-4 top-1/3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-bounce"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Quick Shop Highlights */}
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
                Featured Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our most popular cosmetics and health essentials
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
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-purple-600 text-white">
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
                      <CardDescription className="text-2xl font-bold text-purple-600">
                        {product.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
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
              <Button className="bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 font-semibold px-8 py-3">
                View All Products
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Service Highlights */}
        <section
          id="services"
          className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
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
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
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
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
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

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
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
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-6">
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
                        <p className="text-sm text-purple-600">
                          {testimonial.service}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          //   onClick={() => window.open("https://wa.me/234XXXXXXXXX", "_blank")}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </motion.div>
    </>
  );
};

export default Page;
