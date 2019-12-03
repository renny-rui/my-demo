import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
/**showAddPostDialog(){
  this.dialog.open(this.showAddPostDialogComponent);
}*/
}
