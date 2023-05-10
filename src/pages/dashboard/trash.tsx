import {GetServerSidePropsContext, NextPage} from "next";
import {checkAuth} from "@/utils/checkAuth";
import React from "react";
import {Layout} from "@/layouts";
import {DashboardLayout} from "@/layouts/dashboard-layout";
import {Files} from "@/modules/files";
import {FileItem} from "@/api/dto/files.dto";
import {api} from "@/api";


interface Props {
    items: FileItem[];
}

const DashboardPage: NextPage<Props> = ({items}) => {
    return (
        <DashboardLayout>
            <Files items={items} withActions={false}/>
        </DashboardLayout>
    );
};


DashboardPage.getLayout = (page: React.ReactNode) => {
    return <Layout title={"Dashboard"}>{page}</Layout>;
}


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);
    
    if ("redirect" in authProps) {
        return authProps;
    }
    
    try {
        const items = await api.files.getAll('trash');
        return {
            props: {items},
        }
    } catch (err) {
        return {
            props: {items: []},
        };
    }
};

export default DashboardPage