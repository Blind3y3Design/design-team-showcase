import styles from "./hero.module.css";

export const Hero = (props) => {
  console.log(props);
  return (
    <section>
      <h2>{props.data.heroHeadline}</h2>
      <img src={props.data.heroImage} alt="" loading="lazy" />
    </section>
  );
};
