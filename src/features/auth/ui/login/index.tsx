"use client";

import { useForm } from "react-hook-form";
import { CreateUserDto } from "~/shared/lib/db";
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
import { loginAction } from "~/features/auth/model/login";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDto>();

  const onSubmit = async (dto: CreateUserDto) => {
    await loginAction(dto);
    location.replace('/dashboard')
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your username and password</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div>
            <Label htmlFor="username">Username:</Label>
            <Input
              placeholder="Enter your username"
              id="username"
              {...register("username")}
            />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input
              placeholder="Enter your password"
              id="password"
              type="password"
              {...register("password")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" variant="outline">
            Login
          </Button>
        </CardFooter>
      </form>
    </>
  );
};
