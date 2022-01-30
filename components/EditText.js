import {useState} from "react";
import {Storyblok} from "../lib/storyblok";

export default function EditText({content, onClose, story, uid}) {
    const [textEdited, setTextEdited] = useState(false);
    const [text, setText] = useState(content);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newBody = [];

        const {data} = await Storyblok.get(
            `spaces/144152/stories/${story.id}`,
            {}
        );

        data.story.content.body.map((component) => {
            if (component._uid === uid) {
                component.content = text;
            }

            newBody.push(component);
        });

        const res = await Storyblok.put(`spaces/144152/stories/${story.id}`, {
            story: {
                name: story.name,
                slug: story.slug,
                id: story.id,
                content: {
                    component: "page",
                    body: newBody,
                },
            },
            force_update: 1,
            publish: 1,
        });

        if (res.status === 200) {
            setTextEdited(true);
        } else {
            console.error(res);
        }
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const rendering = () => {
        if (textEdited) {
            return (
                <>
                    <textarea defaultValue={text} rows="20" cols="60" readOnly/>
                    <button onClick={onClose} className="btn red">
                        Close
                    </button>
                </>
            );
        } else {
            return (
                <>
          <textarea
              defaultValue={text}
              rows="20"
              cols="60"
              onChange={handleTextChange}
          />
                    <input type="submit" value="Edit" className="btn"/>
                    <button onClick={onClose} className="btn red">
                        Cancel
                    </button>
                </>
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Text</h2>
            {rendering()}
        </form>
    );
}
