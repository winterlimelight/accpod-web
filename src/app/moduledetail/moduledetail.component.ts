import { Component, OnInit, Input, Pipe, PipeTransform  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModuleAction } from '../types'

@Pipe({ name: 'keepHtml', pure: false })
export class KeepHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(content: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}

@Component({
  selector: 'app-moduledetail',
  templateUrl: './moduledetail.component.html',
  styleUrls: ['./moduledetail.component.css']
})
export class ModuledetailComponent implements OnInit {
  @Input() moduleaction: ModuleAction;
  answer: string;

  constructor() { }

  ngOnInit() {
  }

  OnSubmitClick() {
    console.log("Answer Submitted: " + this.answer);
  }  

}
