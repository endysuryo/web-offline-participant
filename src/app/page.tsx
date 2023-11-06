'use client'

import { SurveyDescription } from '@/components/private'
import usePostRegisterMutation, {
  TRegisterPayload,
} from '@/libs/apis/mutations/use-post-register-mutation'
import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Home() {
  const searchParams = useSearchParams()
  const studyid = searchParams.get('studyid')
  const groupname = searchParams.get('groupname')
  const version = searchParams.get('version')
  const utm_source = searchParams.get('utm_source')
  const time = searchParams.get('time')

  const { mutate } = usePostRegisterMutation()

  const formik = useFormik({
    initialValues: {
      studyId: studyid,
      name: '',
      phoneNumber: '',
      recruiterCode: '',
      lat: 0,
      long: 0,
      version: version,
      utmSource: utm_source,
    },
    enableReinitialize: true,
    validate: (values) => {
      const errors: Partial<TRegisterPayload> = {}

      if (!values.name) {
        errors.name = 'Required'
      }

      if (!values.name) {
        errors.name = 'Required'
      }

      return errors
    },
    onSubmit: (values) => {
      mutate(values)
    },
  })

  return (
    <main>
      <form className='flex flex-col items-center gap-6' onSubmit={formik.handleSubmit}>
        <Image
          src='/assets/images/populix_logo.png'
          alt='populix_logo'
          width={183}
          height={48}
          className='mb-3'
        />
        <SurveyDescription
          title={groupname as string}
          utmSource={utm_source as string}
          time={time as string}
        />
        <TextField
          id='name'
          label='Nama Lengkap*'
          {...formik.getFieldProps('name')}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
          variant='outlined'
          fullWidth
        />
        <TextField
          id='phoneNumber'
          label='Nomor Aktif WA*'
          {...formik.getFieldProps('phoneNumber')}
          error={!!formik.errors.phoneNumber}
          helperText={formik.errors.phoneNumber}
          variant='outlined'
          fullWidth
        />
        {utm_source && time ? null : (
          <TextField id='recruiterCode' label='Recruiter Code' variant='outlined' fullWidth />
        )}
        <p className='text-sm font-light'>
          Dengan menekan tombol “Masuk”, kamu menyetujui Kebijakan Privasi dan Syarat & Ketentuan
          Populix.
        </p>
        <Button type='submit' color='primary' fullWidth variant='contained' disableElevation>
          MULAI SURVEY
        </Button>
      </form>
    </main>
  )
}
