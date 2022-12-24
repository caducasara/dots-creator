import './styles.css'

interface ButtonProps {
    subtitle: string;
    handleFunction: (event: React.MouseEvent<HTMLElement>) => void
}

export function Button({ subtitle, handleFunction }: ButtonProps) {
    return <button className="button" onClick={handleFunction}>{subtitle}</button>
}