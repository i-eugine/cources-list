import { SaveOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Input, Typography } from 'antd';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { array, number, object, string } from 'yup';

import { useBreakpoints } from '@common-modules/breakpoints';
import { InputField, BackButton } from '@components';
import { useWithLoading } from '@hooks/useWithLoading';
import { CourseCreateForm, CourseEditForm } from '@models';
import { coursesStore } from '@store/courses.store';

import { AuthorFormSection } from './components/AuthorFormSection';
import { useSelectedCourseForm } from './hooks/useSelectedCourse.hook';

const { Title, Text } = Typography;

const courseSchema = object().shape({
  title: string()
    .min(3, 'Title must be at least 3 characters')
    .max(50, 'Title must be at most 50 characters')
    .required('Title is required'),
  description: string().required('Description is required'),
  duration: number().required('Duration is required'),
  authors: array()
    .of(string())
    .min(1, 'At least 1 author is required')
    .test(
      'at least 1 author',
      'at least 1 author is required',
      (authors) => authors && authors.length >= 1
    ),
});

export const EditCourse = observer(function EditCourse() {
  const { isLarge } = useBreakpoints();

  const navigate = useNavigate();

  const { addCourse, ediitCourse } = coursesStore;
  const [isLoading, withLoading] = useWithLoading();

  const course = useSelectedCourseForm();

  const onSubmit = async (data: CourseEditForm | CourseCreateForm) => {
    await withLoading(course ? ediitCourse(data as CourseEditForm) : addCourse(data));
    navigate(-1);
  };

  return (
    <Formik<CourseEditForm | CourseCreateForm>
      initialValues={course || ({ authors: [] } as unknown as CourseCreateForm)}
      validationSchema={courseSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <Title className='!mb-2 !sm:mb-5' level={2}>
            {course ? 'Edit' : 'Create'} course
          </Title>

          <Card className='mb-2 sm:mb-5' size={isLarge ? 'default' : 'small'}>
            <article className='flex flex-col 2xl:flex-row 2xl:gap-5'>
              <section className='flex-auto'>
                <Title level={3}>Course info</Title>

                <div className='flex flex-col gap-2 sm:gap-5 mb-5'>
                  <InputField
                    Component={Input}
                    name='title'
                    placeholder='Enter course title'
                    title='Title:'
                  />

                  <InputField
                    Component={Input.TextArea}
                    name='description'
                    placeholder='Enter course description'
                    rows={4}
                    title='Description:'
                  />

                  <div className='w-full sm:w-1/2 flex gap-5'>
                    <InputField
                      className='flex-1'
                      Component={Input}
                      name='duration'
                      placeholder='Enter course duration'
                      title='Duration:'
                      type='number'
                    />

                    <div className='pt-[30px] sm:pt-[42px] w-20'>
                      {values.duration && (
                        <>
                          <Text strong>{values.duration}</Text> hours
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              <Divider className='h-auto hidden 2xl:inline-block' type='vertical' />

              <section className='flex-auto'>
                <AuthorFormSection />
              </section>
            </article>
          </Card>
          <div className='text-right'>
            <BackButton />
            <Button
              className='ml-3'
              disabled={isLoading}
              htmlType='submit'
              icon={<SaveOutlined />}
              loading={isLoading}
              type='primary'
            >
              Save course
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
});
