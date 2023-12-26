import { Typography } from 'antd';
import { ErrorMessage } from 'formik';
import { FC } from 'react';

type FieldErrorMessageProps = { name: string };

export const FieldErrorMessage: FC<FieldErrorMessageProps> = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => <Typography.Text type='danger'>{msg}</Typography.Text>}
  </ErrorMessage>
);
