import { Menu, Transfer, Typography } from 'antd';
import { Field, FieldProps } from 'formik';
import { observer } from 'mobx-react-lite';

import { FieldErrorMessage } from '@components';
import { authorsStore } from '@store/authors.store';

import { AddAuthorButton } from './AddAuthorButton';
import { DeleteAuthorButton } from './DeleteAuthorButton';

const { Title } = Typography;

export const AuthorFormSection = observer(function AuthorFormSection() {
  const { transitionData } = authorsStore;
  return (
    <>
      <Title level={3}>
        <span className='mr-1'>Authors</span>
        <AddAuthorButton className='ml-3 relative -top-0.5' />
      </Title>

      <Field name='authors'>
        {({ field, form, meta: { error, touched } }: FieldProps<string[]>) => (
          <>
            <Transfer
              dataSource={transitionData}
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

                form.setFieldValue(field.name, [...newTarget, ...source], true);
                form.setFieldTouched(field.name, true, false);
              }}
            >
              {({
                direction,
                filteredItems,
                onItemSelect,
                selectedKeys: listSelectedKeys,
                disabled: listDisabled,
              }) => {
                console.log(direction, filteredItems, listSelectedKeys, listDisabled);
                return (
                  <Menu selectable={false}>
                    {filteredItems.map((item) => (
                      <Menu.Item key={item.key} onClick={() => onItemSelect(item.key, true)}>
                        <div className='flex justify-between items-center w-full'>
                          {item.name}

                          {direction === 'left' && <DeleteAuthorButton id={item.id} />}
                        </div>
                      </Menu.Item>
                    ))}
                  </Menu>
                );
              }}
            </Transfer>
            <FieldErrorMessage name={field.name} />
          </>
        )}
      </Field>
    </>
  );
});
