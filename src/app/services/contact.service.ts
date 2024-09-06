import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private STORAGE_KEY = 'contacts';

  constructor() { }

  getContacts(): any[] {
    const contacts = localStorage.getItem(this.STORAGE_KEY);
    return contacts ? JSON.parse(contacts) : [];
  }

  saveContact(contact: any) {
    const contacts = this.getContacts();
    contacts.push(contact);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(contacts));
  }

  updateContact(updatedContact: any) {
    const contacts = this.getContacts();
    const index = contacts.findIndex((contact: any) => contact.id === updatedContact.id);
    if (index > -1) {
      contacts[index] = updatedContact;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(contacts));
    }
  }

  deleteContact(id: string) {
    let contacts = this.getContacts();
    contacts = contacts.filter((contact: any) => contact.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(contacts));
  }
}

