import Head from "next/head";
import Header from "./Header";
import Search from "./search";
import styles from "../styles/Layout.module.css";


export default function Layout(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Developer Experience Task</title>
            </Head>
            <Header/>
            <Search/>
            {props.children}
        </div>
    );
}
