import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.ScrollView.attrs({
  showVerticalIndicator: false,
})``;

export const Container2 = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;
export const Texto = styled.Text`
  width: 360%;
  color: #fff;
  margin-bottom: 22%;
  margin-left: 7px;
`;

export const Button1 = styled(Button)`
  width: 90px;
  padding: 1px;
  font-size: 10px;
`;
