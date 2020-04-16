import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = ""

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onButtonClick() {
    console.log(`
    About to generate a password with
    includes letter ${this.includeLetters}
    includes numbers ${this.includeNumbers}
    includes symbols ${this.includeSymbols}
    `);

    this.password = "My password"
  }
  getName() {
    return "Phuc"
  }

}
