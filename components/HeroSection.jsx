import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypewriterEffectSmoothDemo } from "./TypeWriterWords";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-2 text-ms md:text-2xl sm:text-2xl  text-blue-600 font-bold">
          5-17 лет
        </span>
        <TypewriterEffectSmoothDemo />
        <h3 className="text-4xl md:text-6xl font-semibold">
          IT-курсы для детей
        </h3>
        <p className="text-xl lg:text-xl  md:text-xl text-black mt-6 mb-8 md:my-8 font-semibold">
          Курсы для новичков и продвинутых любителей компьютерных технологий на
          базе ProGame.
        </p>
        <ScrollLink
          className="animate-bounce font-bold text-center text-xl  px-6 py-4 focus:animate-none transition-all w-fit hover:animate-none inline-flex shadow-xl hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] bg-yellow-500 mt-3 rounded-full tracking-wide text-white"
          to="contactus"
          smooth={true}
          duration={300}
          offset={-130}
        >
          Записаться на пробный урок
        </ScrollLink>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/images/kids/2.webp",
  },
  {
    id: 2,
    src: "/images/header/2.jpeg",
  },
  {
    id: 3,
    src: "/images/header/3.jpeg",
  },
  {
    id: 4,
    src: "/images/header/1.jpeg",
  },
  {
    id: 5,
    src: "/images/header/4.jpeg",
  },
  {
    id: 6,
    src: "/images/kids/3.webp",
  },
  {
    id: 7,
    src: "/images/header/5.jpeg",
  },
  {
    id: 8,
    src: "/images/header/6.jpeg",
  },
  {
    id: 9,
    src: "/images/header/7.jpeg",
  },
  {
    id: 10,
    src: "/images/header/8.webp",
  },
  {
    id: 11,
    src: "/images/header/9.jpeg",
  },
  {
    id: 12,
    src: "/images/header/10.jpeg",
  },
  {
    id: 13,
    src: "/images/header/11.jpeg",
  },
  {
    id: 14,
    src: "/images/header/12.jpeg",
  },
  {
    id: 15,
    src: "/images/header/13.jpeg",
  },
  {
    id: 16,
    src: "/images/header/14.jpeg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-xl"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className=" grid grid-cols-4  grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HeroSection;
