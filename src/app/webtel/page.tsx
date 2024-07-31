"use client"

import { QRCode } from 'react-qrcode-logo';
import { api } from '~/trpc/react';

export default function Home() {
    const res = api.webTel.generateQrCodeUrl.useQuery();


    // https://www.npmjs.com/package/react-qrcode-logo

    return (
        <div className="bg-neutral-800 h-screen w-screen flex flex-col items-center justify-center">
            <div className="w-1/4 flex flex-col min-w-56">
                <div className="h-52 w-full bg-blue-800 p-5 flex items-center justify-center">
                    <QRCode value={`${res.data?.uuid}`} eyeRadius={10} style={{ borderRadius: 20 }} />
                </div>
                <div className="h-14 w-full bg-red-800">Scan the QR code above</div>
            </div>
        </div>
    )
}
