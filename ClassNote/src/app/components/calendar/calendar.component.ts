import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
})
export class CalendarComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<string>();

  todayformatted: any;

  constructor() {
    this.todayformatted = this.formatDate(new Date());
  }

  selectedDate: any
  ngOnInit() {
    // Obter a data de hoje
    const today = new Date();
    this.selectedDate = new Date();

    // Emitir o evento com a data de hoje
    this.dataEvent.emit(this.formatDate(today));
    console.log(this.formatDate(today))
  }

  sendDataToParent(event: any) {
    const data = event;
    this.dataEvent.emit(data);
  }

  formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  events: any;

  dateFilter(date: Date | null): boolean {
    if (!date) return false; 

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const day = date.getDay();
    const isBeforeOneWeekAgo = date < oneWeekAgo;
    return (day !== 6 && day !== 0) && !isBeforeOneWeekAgo;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
    if (this.selectedDate) {
      const isoFormattedDate = this.formatDate(this.selectedDate);
      this.dataEvent.emit(isoFormattedDate);
    }
  }
}
