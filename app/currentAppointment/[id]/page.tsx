import DeletePatientButton from "@/app/components/DeletePatientButton";
import prisma from "@/prisma/client";
import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const PatientDetailPage = async ({ params }: Props) => {
  const patient = await prisma.patients.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!patient) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="1">
      <Box>
        <Heading>{patient.name}</Heading>
        <Text as="p">{patient.phoneNumber}</Text>
        <Text as="p">{patient.bloodGroup}</Text>
        <Text as="p">{patient.date}</Text>
        <Text as="p">{patient.time}</Text>
        <Text as="p">{patient.reservationType}</Text>
      </Box>
      <Box>
        <DeletePatientButton patientId={patient.id} />
      </Box>
    </Grid>
  );
};

export default PatientDetailPage;
