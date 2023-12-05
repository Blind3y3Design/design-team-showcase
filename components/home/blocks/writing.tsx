import styles from "./writing.module.css";

export const Writing = (props) => {
  console.log(props);
  return (
    <section>
      <h2>{props.data.writingHeadline}</h2>
      <div>Writing Grid</div>
      <button>{props.data.writingButton.label}</button>
    </section>
  );
};
