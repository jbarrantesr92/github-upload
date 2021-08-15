import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";


import ImageResize from 'quill-image-resize-module';
import Quill from 'quill';




@Component({
  selector: 'app-quill-test',
  templateUrl: './quill-test.component.html',
  styleUrls: ['./quill-test.component.css']
})
export class QuillTestComponent implements OnInit {

quillConfiguration;
content;

editorForm: FormGroup; 

  constructor(    
    private fb:FormBuilder,
    ) { }



  ngOnInit(): void {

    Quill.register('modules/imageResize', ImageResize);

    this.editorForm = this.fb.group({
      content: "new content"
    })

    this.quillConfiguration = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        ['link', 'image', 'video']
      ],
      imageResize: {
        modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
    }
    }
  }

  getContent() {
    return this.editorForm.get("content")
  }

onSave() {
  const formContent = this.editorForm.value;
  const content = formContent.content;
  console.log(content);
}

}
