import React from "react";
import {FileItem} from "@/api/dto/files.dto";
import {FileActions} from "@/components/file/file-actions";
import {FileList, FileSelectType} from "@/components/file/file-list";
import {Empty} from "antd";

import {api} from "@/api";


interface FilesProps {
    items: FileItem[];
    withActions?: boolean;
}

export const Files: React.FC<FilesProps> = ({items, withActions}) => {
    const [files, setFiles] = React.useState(items || []);
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
    
    const onFileSelect = (id: number, type: FileSelectType) => {
        if (type === "select") {
            setSelectedIds((prev) => [...prev, id]);
        } else {
            setSelectedIds((prev) => prev.filter((_id) => _id !== id));
        }
    };
    
    const onClickRemove = () => {
        setSelectedIds([]);
        setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
        api.files.remove(selectedIds);
    };
    
    const onClickShare = () => {
        alert("share");
    };
    
    return (
        <div>
            {files.length ? (
                <div>
                    {withActions && (
                        <FileActions
                            onClickRemove={onClickRemove}
                            onClickShare={onClickShare}
                            isActive={selectedIds.length > 0}
                        />
                    )}
                    <FileList items={files} onFileSelect={onFileSelect}/>
                </div>
            ) : (
                <Empty className="empty-block" description="No fies"/>
            )}
        </div>
    );
};