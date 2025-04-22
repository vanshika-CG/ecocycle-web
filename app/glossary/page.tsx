"use client"

import { motion } from "framer-motion"
import Glossary from "@/components/glossary"
import styles from "./page.module.css"

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      id: "evaporation",
      term: "Evaporation",
      definition: "The process by which water changes from a liquid to a gas or vapor due to heat energy.",
      category: "Water Cycle",
    },
    {
      id: "condensation",
      term: "Condensation",
      definition: "The process by which water vapor in the air changes to liquid water when cooled.",
      category: "Water Cycle",
    },
    {
      id: "precipitation",
      term: "Precipitation",
      definition: "Water that falls to the Earth's surface as rain, snow, sleet, or hail.",
      category: "Water Cycle",
    },
    {
      id: "transpiration",
      term: "Transpiration",
      definition:
        "The process by which moisture is carried through plants from roots to small pores on the underside of leaves, where it changes to vapor and is released to the atmosphere.",
      category: "Water Cycle",
    },
    {
      id: "groundwater",
      term: "Groundwater",
      definition:
        "Water that exists beneath the Earth's surface in soil pore spaces and in the fractures of rock formations.",
      category: "Water Cycle",
    },
    {
      id: "photosynthesis",
      term: "Photosynthesis",
      definition:
        "The process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water, generating oxygen as a byproduct.",
      category: "Carbon Cycle",
    },
    {
      id: "respiration",
      term: "Respiration",
      definition:
        "The metabolic process by which organisms obtain energy by reacting oxygen with glucose to give water, carbon dioxide, and energy.",
      category: "Carbon Cycle",
    },
    {
      id: "fossil-fuels",
      term: "Fossil Fuels",
      definition:
        "Natural fuels such as coal, oil, or natural gas, formed in the geological past from the remains of living organisms.",
      category: "Carbon Cycle",
    },
    {
      id: "carbon-sink",
      term: "Carbon Sink",
      definition:
        "A forest, ocean, or other natural environment that absorbs more carbon dioxide from the atmosphere than it releases.",
      category: "Carbon Cycle",
    },
    {
      id: "decomposition",
      term: "Decomposition",
      definition:
        "The process by which organic substances are broken down into simpler forms of matter, releasing carbon dioxide.",
      category: "Carbon Cycle",
    },
    {
      id: "nitrogen-fixation",
      term: "Nitrogen Fixation",
      definition:
        "The process by which atmospheric nitrogen is converted into ammonia or related nitrogenous compounds, typically by bacteria.",
      category: "Nitrogen Cycle",
    },
    {
      id: "nitrification",
      term: "Nitrification",
      definition:
        "The biological oxidation of ammonia to nitrite followed by the oxidation of nitrite to nitrate, performed by nitrifying bacteria.",
      category: "Nitrogen Cycle",
    },
    {
      id: "denitrification",
      term: "Denitrification",
      definition:
        "The microbial process of reducing nitrate and nitrite to gaseous forms of nitrogen, primarily nitrous oxide and nitrogen gas.",
      category: "Nitrogen Cycle",
    },
    {
      id: "ammonification",
      term: "Ammonification",
      definition: "The process by which organic nitrogen from dead organisms is converted into ammonia by decomposers.",
      category: "Nitrogen Cycle",
    },
    {
      id: "legumes",
      term: "Legumes",
      definition:
        "Plants in the family Fabaceae that form symbiotic relationships with nitrogen-fixing bacteria in their root nodules.",
      category: "Nitrogen Cycle",
    },
    {
      id: "weathering",
      term: "Weathering",
      definition:
        "The breakdown of rocks and minerals on Earth's surface through exposure to atmospheric conditions and biological activity.",
      category: "Phosphorus Cycle",
    },
    {
      id: "phosphate",
      term: "Phosphate",
      definition:
        "A chemical compound containing phosphorus and oxygen, the form in which phosphorus is most commonly found in the environment.",
      category: "Phosphorus Cycle",
    },
    {
      id: "eutrophication",
      term: "Eutrophication",
      definition:
        "Excessive richness of nutrients in a body of water, frequently due to runoff from the land, which causes a dense growth of plant life and death of animal life from lack of oxygen.",
      category: "Phosphorus Cycle",
    },
    {
      id: "sedimentation",
      term: "Sedimentation",
      definition:
        "The process by which particles in suspension in water or air settle to the bottom of a body of water or are deposited on land.",
      category: "Phosphorus Cycle",
    },
    {
      id: "phosphorus-limitation",
      term: "Phosphorus Limitation",
      definition:
        "A condition where the growth of organisms is restricted by the availability of phosphorus in the environment.",
      category: "Phosphorus Cycle",
    },
    {
      id: "ozone",
      term: "Ozone",
      definition:
        "A form of oxygen (O₃) that occurs naturally in the Earth's upper atmosphere and protects life by absorbing harmful ultraviolet radiation.",
      category: "Oxygen Cycle",
    },
    {
      id: "cellular-respiration",
      term: "Cellular Respiration",
      definition:
        "The process by which cells break down glucose and other molecules, consuming oxygen and producing carbon dioxide and energy.",
      category: "Oxygen Cycle",
    },
    {
      id: "stratosphere",
      term: "Stratosphere",
      definition:
        "The second major layer of Earth's atmosphere, lying above the troposphere and containing the ozone layer.",
      category: "Oxygen Cycle",
    },
    {
      id: "aerobic",
      term: "Aerobic",
      definition: "Processes or organisms that require the presence of oxygen to function properly.",
      category: "Oxygen Cycle",
    },
    {
      id: "anaerobic",
      term: "Anaerobic",
      definition: "Processes or organisms that do not require oxygen to function.",
      category: "Oxygen Cycle",
    },
  ]

  return (
    <div className={styles.glossaryPage}>
      <div className="container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.title}>
          Biogeochemical Cycles Glossary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.subtitle}
        >
          A comprehensive reference of terms related to Earth's major biogeochemical cycles
        </motion.p>

        <Glossary terms={glossaryTerms} />
      </div>
    </div>
  )
}
