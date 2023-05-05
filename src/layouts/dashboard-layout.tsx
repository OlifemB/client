import React from "react";
import {useRouter} from "next/router";
import {Menu} from "antd";
import {DeleteOutlined, FileImageOutlined, FileOutlined} from "@ant-design/icons";
import UploadButton from "@/components/ui/upload-button";


export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const router = useRouter();
    const selectedMenu = router.pathname;
    
    return (
        <section className={'mt-8'}>
            <div className={'container'}>
                <div className={'flex flex-row flex-1 bg-white p-4 rounded-lg'}>
                    <div className={'flex flex-col items-stretch justify-start gap-3 w-60'}>
                        <UploadButton/>
                        <Menu
                            mode="inline"
                            selectedKeys={[selectedMenu]}
                            items={[
                                {
                                    key: `/dashboard`,
                                    icon: <FileOutlined/>,
                                    label: `Файлы`,
                                    onClick: () => router.push("/dashboard"),
                                },
                                {
                                    key: `/dashboard/photos`,
                                    icon: <FileImageOutlined/>,
                                    label: `Фото`,
                                    onClick: () => router.push("/dashboard/photos"),
                                },
                                {
                                    key: `/dashboard/trash`,
                                    icon: <DeleteOutlined/>,
                                    label: `Корзина`,
                                    onClick: () => router.push("/dashboard/trash"),
                                },
                            ]}
                        />
                    </div>
                    
                    <div className={'flex flex-row flex-wrap gap-4 w-full'}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};