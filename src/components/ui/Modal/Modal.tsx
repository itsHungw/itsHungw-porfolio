// Import các hooks cần thiết từ React
import { useEffect, useRef } from 'react';

// Import SCSS styles cho component
import './Modal.scss';

// Định nghĩa interface cho props
interface ModalProps {
    isOpen: boolean;                  // Modal có đang mở hay không
    onClose: () => void;              // Hàm được gọi khi đóng modal
    title?: string;                   // Tiêu đề modal
    children: React.ReactNode;              // Nội dung bên trong modal
    closeOnOverlayClick?: boolean;    // Có đóng khi click overlay không
    showCloseButton?: boolean;        // Có hiển thị nút đóng không
    size?: 'small' | 'medium' | 'large'; // Kích thước modal
}

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    closeOnOverlayClick = true,
    showCloseButton = true,
    size = 'medium'
}: ModalProps) => {
    // Refs để quản lý focus
    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Hàm đóng modal
    const handleClose = () => {
        onClose();
    };

    // Hàm xử lý click overlay
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            handleClose();
        }
    };

    // Hàm xử lý keydown (ESC để đóng)
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };

    // Effect để quản lý focus và event listeners
    useEffect(() => {
        if (isOpen) {
            // Lưu element đang active trước khi mở modal
            previousActiveElement.current = document.activeElement as HTMLElement;

            // Thêm event listener cho ESC key
            document.addEventListener('keydown', handleKeyDown);

            // Disable scroll trên body
            document.body.style.overflow = 'hidden';

            // Focus vào modal khi mở
            if (modalRef.current) {
                modalRef.current.focus();
            }
        }

        // Cleanup function
        return () => {
            // Remove event listener
            document.removeEventListener('keydown', handleKeyDown);

            // Enable scroll trên body
            document.body.style.overflow = 'unset';

            // Trả focus về element trước đó
            if (previousActiveElement.current) {
                previousActiveElement.current.focus();
            }
        };
    }, [isOpen]); // Chạy lại effect khi isOpen thay đổi

    // Nếu modal không mở, return null
    if (!isOpen) {
        return null;
    }

    // Render modal
    return (
        // Portal sẽ được thêm sau (bước nâng cao)
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div
                ref={modalRef}
                className={`modal modal--${size}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
                tabIndex={-1} // Để có thể focus được
            >
                {/* Header modal */}
                <div className="modal__header">
                    {title && (
                        <h2 id="modal-title" className="modal__title">
                            {title}
                        </h2>
                    )}
                    {showCloseButton && (
                        <button
                            className="modal__close-button"
                            onClick={handleClose}
                            aria-label="Close modal"
                        >
                            ×
                        </button>
                    )}
                </div>

                {/* Content modal */}
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;