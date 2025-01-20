"use client"

import { motion } from "framer-motion"
import { TrendingUp, Calendar, Award, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProgressPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const goals = [
    { title: "Daily Meditation", progress: 80 },
    { title: "Weekly Exercise", progress: 60 },
    { title: "Sleep Schedule", progress: 90 },
    { title: "Mood Tracking", progress: 75 },
  ]

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.h1 variants={item} className="text-3xl font-bold">
        Progress Tracking
      </motion.h1>

      <motion.div variants={item} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Current Streak", value: "7 Days", icon: TrendingUp },
          { title: "Goals Completed", value: "12/15", icon: Target },
          { title: "Next Milestone", value: "10 Days", icon: Calendar },
          { title: "Achievements", value: "8 Earned", icon: Award },
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} className="p-2 bg-primary rounded-full">
                <stat.icon className="w-4 h-4 text-primary-foreground" />
              </motion.div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Current Goals</CardTitle>
            <CardDescription>Track your progress towards your wellness goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <motion.div key={index} className="space-y-2" whileHover={{ scale: 1.02 }}>
                  <div className="flex justify-between">
                    <span className="font-medium">{goal.title}</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: ${goal.progress}% }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item} className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Progress Chart Placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((achievement) => (
                <motion.div
                  key={achievement}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-3 bg-accent rounded-lg"
                >
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">7-Day Streak</p>
                    <p className="text-sm text-muted-foreground">Completed daily meditation</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}