"use client"

import Image from "next/image";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command"
import React, {useEffect, useState} from 'react'
import {DashboardProductCards} from "@/components/dashboard-product-cards";

export default function Home() {
  return (
      <div>
        <DashboardProductCards></DashboardProductCards>
      </div>
  );
}

interface SuggestionGroup {
  group: string;
  items: string[];
}

function SearchboxTips() {
  const [search, setSearch] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<SuggestionGroup[]>([])

  const suggestions: SuggestionGroup[] = [
    { group: 'Sugestie', items: ['Ludzie potrzebujący', 'Zwierzęta', 'Schronisko'] },
  ]

  useEffect(() => {
    if (search.length >= 1) {
      const filtered = suggestions.reduce((acc: SuggestionGroup[], group) => {
        const filteredItems = group.items.filter(item =>
            item.toLowerCase().includes(search.toLowerCase())
        )
        if (filteredItems.length > 0) {
          acc.push({ ...group, items: filteredItems })
        }
        return acc
      }, [])

      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
  }, [search])

  return (
      <div className="w-2/3 mx-auto">
        <Command className="rounded-3xl border shadow-md">
          <CommandInput
              placeholder="Type to search..."
              value={search}
              onValueChange={setSearch}
          />
          <CommandList>
            {search.length === 0 ? (
                <div></div>
            ) : filteredSuggestions.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
            ) : (
                filteredSuggestions.map((group) => (
                    <CommandGroup key={group.group} heading={group.group}>
                      {group.items.map((item) => (
                          <CommandItem key={item}>{item}</CommandItem>
                      ))}
                    </CommandGroup>
                ))
            )}
          </CommandList>
        </Command>
      </div>
  )
}

function SearchboxSimple() {
  return (<Command className="rounded-3xl border shadow-md w-2/3 mx-auto">
    <CommandInput placeholder="Wpisz cel działalności NGO" />
    <CommandList>
    </CommandList>
  </Command>);
}
