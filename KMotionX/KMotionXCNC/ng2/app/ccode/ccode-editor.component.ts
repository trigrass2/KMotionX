import { Component, Inject, ViewChild } from '@angular/core';
import { ScreenComponent } from "../screen.component"
import { AceEditorComponent, FileStoreToken, FileStore, DefaultFileStore } from '../editor'
import { FileResource } from '../resources'


@Component({
  selector: 'ccode-editor',
  template: `
    <code-editor id="ccodeEditor" mode="c_cpp" >
      <div buttons>
        <span class="btn btn-primary glyphicon glyphicon-pencil" title="Compile" (click)="onCompile()"></span>
        <span class="btn btn-primary glyphicon glyphicon-pencil" title="Compile and Execute" (click)="onCompile()"></span>
      </div>
    </code-editor>`,
  viewProviders: [
    { provide: FileStoreToken,  useClass: DefaultFileStore }
  ]
})
export class CCodeEditorComponent{
  @ViewChild(AceEditorComponent)
  editorComponent: AceEditorComponent;

  constructor() {

  }

  ngAfterViewInit() {
    this.editorComponent.onFile(new FileResource("./settings/c-programs")); 
  }
  onCompile(){
    console.warn("Compile not implemented")
  }
}