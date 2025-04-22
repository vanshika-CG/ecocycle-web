"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./glossary.module.css"

interface GlossaryTerm {
  id: string
  term: string
  definition: string
  category: string
}

interface GlossaryProps {
  terms: GlossaryTerm[]
}

const Glossary = ({ terms }: GlossaryProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [filteredTerms, setFilteredTerms] = useState<GlossaryTerm[]>(terms)

  const categories = Array.from(new Set(terms.map((term) => term.category)))

  useEffect(() => {
    let results = terms

    if (searchQuery) {
      results = results.filter(
        (term) =>
          term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (activeCategory) {
      results = results.filter((term) => term.category === activeCategory)
    }

    setFilteredTerms(results)
  }, [searchQuery, activeCategory, terms])

  return (
    <div className={styles.glossaryContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <Search className={styles.searchIcon} size={18} />
          <input
            type="text"
            placeholder="Search terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.categoryFilters}>
          <button
            className={`${styles.categoryButton} ${activeCategory === null ? styles.active : ""}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.termsContainer}>
        <AnimatePresence>
          {filteredTerms.length > 0 ? (
            filteredTerms.map((term) => (
              <motion.div
                key={term.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.termCard}
              >
                <div className={styles.termHeader}>
                  <h3 className={styles.term}>{term.term}</h3>
                  <span className={styles.category}>{term.category}</span>
                </div>
                <p className={styles.definition}>{term.definition}</p>
              </motion.div>
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.noResults}>
              <p>No terms found matching your search.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Glossary
