"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import * as repo from '@/lib/storage'
import Link from 'next/link';

export default function Component({ params }: { params: { id: string } }) {
  const eventid = params.id; // Pobranie id z query
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log(eventid)
  const exampleEvent = repo.getEventById(Number(eventid));

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">{exampleEvent?.nazwa || "Loading..."}</h1>
        <Link href={`/ngo/${exampleEvent ? repo.getOrganizationByName(exampleEvent.organization)?.id  : 'N/A'}`}>
        <Badge variant="secondary" className="text-lg">{exampleEvent?.organization || "N/A"}</Badge>
        </Link>
      </header>

      <main className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle> Typ </CardTitle>
            <p>{exampleEvent?.type}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Opis</h3>
              <p>{exampleEvent?.description || "N/A"}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wsparcie finansowe</CardTitle>
            <p>{exampleEvent?.financial_support || "N/A"}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Zasoby ludzkie</h3>
              <p>{exampleEvent?.human_resources || "N/A"}</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg">Skontaktuj się</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Skontaktuj się z organizacją</DialogTitle>
              <DialogDescription>
                Wypełnij formularz i skontaktuj się z organizatorem wydarzenia
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
                <Textarea id="message" placeholder="Jak chciałbyś wspomóc to wydarzenie?" />
              </div>
            </form>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsDialogOpen(false)}>Wyślij wiadomość</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </footer>
    </div>
  );
}
