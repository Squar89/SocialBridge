"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from 'framer-motion'
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import * as repo from "@/lib/storage"
import { getTags } from "@/lib/utils"

const eventTypes = ["Projekt", "Finansowanie", "Zasoby ludzkie"] as const

const formSchema = z.object({
  ngoName: z.string().min(2, {
    message: "Nazwa organizacji musi miec conajmnie dwie litery.",
  }),
  eventName: z.string().min(10, {
    message: "Nazwa wydarzenia musi miec conajmniej 10 znakow",
  }),
  eventType: z.enum(eventTypes),
  money: z.string().optional(),
  people: z.string().optional(),
  description: z.string().min(10, {
    message: "Opis musi miec conajmniej 10 znakow",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function EventForm() {
  const [showDialog, setShowDialog] = useState(false)
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ngoName: "",
      eventType: "Projekt",
      money: "",
      people: "",
      description: "",
      contactEmail: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const tags = await getTags(values.description)


    const newEvent: repo.Event = {
      id: repo.getEventLastId() + 1,
      nazwa: "xdxd",
      organization: values.ngoName,
      type: values.eventType,
      description: values.description,
      financial_support: values.money ?? "",
      human_resources: values.people ?? "",
      contact_mail: values.contactEmail,
      tagi: new Set(tags),
    }
    repo.addEvent(newEvent)
    setFormData(values)
    setShowDialog(true)
  }

  return (
     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
      <motion.div
       className="w-1/2 max-w-1/2 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Zarejestruj Wydarzenie</CardTitle>
          </CardHeader>
          <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="ngoName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa organizacji</FormLabel>
                <FormControl>
                  <Input placeholder="Wpisz nazwe organizacji" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa wydarzenia</FormLabel>
                <FormControl>
                  <Input placeholder="Wpisz nazwe wydarzenia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Typ wydarzenia</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz typ wydarzenia" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("eventType") === "Projekt" && (
            <>
              <FormField
                control={form.control}
                name="money"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Finanse (Opcjonalne)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Wpisz wartosc w PLN" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="people"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zasoby ludzkie (Opcjonalne)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Wpisz liczbe osob" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {form.watch("eventType") === "Finansowanie" && (
            <FormField
              control={form.control}
              name="money"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Finansowanie (Wymagane)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Wpisz wartosc w PLN" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {form.watch("eventType") === "Zasoby ludzkie" && (
            <>
              <FormField
                control={form.control}
                name="people"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zasoby ludzkie(Wymagane)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Wpisz liczbe osob" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="money"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Finansowanie (Opcjonalne)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Wpisz wartosc w PLN" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opis wydarzenia</FormLabel>
                <FormControl>
                  <Textarea placeholder="Wpisz opis wydarzenia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email kontaktowy</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Wpisz email do kontaktu..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Event Added</DialogTitle>
            <DialogDescription>
              Here's a summary of the event you've added:
            </DialogDescription>
          </DialogHeader>
          {formData && (
            <div className="mt-4">
              <p><strong>Nazwa organizaji:</strong> {formData.ngoName}</p>
              <p><strong>Typ wydarzenia:</strong> {formData.eventType}</p>
              {formData.money && <p><strong>Finansowanie:</strong> {formData.money}</p>}
              {formData.people && <p><strong>Zasoby ludzkie:</strong> {formData.people}</p>}
              <p><strong>Opis wydarzenia:</strong> {formData.description}</p>
              <p><strong>Email kontaktowy:</strong> {formData.contactEmail}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
