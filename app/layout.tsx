import type {Metadata} from 'next'
import './scss/main.scss';
import Navigation from "@/app/components/navigation";
import {Container} from "@mui/material";


export const metadata: Metadata = {
    title: 'Signifer - Portal do zapisu internetowego',
    description: 'Created by ellukasion',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Navigation simple={true}/>

            <Container maxWidth="lg" sx={{mt: 12}}>
                {children}
            </Container>
        </main>
    )
}
