"use client";

import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Fastest way to reach us",
      action: "Chat Now",
      link: "https://wa.me/2348012345678",
      color: "bg-green-500",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call us directly",
      action: "Call Now",
      link: "tel:+2348012345678",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a message",
      action: "Send Email",
      link: "mailto:info@classikleen.com",
      color: "bg-purple-500",
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

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse our products, add items to cart, and checkout via WhatsApp. We'll confirm your order and arrange delivery.",
    },
    {
      question: "What are your delivery times?",
      answer:
        "Standard delivery is 24-48 hours within our service areas. Express delivery available for urgent orders.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer refunds for damaged or incorrect items. Contact us within 24 hours of delivery.",
    },
    {
      question: "How do I book a service?",
      answer:
        "Fill out our service booking form or contact us via WhatsApp. We'll confirm availability and schedule your appointment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash on delivery, bank transfers, and mobile money payments. All payments are processed securely.",
    },
    {
      question: "Are your products authentic?",
      answer:
        "Yes, all our products are 100% authentic and sourced directly from authorized distributors.",
    },
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Need assistance? We&apos;re here to help! Reach
              out to us through any of our channels.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Send us a Message
              </h2>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+234 801 234 5678" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What can we help you with?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center`}
                          >
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {method.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" asChild>
                          <a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {method.action}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Business Hours
              </h2>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-purple-600" />
                          <span className="font-medium text-gray-800">
                            {schedule.day}
                          </span>
                        </div>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Service Areas
              </h2>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-800">
                      Areas We Serve
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-2 bg-purple-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpStagger} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Frequently Asked Questions
            </h2>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="w-5 h-5 text-purple-600" />
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUpStagger} className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Still Have Questions?
                </h3>
                <p className="mb-6 opacity-90">
                  Our customer support team is here to help you with any
                  questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Support
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-purple-600"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
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
