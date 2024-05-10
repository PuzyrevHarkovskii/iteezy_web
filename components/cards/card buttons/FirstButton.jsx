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
    <div className="grid place-content-center pb-6" >
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl  bg-indigo-500 px-14 py-2 text-white transition-colors hover:bg-indigo-600" 
        style={{ fontSize: "1em", fontWeight: 'bold'}}
      >
        Подробнее о курсе
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
          Подробнее о курсе
          </h2>
          <p>
          Курсы программирования для детей в возрасте 5-6 лет могут быть прекрасным способом познакомить их с основами компьютерного мышления и логики. Школа программирования для детей Progame предлагает специальные программы, разработанные с учетом возрастных особенностей детей, чтобы сделать обучение интересным и доступным.
          </p>
          <p>
          Программа курса программирования для детей в возрасте 5-6 лет в школе Progame состоит из четырех основных модулей, каждый из которых ориентирован на развитие определенных навыков и концепций. В каждом из этих модулей учителя могут использовать различные методы обучения, включая игры, головоломки, интерактивные задания и практические упражнения, чтобы сделать обучение интересным и понятным для детей. Курс в школе Progame ставит своей целью не только передачу знаний, но и развитие логического мышления, креативности и умений решать задачки у маленьких учеников.
          </p>
          <p>
          Курсы программирования для детей в возрасте 5-6 лет могут быть прекрасным способом познакомить их с основами компьютерного мышления и логики. Школа программирования для детей Progame предлагает специальные программы, разработанные с учетом возрастных особенностей детей, чтобы сделать обучение интересным и доступным.

Программа курса программирования для детей в возрасте 5-6 лет в школе Progame состоит из четырех основных модулей, каждый из которых ориентирован на развитие определенных навыков и концепций. В каждом из этих модулей учителя могут использовать различные методы обучения, включая игры, головоломки, интерактивные задания и практические упражнения, чтобы сделать обучение интересным и понятным для детей. Курс в школе Progame ставит своей целью не только передачу знаний, но и развитие логического мышления, креативности и умений решать задачки у маленьких учеников.

Как проходят занятия на курсах
          </p>
          <p>
          Игровое программирование для детей - это не просто забава, но и эффективный метод обучения. В самом маленьком возрасте дети активно впитывают информацию через игру и визуальные средства. Именно поэтому курсы Progame разработаны с учетом этих особенностей. В игровой форме дети решают логические задачи, изучают основы информатики, комбинаторики и кодирования, понятия «равно» и «не равно», а также осваивают навыки работы в команде.
          </p>
          <ul> <h3 className="mx-auto max-w-xl space-y-4 text-neutral-400">Преимущества курсов Progame:</h3>
            <li>Разнообразные методы обучения</li>
            <li>Игровой подход</li>
            <li>Развитие логического мышления</li>
            <li>Удобное расположение филиалов школ</li>
          </ul>
          <p>
          Курсы включают в себя как работу на компьютерах, так и практические упражнения в рабочих тетрадях. Это помогает детям лучше усваивать материал и развивать разносторонние навыки. Дети не просто учатся, они играют. Визуальные редакторы и тренажеры помогают ученикам легко усваивать материал и применять его в решении различных задач.
          </p>
          <p>
          Работа в команде на курсах помогает детям развивать навыки коммуникации, учиться слушать друг друга и достигать общих целей. Полученные на курсах навыки и знания станут прочным фундаментом для дальнейшего изучения компьютерных технологий и успешной адаптации в цифровом мире.
          </p>
          <p>
          Курсы программирования для детей в школе Progame представляют собой уникальную возможность для малышей познакомиться с миром компьютерных технологий через игру и развивать важные навыки, необходимые в современном обществе. Родители, выбирая такие курсы для своих детей, делают ставку на их успешное будущее в цифровой эпохе.
          </p>
          <p>
          Как записаться на курсы?
          </p>
          <p>
          Программа курсов разработана опытными педагогами с учетом возрастных особенностей детей, что позволяет максимально эффективно передавать знания и умения. Благодаря распределению филиалов по разным районам города, родители могут выбрать самую удобную для себя локацию для посещения курсов детишками.
          </p>
          <ol> <h2 className="mx-auto max-w-xl space-y-4 text-neutral-400">Программа курса:</h2>
            <li className="mx-auto max-w-lg space-y-4 text-neutral-400">- Свойства предметов</li>
            <li className="mx-auto max-w-lg space-y-4 text-neutral-400">- Сравнение, цифры, последовательность событий</li>
            <li className="mx-auto max-w-lg space-y-4 text-neutral-400">- Множества, кодирование, основы информатики</li>
            <li className="mx-auto max-w-lg space-y-4 text-neutral-400">- Комбинаторика, компьютерная грамотность</li>
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