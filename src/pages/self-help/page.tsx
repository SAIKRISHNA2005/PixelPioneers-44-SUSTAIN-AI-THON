"use client";

import { motion } from "framer-motion";
import { Book, Video, Headphones, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SelfHelpPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const resources = [
    {
      title: "Reading Materials",
      description: "Articles and guides on mental wellness",
      icon: Book,
      items: [
        "Understanding Anxiety",
        "Stress Management",
        "Building Resilience",
      ],
    },
    {
      title: "Video Resources",
      description: "Educational videos and tutorials",
      icon: Video,
      items: [
        "Meditation Basics",
        "Breathing Exercises",
        "Mindfulness Practice",
      ],
    },
    {
      title: "Audio Sessions",
      description: "Guided meditations and relaxation",
      icon: Headphones,
      items: ["Sleep Meditation", "Anxiety Relief", "Daily Calm"],
    },
    {
      title: "Worksheets",
      description: "Practical exercises and activities",
      icon: FileText,
      items: ["Mood Tracker", "Thought Journal", "Goal Setting"],
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.h1 variants={item} className="text-3xl font-bold">
        Self-Help Resources
      </motion.h1>

      <motion.div variants={item} className="grid gap-6 md:grid-cols-2">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 bg-primary rounded-full"
                  >
                    <resource.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
