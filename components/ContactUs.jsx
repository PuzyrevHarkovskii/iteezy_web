import React from "react";
import { chakra } from "@chakra-ui/react";
import { FiCreditCard, FiMail, FiPhone, FiUser, FiUsers } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import "./animation.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ContactUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div className="pt-4 pb-8 px-5 xl:mx-80 lg:mx-50 border-1px ">
        <chakra.h1
          mb={8}
          pt={8}
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
          fontWeight={{
            base: "bold",
            md: "extrabold",
          }}
          color="gray.900"
          lineHeight="shorter"
        >
          Наши контакты
        </chakra.h1>
        <div className=" grid gap-4 grid-cols-1 lg:grid-cols-2  sm:grid-cols-2 ">
          <Card
            title="+7 (911) 403-00-90"
            subtitle="Позвоните нам"
            href={`tel:+79114030090`}
            Icon={FiPhone}
          />
          <Card
            id="contactus"
            title="WhatsApp"
            subtitle="Напишите в WhatsApp"
            href="https://wa.me/79114030090"
            Icon={FaWhatsapp}
          />

          <Card
            title="Telegram"
            subtitle="Напишите в Telegram"
            href="https://t.me/zVoidspb"
            Icon={FaTelegramPlane}
          />
          <Card
            title="Вконтакте"
            subtitle="Наша группа"
            href="https://vk.com/iteezy"
            Icon={FaVk}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-auto  xl:h-[12em] sm:h-[12em] p-5 rounded-[35px] shadow-md border-[1px] border-slate-100 relative overflow-hidden group bg-gray-50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-5xl text-sky-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-2xl text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default ContactUs;
