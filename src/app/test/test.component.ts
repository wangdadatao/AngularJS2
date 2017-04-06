import {Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output, OnInit} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() elementId:String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  ngOnInit() {
    this.elementId = "textareaId";
  }

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      // plugins: [
      //   'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      //   'searchreplace wordcount visualblocks visualchars code fullscreen',
      //   'insertdatetime media nonbreaking save table contextmenu directionality',
      //   'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
      // ],
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',

      codesample_content_css: '/assets/css/prism.css',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }


}
