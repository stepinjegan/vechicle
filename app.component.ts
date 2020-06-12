import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehService } from './veh.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class vehModel
{
  id?:number;
  Vechicle_Company: string;
  Vechicle_Model: string;
  Vechicle_Number: string;
  Vechicle_Colour: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public clientsData : string;
  enableEdit: boolean;
  enableEditIndex: any;
  ngOnInit() {
    this.title='Submit';
    this.Posting();
   
}
  private servUrl = "http://localhost:3000/vechicledetails";
  title;
  activeindex=-1;
  constructor(private http: HttpClient) { }
  ItemsArray= [];
  veh:vehModel=new vehModel();
  
  onSubmit(form:NgForm):void
  {
if (this.title=='Submit')
{
    console.log(form.value);
    console.log(this.veh.Vechicle_Company);
    this.http.post<any>('http://localhost:3000/vechicledetails', {
      vechicle_company: this.veh.Vechicle_Company,
      vechicle_model: this.veh.Vechicle_Model,
      vechicle_number: this.veh.Vechicle_Number,
      vechicle_color: this.veh.Vechicle_Colour,
    })
    .subscribe(data => {
     
      this.Posting();
    })
  }
  else
  {
    this.update();
  }
    
  }
  update()
  {
    console.log(this.activeindex);
    this.http.patch('http://localhost:3000/vechicledetails/'+this.activeindex, {
      id:this.activeindex,
      vechicle_company: this.veh.Vechicle_Company,
      vechicle_model: this.veh.Vechicle_Model,
      vechicle_number: this.veh.Vechicle_Number,
      vechicle_color: this.veh.Vechicle_Colour,
    })
    .subscribe(data => {
     
      this.Posting();
    })
  }
  delete(id)
  {
    
    return this.http.delete<any>('http://localhost:3000/vechicledetails/'+id)
    .subscribe((res: any[])=>{
      
      this.Posting();
    } )
  }
  edit(obj) {
   
    console.log(obj);
    this.title='Update';
    this.veh.Vechicle_Number=obj.vechicle_number;
    this.veh.Vechicle_Company=obj.vechicle_company;
    this.veh.Vechicle_Model=obj.vechicle_model;
    this.veh.Vechicle_Colour=obj.vechicle_color;
    this.activeindex=obj.id;
  }
  Posting(){
    
    return this.http.get<any>(this.servUrl)
    .subscribe((res: any[])=>{
      this.ItemsArray= res;
    } )
     
  }
 
}
