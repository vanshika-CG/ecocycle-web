"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import styles from "./cycle-diagram.module.css"

interface CycleStage {
  id: string
  name: string
  description: string
  position: { x: number; y: number }
  connections: string[]
}

interface CycleDiagramProps {
  title: string
  stages: CycleStage[]
  cycleColor: string
}

const CycleDiagram = ({ title, stages, cycleColor }: CycleDiagramProps) => {
  const [activeStage, setActiveStage] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: Math.max(500, containerRef.current.offsetWidth * 0.75),
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const handleStageClick = (stageId: string) => {
    setActiveStage(activeStage === stageId ? null : stageId)
  }

  const getScaledPosition = (position: { x: number; y: number }) => {
    const scaleX = dimensions.width / 800
    const scaleY = dimensions.height / 600

    return {
      x: position.x * scaleX,
      y: position.y * scaleY,
    }
  }

  return (
    <div className={styles.cycleDiagramContainer} ref={containerRef}>
      <h3 className={styles.diagramTitle}>{title}</h3>

      <div
        className={styles.diagram}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          backgroundColor: `${cycleColor}10`,
        }}
      >
        {/* Connections */}
        <svg width={dimensions.width} height={dimensions.height} className={styles.connections}>
          {stages.map((stage) =>
            stage.connections.map((targetId) => {
              const target = stages.find((s) => s.id === targetId)
              if (!target) return null

              const sourcePos = getScaledPosition(stage.position)
              const targetPos = getScaledPosition(target.position)

              const isActive = activeStage === stage.id || activeStage === targetId

              return (
                <g key={`${stage.id}-${targetId}`}>
                  <defs>
                    <marker
                      id={`arrowhead-${stage.id}-${targetId}`}
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill={isActive ? cycleColor : "#aaa"} />
                    </marker>
                  </defs>
                  <path
                    d={`M${sourcePos.x} ${sourcePos.y} Q${(sourcePos.x + targetPos.x) / 2} ${(sourcePos.y + targetPos.y) / 2 - 30}, ${targetPos.x} ${targetPos.y}`}
                    stroke={isActive ? cycleColor : "#aaa"}
                    strokeWidth={isActive ? 3 : 2}
                    fill="none"
                    strokeDasharray={isActive ? "none" : "5,5"}
                    markerEnd={`url(#arrowhead-${stage.id}-${targetId})`}
                    className={styles.path}
                  />
                </g>
              )
            }),
          )}
        </svg>

        {/* Stages */}
        {stages.map((stage) => {
          const isActive = activeStage === stage.id
          const scaledPos = getScaledPosition(stage.position)

          return (
            <motion.div
              key={stage.id}
              className={`${styles.stage} ${isActive ? styles.active : ""}`}
              style={{
                left: scaledPos.x,
                top: scaledPos.y,
                borderColor: isActive ? cycleColor : "transparent",
                backgroundColor: isActive ? `${cycleColor}30` : `${cycleColor}20`,
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleStageClick(stage.id)}
            >
              <div className={styles.stageName}>{stage.name}</div>

              {isActive && (
                <motion.div
                  className={styles.stageInfo}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{stage.description}</p>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className={styles.instructions}>Click on any stage to learn more about it</div>
    </div>
  )
}

export default CycleDiagram
