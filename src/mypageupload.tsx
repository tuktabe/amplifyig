import React from 'react';
import { FileUploader } from '@aws-amplify/ui-react';
import './App.css';

function App() {
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

export default App;