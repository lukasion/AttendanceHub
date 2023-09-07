import { Button, Container } from "@mui/material";
import Navigation from "@/app/components/navigation";

export default function Home() {
  return (
    <main>
        <Navigation />

        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Button variant="contained">test</Button>
        </Container>
    </main>
  )
}
