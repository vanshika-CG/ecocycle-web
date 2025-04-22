"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import CycleDiagram from "@/components/cycle-diagram"
import Quiz from "@/components/quiz"
import styles from "./page.module.css"

export default function OxygenCyclePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const oxygenCycleStages = [
    {
      id: "atmospheric-oxygen",
      name: "Atmospheric Oxygen",
      description: "Oxygen (O₂) makes up about 21% of Earth's atmosphere and is essential for aerobic respiration.",
      position: { x: 400, y: 100 },
      connections: ["photosynthesis", "respiration", "combustion"],
    },
    {
      id: "photosynthesis",
      name: "Photosynthesis",
      description: "Plants, algae, and cyanobacteria convert CO₂ and water into glucose, releasing O₂ as a byproduct.",
      position: { x: 200, y: 200 },
      connections: ["atmospheric-oxygen"],
    },
    {
      id: "respiration",
      name: "Respiration",
      description: "Organisms use O₂ to break down glucose for energy, releasing CO₂ and water as byproducts.",
      position: { x: 600, y: 200 },
      connections: ["atmospheric-oxygen"],
    },
    {
      id: "combustion",
      name: "Combustion",
      description: "Burning of fossil fuels and biomass consumes O₂ and releases CO₂, water, and energy.",
      position: { x: 500, y: 300 },
      connections: ["atmospheric-oxygen"],
    },
    {
      id: "decomposition",
      name: "Decomposition",
      description: "Aerobic decomposers break down dead organic matter using O₂, releasing CO₂ and nutrients.",
      position: { x: 300, y: 300 },
      connections: ["atmospheric-oxygen"],
    },
    {
      id: "weathering",
      name: "Weathering",
      description:
        "Oxygen reacts with minerals in rocks, oxidizing elements like iron and releasing them into soil and water.",
      position: { x: 200, y: 400 },
      connections: ["lithospheric-oxygen"],
    },
    {
      id: "lithospheric-oxygen",
      name: "Lithospheric Oxygen",
      description: "Oxygen is bound in rocks and minerals, making up about 46% of Earth's crust by weight.",
      position: { x: 400, y: 500 },
      connections: ["weathering", "volcanic-activity"],
    },
    {
      id: "volcanic-activity",
      name: "Volcanic Activity",
      description:
        "Volcanoes release gases including water vapor, CO₂, and sulfur dioxide, affecting atmospheric oxygen.",
      position: { x: 600, y: 400 },
      connections: ["atmospheric-oxygen"],
    },
    {
      id: "ocean-exchange",
      name: "Ocean Exchange",
      description: "Oceans absorb and release oxygen through surface exchange with the atmosphere.",
      position: { x: 300, y: 450 },
      connections: ["atmospheric-oxygen", "marine-photosynthesis"],
    },
    {
      id: "marine-photosynthesis",
      name: "Marine Photosynthesis",
      description: "Phytoplankton and algae in oceans produce a significant portion of Earth's oxygen.",
      position: { x: 500, y: 450 },
      connections: ["ocean-exchange"],
    },
    {
      id: "stratospheric-ozone",
      name: "Stratospheric Ozone",
      description: "In the stratosphere, oxygen forms ozone (O₃) which protects Earth from harmful UV radiation.",
      position: { x: 400, y: 200 },
      connections: ["atmospheric-oxygen"],
    },
  ]

  const quizQuestions = [
    {
      id: 1,
      question: "What process is the primary source of oxygen in Earth's atmosphere?",
      options: ["Respiration", "Combustion", "Photosynthesis", "Weathering"],
      correctAnswer: 2,
      explanation:
        "Photosynthesis is the primary source of oxygen in Earth's atmosphere. Plants, algae, and cyanobacteria use sunlight energy to convert carbon dioxide and water into glucose, releasing oxygen as a byproduct.",
    },
    {
      id: 2,
      question: "Approximately what percentage of Earth's atmosphere is oxygen?",
      options: ["5%", "21%", "46%", "78%"],
      correctAnswer: 1,
      explanation:
        "Oxygen makes up approximately 21% of Earth's atmosphere by volume. Nitrogen is the most abundant gas at about 78%, while other gases like argon, carbon dioxide, and water vapor make up the remaining 1%.",
    },
    {
      id: 3,
      question: "What is the role of ozone (O₃) in the oxygen cycle?",
      options: [
        "It's the main form of oxygen used in respiration",
        "It protects Earth from harmful ultraviolet radiation",
        "It's the main product of photosynthesis",
        "It causes acid rain",
      ],
      correctAnswer: 1,
      explanation:
        "Ozone (O₃) in the stratosphere forms a layer that absorbs and blocks most of the sun's harmful ultraviolet (UV) radiation. Without this ozone layer, life as we know it could not exist on Earth's surface due to DNA damage from UV radiation.",
    },
    {
      id: 4,
      question: "Which process consumes oxygen and releases carbon dioxide?",
      options: ["Photosynthesis", "Cellular respiration", "Weathering", "Nitrogen fixation"],
      correctAnswer: 1,
      explanation:
        "Cellular respiration is the process where organisms break down glucose using oxygen to produce energy (ATP), releasing carbon dioxide and water as byproducts. This is essentially the opposite of photosynthesis in terms of gas exchange.",
    },
    {
      id: 5,
      question: "Which organisms are responsible for producing most of Earth's oxygen?",
      options: ["Land plants", "Marine phytoplankton and algae", "Bacteria in soil", "Fungi"],
      correctAnswer: 1,
      explanation:
        "While land plants contribute significantly to oxygen production, marine phytoplankton and algae are responsible for producing 50-80% of Earth's oxygen. These microscopic organisms in the oceans are the planet's most important oxygen producers.",
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
              <Link href="/cycles/phosphorus" className={styles.cycleLink}>
                <ChevronLeft size={16} />
                Phosphorus Cycle
              </Link>
              <Link href="/cycles/water" className={styles.cycleLink}>
                Water Cycle
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.title}>
            The Oxygen Cycle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.subtitle}
          >
            Understand how oxygen is produced, consumed, and recycled in our environment
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
            Oxygen Journey
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
                  src="/oxygen.png?height=400&width=800"
                  alt="Oxygen Cycle Overview"
                  width={800}
                  height={400}
                  className={styles.cycleImage}
                />
              </div>

              <div className={styles.description}>
                <h2>What is the Oxygen Cycle?</h2>
                <p>
                  The oxygen cycle is the biogeochemical cycle that describes the movement of oxygen through the
                  atmosphere, biosphere, lithosphere, and hydrosphere. Oxygen is essential for most life on Earth, as
                  it's required for cellular respiration in animals, plants, and many microorganisms. It's also a
                  component of many organic and inorganic compounds.
                </p>
                <p>
                  Oxygen is the most abundant element on Earth by mass, making up approximately 46% of the Earth's
                  crust, 21% of the atmosphere, and 89% of the world's oceans (as a component of water, H₂O).
                </p>

                <h3>Key Processes</h3>
                <ul>
                  <li>
                    <strong>Photosynthesis:</strong> Plants, algae, and certain bacteria convert carbon dioxide and
                    water into glucose and oxygen using energy from sunlight. This is the primary source of atmospheric
                    oxygen.
                  </li>
                  <li>
                    <strong>Respiration:</strong> Animals, plants, and aerobic microorganisms consume oxygen to break
                    down glucose for energy, releasing carbon dioxide and water.
                  </li>
                  <li>
                    <strong>Combustion:</strong> Burning of fossil fuels and biomass consumes oxygen and releases carbon
                    dioxide, water, and energy.
                  </li>
                  <li>
                    <strong>Decomposition:</strong> Aerobic decomposers break down dead organic matter using oxygen,
                    releasing carbon dioxide and nutrients.
                  </li>
                  <li>
                    <strong>Weathering:</strong> Oxygen reacts with minerals in rocks, oxidizing elements like iron and
                    releasing them into soil and water.
                  </li>
                  <li>
                    <strong>Ocean Exchange:</strong> Oceans absorb and release oxygen through surface exchange with the
                    atmosphere and through marine photosynthesis.
                  </li>
                  <li>
                    <strong>Ozone Formation and Destruction:</strong> In the stratosphere, oxygen forms ozone (O₃) which
                    protects Earth from harmful UV radiation.
                  </li>
                </ul>

                <div className={styles.factBox}>
                  <h4>Did You Know?</h4>
                  <p>
                    Approximately 21% of Earth's atmosphere consists of oxygen, primarily produced by photosynthesis.
                    However, this wasn't always the case. For the first half of Earth's history, there was very little
                    oxygen in the atmosphere. The "Great Oxygenation Event" about 2.4-2.0 billion years ago, caused by
                    the evolution of photosynthetic cyanobacteria, dramatically increased atmospheric oxygen levels and
                    changed Earth's environment forever.
                  </p>
                </div>

                <h3>Oxygen Reservoirs</h3>
                <p>Oxygen is stored in various reservoirs on Earth:</p>
                <ul>
                  <li>
                    <strong>Atmosphere:</strong> As molecular oxygen (O₂) and ozone (O₃).
                  </li>
                  <li>
                    <strong>Hydrosphere:</strong> As a component of water (H₂O) and dissolved oxygen in water bodies.
                  </li>
                  <li>
                    <strong>Lithosphere:</strong> Bound in rocks and minerals, particularly in silicates and oxides.
                  </li>
                  <li>
                    <strong>Biosphere:</strong> In the bodies of living organisms and in organic compounds.
                  </li>
                </ul>

                <h3>Human Impact on the Oxygen Cycle</h3>
                <p>Human activities have affected the oxygen cycle in several ways:</p>
                <ul>
                  <li>
                    Burning fossil fuels consumes oxygen and releases carbon dioxide, contributing to climate change.
                  </li>
                  <li>
                    Deforestation reduces the number of plants available for photosynthesis, potentially affecting
                    oxygen production.
                  </li>
                  <li>
                    Pollution can create "dead zones" in oceans and lakes where oxygen levels are too low to support
                    most marine life.
                  </li>
                  <li>
                    Release of chlorofluorocarbons (CFCs) and other chemicals has damaged the ozone layer, though
                    international agreements have helped address this issue.
                  </li>
                  <li>Agricultural practices and industrial activities can affect oxygen levels in soil and water.</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === "diagram" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.diagram}>
              <CycleDiagram title="Interactive Oxygen Cycle Diagram" stages={oxygenCycleStages} cycleColor="#00838f" />

              <div className={styles.diagramInfo}>
                <h3>Understanding the Oxygen Cycle</h3>
                <p>
                  The oxygen cycle is closely interconnected with the carbon cycle, as many processes that consume
                  oxygen produce carbon dioxide, and vice versa. This relationship is fundamental to life on Earth and
                  helps regulate atmospheric composition.
                </p>
                <p>
                  Click on each stage in the diagram above to learn more about the different processes in the oxygen
                  cycle. Notice how oxygen moves between the atmosphere, living organisms, water, and rocks through
                  various chemical and biological processes.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "journey" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.journey}>
              <h2>Follow the Journey of an Oxygen Atom</h2>

              <div className={styles.journeySteps}>
                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌊</div>
                  <div className={styles.journeyContent}>
                    <h3>Ocean Beginnings</h3>
                    <p>
                      Our journey begins with an oxygen atom as part of a water molecule (H₂O) in the vast Pacific
                      Ocean. You're surrounded by countless other water molecules, gently moving with the ocean
                      currents.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🦠</div>
                  <div className={styles.journeyContent}>
                    <h3>Phytoplankton Photosynthesis</h3>
                    <p>
                      A tiny phytoplankton cell absorbs the water molecule containing you. Inside the cell, during
                      photosynthesis, the water molecule is split apart using energy from sunlight. You're separated
                      from your hydrogen atoms and combined with another oxygen atom to form an oxygen gas (O₂)
                      molecule.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>💨</div>
                  <div className={styles.journeyContent}>
                    <h3>Release to the Atmosphere</h3>
                    <p>
                      The phytoplankton releases you as part of an O₂ molecule into the surrounding water. You gradually
                      diffuse to the ocean surface and escape into the atmosphere, joining the vast reservoir of
                      atmospheric oxygen.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌬️</div>
                  <div className={styles.journeyContent}>
                    <h3>Atmospheric Transport</h3>
                    <p>
                      Wind currents carry you across the ocean and over land. You're now part of the air, which contains
                      about 21% oxygen. You drift over a forest in the mountains.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🐿️</div>
                  <div className={styles.journeyContent}>
                    <h3>Animal Respiration</h3>
                    <p>
                      A squirrel scampering through the forest inhales, drawing you into its lungs. You diffuse into its
                      bloodstream and are transported to a muscle cell that's actively breaking down glucose for energy.
                      In the process of cellular respiration, you combine with carbon to form carbon dioxide (CO₂).
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🫁</div>
                  <div className={styles.journeyContent}>
                    <h3>Exhalation</h3>
                    <p>
                      The CO₂ molecule containing you is carried back to the squirrel's lungs and exhaled into the
                      atmosphere. You're now part of a different molecule and participating in the carbon cycle as well.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌳</div>
                  <div className={styles.journeyContent}>
                    <h3>Plant Absorption</h3>
                    <p>
                      A nearby pine tree absorbs the CO₂ molecule containing you through tiny pores (stomata) in its
                      needles. Inside the tree's cells, you become part of the photosynthesis process again.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🍃</div>
                  <div className={styles.journeyContent}>
                    <h3>Becoming Plant Tissue</h3>
                    <p>
                      Instead of being released as O₂ this time, you're incorporated into a glucose molecule, which the
                      tree uses to build cellulose. You become part of the tree's growing trunk, locked in its woody
                      tissue.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🔥</div>
                  <div className={styles.journeyContent}>
                    <h3>Forest Fire</h3>
                    <p>
                      Years later, a lightning strike starts a forest fire. The intense heat causes the tree containing
                      you to burn. Through combustion, you're released from the wood and combine with another oxygen
                      atom to form a CO₂ molecule again.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>☁️</div>
                  <div className={styles.journeyContent}>
                    <h3>Atmospheric Cycling</h3>
                    <p>
                      You rise with the hot air from the fire and join the atmosphere once more as part of a CO₂
                      molecule. You might be absorbed by another plant, dissolved in the ocean, or remain in the
                      atmosphere for years, continuing your journey through the oxygen and carbon cycles.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.journeyNote}>
                <p>
                  This journey represents just one possible path for an oxygen atom. Oxygen is incredibly versatile and
                  can cycle through many different routes—it might become part of a rock through chemical weathering,
                  join the ozone layer in the stratosphere, or become incorporated into countless different organic
                  molecules. The oxygen cycle is closely interconnected with the carbon, hydrogen, and nitrogen cycles,
                  highlighting the complex web of relationships that sustain life on Earth.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "quiz" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.quizSection}>
              <Quiz title="Test Your Knowledge: The Oxygen Cycle" questions={quizQuestions} cycleColor="#00838f" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
