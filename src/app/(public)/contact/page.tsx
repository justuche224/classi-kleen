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
      description: "Your direct line to fresh solutions",
      action: "Chat Now",
      link: "https://wa.me/2348012345678",
      color: "bg-teal-500",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Hear our friendly Lekki voices",
      action: "Call Now",
      link: "tel:+2348012345678",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed queries, thoughtful responses",
      action: "Send Email",
      link: "mailto:info@classikleen.com",
      color: "bg-gold-500",
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
        "Simply browse our curated selection, add to cart, and checkout via WhatsApp. Our team in Lekki will confirm and deliver freshness to your door.",
    },
    {
      question: "What are your delivery times?",
      answer:
        "We aim for 24-48 hours in our Lagos service areas, with express options for those urgent glow-ups or clean sweeps.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Absolutely—our commitment to quality means refunds for any issues, just reach out within 24 hours.",
    },
    {
      question: "How do I book a service?",
      answer:
        "Use our form or WhatsApp us; we'll match you with our expert team for a seamless scheduling experience.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Secure options including cash on delivery, bank transfers, and mobile money—tailored for convenience in Nigeria.",
    },
    {
      question: "Are your products authentic?",
      answer:
        "100% genuine, sourced ethically to ensure your skin and home get the premium care they deserve.",
    },
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
      <Navbar01 />
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Connect with Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-gold-600 bg-clip-text text-transparent mb-6">
              Let&apos;s Talk Freshness
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our Lekki base to your doorstep, we&apos;re here to refresh
              your queries. Share your story, and let&apos;s create cleaner,
              glowing moments together.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Share Your Thoughts
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
                        placeholder="How can we refresh your day?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your clean or beauty needs..."
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-gold-600"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Your Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Reach Out Our Way
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
                Our Open Hours
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
                          <Calendar className="w-5 h-5 text-teal-600" />
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
                Where We Shine
              </h2>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="font-medium text-gray-800">
                      Lagos Neighborhoods We Serve
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-2 bg-teal-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
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
              Common Queries, Clear Answers
            </h2>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="w-5 h-5 text-teal-600" />
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
            <Card className="border-0 shadow-lg bg-gradient-to-r from-teal-600 to-gold-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">More to Discuss?</h3>
                <p className="mb-6 opacity-90">
                  Our Lekki-based team is eager to hear from you—let&apos;s make
                  your space and skin sparkle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-teal-600 hover:bg-gray-100"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-teal-600"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Ring Us Up
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
