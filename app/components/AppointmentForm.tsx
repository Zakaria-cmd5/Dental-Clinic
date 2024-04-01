"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import { patientScema } from "../patientScema";
import { Patients } from "@prisma/client";

interface AppointmentFormData {
  name: string;
  phoneNumber: string;
  bloodGroup: string;
  date: string;
  time: string;
  reservationType: string;
}

interface Props {
  patient?: Patients;
}

const AppointmentForm = ({ patient }: Props) => {
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(patientScema),
  });
  return (
    <Box className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-6">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-2"
        onSubmit={handleSubmit(async (data) => {
          try {
            setIsSubmiting(true);
            await axios.post("/api/appointment", data);
            router.push("/currentAppointment");
            router.refresh();
          } catch (error) {
            setError("An unexpected error occurred.");
            setIsSubmiting(false);
          }
        })}
      >
        <TextField.Root
          defaultValue={patient?.name}
          placeholder="Name"
          {...register("name")}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <TextField.Root
          placeholder="Phone Number"
          defaultValue={patient?.phoneNumber}
          {...register("phoneNumber")}
        />
        <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
        <TextField.Root
          defaultValue={patient?.bloodGroup}
          placeholder="Blood Group"
          {...register("bloodGroup")}
        />
        <ErrorMessage>{errors.bloodGroup?.message}</ErrorMessage>
        <TextField.Root
          defaultValue={patient?.date}
          type="date"
          {...register("date")}
        />
        <ErrorMessage>{errors.date?.message}</ErrorMessage>
        <TextField.Root
          defaultValue={patient?.time}
          type="time"
          {...register("time")}
        />
        <ErrorMessage>{errors.time?.message}</ErrorMessage>
        <TextField.Root
          defaultValue={patient?.reservationType}
          placeholder="Teservation Type (Advance - Emergency - Advance)"
          {...register("reservationType")}
        />
        <ErrorMessage>{errors.reservationType?.message}</ErrorMessage>
        {isSubmiting === false ? (
          <Button color="indigo" variant="soft">
            Book an Appointment
          </Button>
        ) : (
          <Spinner />
        )}
      </form>
    </Box>
  );
};

export default AppointmentForm;
