"use client";

import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-sm py-4 px-6"
    >
      <div className="flex items-center justify-between">
        <motion.div className="w-96" whileHover={{ scale: 1.02 }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="pl-10 bg-gray-50 border-0 focus-visible:ring-purple-500"
            />
          </div>
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3"
          >
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium">John Doe</div>
              <div className="text-gray-500">Student</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
