import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css'],
 
})
export class NabvarComponent implements OnInit {

  constructor() { }
  
  
  ngOnInit() {
    this.munuShow();
  }

  munuShow() {

    $(() => {
      const show = () => {
        $('#btn_menu').on('click', () => {
          if ($(window).width() < 992)
            $('.app__navbar').css({ 'left': '0' })
        })

        $('#menu, .link').on('click', () => {
          if ($(window).width() < 992)
            $('.app__navbar').css({ 'left': '-100%' })
        })
      }

      $('.menu').on('click', (event) => {
        event.stopPropagation();
      })

      show();

    });

  }

}
