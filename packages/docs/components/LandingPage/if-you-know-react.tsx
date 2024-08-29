import React from "react";
import { BlueButton } from "../layout/Button";
import { Spacer } from "../layout/Spacer";
import { CodeExample } from "./CodeExample";
import styles from "./ifyouknowreact.module.css";

export const IfYouKnowReact: React.FC = () => {
  return (
    <div className={styles.ifyouknowrow}>
      <CodeExample />
      <div style={{ width: 40 }} />
      <div>
        <h2 className={styles.ifyouknowtitle}>
          使用 <span className={styles.rea}>React</span> <br />
          表达自我
        </h2>
        <p>
          Remotion 为你提供了视频创作的工具, <br />不过是基于 React 的规则. <br />
        </p>
        在几分钟内学习基础知识，然后开始制作视频
        <Spacer />
        <Spacer />
        <a className={styles.aknow} href="/docs/the-fundamentals">
          <BlueButton size="sm" fullWidth={false} loading={false}>
            学习 Remotion
          </BlueButton>
        </a>
      </div>
    </div>
  );
};
