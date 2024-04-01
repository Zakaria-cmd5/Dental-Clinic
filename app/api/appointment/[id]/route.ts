import { patientScema } from "@/app/patientScema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const patient = await prisma.patients.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!patient) {
    return NextResponse.json({ error: "Invalid patient" }, { status: 404 });
  }

  await prisma.patients.delete({
    where: { id: patient.id },
  });

  return NextResponse.json({});
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = patientScema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

  const { name, phoneNumber, bloodGroup, date, time, reservationType } = body;

  const issue = await prisma.patients.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  const updatedIssue = await prisma.patients.update({
    where: { id: issue.id },
    data: {
      name,
      phoneNumber,
      bloodGroup,
      date,
      time,
      reservationType,
    },
  });

  return NextResponse.json(updatedIssue);
}
