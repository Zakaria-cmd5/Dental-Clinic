import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const CurrentAppointment = async () => {
  const patients = await prisma.patients.findMany();
  return (
    <div className="space-y-5">
      <Button>
        <Link href="/appointment">Appointment</Link>
      </Button>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {patients.map((patient) => (
            <Table.Row key={patient.id}>
              <Table.Cell>
                <Link
                  href={`/currentAppointment/${patient.id}`}
                  className="text-sky_500 hover:underline"
                >
                  {patient.name}
                </Link>
              </Table.Cell>
              <Table.Cell>{patient.date}</Table.Cell>
              <Table.Cell>{patient.time}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default CurrentAppointment;
