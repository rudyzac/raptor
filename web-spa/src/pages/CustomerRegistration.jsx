import React from 'react'
import { useForm } from "react-hook-form"
import styled from 'styled-components'

const CustomerRegistration = props => {
  const onSubmit = data => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/customers`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => console.log("API RETURNS: ", json))
  }

  const { register, formState: { errors }, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("FirstName", { required: true })} placeholder="First name" />
      {errors.firstName?.type === 'required' && "First name is required"}

      <input {...register("LastName", { required: true })} placeholder="Last name" />
      {errors.firstName?.type === 'required' && "Last name is required"}

      <input {...register("Email", { required: true })} placeholder="Email" />
      {errors.firstName?.type === 'required' && "Email is required"}

      <input {...register("Password", { required: true })} placeholder="Password" />
      {errors.firstName?.type === 'required' && "Password is required"}
      
      <input type="submit" />
    </form>
  )
}

export default CustomerRegistration
