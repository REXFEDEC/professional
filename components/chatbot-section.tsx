"use client"

import type React from "react"
import { useState } from "react"
import { Send, Sparkles, User, Bot, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hey! I'm Sameer's totally-not-overhyped AI assistant. Ask me anything — or don't. I'm just here because everyone has one now.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      console.log("[Chatbot] Sending message:", userMessage.content)
      const response = await fetch("https://adhdbackend.sameermann5335.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.content }),
      })
      console.log("[Chatbot] Response status:", response.status)

      if (!response.ok) {
        throw new Error(`Failed to get response: ${response.status}`)
      }

      const data = await response.json()
      console.log("[Chatbot] Response JSON:", data)

      const aiReply = data?.response ?? data?.reply
      console.log("[Chatbot] Parsed reply:", aiReply)

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: aiReply || "I apologize, but I couldn't process your request. Please try again.",
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("[Chatbot] Error handling message:", error)
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I'm currently running on vibes and caffeine. Connect me to the actual API at /your-worker-url and I'll be much smarter, I promise.",
      }
      setMessages((prev) => [...prev, fallbackMessage])
    } finally {
      console.log("[Chatbot] Request complete")
      setIsLoading(false)
    }
  }

  return (
    <section id="chatbot" className="relative py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
              <Bot className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">The Obligatory Chatbot</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Since everyone has a chatbot project on their portfolio these days, I figured I'd add one too.
            <br className="hidden sm:block" />
            <span className="text-primary">At least this one actually works.</span>
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Chat Container */}
        <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-primary/5">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Sameer's AI Assistant</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Online — probably
                </p>
              </div>
              <MessageSquare className="w-5 h-5 text-muted-foreground ml-auto" />
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 sm:h-96 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={cn("flex gap-3", message.role === "user" ? "flex-row-reverse" : "")}>
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    message.role === "user" ? "bg-secondary/50" : "bg-primary/20",
                  )}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4 text-foreground" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3 text-sm sm:text-base",
                    message.role === "user"
                      ? "bg-primary/20 text-foreground rounded-tr-none"
                      : "bg-secondary/30 text-foreground rounded-tl-none",
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-secondary/30 rounded-2xl rounded-tl-none px-4 py-3">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 border-t border-border/50 bg-secondary/5">
            <div className="flex gap-2 sm:gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..."
                disabled={isLoading}
                className="flex-1 bg-secondary/30 border-border/50 focus:border-primary focus:ring-primary/20 rounded-full text-sm sm:text-base"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary hover:bg-primary/90 p-0 glow-button"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </Button>
            </div>
          </form>
        </div>

        {/* Fun footer note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Powered by Cloudflare Workers. No GPUs were harmed in the making of this chatbot.
        </p>
      </div>
    </section>
  )
}
