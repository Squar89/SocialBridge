import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import OpenAI from "openai"
import { ngos } from "../lib/files/ngo"
import { events } from "../lib/files/events"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const brandImages = ['amazon.png', 'google.png', 'adobe.png', 'netflix.png', 'gsk.png', 'pg.png', 'tiktok.png'];
const ngoImages = [
  'cat.png',
  'dog.png',
  'horse.png',
  'home.png',
  'frog.png',
  'tree.png',
  'child.png',
  'homeless_man.png'
];

function createImagePath(domain: 'brand' | 'ngo', fileName: string) {
  return `/images/${domain}/${fileName}`;
}

export function getImages(domain: 'brand' | 'ngo', numberOfElements: number) {
  let uniqueResult;
  if (domain === 'brand') {
    uniqueResult = new Set(brandImages);
  } else {
    uniqueResult = new Set(ngoImages);
  }

  const uniqueArray = Array.from(uniqueResult);

  for (let i = uniqueArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueArray[i], uniqueArray[j]] = [uniqueArray[j], uniqueArray[i]];
  }

  return uniqueArray.slice(0, numberOfElements).map(element => createImagePath(domain, element));
}

const client = new OpenAI({
  apiKey: "XXX",
  dangerouslyAllowBrowser: true
});

export async function getTags(text: string): Promise<string[]> {
  const tags = "niePasujeDoNiczego | alkoholizm | archiwistyka | asystenci | bezdomnosc | bezpieczenstwo | bialorus | biblioteki | charytatywnosc | cudzoziemcy | demokracja | dialog | doradztwo | dyskryminacja | dzialalnosc | dzieci | edukacja | ekologia | ekonomia | etyka | finanse | fundacja | funkcjonariusze | godnosc | gospodarka | historia | humanitaryzm | informacje | innowacje | integracja | interesy | karani | kinematografia | kobiety | komunikacja | konsumenci | ksiegowosc | kultura | kwalifikacje | lekarze | marketing | mediacja | mlodziez | mniejszosci | moralnosc | nauka | ngo | niepelnosprawnosc | obywatelstwo | opieka | organizacja | osoba | patriotyzm | pokoj | polityka | pomoc | praca | pracodawcy | prawo | przemoc | przestepstwa | przywodztwo | psychologia | readaptacja | reformy | rehabilitacja | religia | rodzina | rownosc | rozwoj | samorzad | spoleczenstwo | spolecznosc | sport | srodowisko | stowarzyszenie | studenci | sztuka | tlumacze | ukraina | wartosci | warunki zycia | wedkarstwo | wino | wojsko | wolnosc | wolontariat | wsparcie | wspolpraca | wydawnictwo | wykluczenie | zaufanie | zawod | zdrowie | zwiazek";

  try {
    const chatCompletion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Jesteś narzędziem do wyciągania tagów z tekstu. Zwracasz tylko najważniejsze tagi posortowane od najważniejszych do najmniej ważnych w formacie 'tag1 | tag2 | tag3'. Zwróć maksymalnie 4 tagi. Możliwe tagi: ${tags}`
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0,
    });

    if (chatCompletion && chatCompletion.choices && chatCompletion.choices[0] && chatCompletion.choices[0].message && chatCompletion.choices[0].message.content) {
      return chatCompletion.choices[0].message?.content.split(' | ');
    }
    return []
  } catch (error) {
    console.error("Error getting tags:", error);
    return [];
  }
}

type Organization = {
    tagi: Set<string>;
};

export async function rankNgos(text: string): Promise<Organization[]> {
    const tags = new Set(await getTags(text));
  // const tags = new Set(["alkoholizm"]);

    console.log(tags);

    const scores: { score: number; item: Organization }[] = ngos.map(item => {
        const itemTags = item.tagi;
        const difference = new Set([...tags].filter(tag => !itemTags.has(tag)));
        const score = difference.size;
        return { score, item };
    });

    const filteredRecords = scores.filter(({score, item}) => score !== tags.size);

    scores.sort((a, b) => a.score - b.score);

    const ranking = filteredRecords.map(({ item }) => item);

    console.log(ranking)
    return ranking;
}

type Event = {
    tagi: Set<string>;
};

export async function rankEvents(text: string): Promise<Event[]> {
    const tags = new Set(await getTags(text));
  // const tags = new Set(["alkoholizm"]);

    const scores: { score: number; item: Event}[] = events.map(item => {
        const itemTags = item.tagi;
        const difference = new Set([...tags].filter(tag => !itemTags.has(tag)));
        const score = difference.size;
        return { score, item };
    });

    const filteredRecords = scores.filter(({score, item}) => score !== tags.size);

    scores.sort((a, b) => a.score - b.score);

    const ranking = filteredRecords.map(({ item }) => item);

    console.log(ranking)
    return ranking;
}


export function getImageForString(str: string) {
  return getSpecificImage(sumCharacters(str));
}

export function getSpecificImage(idx: number) {
  return createImagePath("ngo", ngoImages[idx%ngoImages.length]);
}

export function sumCharacters(str: string) {
  return str
      .split('')
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}
