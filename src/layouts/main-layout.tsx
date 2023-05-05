import React from 'react';
import Head from "next/head";
import {Header} from "@/components/header";


interface LayoutProps {
    title: string
}

const MainLayout: React.FC<React.PropsWithChildren<LayoutProps>> = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Header/>
                {children}
            </main>
        </>
    );
};

export default MainLayout;