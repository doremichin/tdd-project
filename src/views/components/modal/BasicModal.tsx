import { Dialog } from '@headlessui/react';

interface IBasicModal {
  open: boolean;
  onSubmit?: () => void;
  onClose: () => void;
}

const BasicModal = ({ onSubmit, open = false, onClose }: IBasicModal) => {
  const handleSubmit = () => {
    onClose();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <Dialog className="relative z-[999]" open={open} onClose={onClose}>
      <div className="fixed inset-0 bg-[#99999930]" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white border border-primary-500 rounded-4 p-2">
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button className="mr-2" onClick={handleSubmit}>
            확인
          </button>
          <button onClick={onClose}>닫기</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default BasicModal;
