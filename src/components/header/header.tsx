import React from 'react';
import {Avatar, Button, Menu, Popover} from "antd";
import {CloudOutlined} from "@ant-design/icons";
import styles from '../../styles/header.module.scss'
import {useRouter} from "next/router";
import {api} from '@/api'
import clsx from "clsx";
import {paths} from "@/core/paths";


const Header = () => {
    const router = useRouter()
    const selectedMenu = router.pathname
    
    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            api.auth.logout();
            location.href = paths.pages.auth;
        }
    }
    
    return (
        <div className={'bg-primary text-white'}>
            <div className={'container'}>
                <div className={'flex flex-row items-center justify-between'}>
                    <div className={'flex flex-row items-center justify-start gap-16'}>
                        <h2>
                            <CloudOutlined/>
                            Cloud Storage
                        </h2>
                        
                        <Menu
                            className={clsx(styles.topMenu, 'bg-transparent')}
                            mode="horizontal"
                            defaultSelectedKeys={[selectedMenu]}
                            onSelect={({key}) => router.push(key)}
                            items={[
                                {key: paths.pages.dashboard, label: "Main"},
                                {key:  paths.pages.profile, label: "Profile"},
                            ]}
                        />
                    </div>
                    
                    <div className={styles.headerRight}>
                        <Popover
                            trigger="click"
                            content={
                                <Button onClick={onClickLogout} type="primary" danger>
                                    Выйти
                                </Button>
                            }
                        >
                            <Avatar>A</Avatar>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;