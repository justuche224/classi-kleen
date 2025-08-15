"use client";

import { motion } from "framer-motion";
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
  MessageCircle,
  Sparkles,
  Truck,
  Shield,
  Clock,
  Phone,
  MapPin,
  Users,
  Award,
  Heart,
  Zap,
} from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-serif font-bold text-foreground">
              Classi Kleen
            </span>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#products"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <MessageCircle className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section - Unique Layout */}
      <section className="pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-card-foreground">
                    Proudly Serving Lekki & Beyond
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Your{" "}
                  <span className="relative">
                    <span className="text-primary">Premium</span>
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 1 }}
                    />
                  </span>
                  <br />
                  Lifestyle Partner
                </motion.h1>

                <motion.p
                  className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  From authentic cosmetics to professional home services — we
                  bring quality and convenience to your doorstep.
                  <span className="text-secondary font-semibold">
                    Order via WhatsApp
                  </span>{" "}
                  and experience the difference.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Shopping
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Service
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                className="flex items-center gap-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-full border-2 border-background flex items-center justify-center"
                      >
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      500+ Customers
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Trust our service
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      4.9/5 Rating
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Verified reviews
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  className="relative w-full max-w-md mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Premium skincare and lifestyle products"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-20 h-20 bg-card rounded-2xl shadow-lg border border-border flex items-center justify-center"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Sparkles className="w-8 h-8 text-secondary" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary rounded-2xl shadow-lg flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -left-12 w-12 h-12 bg-secondary rounded-full shadow-lg flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Zap className="w-6 h-6 text-secondary-foreground" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Same day in Lekki",
              },
              {
                icon: Shield,
                title: "Authentic Products",
                desc: "100% genuine",
              },
              { icon: Clock, title: "24/7 Support", desc: "Always available" },
              { icon: Award, title: "Premium Quality", desc: "Trusted brands" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-lg text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section - Unique Grid */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Curated for You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Authentic cosmetics and health essentials from trusted brands
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {[
              {
                name: "CeraVe Foaming Cleanser",
                price: "₦8,500",
                category: "Face Care",
                rating: 4.8,
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Neutrogena Hydro Boost",
                price: "₦6,200",
                category: "Moisturizer",
                rating: 4.7,
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Palmer's Cocoa Butter",
                price: "₦3,800",
                category: "Body Care",
                rating: 4.9,
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {product.category}
                    </Badge>
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif font-bold text-card-foreground">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-secondary">
                      {product.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Order via WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-card-foreground mb-6">
              Professional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Home services that fit your lifestyle and schedule
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {[
              {
                title: "Laundry Pickup",
                description: "Professional laundry with pickup and delivery",
                price: "From ₦2,500",
                features: ["Same Day Service", "Free Pickup", "Premium Care"],
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Home Cleaning",
                description: "Comprehensive house and apartment cleaning",
                price: "From ₦15,000",
                features: [
                  "Deep Cleaning",
                  "Eco-friendly",
                  "Flexible Schedule",
                ],
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Barbing Services",
                description: "Professional grooming at your convenience",
                price: "From ₦3,000",
                features: ["Home Service", "Premium Tools", "Expert Stylists"],
                image: "/placeholder.svg?height=250&width=400",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-background overflow-hidden">
                  <div className="relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-serif font-bold">
                        {service.title}
                      </h3>
                      <p className="text-lg font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      Book Service
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-foreground mb-6">
                Ready to Experience Premium Service?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust Classi Kleen for
                their lifestyle needs
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Order on WhatsApp
              </Button>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-primary-foreground rounded-full" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-primary-foreground rounded-lg rotate-45" />
              <div className="absolute top-1/2 left-8 w-12 h-12 border-2 border-primary-foreground rounded-full" />
              <div className="absolute top-8 right-1/3 w-8 h-8 bg-primary-foreground rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Page;
