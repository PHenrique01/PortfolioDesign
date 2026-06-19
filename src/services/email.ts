import emailjs from '@emailjs/browser'

interface SendEmailParams {
    category: string;
    name: string;
    email: string;
    message: string;
}

export async function SendEmail({ category, name, email, message }: SendEmailParams) {
    return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            category,
            name,
            email,
            message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
}