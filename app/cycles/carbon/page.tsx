"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import CycleDiagram from "@/components/cycle-diagram"
import Quiz from "@/components/quiz"
import styles from "./page.module.css"

export default function CarbonCyclePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const carbonCycleStages = [
    {
      id: "photosynthesis",
      name: "Photosynthesis",
      description: "Plants and algae convert CO₂ from the atmosphere into organic compounds using sunlight energy.",
      position: { x: 200, y: 200 },
      connections: ["plant-respiration", "consumption"],
    },
    {
      id: "plant-respiration",
      name: "Plant Respiration",
      description: "Plants release CO₂ back into the atmosphere through cellular respiration.",
      position: { x: 350, y: 100 },
      connections: ["atmospheric-carbon"],
    },
    {
      id: "consumption",
      name: "Consumption",
      description: "Animals consume plants and other organisms, incorporating carbon into their bodies.",
      position: { x: 500, y: 200 },
      connections: ["animal-respiration", "death"],
    },
    {
      id: "animal-respiration",
      name: "Animal Respiration",
      description: "Animals release CO₂ into the atmosphere through cellular respiration.",
      position: { x: 650, y: 100 },
      connections: ["atmospheric-carbon"],
    },
    {
      id: "death",
      name: "Death & Decay",
      description: "When organisms die, decomposers break down their remains, releasing carbon.",
      position: { x: 600, y: 350 },
      connections: ["soil-carbon", "fossil-formation"],
    },
    {
      id: "soil-carbon",
      name: "Soil Carbon",
      description: "Carbon is stored in soil as organic matter and can be released through soil respiration.",
      position: { x: 400, y: 450 },
      connections: ["atmospheric-carbon"],
    },
    {
      id: "fossil-formation",
      name: "Fossil Formation",
      description: "Under certain conditions, dead organisms can form fossil fuels over millions of years.",
      position: { x: 200, y: 350 },
      connections: ["combustion"],
    },
    {
      id: "combustion",
      name: "Combustion",
      description: "Burning fossil fuels releases stored carbon back into the atmosphere as CO₂.",
      position: { x: 100, y: 250 },
      connections: ["atmospheric-carbon"],
    },
    {
      id: "atmospheric-carbon",
      name: "Atmospheric Carbon",
      description: "CO₂ in the atmosphere acts as a greenhouse gas and is available for photosynthesis.",
      position: { x: 400, y: 300 },
      connections: ["photosynthesis", "ocean-exchange"],
    },
    {
      id: "ocean-exchange",
      name: "Ocean Exchange",
      description: "Oceans absorb and release CO₂, acting as a major carbon reservoir.",
      position: { x: 300, y: 400 },
      connections: ["atmospheric-carbon", "marine-life"],
    },
    {
      id: "marine-life",
      name: "Marine Life",
      description: "Marine organisms use carbon for shells and structures, which can form sediments when they die.",
      position: { x: 500, y: 500 },
      connections: ["ocean-exchange"],
    },
  ]

  const quizQuestions = [
    {
      id: 1,
      question: "Which process removes carbon dioxide from the atmosphere?",
      options: ["Combustion", "Respiration", "Photosynthesis", "Decomposition"],
      correctAnswer: 2,
      explanation:
        "Photosynthesis is the process where plants and algae use sunlight energy to convert carbon dioxide and water into glucose and oxygen, removing CO₂ from the atmosphere.",
    },
    {
      id: 2,
      question: "What are carbon sinks?",
      options: [
        "Places where carbon is released into the atmosphere",
        "Environments that absorb more carbon than they release",
        "Areas where fossil fuels are formed",
        "Locations where carbon cannot exist",
      ],
      correctAnswer: 1,
      explanation:
        "Carbon sinks are natural environments like forests, oceans, and soil that absorb more carbon dioxide from the atmosphere than they release, helping to reduce atmospheric CO₂ levels.",
    },
    {
      id: 3,
      question: "Which human activity has significantly increased atmospheric carbon dioxide levels?",
      options: ["Planting trees", "Ocean conservation", "Burning fossil fuels", "Sustainable agriculture"],
      correctAnswer: 2,
      explanation:
        "Burning fossil fuels (coal, oil, natural gas) releases carbon that was stored underground for millions of years, significantly increasing atmospheric CO₂ levels since the Industrial Revolution.",
    },
    {
      id: 4,
      question: "How do oceans participate in the carbon cycle?",
      options: [
        "They only release carbon dioxide",
        "They only absorb carbon dioxide",
        "They both absorb and release carbon dioxide",
        "They have no role in the carbon cycle",
      ],
      correctAnswer: 2,
      explanation:
        "Oceans both absorb and release carbon dioxide. They act as major carbon sinks, absorbing about 25% of human-produced CO₂, but can also release it back to the atmosphere depending on conditions.",
    },
    {
      id: 5,
      question: "What happens to carbon in the bodies of living organisms when they die?",
      options: [
        "It immediately returns to the atmosphere",
        "It is decomposed by microorganisms and released as CO₂ or stored in soil",
        "It permanently remains in the organism's remains",
        "It transforms into oxygen",
      ],
      correctAnswer: 1,
      explanation:
        "When organisms die, decomposers (bacteria and fungi) break down their remains, releasing carbon as CO₂ through respiration or storing it in soil as organic matter. Under special conditions, it may form fossil fuels over millions of years.",
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
              <Link href="/cycles/water" className={styles.cycleLink}>
                <ChevronLeft size={16} />
                Water Cycle
              </Link>
              <Link href="/cycles/nitrogen" className={styles.cycleLink}>
                Nitrogen Cycle
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.title}>
            The Carbon Cycle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.subtitle}
          >
            Discover how carbon moves between the atmosphere, oceans, soil, and living organisms
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
            Carbon Journey
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
                  src="/carbon.png?height=400&width=800"
                  alt="Carbon Cycle Overview"
                  width={800}
                  height={400}
                  className={styles.cycleImage}
                />
              </div>

              <div className={styles.description}>
                <h2>What is the Carbon Cycle?</h2>
                <p>
                  The carbon cycle is the biogeochemical cycle by which carbon is exchanged among the biosphere,
                  pedosphere, geosphere, hydrosphere, and atmosphere of the Earth. It is one of Earth's most important
                  cycles and allows for carbon to be recycled and reused throughout the biosphere and all of its
                  organisms.
                </p>

                <h3>Key Processes</h3>
                <ul>
                  <li>
                    <strong>Photosynthesis:</strong> Plants, algae, and certain bacteria convert carbon dioxide from the
                    atmosphere into organic compounds using energy from sunlight.
                  </li>
                  <li>
                    <strong>Respiration:</strong> Plants, animals, and microorganisms convert organic carbon back to
                    carbon dioxide, releasing energy.
                  </li>
                  <li>
                    <strong>Decomposition:</strong> When organisms die, decomposers break down their remains, releasing
                    carbon dioxide back to the atmosphere.
                  </li>
                  <li>
                    <strong>Ocean Exchange:</strong> Carbon dioxide dissolves in the ocean, where it can be used by
                    marine organisms or released back to the atmosphere.
                  </li>
                  <li>
                    <strong>Fossil Fuel Formation:</strong> Under certain conditions, dead organisms can be transformed
                    into fossil fuels over millions of years.
                  </li>
                  <li>
                    <strong>Combustion:</strong> Burning fossil fuels or biomass releases carbon dioxide into the
                    atmosphere.
                  </li>
                </ul>

                <div className={styles.factBox}>
                  <h4>Did You Know?</h4>
                  <p>
                    A single carbon atom could have been part of countless different organisms throughout Earth's
                    history. The carbon in your body might once have been part of a dinosaur, a tree, or even a star!
                  </p>
                </div>

                <h3>Carbon Reservoirs</h3>
                <p>Carbon is stored in various reservoirs on Earth:</p>
                <ul>
                  <li>
                    <strong>Atmosphere:</strong> As carbon dioxide, methane, and other greenhouse gases (approximately
                    800 gigatons of carbon).
                  </li>
                  <li>
                    <strong>Oceans:</strong> Dissolved carbon dioxide, carbonic acid, and carbonates (approximately
                    38,000 gigatons).
                  </li>
                  <li>
                    <strong>Terrestrial Biosphere:</strong> In living and dead organisms (approximately 2,000 gigatons).
                  </li>
                  <li>
                    <strong>Soil:</strong> In organic matter and microorganisms (approximately 1,500 gigatons).
                  </li>
                  <li>
                    <strong>Fossil Fuels:</strong> In coal, oil, and natural gas deposits (approximately 5,000
                    gigatons).
                  </li>
                  <li>
                    <strong>Sedimentary Rocks:</strong> Primarily as calcium carbonate (approximately 100,000,000
                    gigatons).
                  </li>
                </ul>

                <h3>Human Impact on the Carbon Cycle</h3>
                <p>Human activities have significantly altered the natural carbon cycle:</p>
                <ul>
                  <li>Burning fossil fuels releases carbon that was stored underground for millions of years.</li>
                  <li>Deforestation reduces the Earth's capacity to remove CO₂ from the atmosphere.</li>
                  <li>Agriculture and land-use changes affect how carbon is stored in soils and vegetation.</li>
                  <li>
                    Increased atmospheric CO₂ leads to ocean acidification as more carbon dioxide dissolves in seawater.
                  </li>
                  <li>
                    Climate change, driven by increased greenhouse gases, can affect carbon storage in various
                    ecosystems.
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === "diagram" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.diagram}>
              <CycleDiagram title="Interactive Carbon Cycle Diagram" stages={carbonCycleStages} cycleColor="#2e7d32" />

              <div className={styles.diagramInfo}>
                <h3>Understanding the Carbon Cycle</h3>
                <p>
                  The carbon cycle is a complex network of processes where carbon atoms continuously move between
                  different reservoirs on Earth. Unlike some other cycles, the carbon cycle includes both very fast
                  processes (like respiration) and extremely slow ones (like fossil fuel formation).
                </p>
                <p>
                  Click on each stage in the diagram above to learn more about the different processes in the carbon
                  cycle. Notice how carbon moves between the atmosphere, living organisms, oceans, and geological
                  formations.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "journey" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.journey}>
              <h2>Follow the Journey of a Carbon Atom</h2>

              <div className={styles.journeySteps}>
                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌫️</div>
                  <div className={styles.journeyContent}>
                    <h3>Atmospheric Beginning</h3>
                    <p>
                      Our journey begins as a carbon atom in a carbon dioxide (CO₂) molecule, floating in Earth's
                      atmosphere. You're part of a greenhouse gas that helps keep Earth warm enough for life to exist.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌱</div>
                  <div className={styles.journeyContent}>
                    <h3>Captured by Photosynthesis</h3>
                    <p>
                      A maple tree draws you in through tiny pores in its leaves. Inside the leaf, you're incorporated
                      into a glucose molecule through photosynthesis, as the tree combines CO₂ with water using energy
                      from sunlight.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌳</div>
                  <div className={styles.journeyContent}>
                    <h3>Building a Tree</h3>
                    <p>
                      The tree uses the glucose containing you to build cellulose, becoming part of the tree's growing
                      trunk. You'll spend decades here as the tree grows tall and strong, with your carbon atom locked
                      in the tree's woody tissues.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🍂</div>
                  <div className={styles.journeyContent}>
                    <h3>Falling to Earth</h3>
                    <p>
                      After many years, the branch containing you dies and falls to the forest floor. You're now part of
                      leaf litter and deadwood accumulating on the soil surface.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🦠</div>
                  <div className={styles.journeyContent}>
                    <h3>Decomposition</h3>
                    <p>
                      Fungi and bacteria begin breaking down the dead wood. A fungus digests the cellulose containing
                      your carbon atom, using some of the carbon for energy and growth.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🐛</div>
                  <div className={styles.journeyContent}>
                    <h3>Consumed by Soil Life</h3>
                    <p>
                      A soil arthropod eats the fungus containing you. Your carbon atom becomes part of this tiny
                      creature's body, incorporated into one of its proteins.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>💨</div>
                  <div className={styles.journeyContent}>
                    <h3>Released Through Respiration</h3>
                    <p>
                      The arthropod uses the protein for energy through cellular respiration. This breaks down the
                      molecules containing you, and you're exhaled as part of a CO₂ molecule back into the air.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌊</div>
                  <div className={styles.journeyContent}>
                    <h3>Dissolving in the Ocean</h3>
                    <p>
                      Wind carries your CO₂ molecule over the ocean, where it dissolves into the seawater, forming
                      carbonic acid. You're now part of the largest carbon reservoir on Earth's surface.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🦐</div>
                  <div className={styles.journeyContent}>
                    <h3>Becoming Marine Life</h3>
                    <p>
                      A phytoplankton absorbs the dissolved carbon containing you and uses it to grow. Later, a tiny
                      shrimp-like copepod eats the phytoplankton, and you become part of its shell as calcium carbonate.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>⬇️</div>
                  <div className={styles.journeyContent}>
                    <h3>Sinking to the Deep</h3>
                    <p>
                      When the copepod dies, its shell sinks to the ocean floor. Over time, your carbon atom, still in
                      the calcium carbonate shell, becomes part of the seafloor sediment.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🪨</div>
                  <div className={styles.journeyContent}>
                    <h3>Forming Limestone</h3>
                    <p>
                      Over millions of years, the sediment containing you is compressed and transformed into limestone
                      rock. Your carbon atom is now stored in Earth's lithosphere, where it might remain for millions of
                      years more.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌋</div>
                  <div className={styles.journeyContent}>
                    <h3>Volcanic Release</h3>
                    <p>
                      Eventually, tectonic forces push the limestone into a subduction zone. Under intense heat and
                      pressure, the rock melts, and your carbon atom is released as CO₂ through a volcanic eruption,
                      returning to the atmosphere to begin the cycle again.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.journeyNote}>
                <p>
                  This journey represents just one possible path for a carbon atom. Carbon can cycle through many
                  different routes—it might be breathed in by an animal, become part of a fossil fuel, or cycle quickly
                  between the atmosphere and biosphere. A single carbon atom could take thousands or millions of years
                  to complete one full cycle, or it might cycle between reservoirs much more quickly.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "quiz" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.quizSection}>
              <Quiz title="Test Your Knowledge: The Carbon Cycle" questions={quizQuestions} cycleColor="#2e7d32" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
