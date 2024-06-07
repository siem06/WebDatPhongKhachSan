import React from 'react';
import ReactQuill from 'react-quill';
import Toolbar, { modules, formats } from './Toolbar';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

export default function QuillEditor({ value, setValue }) {
    return (
        <>
            <Toolbar toolbarId={'t1'} />
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder={'Write something awesome...'}
                modules={modules('t1')}
                formats={formats}
            />
        </>
    );
}
