import { Component, computed, OnInit } from '@angular/core';

@Component({
  selector: 'tps-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = computed(() => new Date().getFullYear());
}
