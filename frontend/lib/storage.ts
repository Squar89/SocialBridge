import { ngos } from './files/ngo';
import { events } from './files/events';

type GenericMetadata = { nazwa: string
                         id: number
                        };

export class Repository<T extends GenericMetadata> {
  private items: T[] = [];

  getAll(){
    return this.items;
  }

  add(item: T) {
    this.items.push(item);
  }

  delete(name: string) {
    this.items = this.items.filter(item => item.nazwa !== name);
  }

  getByName(name: string) {
    return this.items.find(item => item.nazwa === name);
  }

  getById(id: number){
    return this.items.find(item => item.id === id)
  }

  getLastId(){
    return this.items.reduce((max, item) => (item.id > max ? item.id : max), 0)
  }

  initialiseStorage(dataSet: T[]) {
    if (!this.items.length) {
      this.items = [...dataSet];
    }
  }
}

export type Organization = GenericMetadata & {
    id: number,
    nazwa: string,
    krs: string,
    cel: string,
    cel_mini: string,
    siedziba_miejscowosc: string,
    tagi: Set<string>
};
export type Event = GenericMetadata &  {
    organization: string,
    type: string,
    description: string,
    financial_support: string,
    human_resources: string,
    contact_mail: string,
    tagi: Set<string>
  };

export const eventRepository = new Repository<Event>();
eventRepository.initialiseStorage(events);

export const getEvents = () => eventRepository.getAll();
export const addEvent = (newEvent: Event) => eventRepository.add(newEvent);
export const deleteEvent = (id: string) => eventRepository.delete(id);
export const getEventById = (id: number) => eventRepository.getById(id);
export const getEventLastId = () => eventRepository.getLastId();

const organizationRepository = new Repository<Organization>();
organizationRepository.initialiseStorage(ngos);

export const getOrganizations = () => organizationRepository.getAll();
export const addOrganization = (newOrganization: Organization) => organizationRepository.add(newOrganization);
export const deleteOrganization = (id: string) => organizationRepository.delete(id);
export const getOrganizationByName = (id: string) => organizationRepository.getByName(id);
export const getOrganizationById = (id: number) => organizationRepository.getById(id);
