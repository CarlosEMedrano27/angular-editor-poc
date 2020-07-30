import { Component, OnInit } from '@angular/core';
import {editorConfig} from '../constants/editor-config'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {editorTestMock} from '../mocks/editor-test.mock'
@Component({
	selector: 'app-editor-test',
	templateUrl: './editor-test.component.html',
	styleUrls: ['./editor-test.component.scss'],
})
export class EditorTestComponent implements OnInit {
  editorConfig = editorConfig;

	EmailEditor: FormGroup;
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.EmailEditor = this.fb.group({
			subject: [editorTestMock.subject, [Validators.required, Validators.minLength(5)]],
			content: [editorTestMock.content, Validators.required],
		});
		this.EmailEditor.valueChanges.subscribe((response) =>
			console.log(this.EmailEditor.value)
		);
	}
}
