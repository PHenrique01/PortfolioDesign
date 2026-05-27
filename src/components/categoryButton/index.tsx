interface CategoryButtonProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

export default function CategoryButton({ label, active, onClick }: CategoryButtonProps) {
    return(
        <button onClick={onClick} className={`text-sm font-medium px-6 py-4 rounded-full border transition-all duration-300 cursor-pointer ${active ? "bg-white text-grey-700 border-white" : "border-white text-white hover:border-white hover:text-grey-700 hover:bg-white"}`}>
            {label}
        </button>
    )
}