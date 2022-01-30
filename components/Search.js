import {useRouter} from "next/router";
import {useState} from "react";

export default function Search() {
    const [term, setTerm] = useState("");

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search?term=${term}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search String..."
                    className="input__search"
                />
                <input type="submit" className="btn" value="Search"/>
            </form>
        </div>
    );
}
