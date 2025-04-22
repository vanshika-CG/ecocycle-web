"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import CycleDiagram from "@/components/cycle-diagram"
import Quiz from "@/components/quiz"
import styles from "./page.module.css"

export default function PhosphorusCyclePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const phosphorusCycleStages = [
    {
      id: "rock-phosphorus",
      name: "Rock Phosphorus",
      description: "Phosphorus is found in rocks and minerals like apatite, the primary source of phosphorus on Earth.",
      position: { x: 200, y: 200 },
      connections: ["weathering"],
    },
    {
      id: "weathering",
      name: "Weathering",
      description: "Physical and chemical processes break down phosphate-containing rocks, releasing phosphorus.",
      position: { x: 350, y: 150 },
      connections: ["soil-phosphorus"],
    },
    {
      id: "soil-phosphorus",
      name: "Soil Phosphorus",
      description: "Phosphorus in soil exists as phosphate ions (PO₄³⁻) that can be absorbed by plants.",
      position: { x: 500, y: 200 },
      connections: ["plant-uptake", "leaching", "mining"],
    },
    {
      id: "plant-uptake",
      name: "Plant Uptake",
      description: "Plants absorb phosphate ions through their roots and use them for growth and metabolism.",
      position: { x: 400, y: 300 },
      connections: ["consumption"],
    },
    {
      id: "consumption",
      name: "Consumption",
      description: "Animals eat plants or other animals to obtain phosphorus for bones, teeth, and ATP.",
      position: { x: 550, y: 350 },
      connections: ["excretion", "death"],
    },
    {
      id: "excretion",
      name: "Excretion",
      description: "Animals release phosphorus-containing waste products back to the environment.",
      position: { x: 650, y: 450 },
      connections: ["soil-phosphorus"],
    },
    {
      id: "death",
      name: "Death & Decay",
      description: "When organisms die, decomposers break down their remains, returning phosphorus to the soil.",
      position: { x: 400, y: 450 },
      connections: ["soil-phosphorus"],
    },
    {
      id: "leaching",
      name: "Leaching & Runoff",
      description: "Phosphorus can be carried by water into streams, lakes, and eventually to the ocean.",
      position: { x: 600, y: 250 },
      connections: ["aquatic-phosphorus"],
    },
    {
      id: "aquatic-phosphorus",
      name: "Aquatic Phosphorus",
      description: "Phosphorus in water bodies is used by aquatic plants and algae or settles to the bottom.",
      position: { x: 700, y: 350 },
      connections: ["sedimentation"],
    },
    {
      id: "sedimentation",
      name: "Sedimentation",
      description: "Phosphorus settles to the bottom of water bodies, forming new sedimentary rocks over time.",
      position: { x: 600, y: 500 },
      connections: ["uplift"],
    },
    {
      id: "uplift",
      name: "Geological Uplift",
      description: "Over millions of years, geological processes can expose phosphorus-rich sediments as new land.",
      position: { x: 300, y: 500 },
      connections: ["rock-phosphorus"],
    },
    {
      id: "mining",
      name: "Mining",
      description: "Humans extract phosphate rock to produce fertilizers, accelerating the phosphorus cycle.",
      position: { x: 250, y: 350 },
      connections: ["fertilizers"],
    },
    {
      id: "fertilizers",
      name: "Fertilizers",
      description: "Phosphate fertilizers are applied to crops to increase agricultural productivity.",
      position: { x: 150, y: 450 },
      connections: ["soil-phosphorus"],
    },
  ]

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary source of phosphorus on Earth?",
      options: ["The atmosphere", "Ocean water", "Rocks and minerals", "Plant matter"],
      correctAnswer: 2,
      explanation:
        "Unlike carbon or nitrogen, phosphorus does not have a significant atmospheric component. It primarily exists in rocks and minerals, especially apatite, which is the main source of phosphorus on Earth.",
    },
    {
      id: 2,
      question: "Why is phosphorus important for living organisms?",
      options: [
        "It's needed for photosynthesis only",
        "It's a component of DNA, RNA, ATP, and cell membranes",
        "It's required only for plant growth",
        "It's only important for bone formation",
      ],
      correctAnswer: 1,
      explanation:
        "Phosphorus is essential for all living organisms as it's a component of DNA and RNA (genetic material), ATP (energy transfer), and phospholipids in cell membranes. In vertebrates, it's also a major component of bones and teeth.",
    },
    {
      id: 3,
      question: "How does phosphorus differ from other biogeochemical cycles?",
      options: [
        "It doesn't involve living organisms",
        "It has no gaseous phase and moves primarily through water and land",
        "It only cycles through marine environments",
        "It cycles much faster than other elements",
      ],
      correctAnswer: 1,
      explanation:
        "Unlike carbon, nitrogen, or water cycles, the phosphorus cycle has no significant gaseous phase. Phosphorus moves primarily through water, land, and living organisms, making it a sedimentary cycle rather than a gaseous one.",
    },
    {
      id: 4,
      question: "What environmental problem can excess phosphorus cause in water bodies?",
      options: [
        "Water freezing",
        "Eutrophication and algal blooms",
        "Water acidification",
        "Decreased fish reproduction",
      ],
      correctAnswer: 1,
      explanation:
        "Excess phosphorus in water bodies can cause eutrophication—rapid growth of algae (algal blooms) that can deplete oxygen when they die and decompose, creating 'dead zones' where aquatic life cannot survive. This is a major water quality issue worldwide.",
    },
    {
      id: 5,
      question: "Why are scientists concerned about global phosphorus supplies?",
      options: [
        "Phosphorus is becoming radioactive",
        "High-quality phosphate rock reserves are being depleted",
        "Phosphorus is escaping into space",
        "Plants are evolving to need less phosphorus",
      ],
      correctAnswer: 1,
      explanation:
        "Unlike elements that cycle relatively quickly, phosphorus in rocks takes millions of years to cycle naturally. Humans are rapidly depleting high-quality phosphate rock reserves for fertilizer production. Since phosphorus is essential for food production and has no substitute, this raises concerns about future phosphorus security.",
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
              <Link href="/cycles/nitrogen" className={styles.cycleLink}>
                <ChevronLeft size={16} />
                Nitrogen Cycle
              </Link>
              <Link href="/cycles/oxygen" className={styles.cycleLink}>
                Oxygen Cycle
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.title}>
            The Phosphorus Cycle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.subtitle}
          >
            Explore how phosphorus circulates through rocks, soil, water, and living organisms
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
            Phosphorus Journey
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
                  src="/phosphuros.png?height=400&width=800"
                  alt="Phosphorus Cycle Overview"
                  width={800}
                  height={400}
                  className={styles.cycleImage}
                />
              </div>

              <div className={styles.description}>
                <h2>What is the Phosphorus Cycle?</h2>
                <p>
                  The phosphorus cycle is the biogeochemical cycle that describes how phosphorus moves through the
                  lithosphere, hydrosphere, and biosphere. Phosphorus is essential for all living organisms as it's a
                  component of DNA, RNA, ATP (for energy transfer), and phospholipids in cell membranes. In vertebrates,
                  it's also a major component of bones and teeth.
                </p>
                <p>
                  Unlike other major biogeochemical cycles, the phosphorus cycle does not include a significant
                  atmospheric (gaseous) phase, as phosphorus compounds are generally not volatile. This makes the
                  phosphorus cycle primarily a sedimentary cycle.
                </p>

                <h3>Key Processes</h3>
                <ul>
                  <li>
                    <strong>Weathering:</strong> Physical and chemical processes break down phosphate-containing rocks,
                    releasing phosphorus into the soil.
                  </li>
                  <li>
                    <strong>Plant Uptake:</strong> Plants absorb phosphate ions (PO₄³⁻) from the soil through their
                    roots and incorporate them into organic compounds.
                  </li>
                  <li>
                    <strong>Consumption:</strong> Animals obtain phosphorus by consuming plants or other animals.
                  </li>
                  <li>
                    <strong>Decomposition:</strong> When organisms die, decomposers break down their remains, returning
                    phosphorus to the soil.
                  </li>
                  <li>
                    <strong>Leaching and Runoff:</strong> Phosphorus can be carried by water into streams, lakes, and
                    eventually to the ocean.
                  </li>
                  <li>
                    <strong>Sedimentation:</strong> In aquatic environments, phosphorus can settle to the bottom,
                    forming new sedimentary rocks over geological time.
                  </li>
                  <li>
                    <strong>Geological Uplift:</strong> Over millions of years, geological processes can expose
                    phosphorus-rich sediments as new land.
                  </li>
                </ul>

                <div className={styles.factBox}>
                  <h4>Did You Know?</h4>
                  <p>
                    Phosphorus is often the limiting nutrient in many ecosystems, controlling the rate of plant growth.
                    This is why phosphorus fertilizers are so important for agriculture. However, the world's easily
                    accessible phosphate rock reserves are being depleted, and some experts predict we could face
                    phosphorus shortages within the next 50-100 years.
                  </p>
                </div>

                <h3>Phosphorus Reservoirs</h3>
                <p>Phosphorus is stored in various reservoirs on Earth:</p>
                <ul>
                  <li>
                    <strong>Rocks and Minerals:</strong> The largest reservoir, containing about 99% of all phosphorus
                    on Earth, primarily as the mineral apatite.
                  </li>
                  <li>
                    <strong>Soil:</strong> Contains phosphorus in both organic and inorganic forms.
                  </li>
                  <li>
                    <strong>Living Organisms:</strong> All living things contain phosphorus in their cells.
                  </li>
                  <li>
                    <strong>Oceans:</strong> Dissolved phosphorus and phosphorus in marine organisms and sediments.
                  </li>
                  <li>
                    <strong>Freshwater Systems:</strong> Lakes, rivers, and groundwater contain small amounts of
                    phosphorus.
                  </li>
                </ul>

                <h3>Human Impact on the Phosphorus Cycle</h3>
                <p>Human activities have significantly altered the natural phosphorus cycle:</p>
                <ul>
                  <li>
                    Mining phosphate rock for fertilizer production has accelerated the release of phosphorus from the
                    lithosphere.
                  </li>
                  <li>Agricultural runoff containing excess phosphorus can cause eutrophication in water bodies.</li>
                  <li>Deforestation and land-use changes affect how phosphorus moves through ecosystems.</li>
                  <li>Wastewater discharge adds phosphorus to aquatic ecosystems.</li>
                  <li>Food waste and inefficient agricultural practices lead to phosphorus losses.</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === "diagram" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.diagram}>
              <CycleDiagram
                title="Interactive Phosphorus Cycle Diagram"
                stages={phosphorusCycleStages}
                cycleColor="#d84315"
              />

              <div className={styles.diagramInfo}>
                <h3>Understanding the Phosphorus Cycle</h3>
                <p>
                  The phosphorus cycle is unique among biogeochemical cycles because it doesn't have a significant
                  gaseous phase. Phosphorus primarily moves from rocks to living organisms and back to rocks over very
                  long time scales, with water serving as the main transport mechanism.
                </p>
                <p>
                  Click on each stage in the diagram above to learn more about the different processes in the phosphorus
                  cycle. Notice how phosphorus moves from rocks to soil to living organisms and eventually back to
                  sedimentary rocks through various pathways.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "journey" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.journey}>
              <h2>Follow the Journey of a Phosphorus Atom</h2>

              <div className={styles.journeySteps}>
                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🪨</div>
                  <div className={styles.journeyContent}>
                    <h3>Rock Origins</h3>
                    <p>
                      Our journey begins with a phosphorus atom locked in a mineral called apatite within a sedimentary
                      rock formation. You've been part of this rock for millions of years, having originally come from
                      the remains of marine organisms that lived in an ancient ocean.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌧️</div>
                  <div className={styles.journeyContent}>
                    <h3>Weathering Release</h3>
                    <p>
                      Over time, rain, temperature changes, and chemical processes gradually break down the rock. The
                      slightly acidic rainwater dissolves the apatite mineral, releasing you as a phosphate ion (PO₄³⁻)
                      into the soil solution.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌱</div>
                  <div className={styles.journeyContent}>
                    <h3>Plant Absorption</h3>
                    <p>
                      A corn plant's roots absorb you from the soil solution. Inside the plant, you're incorporated into
                      various organic compounds, including ATP (adenosine triphosphate), which helps store and transfer
                      energy within the plant's cells.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌽</div>
                  <div className={styles.journeyContent}>
                    <h3>Becoming Part of a Crop</h3>
                    <p>
                      As the corn plant grows, you're transferred to a developing corn kernel, becoming part of a
                      phospholipid in the seed's cell membrane. The corn is harvested as part of a successful crop.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🍽️</div>
                  <div className={styles.journeyContent}>
                    <h3>Human Consumption</h3>
                    <p>
                      A person eats the corn. During digestion, the phospholipid containing you is broken down, and
                      you're absorbed into the bloodstream as a phosphate ion. You're then incorporated into a molecule
                      of ATP, helping to power the person's cellular activities.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🦴</div>
                  <div className={styles.journeyContent}>
                    <h3>Bone Formation</h3>
                    <p>
                      Later, you're transported to a growing bone, where you become part of the mineral hydroxyapatite
                      that gives bones their strength. You'll remain in this bone for several years.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🚽</div>
                  <div className={styles.journeyContent}>
                    <h3>Excretion</h3>
                    <p>
                      Eventually, the bone undergoes remodeling, and you're released back into the bloodstream. After
                      being filtered by the kidneys, you're excreted in urine and enter the wastewater system.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🌊</div>
                  <div className={styles.journeyContent}>
                    <h3>Water Pollution</h3>
                    <p>
                      The wastewater treatment plant doesn't completely remove you, and you're discharged into a nearby
                      river as a dissolved phosphate. You flow downstream, eventually reaching a lake.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>🦠</div>
                  <div className={styles.journeyContent}>
                    <h3>Algal Bloom</h3>
                    <p>
                      In the lake, you're quickly absorbed by a cyanobacterium (blue-green algae). Along with other
                      phosphates, you help fuel a rapid algal bloom that covers the lake's surface.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>⬇️</div>
                  <div className={styles.journeyContent}>
                    <h3>Sedimentation</h3>
                    <p>
                      When the cyanobacterium dies, it sinks to the bottom of the lake. You, still part of its remains,
                      become incorporated into the lake sediment, joining other organic and inorganic materials.
                    </p>
                  </div>
                </div>

                <div className={styles.journeyStep}>
                  <div className={styles.journeyIcon}>⏳</div>
                  <div className={styles.journeyContent}>
                    <h3>Long-term Storage</h3>
                    <p>
                      Over thousands of years, more sediment accumulates above you, creating pressure that gradually
                      compacts the sediment into sedimentary rock. You're once again locked in a mineral form, where
                      you'll remain until geological processes or human mining activities release you again.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.journeyNote}>
                <p>
                  This journey represents just one possible path for a phosphorus atom. The phosphorus cycle is the
                  slowest of the major biogeochemical cycles, with the complete cycling of phosphorus from rocks,
                  through the biosphere, and back to rocks taking millions of years. Human activities have accelerated
                  parts of this cycle, particularly through mining phosphate rock for fertilizers and creating
                  phosphorus pollution in water bodies.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "quiz" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.quizSection}>
              <Quiz title="Test Your Knowledge: The Phosphorus Cycle" questions={quizQuestions} cycleColor="#d84315" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
