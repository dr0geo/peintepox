import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';

const TitleBg = styled.div`
  background: url('/images/home.jpeg') center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  padding: 0 5%;
`;

const PageTitle = () => {
  return (
    <TitleBg />
  );
}
export default PageTitle;