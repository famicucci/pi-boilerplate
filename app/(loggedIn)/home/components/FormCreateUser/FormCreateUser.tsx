"use client";
import { Button } from "@/components/Button";
import { TextFieldContainer } from "@/components/TextField";
import React from "react";
import User from "../../models/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/app/(loggedOut)/login/validations";
import { createUserRequest } from "../../services";
import styles from "../../styles/formCreateUser.module.css";

const defaultValues: User = {
  name: "",
  age: "",
  city: "",
};

export default function FormCreateUser() {
  const { handleSubmit, control, reset } = useForm<User>({
    defaultValues,
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: User) => {
    createUserRequest({
      name: data.name,
      age: data.age,
      city: data.city,
    });

    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldContainer
        control={control}
        name="name"
        type="text"
        placeholder="Nombre"
      />
      <TextFieldContainer
        control={control}
        name="age"
        type="number"
        placeholder="Edad"
      />
      <TextFieldContainer
        control={control}
        name="city"
        type="text"
        placeholder="Ciudad"
      />
      <Button type="submit" color="primary" className={styles.button}>
        Agregar
      </Button>
    </form>
  );
}
