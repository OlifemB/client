import React from "react";
import { Button, Popconfirm } from "antd";

interface FileActionsProps {
    onClickRemove: VoidFunction;
    onClickShare: VoidFunction;
    isActive?: boolean;
}

export const FileActions: React.FC<FileActionsProps> = ({
    onClickRemove,
    onClickShare,
    isActive,
}) => {
    return (
        <div className={'flex flex-row gap-2'}>
            <Button onClick={onClickShare} disabled={!isActive}>
                Поделиться
            </Button>
            
            <Popconfirm
                title="Удалить файл(ы)?"
                description="Все файлы будут перемещены в корзину"
                okText="Да"
                cancelText="Нет"
                disabled={!isActive}
                onConfirm={onClickRemove}
            >
                <Button disabled={!isActive} type="primary" danger>
                    Удалить
                </Button>
            </Popconfirm>
        </div>
    );
};