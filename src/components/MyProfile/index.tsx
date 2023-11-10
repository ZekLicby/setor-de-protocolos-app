import React from 'react';
import { Container, Title, Subtitle } from './styles';

interface MyProfileProps {
  title: string;
  subtitle?: string;
}

const MyProfile: React.FC<MyProfileProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}

export default MyProfile;
