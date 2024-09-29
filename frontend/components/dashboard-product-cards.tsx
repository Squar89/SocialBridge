'use client'

import Image from "next/image"
import { MoreHorizontal, Search } from "lucide-react"
import { rankNgos } from "@/lib/utils"

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
import {getOrganizations} from "@/lib/storage";
import {getImageForString, getImages, sumCharacters} from "@/lib/utils";
import Link from 'next/link';

export function DashboardProductCards() {
  let filteredNGOs = getOrganizations();
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState<any[]>(filteredNGOs)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // setIsLoading(true)
    try {
      const filteredNGOs = await rankNgos(searchTerm)
      setData(filteredNGOs)
    } catch (error) {
      console.error("Error ranking NGOs:", error)
    } finally {
      // setIsLoading(false)
    }
  }

  function toTitleCase(str: string) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
  }

  return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col items-center mt-6 mb-4">
          <form onSubmit={handleSearch} className="relative w-full max-w-[58%]">
            <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground mr-6"/>
            <Input
                type="search"
                placeholder=" Jaka organizacja cię interesuje?"
                className="w-full rounded-lg bg-background pl-8 py-5 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <div className="flex flex-col items-center gap-4">
            {data !== null && data.length > 0 ? (
                data.map((ngo: any, index: any) => (
                <Card key={index} className="w-full max-w-[60%] rounded-md shadow-sm">
                  <CardHeader className="flex flex-row items-start space-y-0 pb-2 items-center">
                    <div className="pr-4">
                      <CardTitle className="text-xl font-bold">
                        {toTitleCase(ngo.nazwa)}
                      </CardTitle>
                    </div>
                    {sumCharacters(ngo.cel) % 2 === 1 && (<VerifiedBadge/>)}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-4 justify-between space-y-0">
                      <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover mt-1"
                          height="100"
                          width="100"
                          src={getImageForString(ngo.cel)}
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {ngo.cel_mini}
                        </p>
                        <p className="text-sm font-medium mt-2">Zakończone akcje: <b>{sumCharacters(ngo.cel) % 10 + 3}</b></p>
                        <div className="flex items-center">
                          <p className="text-sm mr-2">Zaufały jej takie firmy jak:</p>
                          <div className="flex space-x-2">
                            {sumCharacters(ngo.cel) % 3 < 4 && <Image
                                alt="Trusted company 1"
                                className="rounded-full"
                                src="/images/brand/amazon.png"
                                height="20"
                                width="20"
                            />}
                            {sumCharacters(ngo.cel) % 3 < 4 && <Image
                                alt="Trusted company 2"
                                className="rounded-full"
                                src="/images/brand/google.png"
                                height="20"
                                width="20"
                                margin-right="10"
                            />}
                            {sumCharacters(ngo.cel) % 3 < 4 && <Image
                                alt="Trusted company 3"
                                className="rounded-full"
                                src="/images/brand/facebook.png"
                                height="20"
                                width="20"
                                margin-right="10"
                            />}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Ostatnia aktywność: 2024-07-12 10:42 AM</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Link href={"/events"} passHref>
                      <Button variant="outline" size="sm"
                              className="mx-1 bg-gradient-to-r from-blue-600 via-blue-600 to-pink-500 text-white">Zobacz
                        bieżące eventy</Button>
                    </Link>
                    <Link href={"/ngo/"+ngo.id} passHref>
                      <Button variant="outline" size="sm" className="mx-1" >Więcej informacji</Button>
                    </Link>
                  </CardFooter>
                </Card>
                ))
            ) : (
                <p>Nie znaleziono organizacji pasujących do kryteriów wyszukiwania.</p>
            )}
          </div>
        </main>
      </div>
  )
}
