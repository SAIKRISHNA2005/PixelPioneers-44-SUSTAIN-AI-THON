"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, Video, MessageSquare, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CounselingPage() {
  const [selectedCounselor, setSelectedCounselor] = useState(null)

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

  const counselors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Anxiety & Depression",
      availability: "Mon, Wed, Fri",
      image: "/placeholder.svg",
      rating: 4.9,
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Stress Management",
      availability: "Tue, Thu, Sat",
      image: "/placeholder.svg",
      rating: 4.8,
    },
    {
      name: "Dr. Emily Brown",
      specialty: "Relationship Counseling",
      availability: "Mon, Thu, Fri",
      image: "/placeholder.svg",
      rating: 4.7,
    },
  ]

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="container mx-auto px-4 py-8">
      <motion.h1 variants={item} className="text-3xl font-bold mb-6">
        Counseling Services
      </motion.h1>

      <motion.div variants={item} className="grid gap-6 md:grid-cols-3 mb-8">
        {[
          { title: "Video Session", icon: Video, color: "bg-purple-500" },
          { title: "Chat Session", icon: MessageSquare, color: "bg-pink-500" },
          { title: "Schedule Session", icon: Calendar, color: "bg-blue-500" },
        ].map((service, index) => (
          <motion.div key={index} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
            <Card className="text-center h-full flex flex-col justify-between">
              <CardHeader>
                <div className={mx-auto p-3 ${service.color} rounded-full text-white}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Start Now</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item}>
        <h2 className="text-2xl font-bold mb-4">Available Counselors</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <AnimatePresence>
            {counselors.map((counselor, index) => (
              <motion.div key={index} variants={item} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }} layout>
                <Card className="h-full flex flex-col justify-between">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={counselor.image} />
                        <AvatarFallback>{counselor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{counselor.name}</CardTitle>
                        <CardDescription>{counselor.specialty}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Clock className="w-4 h-4" />
                      <span>Available: {counselor.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{counselor.rating}</span>
                    </div>
                  </CardContent>
                  <CardContent className="pt-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" onClick={() => setSelectedCounselor(counselor)}>
                          Book Session
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Book a Session with {selectedCounselor?.name}</DialogTitle>
                          <DialogDescription>Choose a date and time for your counseling session.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                              Date
                            </Label>
                            <Input id="date" type="date" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="time" className="text-right">
                              Time
                            </Label>
                            <Input id="time" type="time" className="col-span-3" />
                          </div>
                        </div>
                        <Button className="w-full">
                          Confirm Booking
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}