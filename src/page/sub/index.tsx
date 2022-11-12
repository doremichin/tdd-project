import React, { useState } from 'react';
import cn from 'classnames';

import Toggle from '@views/components/input/Toggle';
import BasicModal from '@views/components/modal/BasicModal';

interface ISubPage {}

export function SubPage({}: ISubPage) {
  const [isCheck, setIsCheck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeToggle = (value: boolean) => {
    setIsCheck(value);
  };

  const onClickModal = (value: boolean) => {
    return () => {
      setIsOpen(value);
    };
  };

  return (
    <div className="container pt-5">
      <div className="mb-2 flex">
        <span className="mr-2">스위치</span>
        <Toggle value={isCheck} onChange={onChangeToggle} />
      </div>

      <div className="flex items-center mb-5">
        <div
          className={cn([
            'w-[300px] h-[300px] flex-center text-white',
            isCheck ? 'bg-primary-600' : 'bg-primary-300',
          ])}
        >
          {isCheck && <p>토글 켜짐</p>}
        </div>
      </div>

      <button
        className="p-2 bg-primary-600 text-white rounded-4 mb-2"
        onClick={onClickModal(true)}
      >
        모달 오픈
      </button>

      <BasicModal open={isOpen} onClose={onClickModal(false)} />
    </div>
  );
}

export default SubPage;
