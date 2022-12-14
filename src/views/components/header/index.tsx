import React from 'react';
import Logo from '@views/components/header/Logo';
import Input from '@views/components/input/Input';

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 border-b border-primary-100 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <Input type="text" placeholder="검색어를 입력해주세요." />
        </div>
      </div>
    </header>
  );
}

export default Header;
