import { Button } from "@radix-ui/themes";
import React from "react";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  reservationId: number;
}

const EditPatientButton = ({ reservationId }: Props) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/currentAppointment/${reservationId}/edit`}>
        Edit Reservation
      </Link>
    </Button>
  );
};

export default EditPatientButton;
