import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const SecondButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid place-content-center  pb-6">
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-indigo-500 px-14 py-2 text-white transition-colors hover:bg-indigo-600"
        style={{ fontSize: "1em", fontWeight: "bold" }}
      >
        Подробнее о курсе
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div class="mx-auto max-w-2xl space-y-4 text-neutral-400 text-xl text-left">
          <h2 className="text-4xl font-bold text-neutral-200">
            Подробнее о курсе
          </h2>

          <h2>Первые шаги в мире программирования в ScratchJr</h2>
          <p>
            На курсах в школе Iteezy дети погружаются в увлекательный мир
            программирования с помощью ScratchJr - интуитивно понятной
            платформы, разработанной специально для детей. С помощью ScratchJr
            они создают своих персонажей, делают первые простые мультфильмы и
            анимации, развивая свою креативность и логическое мышление.
          </p>

          <h2>Создание игр в KODU GAME LAB</h2>
          <p>
            Продвинутые дети на курсах Progame изучают KODU GAME LAB, где они
            создают собственные игры с перемещением камеры и взаимодействием
            объектов. Это позволяет им погрузиться в мир разработки игр и понять
            основы программирования через практическую деятельность.
          </p>

          <h2>Создание анимаций в PIVOT ANIMATOR</h2>
          <p>
            На курсах дети изучают PIVOT ANIMATOR и создают плавные анимации,
            добавляя сопроводительный звук. Это помогает им развивать свои
            навыки в области анимации и визуального искусства, а также понимать
            важность звука в создании мультимедийных проектов.
          </p>

          <h2>Основы работы за компьютером и безопасность в интернете</h2>
          <p>
            На курсах также уделяется внимание вопросам безопасности в интернете
            и основам работы за компьютером. Дети учатся правильно использовать
            ноутбук или ПК, искать информацию в интернете и соблюдать основные
            правила безопасности в сети.
          </p>
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
