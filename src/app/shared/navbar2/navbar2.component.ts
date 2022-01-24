import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss'],
  providers: [AuthService]
})
export class Navbar2Component{

  public user$: Observable<any> = this.authSvc.afAuth.user;
  
  constructor(private authSvc: AuthService, private router:Router) { }

  async onLogout(){
    try{
       await this.authSvc.logout();
        this.router.navigate(['/login']); 
      }catch (error){
      console.log(error);
    }
  }
}