import { api } from "~/trpc/server";
import { QRCode } from 'react-qrcode-logo';

export default async function Home() {
    const { uuid } = await api.webTel.generateQrCodeUrl();

    // https://www.npmjs.com/package/react-qrcode-logo

    return (
        <div className="bg-neutral-800 h-screen w-screen flex flex-col items-center justify-center">
            <div className="w-1/4 flex flex-col min-w-56">
                <div className="h-52 w-full bg-blue-800 p-5 flex items-center justify-center">
                    <QRCode value={`${uuid}`}/>
                </div>
                <div className="h-14 w-full bg-red-800">Scan the QR code above</div>
            </div>
        </div>
    )
}
