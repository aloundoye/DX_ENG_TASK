import Story from "../components/Story";
import {Storyblok} from "../lib/storyblok";
import {useRouter} from "next/router";

const spaceId = 144152;

export default function SearchPage({stories}) {
    const {query} = useRouter();
    return (
        <div>
            <h2>Search Results for {query.term}</h2>

            {stories.length === 0 && <h3>No results found</h3>}
            {stories.map((story) => (
                <Story story={story} key={story.id}/>
            ))}
        </div>
    );
}

export async function getServerSideProps({query: {term}}) {
    const {data} = await Storyblok.get(`cdn/stories/`, {
        version: "published",
        search_term: term
    });

    return {
        props: {stories: data ? data.stories : null},
    };
}
