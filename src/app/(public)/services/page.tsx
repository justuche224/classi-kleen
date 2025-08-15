"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  IconWash,
  IconHome,
  IconScissors,
  IconPhone,
} from "@tabler/icons-react";

const services = [
  {
    id: "laundry",
    title: "Laundry Pickup Service",
    description:
      "Professional laundry pickup and delivery service in Lekki area",
    icon: IconWash,
    features: [
      "Pickup & Delivery",
      "Regular & Urgent Service",
      "Professional Care",
      "Lekki Area Coverage",
    ],
    price: "From ₦2,000",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    id: "cleaning",
    title: "Home/Apartment Cleaning",
    description: "Comprehensive cleaning services for your home or apartment",
    icon: IconHome,
    features: [
      "Regular Cleaning",
      "Deep Cleaning",
      "Post-Move Cleaning",
      "Flexible Scheduling",
    ],
    price: "From ₦5,000",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
  {
    id: "barbing",
    title: "Home Barbing Services",
    description: "Professional barbing services at your convenience",
    icon: IconScissors,
    features: ["Haircut", "Beard Trim", "Full Service", "Mobile Service"],
    price: "From ₦3,000",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    serviceType: "",
    items: "",
    people: "",
    instructions: "",
  });

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setFormData({
      name: "",
      phone: "",
      address: "",
      date: "",
      time: "",
      serviceType: "",
      items: "",
      people: "",
      instructions: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const service = services.find((s) => s.id === selectedService);
    if (!service) return;

    const message = `Hello Classi Kleen! I'd like to book ${service.title}:

Customer Details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Address: ${formData.address}
- Date: ${formData.date}
- Time: ${formData.time}

Service Details:
- Service Type: ${formData.serviceType}
${formData.items ? `- Items: ${formData.items}` : ""}
${formData.people ? `- Number of People: ${formData.people}` : ""}
${
  formData.instructions
    ? `- Special Instructions: ${formData.instructions}`
    : ""
}

Thank you!`;

    const whatsappUrl = `https://wa.me/234XXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderServiceForm = () => {
    if (!selectedService) return null;

    const service = services.find((s) => s.id === selectedService);
    if (!service) return null;

    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <service.icon className="h-6 w-6" />
            Book {service.title}
          </CardTitle>
          <CardDescription>
            Fill out the form below and we&apos;ll contact you to confirm your
            booking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Service Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your address"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time *</Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => handleInputChange("time", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedService === "laundry" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      handleInputChange("serviceType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">
                        Regular Service (2-3 days)
                      </SelectItem>
                      <SelectItem value="urgent">
                        Urgent Service (24 hours)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="items">Number of Items</Label>
                  <Input
                    id="items"
                    value={formData.items}
                    onChange={(e) => handleInputChange("items", e.target.value)}
                    placeholder="e.g., 10 pieces"
                  />
                </div>
              </div>
            )}

            {selectedService === "cleaning" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Cleaning Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      handleInputChange("serviceType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select cleaning type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">Regular Cleaning</SelectItem>
                      <SelectItem value="deep">Deep Cleaning</SelectItem>
                      <SelectItem value="post-move">
                        Post-Move Cleaning
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="items">Space Size</Label>
                  <Select
                    value={formData.items}
                    onValueChange={(value) => handleInputChange("items", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select space size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1br">1 Bedroom</SelectItem>
                      <SelectItem value="2br">2 Bedrooms</SelectItem>
                      <SelectItem value="3br+">3+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {selectedService === "barbing" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      handleInputChange("serviceType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Haircut Only</SelectItem>
                      <SelectItem value="beard">Beard Trim Only</SelectItem>
                      <SelectItem value="full">
                        Full Service (Hair + Beard)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="people">Number of People</Label>
                  <Input
                    id="people"
                    type="number"
                    min="1"
                    value={formData.people}
                    onChange={(e) =>
                      handleInputChange("people", e.target.value)
                    }
                    placeholder="Number of people"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="instructions">Special Instructions</Label>
              <Textarea
                id="instructions"
                value={formData.instructions}
                onChange={(e) =>
                  handleInputChange("instructions", e.target.value)
                }
                placeholder="Any special requirements or instructions..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                <IconPhone className="h-4 w-4 mr-2" />
                Book via WhatsApp
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setSelectedService(null)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto max-w-7xl px-4">
      <div className="flex flex-col gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional home services delivered to your doorstep in Lekki and
            surrounding areas. Book your preferred service and we&apos;ll handle
            the rest.
          </p>
        </div>

        {!selectedService ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${service.color}`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-white">
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-4"
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          renderServiceForm()
        )}

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Service Areas</h2>
          <p className="text-muted-foreground">
            We currently serve the following areas in Lagos:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Lekki Phase 1",
              "Lekki Phase 2",
              "Victoria Island",
              "Ikoyi",
              "Ajah",
              "Sangotedo",
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-secondary rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
