"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface QuickAccessCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export default function QuickAccessCard({ icon: Icon, title, description, color }: QuickAccessCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }} className="bg-white rounded-xl p-6 shadow-lg">
      <motion.div
        className={${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="h-6 w-6 text-white" />
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}