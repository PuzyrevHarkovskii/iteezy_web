import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const ThirdButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid place-content-center  pb-6">
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-indigo-500 px-14 py-2 text-white transition-colors hover:bg-indigo-600"
        style={{ fontSize: "1em", fontWeight: "bold" }}
      >
        Подробнее о курсе
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div class="mx-auto max-w-2xl space-y-4 text-neutral-400 text-xl text-left">
          <h2 className="text-4xl font-bold text-neutral-200">
            Подробнее о курсе
          </h2>
          <h2>Программирование и разработка игр</h2>{" "}
          <p>
            На курсах в школе Progame дети изучают основы создания игровой
            механики и алгоритмов, погружаясь в увлекательный мир
            программирования. С помощью интуитивно понятных инструментов они
            научатся проектировать игровые миры и создавать свои собственные
            программы с использованием системы команд исполнителя.
          </p>{" "}
          <h2>Введение в операционную систему и офисные программы</h2>{" "}
          <p>
            На занятиях в школе Progame дети также учатся основам работы с
            компьютером и операционной системой Windows. Они изучают офисные
            программы, такие как Microsoft Word, Excel и PowerPoint, а также
            осваивают навыки работы в интернет-браузере.
          </p>{" "}
          <h2>
            Изучение программирования в Minecraft и создание VR-игр в CoSpaces
          </h2>{" "}
          <p>
            Программа курсов также включает изучение программирования в
            Minecraft и создание VR-игр в CoSpaces. Дети погружаются в мир
            трехмерного программирования, изучая основные концепции алгоритмов,
            условий и переменных, а также осваивая систему координат и
            пространственное мышление.
          </p>{" "}
          <h2>Цифровая грамотность и защита личных данных</h2>{" "}
          <p>
            Преподаватели школы Progame уделяют особое внимание цифровой
            грамотности и защите личных данных. Дети изучают основные принципы
            безопасности в интернете, учатся искать информацию в сети и понимать
            важность защиты своих личных данных.
          </p>{" "}
          <h2>Программа курса</h2>{" "}
          <ol>
            {" "}
            <li>Minecraft Edu</li> <li>Scratch базовый уровень</li>{" "}
            <li>Scratch 3.0</li> <li>СoSpaces</li> <li>Цифровая грамотность</li>{" "}
          </ol>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
