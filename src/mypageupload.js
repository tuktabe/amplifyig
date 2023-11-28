import React from 'react';
import { FileUploader } from '@aws-amplify/ui-react';
import './App.css';

function mypageupload() {
    return (
        <>
            <FileUploader
                accessLevel="public"
                acceptedFileTypes={['image/*']}
                variation="drop"
            />
        </>
    );
}

export default mypageupload;