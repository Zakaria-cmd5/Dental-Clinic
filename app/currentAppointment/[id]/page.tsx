import prisma from "@/prisma/client";
import { Box, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const PatientDetailPage = async ({ params }: Props) => {
  const patient = await prisma.patients.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!patient) notFound();
  return (
    <Box>
      <Heading>{patient.name}</Heading>
      <Text as="p">{patient.phoneNumber}</Text>
      <Text as="p">{patient.bloodGroup}</Text>
      <Text as="p">{patient.date}</Text>
      <Text as="p">{patient.time}</Text>
      <Text as="p">{patient.reservationType}</Text>
    </Box>
  );
};

export default PatientDetailPage;
