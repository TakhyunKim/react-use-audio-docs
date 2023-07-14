import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/easy.svg").default,
    description: (
      <>
        React Use Audio is a quick and easy way to play, pause, and stop sounds.
      </>
    ),
  },
  {
    title: "Declarative",
    Svg: require("@site/static/img/react.svg").default,
    description: (
      <>React hooks allow you to implement functionality declaratively.</>
    ),
  },
  {
    title: "Small Size",
    Svg: require("@site/static/img/box.svg").default,
    description: (
      <>The Web Audio API and minimal core logic provide a small size.</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
