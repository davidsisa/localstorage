import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  word: any;
  storedWord: any;

  constructor() {
    this.loadWord();
  }

  saveWord() {
    localStorage.setItem('word', this.word);
    this.storedWord = this.word;
    this.word = '';
  }

  loadWord() {
    this.storedWord = localStorage.getItem('word');
  }
}

