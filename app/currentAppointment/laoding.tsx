import { Table } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingCurrentAppointmentPage = () => {
  const patients = [1, 2, 3, 4, 5];

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Phone Number</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Blood Group</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {patients.map((patient) => (
          <Table.Row key={patient}>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default LoadingCurrentAppointmentPage;
