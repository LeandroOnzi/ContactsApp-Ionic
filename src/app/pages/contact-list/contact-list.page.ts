import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contacts: any[] = [];
  searchTerm: string = '';

  constructor(private contactService: ContactService, private navCtrl: NavController) {}

  ngOnInit() {
    this.loadContacts();
  }

  ionViewWillEnter() {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts = this.contactService.getContacts();
  }

  searchContacts() {
    this.contacts = this.contactService.getContacts().filter(contact => 
      contact.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      contact.number.includes(this.searchTerm) || 
      contact.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewContact(id: string) {
    this.navCtrl.navigateForward(`/contact-detail/${id}`);
  }
}
