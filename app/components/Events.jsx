import styles from "../styles/page.module.css"
import { Content } from "./Contents";
import EventsCard from "./EventsCard";
export default function Events() {
  return (
    <>
    <section className={styles.Events}>
        <h1>Our Events</h1>
        {Content.map((content, key) => {
          return <EventsCard key={key} content={content}  />;
        })}
        </section></>
  )
}
