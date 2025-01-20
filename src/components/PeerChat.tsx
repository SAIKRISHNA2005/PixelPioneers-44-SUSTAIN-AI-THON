"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Smile, Paperclip, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "peer"
  timestamp: Date
}

export default function PeerChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const chatEndRef = useRef<HTMLDivElement>(null)
  const [isTyping, setIsTyping] = useState(false)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        content: newMessage,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages([...messages, message])
      setNewMessage("")

      // Simulate peer typing
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const response: Message = {
          id: (Date.now() + 1).toString(),
          content: "Thanks for your message! I'm here to help.",
          sender: "peer",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, response])
      }, 2000)
    }
  }

  const messageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  }

  const bubbleVariants = {
    initial: { scale: 0 },
    animate: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px] flex flex-col"
    >
      <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Peer Support</h3>
            <p className="text-sm text-white/80">Online</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              variants={messageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={flex ${message.sender === "user" ? "justify-end" : "justify-start"}}
            >
              <motion.div
                variants={bubbleVariants}
                className={`max-w-[80%] ${
                  message.sender === "user"
                    ? "bg-purple-500 text-white rounded-t-2xl rounded-l-2xl"
                    : "bg-gray-100 rounded-t-2xl rounded-r-2xl"
                } p-4 shadow-sm`}
              >
                <p>{message.content}</p>
                <p className={text-xs ${message.sender === "user" ? "text-white/80" : "text-gray-500"} mt-1}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.75 },
              }}
              className="w-2 h-2 bg-purple-500 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.75, delay: 0.25 },
              }}
              className="w-2 h-2 bg-purple-500 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.75, delay: 0.5 },
              }}
              className="w-2 h-2 bg-purple-500 rounded-full"
            />
          </motion.div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center space-x-2">
          <motion.div className="flex-1" whileHover={{ scale: 1.01 }}>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="bg-white"
            />
          </motion.div>
          <motion.div className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <Smile className="h-5 w-5 text-gray-500" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5 text-gray-500" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <ImageIcon className="h-5 w-5 text-gray-500" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button onClick={sendMessage} className="bg-purple-500 hover:bg-purple-600">
                <Send className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}