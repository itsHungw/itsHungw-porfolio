interface CardProps {
    children?: React.ReactNode;
    title?: string;
    imageUrl?: string;
    imageAlt?: string;
    footer?: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
    border?: '1px' | '2px' | '3px',
}

const Card = ({
    children,
    title,
    imageUrl,
    imageAlt = '',
    footer,
    className = '',
    hoverEffect = false,
    onClick,
    border
}: CardProps) => {

    const cardClass = `card ${hoverEffect ? 'card--hover' : ''} ${className} ${border ? `card--border_${border}` : ''}`

    return (
        <div className={cardClass} onClick={onClick}>

            {imageUrl && (
                <div className="card__image">
                    <img src={imageUrl} alt={imageAlt} />
                </div>
            )}


            <div className="card__content">

                {title && <h3 className="card__title">{title}</h3>}


                {children && <div className="card__body">{children}</div>}
            </div>


            {footer && <div className="card__footer">{footer}</div>}
        </div>
    )
}

export default Card