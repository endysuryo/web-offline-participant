'use client'

import useGetListBank from '@/libs/apis/queries/use-get-list-bank'
import { Button, Checkbox, TextField } from '@mui/material'
import React from 'react'

export default function Home() {
  const { data, error, isLoading } = useGetListBank({ size: 10 })

  return (
    <main>
      <form className='flex flex-col items-center gap-3'>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' fullWidth />
        <TextField id='outlined-basic' label='Outlined' variant='outlined' fullWidth />
        <Button variant='contained' fullWidth>
          Contained
        </Button>
        <Checkbox defaultChecked />
      </form>
    </main>
  )
}
