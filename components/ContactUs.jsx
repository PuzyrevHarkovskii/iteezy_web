import React from "react";
import { FiCreditCard, FiMail, FiPhone, FiUser, FiUsers } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import "./animation.css";

const ContactUs = () => {
  return (
    <div id="contactus" className="p-[5em] lg:mx-[17em] sm:mx-[2em] w-30">
      <p className="bouncing-button text-blue-500 text-4xl font-semibold mb-[1em] text-center">
        {" "}
        Запишитесь на занятие!{" "}
      </p>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2  sm:grid-cols-2 mx-10">
        <Card
          id="contactus"
          title="WhatsApp"
          subtitle="Напишите в WhatsApp"
          href="https://wa.me/7911704198"
          Icon={FaWhatsapp}
        />
        <Card
          title="Вконтакте"
          subtitle="Наша группа"
          href="https://vk.com/iteezy"
          Icon={FaVk}
        />
        <Card
          title="+7 (911) 403-00-90"
          subtitle="Позвоните нам"
          href={`tel:+79114030090`}
          Icon={FiPhone}
        />
        <Card
          title="Telegram"
          subtitle="Напишите в Telegram"
          href="https://t.me/zVoidspb"
          Icon={FaTelegramPlane}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-auto xl:h-[12em]  sm:h-[12em] p-5 rounded-xl shadow-md border-[1px] border-slate-100 relative overflow-hidden group bg-white"
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
