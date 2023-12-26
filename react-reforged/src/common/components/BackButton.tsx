import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router';

export const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <Tooltip title='Navigate to pevious page'>
      <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
        Back
      </Button>
    </Tooltip>
  );
};