import { useState } from 'react';
import { Switch } from '@headlessui/react';

interface IToggle {
  onChange?: (value: boolean) => void;
  value?: boolean;
  cyTag?: string;
}

const Toggle = ({ onChange, value, cyTag }: IToggle) => {
  const [enabled, setEnabled] = useState(value || false);

  const handleChange = (checked: boolean) => {
    if (onChange) {
      onChange(checked);
    }

    setEnabled(checked);
  };

  return (
    <Switch
      data-cy={cyTag}
      checked={enabled}
      onChange={handleChange}
      className={`${
        enabled ? 'bg-primary-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default Toggle;
