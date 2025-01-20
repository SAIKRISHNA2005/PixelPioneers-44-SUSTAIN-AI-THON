"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  LayoutDashboard,
  Heart,
  Users,
  MessageCircle,
  BookOpen,
  Activity,
  Trophy,
  UserCircle,
  Lock,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Heart, label: "Self-Help Resources", href: "/self-help" },
  { icon: Users, label: "Peer Support", href: "/peer-support" },
  { icon: MessageCircle, label: "Counseling", href: "/counseling" },
  { icon: BookOpen, label: "Education", href: "/education" },
  { icon: Activity, label: "Progress Tracking", href: "/progress" },
  { icon: Trophy, label: "Achievements", href: "/achievements" },
  { icon: UserCircle, label: "Social Support", href: "/social" },
  { icon: Lock, label: "Privacy Controls", href: "/privacy" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: -264 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-purple-600 to-pink-500 text-white"
    >
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <Heart className="h-8 w-8" />
          <span>WellnessPortal</span>
        </motion.div>
      </div>

      <nav className="mt-6 px-3">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm relative ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.div>
  );
}
