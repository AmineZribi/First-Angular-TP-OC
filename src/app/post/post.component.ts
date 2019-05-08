import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  @Input() Title: string;
  @Input() Content: string ;
  @Input() LoveIt: number = 0;
  @Input() CreationDate: Date;
  constructor() { }

  ngOnInit() {
  }


  isLiked(){
    this.LoveIt = this.LoveIt + 1;
    console.log(this.LoveIt);
  }

  isDisliked(){
    this.LoveIt = this.LoveIt - 1;
    console.log(this.LoveIt);
  }
  getColor(){
    if (this.LoveIt < 0) {
      return  'list-group-item-danger';
    } else if (this.LoveIt > 0) {
      return 'list-group-item-success';
    } else
     return 'list-group-item';
  }
  
}
