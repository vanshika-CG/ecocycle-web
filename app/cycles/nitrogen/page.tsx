"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import CycleDiagram from "@/components/cycle-diagram"
import Quiz from "@/components/quiz"
import styles from "./page.module.css"

export default function NitrogenCyclePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const nitrogenCycleStages = [
    {
      id: "atmospheric-nitrogen",
      name: "Atmospheric Nitrogen",
      description: "Nitrogen gas (N₂) makes up about 78% of Earth's atmosphere but is unusable by most organisms.",
      position: { x: 400, y: 100 },
      connections: ["nitrogen-fixation", "industrial-fixation"],
    },
    {
      id: "nitrogen-fixation",
      name: "Biological Nitrogen Fixation",
      description: "Bacteria convert atmospheric N₂ into ammonia (NH₃) that plants can use.",
      position: { x: 200, y: 200 },
      connections: ["ammonification", "plant-uptake"],
    },
    {
      id: "industrial-fixation",
      name: "Industrial Nitrogen Fixation",
      description: "Humans produce nitrogen fertilizers through the Haber-Bosch process.",
      position: { x: 600, y: 200 },
      connections: ["plant-uptake"],
    },
    {
      id: "plant-uptake",
      name: "Plant Uptake",
      description: "Plants absorb nitrogen compounds through their roots to build proteins and DNA.",
      position: { x: 400, y: 250 },
      connections: ["consumption"],
    },
    {
      id: "consumption",
      name: "Consumption",
      description: "Animals eat plants or other animals to obtain nitrogen for their own proteins.",
      position: { x: 550, y: 350 },
      connections: ["excretion", "death"],
    },
    {
      id: "excretion",
      name: "Excretion",
      description: "Animals release nitrogen-containing waste products like urea.",
      position: { x: 650, y: 450 },
      connections: ["ammonification"],
    },
    {
      id: "death",
      name: "Death & Decay",
      description: "When organisms die, their nitrogen-containing compounds return to the soil.",
      position: { x: 400, y: 450 },
      connections: ["ammonification"],
    },
    {
      id: "ammonification",
      name: "Ammonification",
      description: "Decomposers convert organic nitrogen back to ammonia (NH₃).",
      position: { x: 250, y: 350 },
      connections: ["nitrification"],
    },
    {
      id: "nitrification",
      name: "Nitrification",
      description: "Bacteria convert ammonia to nitrites (NO₂⁻) and then to nitrates (NO₃⁻).",
      position: { x: 150, y: 450 },
      connections: ["denitrification", "plant-uptake"],
    },
    {
      id: "denitrification",
      name: "Denitrification",
      description: "Bacteria convert nitrates back to nitrogen gas (N₂), returning it to the atmosphere.",
      position: { x: 300, y: 550 },
      connections: ["atmospheric-nitrogen"],
    },
  ]

  const quizQuestions = [
    {
      id: 1,
      question: "Why can't most organisms use atmospheric nitrogen directly?",
      options: [
        "It's toxic to most life forms",
        "There's not enough of it in the atmosphere",
        "The triple bond in N₂ makes it chemically unreactive",
        "It dissolves too quickly in water",
      ],
      correctAnswer: 2,
      explanation:
        "Atmospheric nitrogen (N₂) has a strong triple bond between its atoms, making it extremely stable and chemically unreactive. Most organisms lack the enzymes needed to break this bond and convert N₂ into usable forms.",
    },
    {
      id: 2,
      question: "What organisms can perform biological nitrogen fixation?",
      options: ["All plants", "Certain bacteria and archaea", "Most animals", "Only fungi"],
      correctAnswer: 1,
      explanation:
        "Only certain bacteria and archaea possess the nitrogenase enzyme needed to convert atmospheric N₂ into ammonia. Some of these bacteria form symbiotic relationships with plants (especially legumes), while others live freely in soil or water.",
    },
    {
      id: 3,
      question: "What is the Haber-Bosch process?",
      options: [
        "A natural process where lightning fixes nitrogen",
        "A bacterial process that converts ammonia to nitrates",
        "An industrial method to produce nitrogen fertilizers",
        "The process plants use to absorb nitrogen",
      ],
      correctAnswer: 2,
      explanation:
        "The Haber-Bosch process is an industrial method developed in the early 20th century that combines atmospheric nitrogen with hydrogen under high pressure and temperature to produce ammonia for fertilizers. This process has dramatically increased food production but also disrupted the natural nitrogen cycle.",
    },
    {
      id: 4,
      question: "What happens during nitrification?",
      options: [
        "Nitrogen gas is converted to ammonia",
        "Ammonia is converted to nitrites and then nitrates",
        "Nitrates are converted back to nitrogen gas",
        "Plants absorb nitrogen from the soil",
      ],
      correctAnswer: 1,
      explanation:
        "Nitrification is a two-step process performed by different bacteria. First, ammonia-oxidizing bacteria convert ammonia (NH₃) to nitrites (NO₂⁻). Then, nitrite-oxidizing bacteria convert nitrites to nitrates (NO₃⁻), which plants can readily use.",
    },
    {
      id: 5,
      question: "What environmental problem can excess nitrogen from fertilizers cause?",
      options: ["Soil acidification", "Eutrophication of water bodies", "Ozone depletion", "All of the above"],
      correctAnswer: 3,
      explanation:
        "Excess nitrogen from fertilizers can cause multiple environmental problems: soil acidification, eutrophication (algal blooms and oxygen depletion in water bodies), and the release of nitrous oxide (a potent greenhouse gas that also contributes to ozone depletion). This highlights the importance of proper fertilizer management.",
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
              <Link href="/cycles/carbon" className={styles.cycleLink}>
                <ChevronLeft size={16} />
                Carbon Cycle
              </Link>
              <Link href="/cycles/phosphorus" className={styles.cycleLink}>
                Phosphorus Cycle
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.title}>
            The Nitrogen Cycle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.subtitle}
          >
            Learn how nitrogen transforms and moves through the atmosphere, soil, and living organisms
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
            Nitrogen Journey
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
                  src="/nitrogen.png?height=400&width=800"
                  alt="Nitrogen Cycle Overview"
                  width={800}
                  height={400}
                  className={styles.cycleImage}
                />
              </div>

              <div className={styles.description}>
                <h2>What is the Nitrogen Cycle?</h2>
                <p>
                  The nitrogen cycle is the biogeochemical cycle that describes how nitrogen moves between the
                  atmosphere, biosphere, and geosphere. Nitrogen is essential for all living organisms as it's a
                  component of amino acids, proteins, and nucleic acids (DNA and RNA). Despite nitrogen gas (N₂) making
                  up about 78% of Earth's atmosphere, most organisms cannot use this form directly due to the strong
                  triple bond between nitrogen atoms.
                </p>

                <h3>Key Processes</h3>
                <ul>
                  <li>
                    <strong>Nitrogen Fixation:</strong> The conversion of atmospheric nitrogen (N₂) into forms usable by
                    plants, primarily ammonia (NH₃). This can occur:
                    <ul>
                      <li>
                        <em>Biologically</em> - by nitrogen-fixing bacteria in soil or in symbiotic relationships with
                        plants (especially legumes)
                      </li>
                      <li>
                        <em>Industrially</em> - through the Haber-Bosch process to create fertilizers
                      </li>
                      <li>
                        <em>Naturally</em> - by lightning, which provides enough energy to break the N₂ bond
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ammonification:</strong> The process by which decomposers convert organic nitrogen from dead
                    organisms and waste back into ammonia.
                  </li>
                  <li>
                    <strong>Nitrification:</strong> A two-step process where specialized bacteria convert ammonia first
                    to nitrites (NO₂⁻) and then to nitrates (NO₃⁻).
                  </li>
                  <li>
                    <strong>Assimilation:</strong> The uptake of nitrogen compounds (primarily nitrates) by plants,
                    which incorporate the nitrogen into organic compounds.
                  </li>
                  <li>
                    <strong>Denitrification:</strong> The process where certain bacteria convert nitrates back to
                    nitrogen gas, returning it to the atmosphere and completing the cycle.
                  </li>
                </ul>

                <div className={styles.factBox}>
                  <h4>Did You Know?</h4>
                  <p>
                    Lightning strikes help convert atmospheric nitrogen into forms that plants can use. Each year,
                    lightning fixes approximately 5-8% of the total nitrogen fixed naturally on Earth. A single
                    lightning bolt can produce enough energy to break the strong triple bond in N₂ molecules.
                  </p>
                </div>

                <h3>Importance of the Nitrogen Cycle</h3>
                <p>The nitrogen cycle is crucial for several reasons:</p>
                <ul>
                  <li>Provides essential nutrients for plant growth and protein synthesis in all organisms</li>
                  <li>Helps maintain soil fertility through the activities of nitrogen-fixing bacteria</li>
                  <li>Supports ecosystem productivity and biodiversity</li>
                  <li>Regulates atmospheric nitrogen levels</li>
                  <li>Influences water quality through nitrogen compounds in runoff</li>
                </ul>

                <h3>Human Impact on the Nitrogen Cycle</h3>
                <p>Human activities have significantly altered the natural nitrogen cycle:</p>
                <ul>
                  <li>
                    Industrial fertilizer production has more than doubled the amount of fixed nitrogen entering the
                    biosphere
                  </li>
                  <li>Agricultural runoff containing excess nitrogen can cause eutrophication in water bodies</li>
                  <li>Burning fossil fuels releases nitrogen oxides that contribute to air pollution and acid rain</li>
                  <li>Deforestation and land-use changes affect nitrogen storage and cycling in ecosystems</li>
                  <li>Wastewater discharge adds excess nitrogen to aquatic ecosystems</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === "diagram" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.diagram}>
              <CycleDiagram
                title="Interactive Nitrogen Cycle Diagram"
                stages={nitrogenCycleStages}
                cycleColor="#5e35b1"
              />

              <div className={styles.diagramInfo}>
                <h3>Understanding the Nitrogen Cycle</h3>
                <p>
                  The nitrogen cycle involves multiple transformations between different forms of nitrogen, each
                  requiring specific organisms or conditions. Unlike carbon or water, most of the nitrogen on Earth
                  exists in a form (N₂) that most organisms cannot directly use, creating a unique dependency on
                  nitrogen-fixing organisms.
                </p>
                <p>
                  Click on each stage in the diagram above to learn more about the different processes in the nitrogen
                  cycle. Notice how nitrogen moves between the atmosphere, soil, and living organisms through various
                  chemical transformations.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "journey" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.journey}>
              <h2>Follow the Journey of a Nitrogen Atom</h2>

              <div className={styles.journeySteps}>
                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌫️</div>
                  <div className={styles.journeyContent}>
                    <h3>Atmospheric Beginning</h3>
                    <p>
                      Our journey begins as a nitrogen atom paired with another nitrogen atom, forming a nitrogen gas
                      (N₂) molecule in Earth's atmosphere. You're part of the most abundant gas in the air, making up
                      about 78% of the atmosphere.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>⚡</div>
                  <div className={styles.journeyContent}>
                    <h3>Lightning Strike</h3>
                    <p>
                      During a thunderstorm, a lightning bolt strikes nearby. The immense energy breaks the strong
                      triple bond holding you to your partner nitrogen atom. You combine with oxygen to form a nitrogen
                      oxide (NOₓ) compound.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌧️</div>
                  <div className={styles.journeyContent}>
                    <h3>Raining Down</h3>
                    <p>
                      Your nitrogen oxide compound dissolves in rainwater, forming nitric acid. You fall to Earth in a
                      raindrop and seep into the soil of a meadow as a nitrate (NO₃⁻) ion.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌱</div>
                  <div className={styles.journeyContent}>
                    <h3>Absorbed by a Plant</h3>
                    <p>
                      A clover plant's roots absorb you in your nitrate form. Inside the plant, you're incorporated into
                      an amino acid, which is then used to build a protein molecule essential for the plant's growth.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🐄</div>
                  <div className={styles.journeyContent}>
                    <h3>Consumed by an Animal</h3>
                    <p>
                      A cow grazing in the meadow eats the clover containing you. In the cow's digestive system, the
                      plant protein is broken down, and you become part of a new protein in the cow's body.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>💩</div>
                  <div className={styles.journeyContent}>
                    <h3>Excreted as Waste</h3>
                    <p>
                      Eventually, the protein containing you is broken down for energy. You're converted to urea and
                      excreted in the cow's waste, returning to the soil in a nitrogen-rich compound.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🦠</div>
                  <div className={styles.journeyContent}>
                    <h3>Ammonification</h3>
                    <p>
                      Decomposer bacteria in the soil break down the waste, converting the organic nitrogen compound
                      containing you into ammonia (NH₃). You're now in a form that's reactive but still not directly
                      usable by most plants.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🔄</div>
                  <div className={styles.journeyContent}>
                    <h3>Nitrification</h3>
                    <p>
                      Specialized nitrifying bacteria transform you first from ammonia to a nitrite (NO₂⁻) and then to a
                      nitrate (NO₃⁻) again. You're back in a form that plants can readily absorb.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>💨</div>
                  <div className={styles.journeyContent}>
                    <h3>Denitrification</h3>
                    <p>
                      Before a plant can absorb you, the soil becomes waterlogged after heavy rain. In these oxygen-poor
                      conditions, denitrifying bacteria use your nitrate form as an alternative electron acceptor in
                      their respiration.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌫️</div>
                  <div className={styles.journeyContent}>
                    <h3>Return to the Atmosphere</h3>
                    <p>
                      The denitrifying bacteria convert you back to dinitrogen gas (N₂). You're released back into the
                      atmosphere, completing the nitrogen cycle and beginning the journey again.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.journeyNote}>
                <p>
                  This journey represents just one possible path for a nitrogen atom. Nitrogen can cycle through many
                  different routes—it might be fixed by symbiotic bacteria in legume root nodules, incorporated into
                  different types of organisms, or remain in the soil for extended periods. The journey of a nitrogen
                  atom highlights the complex transformations and the crucial role of microorganisms in making this
                  essential element available to living things.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "quiz" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.quizSection}>
              <Quiz title="Test Your Knowledge: The Nitrogen Cycle" questions={quizQuestions} cycleColor="#5e35b1" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
