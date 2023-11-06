import React from 'react'

type ISurveyDescription = {
  title: string
  utmSource?: string
  time?: string | number
}

export default function SurveyDescription({ title, utmSource, time }: ISurveyDescription) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <p className='text-2xl font-semibold'>{title}</p>
      {utmSource && time ? (
        <>
          <p className='text-center text-sm font-light'>Kami ingin meminta pendapat Anda.</p>
          <p className='text-center text-sm font-light'>Mohon menjawab survei ini dengan jujur.</p>
          <p className='text-center text-sm font-light'>
            Waktu pengisian survei{' '}
            <span className='rounded-full bg-[#E9F1FF] px-2 py-1 font-bold'>{time} menit</span>
          </p>
        </>
      ) : null}
    </div>
  )
}
