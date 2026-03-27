"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field";
import { Mail, Smartphone, KeyRound } from "lucide-react";
import { FormEvent, useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import { redirect } from "next/navigation";

// Roboto Font
const roboto = Roboto({
  subsets: ["latin"]
})

export default function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("/api/auth")
  //   .then(async (res) => {
  //     console.log("working");
  //   })
  //   .then((data) => setUsers(data))
  // }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitting: ", { username, password });
  }

  const onClickRegister = () => {
    redirect("/register");
  }

  const onClickForgetPassword = () => {
    redirect("/forget-password");
  }

  return (
    <div className={`${roboto.className} min-h-screen flex items-center justify-center bg-gray-100`}>
      <Card size="sm" className="mx-auto w-full max-w-sm font-[Roboto]">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Login</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            onSubmit={handleLogin}
            onClickRegister={onClickRegister}
            onClickForgetPassword={onClickForgetPassword}
          />
        </CardContent>
      </Card>
    </div>
  )
}

interface LoginFormProps {
  username: string;
  setUsername: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  onSubmit: (e: FormEvent) => void;
  onClickRegister: () => void;
  onClickForgetPassword: () => void;
}

function LoginForm({ username, setUsername, password, setPassword, onSubmit, onClickRegister, onClickForgetPassword }: LoginFormProps) {
  return (
    <>
      <form onSubmit={onSubmit}>
        {/* Username */}
        <Field className="my-3">
          <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
          <Input
            id="input-field-username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Field>
        {/* Password */}
        <Field className="my-3">
          <FieldLabel htmlFor="input-field-password">Password</FieldLabel>
          <Input
            id="input-field-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>
        <div className="p-0 m-0">
          <Button variant="link" className="text-blue-500" onClick={onClickForgetPassword}>Forget password</Button>
        </div>
        <div className="my-3">
          <Button type="submit" variant="default" className="w-full">Login</Button>
        </div>
        <hr></hr>
        <div>
          <p className="text-center mt-2">
            Dont&rsquo;t have an account?
          </p>
        </div>
        <div className="flex justify-center mt-2" >
          <Button variant="outline" size="icon" onClick={onClickRegister}><Smartphone /></Button>
          <Button variant="outline" size="icon" className="mx-3" ><Mail /></Button>
          <Button variant="outline" size="icon"><KeyRound /></Button>
        </div>
      </form>
    </>
  );
}
