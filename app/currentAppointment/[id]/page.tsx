import authOption from "@/app/auth/authOption";
import DeletePatientButton from "@/app/components/DeletePatientButton";
import EditPatientButton from "@/app/components/EditPatientButton";
import prisma from "@/prisma/client";
import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const PatientDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOption);
  const patient = await prisma.patients.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!patient) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{patient.name}</Heading>
        <Text as="p">{patient.phoneNumber}</Text>
        <Text as="p">{patient.bloodGroup}</Text>
        <Text as="p">{patient.date}</Text>
        <Text as="p">{patient.time}</Text>
        <Text as="p">{patient.reservationType}</Text>
      </Box>
      <Box>
        <Flex gap="2">
          <DeletePatientButton patientId={patient.id} />
          <EditPatientButton reservationId={patient.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default PatientDetailPage;
