import React, { FC, useState, ChangeEvent } from "react";
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

  return (
    <Container maxW="450px" mt={12}>
      <Heading>Contact</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <FormControl isRequired isInvalid={touched.name && !values.name}>
        <FormLabel>Name</FormLabel>
        <Input
          color="black"
          type="text"
          name="name"
          value={values.name}
          errorBorderColor="red"
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          color="black"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.message && !values.message}>
        <FormLabel>Message</FormLabel>
        <Textarea
          color="black"
          name="message"
          rows={1}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
        onClick={onSubmit}
        isLoading={isLoading}
        disabled={!values.name || !values.email || !values.message}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Contact;
