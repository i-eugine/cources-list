import { Typography } from 'antd';
import { ErrorMessage } from 'formik';

type FieldErrorMessageProps = { name: string };

export const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => <Typography.Text type='danger'>{msg}</Typography.Text>}
  </ErrorMessage>
);
