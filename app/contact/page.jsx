"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { info } from "@/portfolio";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstname) tempErrors.firstname = "First name is required";
    if (!formData.lastname) tempErrors.lastname = "Last name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.service) tempErrors.service = "Service selection is required";
    if (!formData.description)
      tempErrors.description = "Description is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const body = {
        email: formData.email,
        subject: "Job offer",
        name: `${formData.firstname} ${formData.lastname}`,
        phone: formData.phone,
        service: formData.service,
        details: formData.description,
      };
      try {
        const response = await fetch(
          "https://quranapi.lissene.dev/api/v1/auth/send-email-verification",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );

        if (response.ok) {
          toast.success("Message submitted. Thank you!", {
            duration: 4000,
          });
          // Clear form inputs
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            description: "",
          });
        } else {
          toast.error("Error submitting the form. Please try again.", {
            duration: 4000,
          });
        }
      } catch (error) {
        console.log(error);
        toast.error("Error submitting the form. Please try again.", {
          duration: 4000,
        });
      }
    } else {
      toast.error("Please fill in all required fields.", {
        duration: 4000,
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#23232c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Fill out the form below to get in touch
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm">{errors.firstname}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm">{errors.lastname}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="capitalize">
                      <SelectItem value="frontend">
                        Frontend Web Development
                      </SelectItem>
                      <SelectItem value="backend">
                        Backend Web Development
                      </SelectItem>
                      <SelectItem value="fullstack">
                        FullStack Web Development
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-sm">{errors.service}</p>
                )}
              </div>
              <div>
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>

              <Button size="lg" className="max-w-40" type="submit" name="send">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col gap-10 items-center xl:justify-between mb-8 xl:mb-0">
            <Map />
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-6"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
