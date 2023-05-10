import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import axios from "@/core/axios";
import {api} from  '@/api'
import {paths} from "@/core/paths";


export const checkAuth = async (ctx: GetServerSidePropsContext) => {
    const { _token } = nookies.get(ctx);
    
    axios.defaults.headers.Authorization = "Bearer " + _token;
    
    try {
        await api.auth.getMe();
        
        return {
            props: {},
        };
    } catch (err) {
        return {
            redirect: {
                destination: paths.pages.auth,
                permanent: false,
            },
        };
    }
};