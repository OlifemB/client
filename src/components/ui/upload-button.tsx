import React from 'react';
import {Button, notification, Upload, UploadFile} from "antd";
import {CloudUploadOutlined} from "@ant-design/icons";
import {api} from '@/api'


export const UploadButton: React.FC = () => {
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);
    
    const onUploadSuccess = async (options) => {
        console.log(options)
        try {
            await api.files.uploadFile(options);
            
            setFileList([]);
            
            // window.location.reload();
        } catch (err) {
            notification.error({
                message: "Error!",
                description: "Error on upload",
                duration: 2,
            });
        }
    };
    
    return (
        <Upload
            customRequest={onUploadSuccess}
            fileList={fileList}
            onChange={({fileList}) => setFileList(fileList)}
        >
            <Button type="primary" icon={<CloudUploadOutlined/>} size="large">
                Upload file
            </Button>
        </Upload>
    );
};

export default UploadButton;