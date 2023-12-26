import { SaveOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Input, Typography } from 'antd';
import { Form, Formik } from 'formik';
import { array, number, object, string } from 'yup';

import { BackButton } from '@common/components/BackButton';
import { InputField } from '@common/components/InputField';
import { useWithLoading } from '@common/hooks/useWithLoading';
import { MESSAGE_KEYS, withMessage } from '@common/modules/message';
import { CoursesService } from '@common/services';
import { Author, CourseCreateForm, CourseEditForm } from '@models';
import { addCourse, authors } from '@store/signals';

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
    .test('at least 1 author', 'at least 1 author is required', (authors) => {
      console.log(authors);
      return authors && authors.length >= 1;
    }),
});

const a = array().of(string()).min(1, 'at least 1');
// TODO: add delete modal for author
export const EditCourse = () => {
  const [isLoading, withLoading] = useWithLoading();

  const course = useSelectedCourseForm();

  console.log(a.isValidSync([]));
  console.log(a.isValidSync(['1', '2']));
  console.log(a.isValidSync(['1']));

  const onSubmit = async (data: CourseEditForm | CourseCreateForm) => {
    const courseRequest = course
      ? CoursesService.update(data as CourseEditForm)
      : CoursesService.create(data as CourseCreateForm);

    const resp = await withMessage(MESSAGE_KEYS.AUTHOR_CREATE, withLoading(courseRequest));

    addCourse({
      ...resp.data.result,
      authors: resp.data.result.authors
        .map((a) => authors.value.find(({ id }) => id === a))
        .filter(Boolean) as Author[],
    });
  };

  return (
    <Formik<CourseEditForm | CourseCreateForm>
      initialValues={course || ({ authors: [] } as unknown as CourseCreateForm)}
      validationSchema={courseSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <Title level={2}>{course ? 'Edit' : 'Create'} course</Title>

          <Card className='mb-5'>
            <article className='flex flex-col 2xl:flex-row 2xl:gap-5'>
              <section className='flex-auto'>
                <Title level={3}>Course info</Title>

                <div className='flex flex-col gap-5 mb-5'>
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

                    <div className='pt-[42px] w-20'>
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

              <section className='flex-auto pr-5 bor'>
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
};
