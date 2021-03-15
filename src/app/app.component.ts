import { Component, OnInit } from '@angular/core';
import { Observable, of, timer } from 'rxjs';

import {randomPassword, digits, symbols,lower,upper} from 'secure-random-password';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  passwordLength: number;
  isUseNumbers: boolean;
  isUseSymbols: boolean;
  isUseLetters: boolean;
  passwordResult: string;
  isSuccess : Observable<boolean>;
  errorMessage : string ;
  constructor() {
    this.passwordLength = 0;
    this.isUseLetters = true;
    this.isUseNumbers = false;
    this.isUseSymbols = false;
    this.passwordResult = '';
    this.errorMessage = '';
    this.isSuccess = of(false);
  }
  ngOnInit(): void {}

  generate():void {
    this.errorMessage = '';
    this.isSuccess = of(false);

    // STEP 1 : Validate Input ( need at least 1 checkbox)
    if(this.passwordLength <=5){
      this.errorMessage = "Password Length has to more than 5!"
      return;
    }else{
      // ! User must to choice at least 1 check box
      if(!(this.isUseLetters || this.isUseSymbols || this.isUseNumbers)){
        this.errorMessage = "Please Select at least 1 checkbox";
        return;
      }else{
        this.passwordResult = '';
        // letter only
        if(this.isUseLetters && !this.isUseNumbers && !this.isUseSymbols){
          this.passwordResult = this.generateOnlyLetter();
        }
        else if(!this.isUseLetters && this.isUseNumbers && !this.isUseSymbols){
          this.passwordResult = this.generateOnlyNumbers();
        }
        else if(!this.isUseLetters && !this.isUseNumbers && this.isUseSymbols){
          this.passwordResult = this.generateOnlySymbols();
        }
        else if(this.isUseLetters && this.isUseNumbers && !this.isUseSymbols){
          this.passwordResult = this.generateLetterAndNumber();
        }
        else if(this.isUseLetters && !this.isUseNumbers && this.isUseSymbols){
          this.passwordResult = this.generateLetterAndSymbols();
        }
        else if(!this.isUseLetters && this.isUseNumbers && this.isUseSymbols){
          this.passwordResult = this.generateSymbolsAndNumbers();
        }else{
          this.passwordResult =  this.generateLettersSymbolsAndNumbers();
        }

        if(this.passwordResult !==''){
          this.successfullyMSM();
        }
      }
    }
  }

  generateOnlyLetter() : string {
    return randomPassword({ length: this.passwordLength,characters: [lower, upper]});
  }

  generateOnlyNumbers() : string{
    return randomPassword({ length: this.passwordLength,characters: [digits]});
  }

  generateOnlySymbols() : string{
    return randomPassword({ length: this.passwordLength,characters: [symbols]});
  }

  generateLetterAndNumber() : string {
    return randomPassword({ length: this.passwordLength,characters: [lower, upper,digits]});
  }

  generateLetterAndSymbols() : string {
    return randomPassword({ length: this.passwordLength,characters: [lower, upper,symbols]});
  }

  generateSymbolsAndNumbers() : string {
    return randomPassword({ length: this.passwordLength,characters: [symbols,digits]});
  }

  generateLettersSymbolsAndNumbers() : string {
    return randomPassword({ length: this.passwordLength,characters: [lower, upper,symbols,digits]});
  }
  successfullyMSM() :void {
    this.isSuccess = of(true);
    const timer$ = timer(2000);
    timer$.subscribe(()=> {
      this.isSuccess = of(false);
    })
  }
  
}
