import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../service.service';
import { File } from '../file';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  public file:File= new File();

  percentDone!: number;
  uploadSuccess!: boolean;
  fileName!: string;
  fileData: any;
 
  public files!:File[];
  constructor(private fs:DocumentService, private route:Router) { }

  ngOnInit(): void {
    this.getvalue();
  }
onsubmit(){
  console.log(this.file)
  this.addval()
}
addval(){
  this.fs.addfile(this.file).subscribe(data=>console.log(data),error=>console.log(error));
    // console.log(data)
    this.file=new File();
    
    this.route.navigate(['/recent']);
  }


public onFileChange(event:any) {
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
    this.fileName = event.target.files[0].name;
    const [file] = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      localStorage.setItem(this.fileName, reader.result as string);
      // console.log(fileData);
      console.log(this.fileName);
      // console.log(reader.result);
      this.file.docName=this.fileName
    };
  }
}
  getvalue(){
    this.fs.getfile().subscribe(data=>{
      this.files=data
      // this.employee=data
      // this.books=data;
      // this.books=data
      console.log(data)
    })
  }
  
  
    
  }
