import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  @Input() recipientName: string; // The name of the recipient
  @Output() close = new EventEmitter<void>(); // Event emitter to notify when the modal should close

  constructor() { }

  ngOnInit() {}


  // This method can be used to close the modal
  onClose() {
    this.close.emit(); // Emit the close event
  }

}
