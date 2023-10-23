import { Button, Checkbox, TextField } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <main>
      <form className='flex flex-col items-center p-24 gap-3'>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' className='w-1/2' />
        <TextField id='outlined-basic' label='Outlined' variant='outlined' className='w-1/2' />
        <Button variant='contained' className='w-1/2'>
          Contained
        </Button>
        <Checkbox defaultChecked />
      </form>
    </main>
  )
}
