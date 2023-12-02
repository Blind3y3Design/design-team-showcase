import styles from "./Credits.module.css";

export const Credits = (props) => {
  return (
    <section className={styles["post-credits"]}>
      <h2 className={styles["post-credits__title"]}>Credits</h2>
      {props.data.map((item) => {
        const author = item.authors;
        return (
          <div className={styles["credit-module"]}>
            <div className={styles["credit-module__avatar"]}>
              <img src={author.avatar} alt={author.name} loading="lazy" />
            </div>
            <div className={styles["credit-module__content"]}>
              <h3 className={styles["credit-module__name"]}>
                {author.name}

                {author.role && (
                  <span className={styles["credit-module__role"]}>
                    {author.role}
                  </span>
                )}
              </h3>
              <p className={styles["credit-module__bio"]}>{author.bio}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
