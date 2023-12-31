import { Helmet } from 'react-helmet';

type AppHelmetProps = {
  title: string;
  description?: string;
};
export const AppHelmet: React.FC<AppHelmetProps> = ({ title, description }) => (
  <Helmet>
    <title>{title} | Courses App</title>
    <meta content={description} name='description' />
  </Helmet>
);
