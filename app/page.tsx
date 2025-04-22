"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Info } from "lucide-react"
import styles from "./page.module.css"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const cycles = [
    {
      id: "water",
      title: "Water Cycle",
      icon: "💧",
      description: "Follow the journey of water as it circulates through Earth's atmosphere, land, and oceans.",
      color: "var(--color-water)",
    },
    {
      id: "carbon",
      title: "Carbon Cycle",
      icon: "🌿",
      description: "Discover how carbon moves between the atmosphere, oceans, soil, and living organisms.",
      color: "var(--color-forest)",
    },
    {
      id: "nitrogen",
      title: "Nitrogen Cycle",
      icon: "🌬️",
      description: "Learn how nitrogen transforms and moves through the atmosphere, soil, and living organisms.",
      color: "#6a5acd",
    },
    {
      id: "phosphorus",
      title: "Phosphorus Cycle",
      icon: "🧪",
      description: "Explore how phosphorus circulates through rocks, soil, water, and living organisms.",
      color: "#ff7f50",
    },
    {
      id: "oxygen",
      title: "Oxygen Cycle",
      icon: "🌬️",
      description: "Understand how oxygen is produced, consumed, and recycled in our environment.",
      color: "#20b2aa",
    },
  ]

  const facts = [
    "The water cycle has been operating for billions of years, with the same water molecules being continuously recycled.",
    "A single carbon atom could have been part of countless different organisms throughout Earth's history.",
    "Lightning strikes help convert atmospheric nitrogen into forms that plants can use.",
    "Phosphorus is often the limiting nutrient in many ecosystems, controlling the rate of plant growth.",
    "Approximately 21% of Earth's atmosphere consists of oxygen, primarily produced by photosynthesis.",
  ]

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.parallaxBg} style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Explore Earth's <span>Biogeochemical Cycles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.subtitle}
          >
            Interactive journeys through the natural processes that sustain life on our planet
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.cta}
          >
            <Link href="/cycles/water" className={styles.primaryButton}>
              Start Learning
              <ChevronRight size={18} />
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              About EcoCycles
              <Info size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Understanding Nature's Cycles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionText}
          >
            Biogeochemical cycles are the pathways through which essential elements and compounds move through the
            biosphere (living things), geosphere (rocks, soil), hydrosphere (water), and atmosphere (air). These cycles
            are fundamental to understanding how our planet works and how human activities impact Earth's systems.
          </motion.p>

          <div className={styles.factCard}>
            <p>
              The five major biogeochemical cycles—water, carbon, nitrogen, phosphorus, and oxygen—are interconnected. A
              change in one cycle often affects the others, creating a complex web of interactions that maintain Earth's
              balance.
            </p>
          </div>
        </div>
      </section>

      {/* Cycles Overview Section */}
      <section className={styles.cyclesOverview}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Explore the Five Major Cycles
          </motion.h2>

          <div className={styles.cyclesGrid}>
            {cycles.map((cycle, index) => (
              <motion.div
                key={cycle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.cycleCard}
                style={{
                  borderTop: `4px solid ${cycle.color}`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.1)`,
                }}
              >
                <div className={styles.cycleIcon} style={{ backgroundColor: cycle.color }}>
                  <span>{cycle.icon}</span>
                </div>
                <h3>{cycle.title}</h3>
                <p>{cycle.description}</p>
                <Link href={`/cycles/${cycle.id}`} className={styles.cycleLink}>
                  Explore
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Interactive Learning Experience
          </motion.h2>

          <div className={styles.featuresGrid}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>🌀</div>
              <h3>Animated Cycle Diagrams</h3>
              <p>
                Interactive visualizations that bring each cycle to life, allowing you to explore each stage in detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>📚</div>
              <h3>Comprehensive Glossary</h3>
              <p>
                A searchable database of scientific terms with clear, concise definitions to enhance your understanding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>🧠</div>
              <h3>Interactive Quizzes</h3>
              <p>
                Test your knowledge with engaging quizzes after each cycle, with immediate feedback to reinforce
                learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>🛠️</div>
              <h3>Impact Simulator</h3>
              <p>Experiment with how human activities affect each cycle through our interactive simulation tools.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className={styles.didYouKnow}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Did You Know?
          </motion.h2>

          <div className={styles.factsSlider}>
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.factItem}
              >
                <p>{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.callToAction}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaBox}
          >
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Start exploring the fascinating world of biogeochemical cycles and discover how they shape our planet.
            </p>
            <Link href="/cycles/water" className={styles.ctaButton}>
              Start with the Water Cycle
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
