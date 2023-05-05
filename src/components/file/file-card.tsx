import React from 'react';
import {getColorByExtension, getExtensionFromFileName, isImage} from "@/utils";
import styles from "./file.module.scss";
import {paths} from "@/core/paths";
import {FileTextOutlined} from "@ant-design/icons";


interface FileCardProps {
    filename: string;
    originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({
    originalName,
    filename,
}) => {
    const ext = getExtensionFromFileName(filename);
    const imageUrl = ext && isImage(ext) ? paths.server.uploads +'/' +filename : "";
    
    const color = getColorByExtension(ext);
    const classColor = styles[color];
    
    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <i className={classColor}>{ext}</i>
                {isImage(ext) ? (
                    <img className={styles.image} src={imageUrl} alt="File" />
                ) : (
                    <FileTextOutlined />
                )}
            </div>
            <span>{originalName}</span>
        </div>
    );
};

export default FileCard;