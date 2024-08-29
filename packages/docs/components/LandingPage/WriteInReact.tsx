import React from "react";
import { ChooseTemplate } from "../../src/components/ChooseTemplate";
import { GetStarted } from "./GetStartedStrip";
import styles from "./writeinreact.module.css";

export const WriteInReact: React.FC = () => {
  return (
    <div>
      <h1 className={styles.writeincsstitle}>以编程的方式制作视频.</h1>
      <br />
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2em",
          fontWeight: 500,
        }}
        className={styles.text}
      >
        使用 React 创建 mp4 视频. <br /> 通过使用服务器端渲染和参数化来扩展你的视频制作
      </p>
      <br />
      <div className={styles.writeincss}>
        <GetStarted />
      </div>
      <br />
      <br />
      <div>
        <ChooseTemplate />
      </div>
    </div>
  );
};
