import React, {useState} from 'react';
import {Button, Input, notification} from "antd";
import {useRouter} from "next/router";
import {LoginFormDTO} from "@/api/dto/auth.dto";
import {api} from "@/api"
import {setCookie} from "nookies";
import {paths} from "@/core/paths";


const LoginForm: React.FC = () => {
    const router = useRouter()
    const [state, setState] = useState({email: 'admin@cloud.tsx', password: 'Admin121'})
    
    const onSubmit = async (values: LoginFormDTO) => {
        try {
            const {token} = await api.auth.login(values)
            setCookie(null, '_token', token, {path: "/"})
            await router.push(paths.pages.dashboard)
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
                    placeholder={'email'}
                    value={state.email}
                    onChange={(e) => setState({...state, email: e.target.value})}
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
                    Login
                </Button>
            </div>
        </div>
    );
};

export default LoginForm;