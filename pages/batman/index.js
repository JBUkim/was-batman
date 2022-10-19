import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import styles from "../../styles/Home.module.css";

const Index = (props) => (
    <div className={styles.batman}>
        <h1 className={styles.tvmaze}>
            TVMAZE Batman Series
        </h1>
        <ul>
            {props.data.map(({show}) => (
                <div key={show.image}>
                    <ul>
                        <img src={show.image.medium} className={styles.batimg}></img>
                        <Link href={`${show.url}`}>
                            <li className={styles.batname}>{show.name}</li>
                        </Link>
                        <ul>
                            <p>
                            ◼ ID: {show.id} <br /> 
                            ◼ Rating: {show.rating.average} <br />
                            ◼ Language: {show.language} <br />
                            ◼ Runtime: {show.runtime} <br />
                            </p>
                            <br />
                        </ul>
                    </ul>
                </div>
                ))}
        </ul>
    </div>
);

Index.getInitialProps = async function() {
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
        const data = await res.data;
        console.log(`Show data fetched. Count: ${data.length}`);
        return {
            data: data
        }
    };

export default Index