import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice, quizQuestions, recommendTeas } from "../data/site";
import { IconArrowShort } from "./Icons";

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const question = quizQuestions[step];
  const results = done ? recommendTeas(answers) : [];
  const filled = done ? quizQuestions.length : step;

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
          <h2 className="display">Пять коротких вопросов, и чай на столе</h2>
        </div>
        <div className={`quiz-shell${done ? " is-done" : ""}`}>
          <div className="quiz-top">
            <div className="quiz-progress" aria-hidden>
              {quizQuestions.map((q, i) => (
                <span
                  key={q.id}
                  className={`quiz-seg${i < filled ? " is-done" : ""}${!done && i === step ? " is-now" : ""}${done ? " is-done" : ""}`}
                >
                  <i />
                </span>
              ))}
            </div>
            <div className="quiz-meta">
              <span>{done ? "Подборка готова" : `Вопрос ${String(step + 1).padStart(2, "0")}`}</span>
              <span>
                {done ? quizQuestions.length : step + 1} / {quizQuestions.length}
              </span>
            </div>
          </div>

          {!done ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={question.id}
                  className="quiz-body"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3>{question.title}</h3>
                  <div className="quiz-options">
                    {question.options.map((opt, i) => (
                      <motion.button
                        key={opt.id}
                        type="button"
                        className={`quiz-option${answers[question.id] === opt.id ? " is-on" : ""}`}
                        onClick={() => choose(opt.id)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.06 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <em />
                        <span>
                          <b>{opt.label}</b>
                          <small>{opt.hint}</small>
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="quiz-nav">
                <button className="text-link" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
                  Назад
                </button>
                <span className="quiz-count">выберите один ответ</span>
              </div>
            </>
          ) : (
            <div className="quiz-done">
              <h3>Вот что подошло</h3>
              <div className="quiz-results">
                {results.map(({ product, why }) => (
                  <article className="quiz-card" key={product.id}>
                    <img src={product.image} alt="" />
                    <div>
                      <small>{product.category}</small>
                      <h4>{product.name}</h4>
                      <p>{why}</p>
                      <span>от {formatPrice(product.packs[0].price)}</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="quiz-nav">
                <button
                  className="text-link"
                  onClick={() => {
                    setDone(false);
                    setStep(0);
                    setAnswers({});
                  }}
                >
                  Пройти ещё раз
                </button>
                <a className="btn btn-primary" href="#catalog">
                  Смотреть в витрине <IconArrowShort />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
