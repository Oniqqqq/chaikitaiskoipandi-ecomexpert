import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice, quizQuestions, recommendTeas } from "../data/site";

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const question = quizQuestions[step];
  const results = done ? recommendTeas(answers) : [];

  const choose = (id: string) => {
    const next = { ...answers, [question.id]: id };
    setAnswers(next);
    if (step < quizQuestions.length - 1) setStep(step + 1);
    else setDone(true);
  };

  return (
    <section className="section" id="quiz">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">02 / Подбор</p>
            <h2 className="display">Пять коротких вопросов — и чай на столе</h2>
          </div>
          <p>Блок независимый: его можно убрать, страница останется целой. Для новичка — без специальных терминов.</p>
        </div>
        <div className="sheet quiz-shell">
          {!done ? (
            <>
              <div>
                <p className="kicker">
                  Вопрос {step + 1} из {quizQuestions.length}
                </p>
                <div className="quiz-progress">
                  {quizQuestions.map((q, i) => (
                    <i key={q.id} className={i <= step ? "on" : ""} />
                  ))}
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="display" style={{ fontSize: 40, margin: "0 0 22px" }}>
                    {question.title}
                  </h3>
                  <div className="quiz-options">
                    {question.options.map((opt) => (
                      <button
                        key={opt.id}
                        className={`quiz-option${answers[question.id] === opt.id ? " is-on" : ""}`}
                        onClick={() => choose(opt.id)}
                      >
                        <b>{opt.label}</b>
                        <span>{opt.hint}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="quiz-nav">
                <button className="btn-line" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
                  Назад
                </button>
                <span style={{ color: "var(--mute)" }}>Один вопрос на экран</span>
              </div>
            </>
          ) : (
            <div>
              <p className="kicker">Результат</p>
              <h3 className="display" style={{ fontSize: 40, margin: "10px 0 8px" }}>
                Четыре чая, которые легли в ваши ответы
              </h3>
              <p style={{ color: "var(--ink-soft)", marginTop: 0 }}>Без обещаний про здоровье — только вкус, плотность и привычный способ заваривания.</p>
              <div className="quiz-results">
                {results.map(({ product, why }) => (
                  <article className="quiz-card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h3>{product.name}</h3>
                    <p>Потому что: {why}</p>
                    <p style={{ marginTop: 10 }}>от {formatPrice(product.packs[0].price)}</p>
                  </article>
                ))}
              </div>
              <div className="quiz-nav">
                <button
                  className="btn-line"
                  onClick={() => {
                    setDone(false);
                    setStep(0);
                    setAnswers({});
                  }}
                >
                  Пройти ещё раз
                </button>
                <a className="btn btn-primary" href="#catalog">
                  Смотреть в витрине
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
