import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { FC, forwardRef, MouseEventHandler } from 'react';
import { Button } from '../Button';

export const DatePicker: FC<ReactDatePickerProps> = ({ value, ...props }) => {
  return (
    <div className="relative">
      <div className="mt-1">
        <ReactDatePicker
          customInput={<DateButtonInput />}
          selected={value ? parseISO(value) : null}
          className="shadow-sm bg-th-background block w-full sm:text-sm border-th-foreground-tertiary rounded-md text-th-primary-dark"
          selectsStart
          nextMonthButtonLabel={'>'}
          previousMonthButtonLabel={'<'}
          {...props}
        />
      </div>
    </div>
  );
};

interface ButtonInputProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick?: MouseEventHandler<HTMLElement>;
}

export const DateButtonInput = forwardRef<HTMLButtonElement, ButtonInputProps>(({ value, onClick }, ref) => (
  <Button className="w-full" onClick={onClick} ref={ref} variant="secondary">
    {value ? format(new Date(value.toString()), 'do MMMM yyyy') : 'Choose a date'}
  </Button>
));

DateButtonInput.displayName = 'DateButtonInput';
