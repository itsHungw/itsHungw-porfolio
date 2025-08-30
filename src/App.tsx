import './components/ui/Button/Button.scss'
import './components/ui/Card/Card.scss'
import './components/ui/LoadingSpinner/LoadingSpinner.scss'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import LoadingSpinner from './components/ui/LoadingSpinner'
import { useState } from 'react'
import Modal from './components/ui/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('medium');

  const openModal = (size: 'small' | 'medium' | 'large' = 'medium') => {
    setModalSize(size);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2>Modal Examples</h2>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={() => openModal('small')}>
          Open Small Modal
        </Button>

        <Button variant="primary" onClick={() => openModal('medium')}>
          Open Medium Modal
        </Button>

        <Button variant="primary" onClick={() => openModal('large')}>
          Open Large Modal
        </Button>

        <Button variant="outline" onClick={() => openModal()}>
          Modal without Title
        </Button>
      </div>

      {/* Modal Demo */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`${modalSize.charAt(0).toUpperCase() + modalSize.slice(1)} Modal`}
        size={modalSize}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>This is a {modalSize} modal example.</p>
          <p>You can put any content here like forms, images, or information.</p>

          <div style={{ background: '#f3f4f6', padding: '1rem', borderRadius: '8px' }}>
            <h4>Form Example</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input
                type="text"
                placeholder="Enter your name"
                style={{ padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
              />
              <input
                type="email"
                placeholder="Enter your email"
                style={{ padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="primary">
              Submit
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal với loading state */}
      <Card title="Modal với Loading State">
        <Button
          variant="secondary"
          onClick={() => openModal('small')}
        >
          Open Modal with Loading
        </Button>
      </Card>
    </div>
  );
}


export default App
