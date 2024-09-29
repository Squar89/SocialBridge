'use client'

import Image from "next/image"
import { rankEvents } from "@/lib/utils"
import { MoreHorizontal, Search } from "lucide-react"

import VerifiedBadge from "@/components/ui/verified-badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {useEffect, useState} from "react";
import {getEvents} from "@/lib/storage";
import {getImageForString, getImages} from "@/lib/utils";
import Link from "next/link";

export function DashboardEventCards() {
  let filteredEvents = getEvents();
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState<any[]>(filteredEvents)

const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // setIsLoading(true)
    try {
      const filteredEvents = await rankEvents(searchTerm)
      setData(filteredEvents)
    } catch (error) {
      console.error("Error ranking NGOs:", error)
    } finally {
      // setIsLoading(false)
    }
  }

  return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col items-center mt-6 mb-4">
          <form onSubmit={handleSearch} className="relative w-full max-w-[58%]">
            <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground mr-6"/>
            <Input
                type="search"
                placeholder=" Jakie wydarzenie cie interesuje?"
                className="w-full rounded-lg bg-background pl-8 py-5 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <div className="flex flex-col items-center gap-4">
            {data !== null && data.length > 0 ? (
                data.map((event: any, index: any) => (
                    <Card key={index} className="w-full max-w-[60%] rounded-md shadow-sm relative overflow-hidden">
                      <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-white to-transparent z-10"></div>
                        <Image
                            alt="Background image"
                            src={getImageForString(event.description)}
                            layout="fill"
                            objectFit="cover"
                            className="opacity-40"
                        />
                      </div>
                      <div className="relative z-20">
                        <CardHeader className="flex flex-row items-start space-y-0 pb-2 items-center">
                          <div className="pr-4">
                            <CardTitle className="text-xl font-bold">
                              {event.nazwa}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-start space-x-4 justify-between space-y-0">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {event.description}
                              </p>
                              <p className="text-sm font-medium mt-2">Organizowane przez: <b>{event.organization}</b></p>
                              <p className="text-xs text-muted-foreground mt-1">Ostatnia aktywność: 2024-07-12 10:42
                                AM</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-center">
                          <div className="flex w-full max-w-2xl mb-2">
                              <div
                                  className="flex items-center justify-center flex-1 mx-1 bg-white text-black text-sm rounded-lg h-12"
                              >
                              <b>Potrzebni ludzie: {event.human_resources}</b>
                              </div>
                              <div
                                  className="flex items-center justify-center flex-1 mx-1 bg-white text-black text-sm rounded-lg h-12"
                              >
                              <b>Potrzebne pieniądze: {event.financial_support}</b>
                              </div>
                          </div>
                          <Link href={"/event/"+event.id} passHref
                                className="flex w-full max-w-sm mb-2 h-12"
                          >
                            <Button
                                className="flex w-full max-w-sm mb-2 h-12"
                            >
                              <b>Wesprzyj wydarzenie</b>
                            </Button>
                          </Link>
                        </CardFooter>

                      </div>
                    </Card>
                ))
            ) : (
                <p>Nie znaleziono wydarzeń pasujących do kryteriów wyszukiwania.</p>
            )}
          </div>
        </main>
      </div>
  )
}
