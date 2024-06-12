"use client";

import { Button } from "~/shared/ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/shared/ui/card";
import { Input } from "~/shared/ui/input";
import { Label } from "~/shared/ui/label";
import { useForm } from "react-hook-form";
import { CreateUserDto } from "~/shared/lib/db";
import { FC } from "react";
import { registerAction } from "../../model/register";

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDto>();

  const onSubmit = async (dto: CreateUserDto) => {
    const user = await registerAction(dto);
    console.log(user)
    location.reload()
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>You need creating first account</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div>
            <Label htmlFor="username">Username:</Label>
            <Input placeholder="Enter your username" id="username" {...register('username')} />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input
              placeholder="Enter your password"
              id="password"
              type="password"
              {...register('password')}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" variant="outline">
            Register
          </Button>
        </CardFooter>
      </form>
    </>
  );
};
