"use client";

import { FormEvent, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import { redirect } from 'next/navigation';

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({firstName, lastName, email, password, confirmPassword});
    }

    const handleBackToLogin = () => {
        redirect("/login");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="mx-auto w-full max-w-sm" size="sm">
                <CardHeader>
                    <CardTitle className="flex justify-center">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Create new Account</h3>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <RegisterInputForm
                        firstName={firstName}
                        setFirstName={setFirstName}
                        lastName={lastName}
                        setLastName={setLastName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                        onSubmit={handleSubmit}
                        onBackToLogin={handleBackToLogin}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

interface RegisterFormProps {
    firstName: string;
    setFirstName: (val: string) => void;
    lastName: string;
    setLastName: (val: string) => void;
    email: string;
    setEmail: (val: string) => void;
    password: string;
    setPassword: (val: string) => void;
    confirmPassword: string;
    setConfirmPassword: (val: string) => void;
    onSubmit: (e: FormEvent) => void;
    onBackToLogin: () => void;
}

function RegisterInputForm({ firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, onSubmit, onBackToLogin }: RegisterFormProps) {
    return (
        <form onSubmit={onSubmit} >
            {/* First name */}
            <Field className='my-3'>
                <FieldLabel htmlFor='input_first_name'>First Name</FieldLabel>
                <Input
                    type='text'
                    name='inputFirstName'
                    id='input_first_name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='Enter First Name'
                    required
                />
            </Field>

            {/* Last Name */}
            <Field className='my-3'>
                <FieldLabel htmlFor='input_last_name'>Last Name</FieldLabel>
                <Input
                    type='text'
                    name='inputLastName'
                    id='input_last_name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Enter Last Name'
                    required
                />
            </Field>

            {/* Email */}
            <Field className='my-3'>
                <FieldLabel htmlFor='input_email'>Email</FieldLabel>
                <Input
                    type='text'
                    name='inputEmail'
                    id='input_email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Email'
                    required
                />
            </Field>

            {/* Password */}
            <Field className='my-3'>
                <FieldLabel htmlFor='input_password'>Password</FieldLabel>
                <Input
                    type='password'
                    name='inputPassword'
                    id='input_password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Password'
                    required
                />
            </Field>

            {/* Confirm Password */}
            <Field className='my-3'>
                <FieldLabel htmlFor='input_confirm_password'>Confirm Password</FieldLabel>
                <Input
                    type='password'
                    name='inputConfirmPassword'
                    id='input_confirm_password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='Enter Confirm Password'
                    required
                />
            </Field>

            {/* Button */}
            <Button type='submit' variant='default' className='w-full my-3'>Register</Button>

            <hr />

            <Button type="button" variant='secondary' className='w-full mt-3' onClick={onBackToLogin}>Back</Button>
        </form>
    );
}