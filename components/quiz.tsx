"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, ChevronRight, RotateCcw } from "lucide-react"
import styles from "./quiz.module.css"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizProps {
  title: string
  questions: QuizQuestion[]
  cycleColor: string
}

const Quiz = ({ title, questions, cycleColor }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return
    setSelectedOption(optionIndex)
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return

    setShowFeedback(true)

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowFeedback(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const getOptionClassName = (index: number) => {
    if (!showFeedback) {
      return `${styles.option} ${selectedOption === index ? styles.selected : ""}`
    }

    if (index === questions[currentQuestion].correctAnswer) {
      return `${styles.option} ${styles.correct}`
    }

    if (index === selectedOption && selectedOption !== questions[currentQuestion].correctAnswer) {
      return `${styles.option} ${styles.incorrect}`
    }

    return styles.option
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>{title}</h2>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.resultsContainer}>
          <h3 className={styles.resultsTitle}>Quiz Completed!</h3>

          <div
            className={styles.scoreCircle}
            style={{
              background: `conic-gradient(${cycleColor} ${percentage}%, #e2e8f0 ${percentage}%)`,
            }}
          >
            <div className={styles.scoreInner}>
              <span className={styles.scoreValue}>{score}</span>
              <span className={styles.scoreTotal}>/{questions.length}</span>
            </div>
          </div>

          <p className={styles.resultsMessage}>
            {percentage >= 80
              ? "Great job! You have a solid understanding of this cycle."
              : percentage >= 60
                ? "Good effort! You're on the right track."
                : "Keep learning! Review the cycle and try again."}
          </p>

          <button className={styles.resetButton} onClick={resetQuiz} style={{ backgroundColor: cycleColor }}>
            <RotateCcw size={16} />
            Try Again
          </button>
        </motion.div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className={styles.quizContainer}>
      <h2 className={styles.quizTitle}>{title}</h2>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${(currentQuestion / questions.length) * 100}%`,
            backgroundColor: cycleColor,
          }}
        />
      </div>

      <div className={styles.questionContainer}>
        <h3 className={styles.questionText}>
          <span className={styles.questionNumber}>Q{currentQuestion + 1}:</span> {question.question}
        </h3>

        <div className={styles.options}>
          {question.options.map((option, index) => (
            <div key={index} className={getOptionClassName(index)} onClick={() => handleOptionSelect(index)}>
              <div className={styles.optionContent}>
                <span>{option}</span>
                {showFeedback && index === question.correctAnswer && <Check className={styles.icon} size={20} />}
                {showFeedback && index === selectedOption && selectedOption !== question.correctAnswer && (
                  <X className={styles.icon} size={20} />
                )}
              </div>
            </div>
          ))}
        </div>

        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${styles.feedback} ${selectedOption === question.correctAnswer ? styles.correct : styles.incorrect}`}
          >
            <p>{selectedOption === question.correctAnswer ? "Correct!" : "Incorrect!"}</p>
            <p>{question.explanation}</p>
          </motion.div>
        )}

        <div className={styles.quizControls}>
          {!showFeedback ? (
            <button
              className={styles.checkButton}
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
              style={{
                backgroundColor: selectedOption !== null ? cycleColor : "#cbd5e0",
                cursor: selectedOption !== null ? "pointer" : "not-allowed",
              }}
            >
              Check Answer
            </button>
          ) : (
            <button className={styles.nextButton} onClick={handleNextQuestion} style={{ backgroundColor: cycleColor }}>
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
