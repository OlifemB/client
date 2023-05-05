import React, {useState} from 'react';
import {Button, Input, Typography} from "antd";


const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true)
    
    return (
        <div className={'p-8 bg-white rounded-md'} style={{width: '380px'}}>
            <div className={'flex flex-col items-stretch gap-4'}>
                <div className={'flex flex-row items-center justify-start gap-2'}>
                    <Typography.Title
                        level={4}
                        className={'leading-2'}
                    >
                        {isLogin ? 'Auth in' : 'Registration'}
                    </Typography.Title>
                </div>
                
                <div className={'flex flex-col items-stretch gap-4'}>
                    <Input placeholder={'login'}/>
                    <Input.Password placeholder={'password'}/>
                </div>
                
                <div className={'flex flex-row items-center justify-end gap-2'}>
                    <Button
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Registration' : 'Auth'}
                    </Button>
                    
                    <Button type="primary">
                        {isLogin ? 'Auth' : 'Registration'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;