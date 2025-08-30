interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    type = 'button',
    className = '',
    disabled = false
}: ButtonProps) => {
    const buttonClass = `btn btn--${variant} btn--${size} ${className} ${disabled ? 'btn--disable' : ''}`;

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )

}

export default Button