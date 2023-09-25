import {Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@mui/material";
import Link from "next/link";
import { register } from "@/services/user";

export default function Register() {
    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const data: FormData = new FormData(event.currentTarget)
        const email: string = data.get('email') as string
        const password: string = data.get('password') as string

        await register(email, password)
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h5">
                Zarejestruj się
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adres e-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Hasło"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Zapamiętaj mnie"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Zarejestruj się
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Zapomniałeś hasła?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/user/login" variant="body2">
                            {"Masz już konto? Zaloguj się"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}