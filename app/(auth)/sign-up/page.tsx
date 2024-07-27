import AuthForm from '@/components/AuthForm';
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex flex-center size-full sm:px-6  '>
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp;