interface StateItemProps {
    number: string;
    label: string;
}

export default function StateItem({ number, label }: StateItemProps) {
    return(
        <div className='flex flex-col gap-1'>
            <span className='text-white text-3xl font-bold'>{number}</span>
            <span className='text-grey-100 text-lg'>{label}</span>
        </div>
    )
}