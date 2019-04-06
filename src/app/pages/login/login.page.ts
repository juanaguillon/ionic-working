import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  indexUser = {
    email: "",
    password: ""
  }
  constructor(
    private auth: AuthService,
    private router:Router
  ) {  }

  ngOnInit() { }

  createLogin() {
    if (this.indexUser.email == "" || this.indexUser.password == "") {
      alert('Todos los campos son necesarios');
      return false;
    }

    this.auth.loginUser(this.indexUser.email, this.indexUser.password).then(user => {

      alert('Usuario logeado correctamente')
      this.router.navigate(["/admin/listing"])

    }).catch(err => {
      console.log(err)
    })
  }

}
