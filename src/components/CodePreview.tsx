import React from "react";
import styles from "./CodePreview.module.scss";

type CodePreviewProps = {
  url: string;
  hasTitle: boolean;
  title: string;
  hasText: boolean;
  text: string;
}

const CodePreview = ({ url, hasText, hasTitle, title, text}: CodePreviewProps) => {
  return (
    <div className={styles.wrapper}>
      <code>
      {`navigator.share({\n`}
        {`  url: '${url}'${((hasTitle || hasText) && ',') || ''}\n`}
        {hasTitle && `  title: '${title}'${hasText ? ',' : ''}\n`}
        {hasText  && `  text: '${text}'\n`}
      {`});`}
      </code>
    </div>
  )
}

export default CodePreview;