"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Send, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Message {
  id: number
  sender: "user" | "peer"
  content: string
  timestamp: Date
}

export default function PeerSupportPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "peer", content: "Hi there! How are you feeling today?", timestamp: new Date() },
  ])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        content: newMessage,
        timestamp: new Date(),
      }
      setMessages([...messages, userMessage])
      setNewMessage("")

      // Simulate peer response
      setTimeout(() => {
        const peerMessage: Message = {
          id: messages.length + 2,
          sender: "peer",
          content: "Thank you for sharing. I'm here to listen and support you.",
          timestamp: new Date(),
        }
        setMessages((prevMessages) => [...prevMessages, peerMessage])
      }, 1000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }} className="text-3xl font-bold mb-6">
        Peer Support
      </motion.h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Connect with a Peer</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Share your thoughts and feelings with a supportive peer. Remember, this is a safe space for open
            communication and mutual support.
          </p>
        </CardContent>
      </Card>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Peer Support Chat</h2>
              <p className="text-sm opacity-75">Your peer is here to listen and support</p>
            </div>
          </div>
        </div>

        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={flex ${message.sender === "user" ? "justify-end" : "justify-start"}}
            >
              <div
                className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                  message.sender === "user" ? "bg-purple-100" : "bg-gray-100"
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage} className="bg-purple-500 hover:bg-purple-600">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}