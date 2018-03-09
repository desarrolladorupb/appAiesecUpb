import { Component, OnInit ,ViewChild, Renderer2} from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor(private _Renderer: Renderer2) { }

  ngOnInit() { 
    $(function(){
      $('#menu').click(function(){
        if ($('#aside').hasClass('hidden')){
          $('#aside').removeClass('hidden');
        }else{
          $('#aside').addClass('hidden');
        }
      })
    })
  }

}
