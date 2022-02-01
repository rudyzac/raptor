import React from 'react'
import { useForm } from "react-hook-form"

const CustomerRegistration = props => {
  const onSubmit = data => console.log(data)
  const { register, formState: { errors }, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} placeholder="First name" />
      {errors.firstName?.type === 'required' && "First name is required"}

      <input {...register("lastName", { required: true })} placeholder="Last name" />
      {errors.firstName?.type === 'required' && "Last name is required"}

      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.firstName?.type === 'required' && "Email is required"}

      <input {...register("password", { required: true })} placeholder="Password" />
      {errors.firstName?.type === 'required' && "Password is required"}
      
      <input type="submit" />
    </form>
  )
}

export default CustomerRegistration
