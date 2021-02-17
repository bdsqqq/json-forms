export default function () {
  const { setOutput } = useContext(OutputContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("Month", data);
    data["parts"] = ["..."];
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input fieldName="name" refName={register({ required: true })} />

      <Input fieldName="longName" refName={register({ required: true })} />

      <InputSubmit />
    </form>
  );
}

import { useContext } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Input";
import InputSubmit from "../../InputSubmit";
import { OutputContext } from "../outputContext";
