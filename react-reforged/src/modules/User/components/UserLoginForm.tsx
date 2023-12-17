import { Button, Card, Input, Typography } from 'antd';
import { Form, Formik } from 'formik';
import { LoginRequest } from 'models';
import { FC } from 'react';

const { Title } = Typography;

type UserLoginFormProps = {
  withName?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  onSubmit: (data: LoginRequest) => void | Promise<void>;
};

export const UserLoginForm: FC<UserLoginFormProps> = ({ withName, children, onSubmit }) => {
  return (
    <Card>
      <Formik<LoginRequest>
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(data) => onSubmit(data)}
      >
        {({ handleChange }) => (
          <Form>
            {withName && (
              <>
                <Title level={5}>Name:</Title>
                <Input
                  className='mb-3'
                  name='title'
                  placeholder='Enter user title'
                  onChange={handleChange}
                />
              </>
            )}

            <Title level={5}>Email:</Title>
            <Input
              className='mb-3'
              name='email'
              placeholder='Enter user email'
              type='email'
              onChange={handleChange}
            />

            <Title level={5}>Password:</Title>
            <Input.Password
              className='mb-5'
              name='password'
              placeholder='Enter user password'
              onChange={handleChange}
            />

            <div className='flex justify-center'>
              <Button className='mb-2 w-56' htmlType='submit' size='large' type='primary'>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      {children}
    </Card>
  );
};
