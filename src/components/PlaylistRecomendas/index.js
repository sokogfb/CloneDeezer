import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Titulo,
  Container2,
  Imagem,
  TituloImage,
  SubTitulo,
  Colum,
} from './styles';

export default function Destaques() {
  const [playlist, setPlaylist] = useState([]);

  async function Playlists() {
    const response = await api.get('/Recomendadas');

    setPlaylist(response.data);
  }

  useEffect(() => {
    Playlists();
  }, []);

  return (
    <Container>
      <Titulo>Playlists recomendadas</Titulo>

      <FlatList
        data={playlist}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={({ item }) => (
          <Container2>
            <Imagem resizeMode="contain" source={{ uri: item.image }} />
            <Colum>
              <TituloImage>{item.title}</TituloImage>
              <SubTitulo>{item.description}</SubTitulo>
            </Colum>
          </Container2>
        )}
      />
    </Container>
  );
}
