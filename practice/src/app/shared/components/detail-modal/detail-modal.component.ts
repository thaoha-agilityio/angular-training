import { Component } from '@angular/core';

// Components
import { EditIconComponent } from '../../icons';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [EditIconComponent],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css',
})
export class DetailModalComponent {}
