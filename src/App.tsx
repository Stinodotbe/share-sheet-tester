import React, { useState } from 'react';
import styles from './App.module.scss';
import CodePreview from './components/CodePreview';
import NotSupported from './components/NotSupported';
import TestForm from './components/TestForm';

type shareDate = {
  url: string;
  title?: string;
  text?: string;
}

const App = (): JSX.Element => {

  const [hasText, setHasText] = useState(false);
  const [hasTitle, setHasTitle] = useState(false);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const doSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data: shareDate = { url };
    if(!url) data['url'] = window.location.href;
    if(hasTitle) {
      data['title'] = title;
    }
    if(hasText) {
      data['text'] = text;
    }
    navigator.share ? navigator.share(data) : alert('Share not supported');
  }

  const sharingAllowed = (): boolean => {
    return navigator.share !== undefined;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>ShareSheet tester</h1>
        <p className={styles.description}>Test your sharesheet configuration with ease by filling out the form. Please make sure to test this on a browser which has the <code>navigator.share</code> function.</p>
      </div>
      {sharingAllowed() && <NotSupported />}
      <TestForm
        hasText={hasText}
        hasTitle={hasTitle}
        url={url}
        title={title}
        text={text}
        setHasText={setHasText}
        setHasTitle={setHasTitle}
        setUrl={setUrl}
        setTitle={setTitle}
        setText={setText}
        doSubmit={doSubmit}
        allowSubmit={sharingAllowed()}
      />
      <CodePreview
        hasText={hasText}
        hasTitle={hasTitle}
        url={url}
        title={title}
        text={text}
      />
    </div>
  );
}

export default App;
