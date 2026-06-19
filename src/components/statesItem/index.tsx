import { useEffect, useRef, useState } from 'react';

interface StateItemProps {
    number: number;
    label: string;
    suffix?: string;
}

export default function StateItem({ number, label, suffix = "" }: StateItemProps) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current

        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                }
            },
            {
                threshold: 0.5,
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [hasAnimated])

    useEffect(() => {
        if (!hasAnimated) return

        let current = 0

        const duration = 1500
        const incrementTime = duration / number

        const timer = setInterval(() => {
            current += 1

            setCount(current)

            if (current >= number) {
                clearInterval(timer)
            }
        }, incrementTime)

        return () => clearInterval(timer)
    }, [hasAnimated, number])

    return(
        <div ref={ref} className='flex flex-col gap-1'>
            <span className='text-white text-4xl md:text-3xl font-bold'>
                {count}{suffix}
            </span>
            <span className='text-grey-100 text-basea lg:text-lg'>
                {label}
            </span>
        </div>
    )
}