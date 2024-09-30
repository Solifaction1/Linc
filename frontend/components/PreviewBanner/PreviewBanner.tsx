import React from "react";
import Router from "next/router.js";
import Button from "@components/Button/Button";

import styles from "./previewBanner.module.scss";

const PreviewBanner: React.FC = () => {
  return (
    <div className={styles.previewBanner}>
      <span>You are currently viewing in Preview Mode. </span>
      <Button
        label="Turn off preview mode"
        size="sm"
        handleClick={() => exitPreviewMode()}
      />
    </div>
  );
};

async function exitPreviewMode() {
  const response = await fetch("/api/exit-preview");
  if (response) {
    Router.reload();
  }
}

export default PreviewBanner;
