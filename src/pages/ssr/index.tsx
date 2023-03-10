import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next';


export default function SSR({ time }: { time: string }) {

    return (
        <>
            <Head>
                <title>Next Demo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 style={{ flex: 1 }}>{new Date(time).toTimeString()}</h1>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=America/New_York');
    const data = await res.json();

    return {
        props: { time: data.dateTime },
    };
};