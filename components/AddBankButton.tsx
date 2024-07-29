"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';

const AddBankButton = ({ user }: AddBankButtonProps) => {
  const router = useRouter();

  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      setToken(data?.linkToken);
    }

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    await exchangePublicToken({
      publicToken: public_token,
      user,
    })

    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      <Button
        onClick={() => open()}
        disabled={!ready}
        className='flex gap-2'
      >
        <Image
          src="/icons/plus.svg"
          width={20}
          height={20}
          alt="plus"
        />
        <h2 className="text-14 font-semibold text-gray-600">
          Add Bank
        </h2>
      </Button>
    </>
  )
}

export default AddBankButton