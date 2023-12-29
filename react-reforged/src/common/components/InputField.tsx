import { Input, Typography } from 'antd';
import { Field, FieldProps } from 'formik';

import { FieldErrorMessage } from './FieldErrorMessage';

const { Title } = Typography;

interface BaseFieldProps {
  className?: string;
  name: string;
  placeholder: string;
  title?: string;
  disabled?: boolean;
}

interface InputProps extends BaseFieldProps {
  Component: typeof Input;
  type?: 'number';
}
interface PasswordProps extends BaseFieldProps {
  Component: typeof Input.Password;
}

interface TextAreaProps extends BaseFieldProps {
  Component: typeof Input.TextArea;
  rows?: number;
}

type InputFieldProps = InputProps | PasswordProps | TextAreaProps;

export const InputField: React.FC<InputFieldProps> = ({
  className,
  Component,
  title,
  ...props
}) => (
  <Field name={props.name}>
    {({ field, meta: { error, touched } }: FieldProps) => (
      <div className={className}>
        {title && (
          <Title className='!mb-0 !sm:mb-2' level={5}>
            {title}
          </Title>
        )}
        <Component status={error && touched ? 'error' : ''} {...field} {...props} />
        <FieldErrorMessage name={props.name} />
      </div>
    )}
  </Field>
);
