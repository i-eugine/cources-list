import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Tooltip, Typography } from 'antd';
import { Formik } from 'formik';
import { useState } from 'react';
import { InferType, object, string } from 'yup';

import { InputField } from '@components';
import { useWithLoading } from '@hooks/useWithLoading';
import { AuthorsService } from '@services';
import { authorsStore } from '@store/authors.store';

const { Title } = Typography;

const authorNameSchema = object().shape({
  authorName: string()
    .min(3, 'Author name must be at least 3 characters')
    .required('Author name is required'),
});

type AuthorForm = InferType<typeof authorNameSchema>;

type AddAuthorButtonProps = { className?: string };
export const AddAuthorButton: React.FC<AddAuthorButtonProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, withLoading] = useWithLoading();

  const showModal = () => setOpen(true);

  const onSubmit = async ({ authorName }: AuthorForm) => {
    const resp = await withLoading(AuthorsService.create(authorName));
    authorsStore.addAuthor(resp.data.result);
    handleCancel();
  };

  const handleCancel = () => setOpen(false);

  return (
    <Formik<AuthorForm>
      initialValues={{ authorName: '' }}
      validationSchema={authorNameSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, resetForm }) => (
        <>
          <Tooltip title='Open add author modal'>
            <Button
              className={className}
              icon={<PlusOutlined />}
              shape='circle'
              size='middle'
              onClick={() => {
                resetForm();
                showModal();
              }}
            />
          </Tooltip>
          <Modal
            confirmLoading={isLoading}
            maskClosable={false}
            open={open}
            title={<Title level={3}>Add new author</Title>}
            onCancel={handleCancel}
            onOk={() => handleSubmit()}
          >
            <InputField
              Component={Input}
              disabled={isLoading}
              name='authorName'
              placeholder='Enter new author'
              title='Author name:'
            />
          </Modal>
        </>
      )}
    </Formik>
  );
};
