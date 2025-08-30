import './LoadingSpinner.scss';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const LoadingSpinner = ({
    size = 'medium',
    className = ''
}: LoadingSpinnerProps) => {


    const spinnerClass = `loading-spinner loading-spinner--${size} ${className}`;

    return (
        <div className={spinnerClass}>
            <div className="loading-spinner__inner"></div>
        </div>
    );
};

export default LoadingSpinner;