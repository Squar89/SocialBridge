"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Component({ nazwa, podsumowanie }: {nazwa: string, podsumowanie: string}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="mx-10 bg-gradient-to-r from-blue-600 via-blue-600 to-pink-500 text-white text-lg">Zobacz podsumowanie</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
      {isLoading ? (
          <div className="flex flex-col items-center justify-center h-[200px]">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-purple-500 rounded-full animate-spin"></div>
            <div className="mt-4 text-lg font-semibold text-gray-700">Zaczekaj... Sztuczna inteligencja analizuje tekst...</div>
          </div>
        ) : (
          <>
            <DialogHeader>
            <DialogTitle>{nazwa}</DialogTitle>
            {/* <DialogDescription>
                This is an example of a modal dialog. It can be used to display important information or gather user input.
            </DialogDescription> */}
            </DialogHeader>
            <div className="py-4">
            <p style={{ whiteSpace: 'pre-wrap' }}>
                {podsumowanie}
            </p>
            </div>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
        </>
        )}
      </DialogContent>
    </Dialog>
  )
}
