import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { patientScema } from "../../patientScema";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = patientScema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newPatient = await prisma.patients.create({
    data: {
      name: body.name,
      phoneNumber: body.phoneNumber,
      bloodGroup: body.bloodGroup,
      date: body.date,
      time: body.time,
      reservationType: body.reservationType,
    },
  });

  return NextResponse.json(newPatient, { status: 201 });
}
