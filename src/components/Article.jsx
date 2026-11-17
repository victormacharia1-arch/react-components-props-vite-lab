function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let minutesIndicator = null;

  if (minutes !== undefined) {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      minutesIndicator = `${"☕️".repeat(cups)} ${minutes} min read`;
    } else {
      const bentos = Math.ceil(minutes / 10);
      minutesIndicator = `${"🍱".repeat(bentos)} ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutesIndicator ? <p>{minutesIndicator}</p> : null}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
