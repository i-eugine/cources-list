import { Button, Card, Input, Space, Transfer, Typography } from 'antd';
import { Field, FieldProps, Form, Formik } from 'formik';

const { Title, Text } = Typography;

export const EditCourse = () => {
  return (
    <Formik
      initialValues={{ title: 'test ', authors: [] }}
      onSubmit={(data: unknown) => {
        console.log(data);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <Title level={2}>Edit Course</Title>

          <Card className='mb-5'>
            <div className='flex flex-col gap-5 mb-5'>
              <div>
                <Title level={5}>Title:</Title>
                <Input name='title' placeholder='Enter course title' onChange={handleChange} />
              </div>

              <div>
                <Title level={5}>Description:</Title>
                <Input.TextArea
                  name='description'
                  placeholder='Enter course description'
                  rows={4}
                  onChange={handleChange}
                />
              </div>

              <div className='w-1/2'>
                <Title level={5}>Duration:</Title>
                <div className='flex gap-5'>
                  <Input
                    name='duration'
                    placeholder='Enter course duration'
                    type='number'
                    onChange={handleChange}
                  />
                  <div className='flex items-center w-20 '>
                    {values.duration && (
                      <>
                        <Text strong>{values.duration}</Text> hours
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Title level={3}>Authors</Title>

              <Space.Compact className='w-full mb-5'>
                <Input placeholder='Enter new author' />
                <Button style={{ width: '20%' }} type='primary'>
                  Create
                </Button>
              </Space.Compact>

              <Field name='authors'>
                {({ field, form }: FieldProps<string[]>) => (
                  <Transfer
                    dataSource={[
                      { name: 'author1', key: '1' },
                      { name: 'author2', key: '2' },
                      { name: 'author3', key: '3' },
                      { name: 'author4', key: '4' },
                      { name: 'author5', key: '5' },
                      { name: 'author6', key: '6' },
                      { name: 'author7', key: '7' },
                      { name: 'author8', key: '8' },
                    ]}
                    listStyle={{
                      flex: 1,
                    }}
                    render={(item) => item.name}
                    showSelectAll={false}
                    targetKeys={field.value}
                    titles={['All authors', 'Course authors']}
                    onSelectChange={(source: string[], target: string[]) => {
                      const newTarget = target.length
                        ? field.value.filter((t) => !target.includes(t))
                        : field.value;

                      form.setFieldValue(field.name, [...newTarget, ...source]);
                    }}
                  />
                )}
              </Field>
            </div>
          </Card>
          <div className='text-right'>
            <Button htmlType='submit'>CREATE COURSE</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
