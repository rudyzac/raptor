import React from 'react'
import { useForm } from "react-hook-form"

const CustomerRegistration = props => {
  const onSubmit = data => console.log(data)
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} placeholder="Password" />
      <input type="submit" />
    </form>
  )
}

export default CustomerRegistration
