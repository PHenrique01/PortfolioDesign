import FlagBrazil from '@assets/images/image-5.svg'

export default function LanguageSelector() {
    return(
        <button className='flex items-center gap-2'>
            <img src={FlagBrazil} alt="Brasil"/>
            <span className='text-grey-100'>BR</span>
        </button>
    )
}