"use client"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'
import { Textarea } from "@/components/ui/textarea"
import ReportsCarousel from '@/components/ui/reports-carousel'
import  *  as repo from '@/lib/storage'
import { getAllReports } from '@/lib/reportsHandler'
import ButtonWithModal from '@/components/ui/button-with-modal'
import { getImages } from '@/lib/utils'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from 'react'

export default function OrganizationSite({ params}:{
  params: {id: string}
} ){
  const organizacja = repo.getOrganizationById(Number(params.id));
  const raporty = getAllReports()
  const ngoImage = getImages("ngo", 1)[0]
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="container mx-auto px-40 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Block 1: Organization Name and Description */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{organizacja!.nazwa}</h1>
          <p className="text-gray-600">
            {organizacja!.cel_mini}
          </p>
        </div>

        {/* Block 2: Image */}
        <div className="flex items-center justify-center">
          <Image
            src={ngoImage}
            alt="Organization Image"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Block 4: List of Reports */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Raporty</h2>
        <ul className="space-y-2">
          {raporty.map((raport, index) => (
            <li key={index}>
              <Link href={raport.link} className="text-blue-600 hover:underline text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                Raport {index + 1}
              </Link>
              <ButtonWithModal nazwa='Raport' podsumowanie={raport.generalSummary} />
            </li>
          ))}
        </ul>
      </div>

      <ReportsCarousel />
      <footer className="text-center">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg">Skontaktuj się</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Skontaktuj się z organizacją</DialogTitle>
              <DialogDescription>
                Wypełnij formularz i skontaktuj się z organizacja
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="twoj@email.com" />
              </div>
              <div>
                <Label htmlFor="organization">Nazwa firmy</Label>
                <Input id="organization" placeholder="Nazwa twojej firmy" />
              </div>
              <div>
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea id="message" placeholder="W jaki sposob chcialbys wspolpracowac?" />
              </div>
            </form>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsDialogOpen(false)}>Wyślij wiadomość</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </footer>

      {/* Block 3: Reports
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Reports</h2>
        <p className="text-gray-600">
          Here you can find a summary of our latest reports. These briefs provide quick insights into our recent
          findings, research outcomes, and key recommendations. For more detailed information, please refer to the
          full reports listed below.
        </p>
      </div> */}
    </div>
  )
}
