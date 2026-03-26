"use client";

import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Field, FieldLabel } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CustomCardCenter } from '@/components/custom/CustomCardCenter';
import { useState } from 'react';

export default function ForgetPasswordPage() {
    const [email, setEmail] = useState("");

    return (
        <CustomCardCenter
            title='Forget Password'
            content={
                <ForgetPasswordInputForm
                    email={email}
                />
            }
        />
    );
}

interface ForgetPasswordFormProps {
    email: string;

}

function ForgetPasswordInputForm({email}: ForgetPasswordFormProps) {
    return(
        <h1>sdf</h1>
    );
}

