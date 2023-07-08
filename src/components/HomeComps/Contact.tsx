"use client";

import React, { FC, useState, ChangeEvent, useEffect } from "react";
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import { Button } from "../ui/Button";
import { sendContactForm } from "@/lib/api";
import { FormValues } from "@/lib/formValues";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "./Footer";

interface ContactProps {}

const initValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

interface State {
  values: FormValues;
  touched: { [key: string]: boolean };
  isLoading: boolean;
  error?: any;
}

const initState: State = {
  values: initValues,
  touched: {},
  isLoading: false,
};

const Contact: FC<ContactProps> = () => {
  const [state, setState] = useState<State>(initState);

  const { values, touched, isLoading, error } = state;

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name } = event.target;
    setState((prev) => ({
      ...prev,
      touched: {
        ...prev.touched,
        [name]: true,
      },
    }));
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);

      setState((prev) => ({
        ...prev,
        touched: {},
      }));
      setState(initState);

      toast.success("Message Sent");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error,
      }));
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 2 });

      gsap.to(".contact-form", {
        y: -500,
        scrollTrigger: {
          trigger: ".tech-container",
          start: "clamp(bottom bottom)",
          markers: true,
          end: "bottom center-=100",
          scrub: 1,
          
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container
      style={{ fontFamily: "Afrah" }}
      mt={12}
      
      className="contact-form w-[100vw] h-[140vh] absolute pb-0 px-0 bg-black  pt-10 flex items-center justify-center flex-col gap-10"
    >
      <Heading className="text-5xl">Get In Touch</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <div className="flex text-xl gap-2">
        <FormControl
          isInvalid={touched.name && !values.name}
          className="flex relative gap-2"
        >
          <FormLabel>Hi, my Name is</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder={"your name"}
            className=" outline-none bg-transparent text-gray-400 h-[1.6rem] w-[6.6rem] max-w-min underline"
            value={values.name}
            errorBorderColor="red"
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage className="absolute top-5 right-2 text-[10px] opacity-20">
            Required
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={touched.email && !values.email}
          className="flex relative gap-2 "
        >
          <FormLabel>and my email is</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder={"your email"}
            className=" outline-none bg-transparent text-gray-400 h-[1.6rem] w-[6.6rem] underline"
            value={values.email}
            onChange={handleChange}
            errorBorderColor="red"
            onBlur={onBlur}
          />
          <FormErrorMessage className="absolute top-5 right-2 text-[10px] opacity-20">
            Required
          </FormErrorMessage>
        </FormControl>
      </div>

      <FormControl
        isInvalid={touched.message && !values.message}
        className="flex relative gap-2 text-xl translate-x-12"
      >
        <FormLabel>Your Message :</FormLabel>
        <Textarea
          placeholder={"your message"}
          className="outline-none resize-none bg-transparent text-gray-400 underline"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          css={{
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            "&::-webkit-scrollbar": {
              width: "0.5em",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "transparent",
            },
          }}
        />
        <FormErrorMessage className="absolute top-5 right-[102px] text-[10px] opacity-20">
          Required
        </FormErrorMessage>
      </FormControl>
      <Button
        onClick={onSubmit}
        isLoading={isLoading}
        disabled={!values.name || !values.email || !values.message}
      >
        Submit
      </Button>
      <Footer />
    </Container>
  );
};

export default Contact;
