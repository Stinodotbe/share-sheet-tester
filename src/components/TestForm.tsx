import React from "react";
import styles from "./TestForm.module.scss";

type TestFormProps = {
  url: string;
  setUrl: (evt: string) => void;
  hasTitle: boolean;
  setHasTitle: (evt: boolean) => void;
  title?: string;
  setTitle: (evt: string) => void;
  hasText: boolean;
  setHasText: (evt: boolean) => void;
  text?: string;
  setText: (e: string) => void;
  doSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  allowSubmit: boolean;
}

const Form = (props: TestFormProps): JSX.Element => {

  const onUrlChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.setUrl(evt.target.value);
  };

  const onHasTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.setHasTitle(evt.target.checked);
  };

  const onTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.setTitle(evt.target.value);
  };

  const onHasTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.setHasText(evt.target.checked);
  };

  const onTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setText(evt.target.value);
  };

  return (
    <form onSubmit={props.doSubmit} className={styles.form}>
      <div className="form-group">
        <input type="url" className="form-control" placeholder="URL to share" value={props.url} onChange={onUrlChange} />
      </div>
      <div className="form-group">
        <input type="checkbox" id="hasTitle" checked={props.hasTitle} onChange={onHasTitleChange} />
        <label htmlFor="hasTitle">Has title</label>
      </div >
      <div className="form-group">
        <input type="text" className="form-control" value={props.title} onChange={onTitleChange} placeholder="Title" disabled={!props.hasTitle} />
      </div>
      <div className="form-group">
        <input type="checkbox" id="hasText" checked={props.hasText} onChange={onHasTextChange} />
        <label htmlFor="hasText">Has text</label>
      </div>
      <div className="form-group">
        <textarea className="form-control" value={props.text} onChange={onTextChange} placeholder="Text" disabled={!props.hasText} />
      </div>
      {props.allowSubmit && <button type="submit" className="btn btn-primary">Test sharing</button>}
    </form>
  );
};

export default Form;