import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginForm = (Schema) => {
  return useForm({
    resolver: zodResolver(Schema),
    mode: "onSubmit",
  });
};
