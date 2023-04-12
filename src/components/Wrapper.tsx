import { ReactNode } from "react";
import Head from 'next/head'

interface IWrapper {
    children: ReactNode
}

function Wrapper({ children }: IWrapper) {
    return (
        <>
            <Head>
                <title>Artem Puzik</title>
                <meta name="description" content="cv javascript belarus frontend react work programming react-native framework " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
                    {children}
        </>
    );
}

export default Wrapper;