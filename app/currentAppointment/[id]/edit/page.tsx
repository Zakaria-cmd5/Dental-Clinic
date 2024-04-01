import AppointmentForm from "@/app/components/AppointmentForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const PatientDetailEditPage = async ({ params }: Props) => {
  const patient = await prisma.patients.findUnique({
    where: { id: parseInt(params.id) },
  });
  
  if (!patient) notFound()

  return (
    <AppointmentForm patient={patient}/>
  );
};

export default PatientDetailEditPage;
