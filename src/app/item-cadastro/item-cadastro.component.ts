import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from './../item/item-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html'
})
export class ItemCadastroComponent implements OnInit {

  itens = [];
  addForm : FormGroup;

  constructor(private itemService : ItemServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.consultar();

    this.addForm = this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        email: [null, [Validators.required, Validators.email]]
    });
  }

  consultar(){
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }

  onSubmit() {
    console.log(this.addForm);

    if (this.addForm.valid) {
      console.log('Dados enviados');
    } else {
      console.log('formulario invalido');
    }
  }


  verificaValidTouched(campo){
    return !this.addForm.get(campo).valid && this.addForm.get(campo).touched;
  }

  verificaEmailInvalido(){
    if (this.addForm.get('email').errors){
      return this.addForm.get('email').errors['email'] && this.addForm.get('email').touched;
    }
  }

  aplicaCssErro(campo){
      return {
        'has-error': this.verificaValidTouched(campo),
        'has-feedback': this.verificaValidTouched(campo)
      }
  }

}
