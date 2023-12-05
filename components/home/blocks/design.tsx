import styles from "./design.module.css";

export const Design = (props) => {
  console.log(props);
  return (
    <section>
      <h2>{props.data.designHeadline}</h2>
      <div>Design Carousel</div>
    </section>
  );
};
