import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}
      <label>Email</label>
      <input {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <label>Subject</label>
      <input {...register("subject", { required: true })} />
      {errors.subject && <span>This field is required</span>}
      <label>Message</label>
      <input {...register("message", { required: true })} />
      {errors.message && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};
