import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const telegramBotId = "7258287597:AAFEFe40A4zoCi12cNTdv0qzkIecwhLKEwA";
    const chatId = 702020795;
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Flex
      bg="#FFFFFF"
      px={{
        sm: 20,
        xl: "25em",
      }}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="Send" id="btn" />
        </form>
      </div>
    </Flex>
  );
};

export default ContactForm;
