import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  dayone = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay
  };
  daytwo = (dateString: string) => {
    const date = new Date(dateString);
    const utcDaytwo = date.getUTCDay();
    return utcDaytwo
  };
  
}
