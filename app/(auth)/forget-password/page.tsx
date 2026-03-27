"use client";

import { Button } from '@/components/ui/button';
import { CustomCardCenter } from '@/components/custom/CustomCardCenter';
import { FormEvent, useState } from 'react';
import { CustomFieldInput } from '@/components/custom/CustomFieldInput';
import { redirect } from 'next/navigation';

export default function ForgetPasswordPage() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        redirect("/login");
    }

    const handleBackToLogin = () => {
        redirect("/login");
    }

    return (
        <CustomCardCenter
            title='Forget Password'
            content={
                <ForgetPasswordInputForm
                    email={email}
                    setEmail={setEmail}
                    onSubmit={handleSubmit}
                    onBack={handleBackToLogin}
                />
            }
        />
    );
}

interface ForgetPasswordFormProps {
    email: string;
    setEmail: (val: string) => void;
    onSubmit: (e: FormEvent) => void;
    onBack: () => void;
}

function ForgetPasswordInputForm({ email, setEmail, onSubmit, onBack}: ForgetPasswordFormProps) {
    return(
        <form onSubmit={onSubmit}>
            <CustomFieldInput
                label='Email'
                name='inputEmail'
                id='input_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
            />
            <Button type='submit' variant={'default'} className='w-full mb-3'>Submit</Button>
            <hr />
            <Button type='button' variant={'outline'} className='w-full mt-3' onClick={onBack}>Back</Button>
        </form>
    );
}

