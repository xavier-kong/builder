"use client"

import { QRCode } from 'react-qrcode-logo';
import { api } from '~/trpc/react';

export default function Home() {
    const res = api.webTel.generateQrCodeUrl.useQuery();


    // https://www.npmjs.com/package/react-qrcode-logo

    return (
        <div className="bg-neutral-800 h-screen w-screen flex flex-col items-center justify-start">
            <div className="w-1/4 flex flex-col min-w-56 mt-10">
                <div className="h-72 w-full p-5 flex items-center justify-center">
                    <QRCode 
                        value={`${res.data?.uuid}`} 
                        eyeRadius={10} 
                        style={{ borderRadius: 20, height: '100%', width: '100%' }} 
                        logoImage="https://w7.pngwing.com/pngs/673/14/png-transparent-circle-messenger-round-icon-telegram-popular-services-brands-vol-2-icon.png"
                        removeQrCodeBehindLogo
                        logoPadding={1}
                        logoWidth={30}
                        logoHeight={30}
                        logoPaddingStyle="circle"
                    />
                </div>
                <div className="h-14 w-full bg-red-800">Scan the QR code above</div>
            </div>
        </div>
    )
}
