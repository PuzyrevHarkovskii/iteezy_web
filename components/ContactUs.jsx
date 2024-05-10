import React from "react";
import { FiCreditCard, FiMail, FiPhone, FiUser, FiUsers } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="p-5 mx-3/4 w-50">
      <p className="text-4xl font-semibold mb-4 text-center">Запишитесь на занятие</p>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mx-10">
        <Card
          title="WhatsApp"
          subtitle="Напишите в WhatsApp"
          href="#"
          Icon={FiUser}
        />
        <Card title="Вконтакте" subtitle="Наша группа" href="#" Icon={FiMail} />
        <Card title="+7 (911) 403-00-90" subtitle="Позвоните нам" href="#" Icon={FiPhone} />
        <Card
          title="Telegram"
          subtitle="Напишите в Telegram"
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded-xl border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-sky-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default ContactUs;