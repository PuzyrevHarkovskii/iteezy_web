import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const FifthButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid place-content-center  pb-6" >
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-indigo-500 px-14 py-2 text-white transition-colors hover:bg-indigo-600" 
        style={{ fontSize: "1em", fontWeight: 'bold'}}
      >
        Подробнее о курсе
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Подробнее о курсе
          </h2>
          <p>На курсе ребята:</p>
<ul>
    <li>Научатся логически мыслить</li>
    <li>В формате проектной работы углубят свои знания в программировании</li>
    <li>Изучат объектно-ориентированное программирование</li>
    <li>Изучат самые популярные языки программирования в выбранной области</li>
    <li>Применят полученные навыки и знания в решении практических задач</li>
    <li>Создадут проект (а может даже не один!) для своего портфолио</li>
</ul>

<p>Все занятия в курсах построены на изучении теории и отработки практики на своих проектах.</p>

<h2>Программа курса</h2>

<h3>WEB-программирование и WEB-дизайн</h3>
<p>На данном курсе ребята изучат HTML и CSS для создания разметки и дизайна сайта, JavaScript для придания интерактивности web-странице, а после изучения PHP учащиеся смогут наделить собственный сайт механизмами обработки данных. Научатся работать в Figma и получат базовые знания профессии веб-дизайнера. Создадут лендинг, который можно будет потом использовать в своем портфолио.</p>

<h3>Прикладное программирование</h3>
<p>Данная программа расширит знания ребят в сфере IT-технологий. На занятиях дети изучат основы программирования на мощном высокоуровневом языке Python, создадут своего чат-бота в Telegram и узнают, что такое нейронные сети и машинное обучение. Изучат синтаксис и научаться решать прикладные задачи на языках C++ и C#.</p>

<h3>Игровое программирование</h3>
<p>Данная программа позволит ребятам создавать свои собственные игры. На занятиях они изучат основы программирования на языке C# и создадут простые игры в Unity.</p>

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