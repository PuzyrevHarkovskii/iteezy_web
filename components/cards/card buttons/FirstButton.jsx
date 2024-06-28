import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const FirstButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid place-content-center pb-6">
      <button
        onClick={() => setOpen(true)}
        className="rounded-full  bg-indigo-500  px-14 py-2 text-white transition-colors hover:bg-blue-950"
        style={{ fontSize: "xl", fontWeight: "bold" }}
      >
        Подробнее о курсе
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div class="mx-auto max-w-2xl space-y-4 text-neutral-400 text-xl text-left">
          {" "}
          <h2 class="text-4xl font-bold text-neutral-200">
            Подробнее о курсе
          </h2>{" "}
          <p>
            {" "}
            Курсы программирования для детей 5-6 лет в школе Progame разработаны
            с учетом возрастных особенностей. Программа состоит из 4 модулей,
            направленных на развитие логического мышления, креативности и умений
            решать задачи. Занятия проходят в игровой форме с использованием
            различных методов обучения, включая игры, головоломки и практические
            упражнения.{" "}
          </p>{" "}
          <p>
            {" "}
            Курсы включают работу на компьютерах и практические упражнения в
            тетрадях, помогая детям лучше усваивать материал и развивать
            разносторонние навыки. Работа в команде развивает коммуникативные
            навыки.{" "}
          </p>{" "}
          <h2 class="mx-auto max-w-xl space-y-4 text-neutral-400">
            {" "}
            Программа курса:{" "}
          </h2>{" "}
          <ol class="list-decimal pl-4">
            {" "}
            <li class="mx-auto max-w-lg space-y-4 text-neutral-400">
              {" "}
              Свойства предметов{" "}
            </li>{" "}
            <li class="mx-auto max-w-lg space-y-4 text-neutral-400">
              {" "}
              Сравнение, цифры, последовательность событий{" "}
            </li>{" "}
            <li class="mx-auto max-w-lg space-y-4 text-neutral-400">
              {" "}
              Множества, кодирование, основы информатики{" "}
            </li>{" "}
            <li class="mx-auto max-w-lg space-y-4 text-neutral-400">
              {" "}
              Комбинаторика, компьютерная грамотность{" "}
            </li>{" "}
          </ol>{" "}
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
                className="h-3 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
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
