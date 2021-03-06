import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isVisible: boolean;
  @Output() backdropClicked: EventEmitter<string> = new EventEmitter();


  constructor() { }




  ngOnInit(): void {
  }

}
