import Head from "next/head";

export default async function ServerDemo() {
    const res = await fetch("https://worldtimeapi.org/api/ip", { cache: 'no-store' });
    const data = await res.json();
    return (
        <>
            <Head>
                <title>Next Demo</title>
            </Head>
            {new Date(data.datetime).toTimeString()}
        </>
    )
}