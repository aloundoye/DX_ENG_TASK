import Component from "./Component";
import {useRouter} from "next/router";
import styles from "../styles/Story.module.css";

export default function Story({story}) {
    const {query} = useRouter();

    return (
        <div className={styles.story}>
            <h2>{story.name}</h2>

            {story.content.body
                .filter((component) => {
                    if (
                        !component.content.toLowerCase().includes(query.term.toLowerCase())
                    ) {
                        return false;
                    }

                    return true;
                })
                .map((component) => (
                    <Component component={component} key={component._uid} story={story}/>
                ))}
        </div>
    );
}
