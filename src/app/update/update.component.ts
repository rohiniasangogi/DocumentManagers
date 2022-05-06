import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '../file';
import { DocumentService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id!:number;
  file:File=new File();

  percentDone!: number;
  uploadSuccess!: boolean;
  fileName!: string;
  fileData: any;
 
  constructor(private fileservice:DocumentService, private activateRoute:ActivatedRoute,private router:Router) { }


  ngOnInit() {
    this.id=this.activateRoute.snapshot.params['id'];
    this.fileservice.getfilebyid(this.id).subscribe(data=>{
      this.file=data;
    },error=>console.log(error));
    }

  

   onSubmit(){
    this.fileservice.updatefile(this.id,this.file).subscribe(data=>
      {
        this.gotoList();
      },
      error=>console.log(error));
   }

   gotoList(){
     this.router.navigate(['/recent']);
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

}
