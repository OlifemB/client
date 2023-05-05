import React from 'react';
import styles from "@/styles/profile.module.scss";
import {api, User} from '@/api'
import {Button} from "antd";
import {Layout} from "@/layouts";
import {checkAuth} from '@/utils/checkAuth'
import {GetServerSidePropsContext, NextPage} from "next";

interface Props {
    userData: User;
}

const ProfilePage: NextPage<Props> = ({ userData }) => {
    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            api.auth.logout();
            location.href = "/";
        }
    };
    
    return (
        <section className={'mt-8'}>
            <div className={styles.root}>
                <h1>Мой профиль</h1>
                <br />
                <p>
                    Full name: <b>{userData?.fullName}</b>
                </p>
                <p>
                    E-Mail: <b>{userData?.email}</b>
                </p>
                <br />
                <Button onClick={onClickLogout} type="primary" danger>
                    Logout
                </Button>
            </div>
        </section>
    );
};

ProfilePage.getLayout = (page: React.ReactNode) => {
    return <Layout title="Profile">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);
    
    if ("redirect" in authProps) {
        return authProps;
    }
    
    const userData = await api.auth.getMe()
    
    try {
        return {
            props: {
                userData
            },
        }
    } catch (err) {
        return {
            props: {},
        };
    }
};

export default ProfilePage;