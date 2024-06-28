import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const FourthButton = () => {
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
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Подробнее о курсе
          </h2>
          <article>
            {" "}
            <h1>
              Школа Progame рада предложить уникальные курсы программирования
              для детей в возрасте 10 и 11 лет
            </h1>{" "}
            <p>
              Программа курсов разработана с учетом интересов и потребностей
              детей этого возраста, предлагая им возможность познакомиться с
              различными инструментами и технологиями программирования.
            </p>{" "}
            <section>
              {" "}
              <h2>
                Погружение в мир разработки игр с Roblox Studio и Языком Lua
              </h2>{" "}
              <p>
                На курсах в школе Progame дети погружаются в мир разработки игр
                с помощью платформы Roblox Studio. Они изучают основы
                программирования на языке Lua и создают свои собственные игры, в
                которые затем могут играть их друзья и семья.
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h2>Изучение языка Python и программирование в Minecraft</h2>{" "}
              <p>
                Продвинутые дети начинают изучать язык программирования Python и
                применяют его для создания модов и дополнений в игре Minecraft.
                Это позволяет им расширить свои знания и навыки в области
                программирования и приобрести опыт работы с одним из самых
                популярных языков программирования в мире.
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h2>Создание приложений в MIT App Inventor</h2>{" "}
              <p>
                На курсах в школе Progame дети также знакомятся с MIT App
                Inventor и создают свои собственные мобильные приложения. Это
                позволяет им освоить основы разработки приложений и понять, как
                работает процесс создания мобильных приложений от идеи до
                реализации.
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h2>
                Развитие цифровой грамотности и основы работы с компьютером
              </h2>{" "}
              <p>
                Помимо программирования, дети на курсах в школе Progame изучают
                основы цифровой грамотности и основы работы с компьютером. Они
                учатся работать с файлами, создавать цифровые рисунки и
                инфографику, создавать таблицы и презентации, а также осваивают
                навыки безопасного использования интернета и защиты личных
                данных.
              </p>{" "}
            </section>{" "}
            <p>
              Программа курсов в школе Progame представляет собой уникальную
              возможность для детей 10-11 лет начать свой путь в мире
              программирования и цифровых технологий. Благодаря практическим
              заданиям и увлекательным проектам, они развивают не только навыки
              программирования, но и креативное мышление, логическое мышление и
              коммуникативные навыки, что станет незаменимым активом в их
              будущей карьере в технологическом мире.
            </p>{" "}
            <section>
              {" "}
              <h2>
                Запись на курсы в Progame - шаг к будущему в технологиях
              </h2>{" "}
              <p>
                Программа курсов в Progame представляет собой возможность для
                детей 10-11 лет погрузиться в захватывающий мир программирования
                и цифровых технологий. Благодаря инновационным методикам
                обучения и опытным преподавателям, дети не только развивают свои
                навыки программирования, но и открывают для себя новые горизонты
                в мире технологий.
              </p>{" "}
              <p>
                Сеть филиалов Progame охватывает несколько районов
                Санкт-Петербурга, обеспечивая доступность обучения для всех
                жителей города. Записаться на курсы можно легко и удобно на
                официальном сайте школы Progame. Присоединяйтесь к Progame
                сегодня и дайте вашему ребенку возможность стать частью
                цифрового будущего!
              </p>{" "}
            </section>{" "}
            <h2>Программа курса</h2>{" "}
            <ol>
              {" "}
              <li>Roblox Studio. 1 модуль</li> <li>Python для начинающих</li>{" "}
              <li>Python на Minecraft</li>{" "}
              <li>MIT App Inventor. Создание приложений под Android</li>{" "}
              <li>Цифровая грамотность</li> <li>Компьютерная грамотность</li>{" "}
            </ol>{" "}
          </article>
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
