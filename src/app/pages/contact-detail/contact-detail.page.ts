import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {
  contact: any = { id: '', name: '', number: '', email: '' };

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.contact = this.contactService.getContacts().find((c: any) => c.id === id) || this.contact;
    }
  }

  saveContact() {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contact.id = Date.now().toString();
      this.contactService.saveContact(this.contact);
    }
    this.router.navigate(['/contact-list']);
  }

  deleteContact() {
    this.contactService.deleteContact(this.contact.id);
    this.router.navigate(['/contact-list']);
  }
}
