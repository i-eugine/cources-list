import { Button, Card, Input } from 'antd';
import { Form, Formik } from 'formik';
import { LoginRequest } from 'models';
import { InferType, object, string } from 'yup';

import { InputField } from '@components';

const userLoginSchema = object().shape({
  name: string()
    .min(3, 'Name should be at least 3 characters')
    .max(50, 'Name should be at most 50 characters'),
  email: string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Email should be valid')
    .required('Email is required'),
  password: string()
    .min(6, 'Password should be at least 6 characters')
    .required('Password is required'),
});

type UserLoginFormProps = {
  withName?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  onSubmit: (data: LoginRequest) => void | Promise<void>;
};

export const UserLoginForm: React.FC<UserLoginFormProps> = ({
  withName,
  children,
  isLoading,
  onSubmit,
}) => {
  return (
    <Card>
      <Formik<InferType<typeof userLoginSchema>>
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur={true}
        validationSchema={userLoginSchema}
        onSubmit={(data) => onSubmit(data)}
      >
        <Form>
          {withName && (
            <InputField
              className='mb-3'
              Component={Input}
              disabled={isLoading}
              name='name'
              placeholder='Enter user title'
              title='Name:'
            />
          )}

          <InputField
            className='mb-3'
            Component={Input}
            disabled={isLoading}
            name='email'
            placeholder='Enter user email'
            title='Email:'
          />

          <InputField
            className='mb-5'
            Component={Input.Password}
            disabled={isLoading}
            name='password'
            placeholder='Enter user password'
            title='Password:'
          />

          <div className='flex justify-center'>
            <Button
              className='mb-2 w-56'
              htmlType='submit'
              loading={isLoading}
              size='large'
              type='primary'
            >
              Submit
            </Button>
          </div>
        </Form>
      </Formik>

      {children}
    </Card>
  );
};
