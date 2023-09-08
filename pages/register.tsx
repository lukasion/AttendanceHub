import { useRouter } from 'next/router'

export default function Register() {
    const router = useRouter()
    return (
        <p>Post: {router.query.slug}</p>
    )
}