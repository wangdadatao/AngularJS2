import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';

import {Note} from "../model/note.model"
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit,AfterViewInit,OnDestroy {

  public editor;

  public note:Note = new Note();

  constructor(public router:Router,
              public BlogService:BlogService) {
  }

  ngOnInit() {
  }

  submitNote() {
    if (this.note) {
      this.addNote(this.note);
    }
  }

  addNote(note:Note) {
    this.BlogService.addNote(note)
      .subscribe((result) => {
        let status = result.content.status;
        if (status == "true") {
          this.router.navigateByUrl("/blog/blogDetail/" + result.content.id);
        }
      });
  }


  public fileInputChangeHandler():void {
    let fileInput = <HTMLInputElement>document.getElementById('img_input');
    let inputValue = fileInput.value;
    if (!inputValue) {
      return;
    }
    //提交隐藏的表单，上传文件
    let fileForm = <HTMLFormElement>document.getElementById('file_upload_form');
    fileForm.action = "fileuploadurl";
    fileForm.onsubmit = function (event) {
      console.log(event);
      event.preventDefault();
      let file = fileInput.files[0];
      let formData = new FormData();
      formData.append('file', file, file.name);

      let xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'file_upload_URL.php');
      xhr.onload = function () {
        let json;
        if (xhr.status != 200) {
          console.log('HTTP Error: ' + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);
        if (!json || typeof json.location != 'string') {
          console.log('Invalid JSON: ' + xhr.responseText);
          return;
        }
        console.log(json.location);
        fileInput.value = '';
      };
      xhr.send(formData);
    }
    fileForm.submit();
    fileInput.value = '';
  }

  ngAfterViewInit() {
    /**
     *  【非常重要】
     *  关于TinyMCE的完整文档，请查看这里https://www.tinymce.com/docs/
     */
    tinymce.init({
      selector: '#post_editor',
      skin_url: '/assets/skins/lightgray',
      //menubar:false,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
      ],
      toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'fontsizeselect preview media | forecolor backcolor | codesample',
      image_advtab: true,
      codesample_content_css: '/assets/css/prism.css',
      language_url: '/assets/langs/zh_CN.js',

      //文件和图片上传相关的选项
      file_browser_callback_types: 'image',
      file_browser_callback: function (field_name, url, type, win) {
        console.log(type);
        console.log(type == 'image');
        if (type == 'image') {
          let event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
          let fileInput = document.getElementById('img_input');
          fileInput.dispatchEvent(event);
        }
      },
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.note.content = content;
          // console.log(content);
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
