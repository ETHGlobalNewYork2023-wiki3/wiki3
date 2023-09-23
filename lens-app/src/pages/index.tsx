// app/page.tsx
'use client'
import { useExploreProfiles } from '@lens-protocol/react-web'
import Link from 'next/link'
import useGenerateQrCode from "../hooks/useGenerateQrCode"
import { useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import { useQRCode } from "next-qrcode"

export default function Home() {
  const { data: profiles } = useExploreProfiles({
    limit: 25
  })

  // Generate a unique session ID using uuid library.
  const sessionId = useMemo(() => uuidv4(), [])
  // Used to render the QR code.
  // const { Canvas } = useQRCode()
  const {
    data: qrCode,
    isLoading: loadingQrCode,
    isError: qrCodeError,
  } = useGenerateQrCode(sessionId)
  console.log('qrCode', qrCode)
  
  return (
    <div className='p-20'>
      {/* <div className="flex justify-center">
          <Canvas
            text={JSON.stringify(qrCode)}
            options={{
              width: 384,
            }}
          />
        </div> */}
      <h1 className='text-5xl'>My Lens App</h1>
      {
        profiles?.map((profile, index) => (
          <Link href={`/profile/${profile.handle}`} key={index}>
            <div className='my-14'>
              {
                profile.picture && profile.picture.__typename === 'MediaSet' ? (
                  <img
                    src={profile.picture.original.url}
                    width="120"
                    height="120"
                    alt={profile.handle}
                  />
                ) : <div className="w-14 h-14 bg-slate-500	" />
              }
              <h3 className="text-3xl my-4">{profile.handle}</h3>
              <p className="text-xl">{profile.bio}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
