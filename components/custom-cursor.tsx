"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  // Don't render on mobile/touch devices
  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ease-out ${
            isClicking ? "w-2 h-2" : isPointer ? "w-3 h-3" : "w-2 h-2"
          }`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Cursor ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.15s ease-out, opacity 0.3s ease",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ease-out ${
            isPointer ? "w-12 h-12 border-primary bg-primary/10" : "w-8 h-8 border-white/30"
          } ${isClicking ? "scale-75" : "scale-100"}`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Outer glow ring on hover */}
      {isPointer && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            opacity: isVisible ? 0.5 : 0,
          }}
        >
          <div
            className="w-16 h-16 rounded-full border border-primary/30 animate-cursor-pulse"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
    </>
  )
}
