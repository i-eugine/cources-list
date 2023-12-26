import { useComputed } from '@preact/signals-react';
import { Transfer, Typography } from 'antd';
import { Field, FieldProps } from 'formik';

import { FieldErrorMessage } from '@common/components/FieldErrorMessage';
import { authors } from '@store/signals';

import { AddAuthorButton } from './AddAuthorButton';

const { Title } = Typography;

export const AuthorFormSection = () => {
  const dataSourse = useComputed(() => authors.value.map((a) => ({ ...a, key: a.id })));
  return (
    <>
      <Title level={3}>
        <span className='mr-1'>Authors</span>
        <AddAuthorButton className='ml-3 relative -top-0.5' />
      </Title>

      <Field name='authors'>
        {({ field, form, meta: { error, touched } }: FieldProps<string[]>) => (
          <>
            <div>
              {error} | {`${touched}`} | {field.value.length}
            </div>
            <Transfer
              dataSource={dataSourse.value}
              listStyle={{ flex: 1 }}
              render={(item) => item.name}
              showSelectAll={false}
              status={error && touched ? 'error' : ''}
              targetKeys={field.value}
              titles={['All authors', 'Course authors']}
              onChange={field.onBlur}
              onSelectChange={(source: string[], target: string[]) => {
                const newTarget = target.length
                  ? field.value.filter((t) => !target.includes(t))
                  : field.value;

                console.log(field.name);
                form.setFieldValue(field.name, [...newTarget, ...source], true);
                form.setFieldTouched(field.name, true, false);
              }}
            />
            <FieldErrorMessage name={field.name} />
          </>
        )}
      </Field>
    </>
  );
};
