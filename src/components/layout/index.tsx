interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return(
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {children}
        </div>
    )
}