"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import CycleDiagram from "@/components/cycle-diagram"
import Quiz from "@/components/quiz"
import styles from "./page.module.css"

export default function WaterCyclePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const waterCycleStages = [
    {
      id: "evaporation",
      name: "Evaporation",
      description: "Water from oceans, lakes, and rivers turns into water vapor due to heat from the sun.",
      position: { x: 200, y: 300 },
      connections: ["condensation"],
    },
    {
      id: "condensation",
      name: "Condensation",
      description: "Water vapor cools and forms clouds as it rises into the atmosphere.",
      position: { x: 400, y: 150 },
      connections: ["precipitation"],
    },
    {
      id: "precipitation",
      name: "Precipitation",
      description: "Water falls from clouds as rain, snow, sleet, or hail.",
      position: { x: 600, y: 300 },
      connections: ["runoff", "infiltration"],
    },
    {
      id: "runoff",
      name: "Surface Runoff",
      description: "Water flows over land into streams, rivers, and eventually back to oceans.",
      position: { x: 500, y: 450 },
      connections: ["evaporation"],
    },
    {
      id: "infiltration",
      name: "Infiltration",
      description: "Water seeps into the ground, becoming groundwater that feeds springs and wells.",
      position: { x: 300, y: 450 },
      connections: ["evaporation"],
    },
  ]

  const quizQuestions = [
    {
      id: 1,
      question: "What process transforms liquid water into water vapor?",
      options: ["Condensation", "Evaporation", "Precipitation", "Infiltration"],
      correctAnswer: 1,
      explanation:
        "Evaporation is the process where liquid water is transformed into water vapor due to heat energy, typically from the sun.",
    },
    {
      id: 2,
      question: "What is the main driver of the water cycle?",
      options: ["Wind", "Gravity", "Solar energy", "Ocean currents"],
      correctAnswer: 2,
      explanation:
        "Solar energy from the sun provides the heat needed for evaporation, which initiates the water cycle.",
    },
    {
      id: 3,
      question: "Which of the following is NOT a form of precipitation?",
      options: ["Rain", "Snow", "Dew", "Hail"],
      correctAnswer: 2,
      explanation:
        "Dew forms when water vapor condenses on cool surfaces near the ground. It's not a form of precipitation, which falls from clouds.",
    },
    {
      id: 4,
      question: "What happens during condensation in the water cycle?",
      options: [
        "Water vapor turns into liquid water",
        "Liquid water turns into water vapor",
        "Water falls from clouds",
        "Water seeps into the ground",
      ],
      correctAnswer: 0,
      explanation: "During condensation, water vapor cools and changes from a gas back into a liquid, forming clouds.",
    },
    {
      id: 5,
      question: "Approximately what percentage of Earth's water is freshwater?",
      options: ["3%", "25%", "50%", "75%"],
      correctAnswer: 0,
      explanation: "Only about 3% of Earth's water is freshwater, and most of that is locked in ice caps and glaciers.",
    },
  ]

  return (
    <div className={styles.cyclePage}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.navigation}>
            <Link href="/" className={styles.backLink}>
              <ChevronLeft size={16} />
              Back to Home
            </Link>
            <div className={styles.cycleNavigation}>
              <Link href="/cycles/oxygen" className={styles.cycleLink}>
                <ChevronLeft size={16} />
                Oxygen Cycle
              </Link>
              <Link href="/cycles/carbon" className={styles.cycleLink}>
                Carbon Cycle
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.title}>
            The Water Cycle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.subtitle}
          >
            Explore how water circulates through Earth's atmosphere, land, and oceans
          </motion.p>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "overview" ? styles.active : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`${styles.tab} ${activeTab === "diagram" ? styles.active : ""}`}
            onClick={() => setActiveTab("diagram")}
          >
            Interactive Diagram
          </button>
          <button
            className={`${styles.tab} ${activeTab === "journey" ? styles.active : ""}`}
            onClick={() => setActiveTab("journey")}
          >
            Water Droplet Journey
          </button>
          <button
            className={`${styles.tab} ${activeTab === "quiz" ? styles.active : ""}`}
            onClick={() => setActiveTab("quiz")}
          >
            Quiz
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.overview}>
              <div className={styles.imageContainer}>
                <Image
                  src="/water.png?height=400&width=800"
                  alt="Water Cycle Overview"
                  width={800}
                  height={400}
                  className={styles.cycleImage}
                />
              </div>

              <div className={styles.description}>
                <h2>What is the Water Cycle?</h2>
                <p>
                  The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on,
                  above, and below the surface of the Earth. Water is always changing states between liquid, vapor, and
                  ice, with these processes happening in the blink of an eye and over millions of years.
                </p>

                <h3>Key Processes</h3>
                <ul>
                  <li>
                    <strong>Evaporation:</strong> The sun heats water in oceans, lakes, and rivers, turning it into
                    water vapor that rises into the air.
                  </li>
                  <li>
                    <strong>Transpiration:</strong> Plants release water vapor through their leaves, contributing to
                    atmospheric moisture.
                  </li>
                  <li>
                    <strong>Condensation:</strong> Water vapor cools and forms clouds as it rises higher in the
                    atmosphere.
                  </li>
                  <li>
                    <strong>Precipitation:</strong> Water falls from clouds as rain, snow, sleet, or hail when droplets
                    become too heavy.
                  </li>
                  <li>
                    <strong>Collection:</strong> Water that falls on land collects in oceans, lakes, rivers, or seeps
                    into the ground as groundwater.
                  </li>
                </ul>

                <div className={styles.factBox}>
                  <h4>Did You Know?</h4>
                  <p>
                    The water you drink today might have been the same water a dinosaur drank millions of years ago! The
                    Earth has a fixed amount of water that has been recycling through the water cycle for billions of
                    years.
                  </p>
                </div>

                <h3>Importance of the Water Cycle</h3>
                <p>The water cycle is essential for all life on Earth. It:</p>
                <ul>
                  <li>Provides fresh water for drinking and agriculture</li>
                  <li>Regulates Earth's temperature and weather patterns</li>
                  <li>Shapes landscapes through erosion and deposition</li>
                  <li>Supports ecosystems and biodiversity</li>
                  <li>Transports minerals and nutrients across the planet</li>
                </ul>

                <h3>Human Impact on the Water Cycle</h3>
                <p>Human activities are increasingly affecting the natural water cycle through:</p>
                <ul>
                  <li>Climate change altering precipitation patterns</li>
                  <li>Deforestation reducing transpiration</li>
                  <li>Urbanization increasing runoff and reducing infiltration</li>
                  <li>Water pollution affecting usable water supplies</li>
                  <li>Groundwater depletion from excessive pumping</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === "diagram" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.diagram}>
              <CycleDiagram title="Interactive Water Cycle Diagram" stages={waterCycleStages} cycleColor="#1E90FF" />

              <div className={styles.diagramInfo}>
                <h3>Understanding the Water Cycle</h3>
                <p>
                  The water cycle has no beginning or end—it's a continuous process. Water molecules can spend different
                  amounts of time in each part of the cycle. For example, a water molecule might stay in the ocean for
                  thousands of years, but only a few days in the atmosphere.
                </p>
                <p>
                  Click on each stage in the diagram above to learn more about the different processes in the water
                  cycle.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "journey" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.journey}>
              <h2>Follow the Journey of a Water Droplet</h2>

              <div className={styles.journeySteps}>
                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>💧</div>
                  <div className={styles.journeyContent}>
                    <h3>Ocean Beginnings</h3>
                    <p>
                      Our journey begins in the vast Pacific Ocean. As a tiny water droplet, you're part of the largest
                      body of water on Earth, home to countless marine species.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>☀️</div>
                  <div className={styles.journeyContent}>
                    <h3>Rising as Vapor</h3>
                    <p>
                      The sun warms you up, and you begin to evaporate! As water vapor, you're now lighter than air and
                      rise into the atmosphere, leaving the salty ocean behind.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>☁️</div>
                  <div className={styles.journeyContent}>
                    <h3>Forming Clouds</h3>
                    <p>
                      As you rise higher, the air gets cooler. You condense back into a liquid droplet, joining billions
                      of other droplets to form a fluffy cumulus cloud that drifts inland with the wind.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌧️</div>
                  <div className={styles.journeyContent}>
                    <h3>Falling as Rain</h3>
                    <p>
                      The cloud grows heavier as more droplets join. Eventually, you're too heavy to stay aloft. You
                      fall as rain, part of a refreshing spring shower over a mountain forest.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌲</div>
                  <div className={styles.journeyContent}>
                    <h3>Forest Interlude</h3>
                    <p>
                      You land on a pine needle, then drip down to the forest floor. Some of your fellow droplets are
                      absorbed by tree roots and will transpire through leaves, but you continue downward.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>⛰️</div>
                  <div className={styles.journeyContent}>
                    <h3>Underground Adventure</h3>
                    <p>
                      You seep into the soil through infiltration, traveling through layers of earth and rock. You
                      become groundwater, joining an underground aquifer that flows slowly beneath the mountains.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌊</div>
                  <div className={styles.journeyContent}>
                    <h3>Emerging as a Spring</h3>
                    <p>
                      After months underground, you emerge from a spring on the mountainside, joining a clear stream
                      that cascades downhill, picking up speed and joining other streams to form a river.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🏞️</div>
                  <div className={styles.journeyContent}>
                    <h3>River Journey</h3>
                    <p>
                      As part of the river, you flow through valleys, providing water for plants, animals, and human
                      communities. You might be drawn up into irrigation systems for agriculture or collected for
                      drinking water.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌊</div>
                  <div className={styles.journeyContent}>
                    <h3>Return to the Ocean</h3>
                    <p>
                      Finally, your river reaches the coast and flows into the ocean. You've completed one cycle of your
                      endless journey, ready to begin again as the sun warms the ocean surface.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.journeyNote}>
                <p>
                  This is just one possible path through the water cycle. A water molecule might take many different
                  routes—falling as snow and getting trapped in a glacier for centuries, being drunk by an animal, or
                  helping grow a plant before transpiring back to the atmosphere.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "quiz" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.quizSection}>
              <Quiz title="Test Your Knowledge: The Water Cycle" questions={quizQuestions} cycleColor="#1E90FF" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
