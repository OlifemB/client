import React, {useState} from 'react';
import {Button, Input, notification} from "antd";
import {RegisterFormDTO} from "@/api/dto/auth.dto";
import{api} from "@/api";
import {setCookie} from "nookies";
import {useRouter} from "next/router";


const LoginForm: React.FC = () => {
    const router = useRouter()
    const [state, setState] = useState({email: '', password: '', fullName:''})
    
    const onSubmit = async (values: RegisterFormDTO) => {
        try {
            const {token} = await api.auth.register(values)
            setCookie(null, '_token', token, {path: "/"})
            await router.push('/')
        } catch (err) {
            notification.error({
                message: 'Error',
                description: 'Error login',
                duration: 2
            })
        }
    }
    
    return (
        <div className={'flex flex-col items-stretch gap-4'}>
            <div className={'flex flex-col items-stretch gap-4'}>
                <Input
                    placeholder={'login'}
                    value={state.email}
                    onChange={(e) => setState({...state, email: e.target.value})}
                />
                <Input
                    placeholder={'full name'}
                    value={state.fullName}
                    onChange={(e) => setState({...state, fullName: e.target.value})}
                />
                <Input.Password
                    placeholder={'password'}
                    value={state.password}
                    onChange={(e) => setState({...state, password: e.target.value})}
                />
            </div>
            
            <div className={'flex flex-row items-center justify-end gap-2'}>
                <Button
                    type="primary"
                    onClick={() => onSubmit(state)}
                >
                    Registration
                </Button>
            </div>
        </div>
    );
};

export default LoginForm;