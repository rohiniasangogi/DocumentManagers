import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../service.service';
import { File } from '../file';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recent-page',
  templateUrl: './recent-page.component.html',
  styleUrls: ['./recent-page.component.css']
})
export class RecentPageComponent implements OnInit {
public file!:File[];
  constructor(private dm:DocumentService,private router: Router) { }
  
  
  ngOnInit(): void {
    this.getvalue()
  }
  getvalue(){
    this.dm.getfile().subscribe(data=>{
      this.file=data
      // this.employee=data
      // this.books=data;
      // this.books=data
      console.log(data)
    })
  }
  deletepost(id:number){
    // console.log("button clicked"+id)
    this.dm.delfile(id).subscribe(data=>{
      console.log("deleted");
      this.getvalue()
    })
}
update(id:number) {
  // this.router.navigate(['/update',id])
  // this.router.navigate(['/update']);
  console.log(id);
   this.router.navigate([`update/${id}`]);
}
}
