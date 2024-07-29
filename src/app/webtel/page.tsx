import { api } from "~/trpc/react"


export default function Home() {
    const qrCodeUrl = api.post.generateQrCodeUrl.useQuery();

    return (
        <div className="bg-neutral-800 h-screen w-screen flex flex-col items-center justify-center">
            <div className="w-1/4 flex flex-col min-w-56">
                <div className="h-52 w-full bg-blue-800">

                </div>
                <div className="h-14 w-full bg-red-800">Scan the QR code above</div>
            </div>
        </div>
    )
}
