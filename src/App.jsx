"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuickAccessCard from "@/components/QuickAccessCard";

export default function App() {
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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <motion.div variants={item}>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-white opacity-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)",
                "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)",
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <div className="relative">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Welcome to Your
              <br />
              Wellness Journey
            </motion.h1>
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Your mental health matters. How are you feeling today?
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="lg">
                Track Mood
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickAccessCard
            icon={MessageCircle}
            title="Talk to Someone"
            description="Connect with counselors or peer support"
            color="bg-purple-500"
          />
          <QuickAccessCard
            icon={Heart}
            title="Guided Exercises"
            description="Access meditation and mindfulness practices"
            color="bg-pink-500"
          />
          <QuickAccessCard
            icon={Activity}
            title="Track Progress"
            description="Monitor your wellness journey"
            color="bg-orange-500"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          variants={item}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <Activity className="w-5 h-5 text-purple-500" />
                </motion.div>
                <div>
                  <div className="font-medium">Completed Meditation</div>
                  <div className="text-sm text-gray-500">2 hours ago</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 text-pink-500" />
                </motion.div>
                <div>
                  <div className="font-medium">Counseling Session</div>
                  <div className="text-sm text-gray-500">
                    Tomorrow at 2:00 PM
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
