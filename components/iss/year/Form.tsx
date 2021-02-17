export default function () {
  const { setOutput } = useContext(OutputContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("Year", data);
    data["months"] = ["..."];
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input fieldName="yearNumber" refName={register({ required: true })} />

      <InputSubmit />
    </form>
  );
}

import { useContext } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Input";
import InputSubmit from "../../InputSubmit";
import { OutputContext } from "../outputContext";
