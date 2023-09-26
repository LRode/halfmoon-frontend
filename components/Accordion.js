
import Chevron from "./Chevron.js";
import React, { useState, useRef } from 'react';
import styles from "../styles/Accordion.module.css";

export default function Accordion({accordionTitle}, {accordionContent}) {
  const [Active, setActiveState] = useState(false);
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(Active === false ? true : false);
    setHeightState(
      Active === true ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      Active === true ? `${styles.accordion__icon}` : `${styles.rotate}`
    );
  }

  return (
    <div className={styles.accordion__section}>
      <button className={`${styles.accordian} ${Active ? styles.active : ''}`} onClick={toggleAccordion}>
        <div className={styles.accordion__title}>{accordionTitle}
        <Chevron className={`${setRotate}`} width={10} fill={"#777"}/></div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.accordion__content}
      >
        <div className={styles.accordion__text}>{accordionContent}</div>
        
      </div>
    </div>
  );
}
