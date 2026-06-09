import FlagBrazil from '@assets/images/image-5.svg'
import FlagUsa from '@assets/images/image-6.svg'
import ChevronDownIcon from '@assets/icons/CaretDown.svg'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'

export default function LanguageSelector() {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const languages = [
        {
            code: 'pt',
            label: 'Português',
            short: 'BR',
            flag: FlagBrazil,
        },
        {
            code: 'en',
            label: 'English',
            short: 'EN',
            flag: FlagUsa,
        },
    ]

    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language)
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(
                dropdownRef.current &&
                !dropdownRef.current.contains(
                    event.target as Node
                )
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener(
            'mousedown',
            handleClickOutside
        )

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside
            )
        }
    }, [])

    return(
        <div ref={dropdownRef} className='relative'>
            <button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-2 transition-colors duration-300 cursor-pointer'>
                <img src={currentLanguage.flag} alt={currentLanguage.label}/>
                <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <img src={ChevronDownIcon} alt="" className='hover:opacity-50'/>
                </span>
            </button>
            {isOpen && (
                <div className='bg-grey-500 border border-white/10 rounded-xl w-44 absolute right-0 top-10 p-2 shadow-xl backdrop-blur-md'>
                    {languages.map((language) => (
                        <button key={language.code} onClick={() => handleLanguageChange(language.code)} className='flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left transition-colors duration-300 hover:bg-grey-600 cursor-pointer'>
                            <img src={language.flag} alt={language.label}/>
                            <span className='text-grey-100'>{language.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}