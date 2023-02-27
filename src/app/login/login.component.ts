import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customerid:any=""
  password:any="";
  json:any
  result:any
  status:any
 x:any
lotp:any="";
gotp:any="";
json2:any;
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void
  {
  }



  validate()
  {
  if(this.customerid=='' && this.password=="")
  {
    window.alert("Please enter CUSTOMER-ID and Password")
  }
  else if(this.customerid=='')
  {
    window.alert("Please enter Customer-Id")
  }
  else if(this.password=='')
  {
    window.alert("Please enter Password")
  }
  else if(this.gotp=='')
  {
    window.alert("Please enter OTP")
  }
  else
  {

   
   this.json={
    "customerid":this.customerid,
    "password":this.password
   }

   
 
  
   console.log(this.json)
   this.http.post('http://localhost:3030/cplogin',this.json,{responseType:'json'}).subscribe((response=>
   {
      this.result = response
      console.log(this.result)
      //console.log(this.result['Envelope']['Body']['ZFM_LOGIN_VP_MD.Response']['E_MESSAGE'].toString())
      this.status=this.result['Envelope']['Body']['ZFM_LOGIN_CP_MDResponse']['E_MESSAGE']
      if(this.status == 'S' && this.gotp==this.lotp)
      {
         window.alert("Login Successful")
        this.route.navigate(["/dashboard"]);
      }
      else
      {
        if(this.status=='E' && this.gotp!=this.lotp)
        {
          window.alert("You Have Entered Incorrect OTP and Credentials!Kindly Check them")
        }
        else if(this.gotp!=this.lotp)
        {
          window.alert("You Have Entered Incorrect OTP!Kindly Check the Otp")
        }
        else
        {
        window.alert("Incorrect Credentials!Please Check")
        }
      }

   }),
   (error:any)=>
   {
    this.result = error;
     window.alert("Error Occured!Kindly ensure that the backend is running")

   })
  }
   

   
   

  }

  myFunction()
  {
    this.x = document.getElementById("myInput");
    if (this.x.type === "password") {
      this.x.type = "text";
    } else {
      this.x.type = "password";
    }
  }

  getOtp()
  {
    this.lotp = 0;
    var digits = '0123456789';
  
    for(let i=0;i<6;i++)
    {
      this.lotp += digits[Math.floor(Math.random()*10)]
    }
    console.log(this.lotp);
    window.alert("OTP SENT SUCCESSFULLY")
    this.json2=
    {
      "otp":this.lotp
    }
    this.http.post('http://localhost:3030/otp',this.json2,{responseType:'json'}).subscribe((response)=>
   {
      this.result = response
      console.log(this.result)
   })

    return this.lotp

  }
}



      
  


