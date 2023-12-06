// 'use client';
import * as React from "react";
import { Table } from "@/app/(loggedIn)/components/Table";
import { getUsersRequest } from "../../services";

export async function TableExample() {
  const data = await getUsersRequest();

  const columns = [
    {
      name: "Nombre",
      selector: "name",
      minWidth: "150px",
      align: "left",
    },
    {
      name: "Edad",
      selector: "age",
      minWidth: "220px",
      align: "center",
    },
    {
      name: "Ciudad",
      selector: "city",
      minWidth: "150px",
      align: "left",
    },
    {
      name: "",
      selector: "actions",
      minWidth: "50px",
      align: "left",
    },
  ];

  return <Table columns={columns} data={data} />;
}
