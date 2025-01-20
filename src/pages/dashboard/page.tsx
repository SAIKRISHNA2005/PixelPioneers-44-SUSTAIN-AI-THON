"use client"

import { motion } from "framer-motion"
import { Activity, TrendingUp, Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
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

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.h1 variants={item} className="text-3xl font-bold">
        Dashboard
      </motion.h1>

      <motion.div variants={item} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Sessions", value: "24", icon: Activity, color: "bg-purple-500" },
          { title: "Progress Score", value: "85%", icon: TrendingUp, color: "bg-pink-500" },
          { title: "Next Session", value: "Tomorrow", icon: Calendar, color: "bg-blue-500" },
          { title: "Time Spent", value: "12.5 hrs", icon: Clock, color: "bg-orange-500" },
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} className={${stat.color} p-2 rounded-full}>
                <stat.icon className="w-4 h-4 text-white" />
              </motion.div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div variants={item} className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Activity Chart Placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((session) => (
                <motion.div
                  key={session}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-3 bg-accent rounded-lg"
                >
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Counseling Session</p>
                    <p className="text-sm text-muted-foreground">Tomorrow at 2:00 PM</p>
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