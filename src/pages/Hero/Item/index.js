import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getHeroItem, putHeroItem } from '~/store/modules/hero/actions';
import { Container, Card, SeriesCard, SeriesList } from './styles';
import Header from '~/components/Header';
import EditableField from '~/components/EditableField';
import Notification from '~/components/Notification';

export default function HeroItem() {
  const heroItem = useSelector((state) => state.hero.item);
  const { id } = useParams();

  const [editMode, setEditMode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [heroName, setHeroName] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroItem(id));
  }, []);

  // Simulate initialValues
  useEffect(() => {
    if (heroItem) {
      setHeroName(heroItem.name);
      setHeroDescription(heroItem.description);
    }
  }, [heroItem]);

  function handleEditClick() {
    setEditMode(!editMode);
  }

  function handleSaveClick() {
    const bodyRequest = { id, heroName, heroDescription };
    dispatch(putHeroItem(bodyRequest));
    setSaveSuccess(!saveSuccess); // simulte a success push notification
    setEditMode(false);
  }

  return (
    <>
      <Header
        editMode={editMode}
        onEditClick={handleEditClick}
        onSaveClick={handleSaveClick}
      />
      <Container>
        {heroItem && heroItem.thumbnail ? (
          <>
            <Card>
              <img
                src={`${heroItem.thumbnail.path}.${heroItem.thumbnail.extension}`}
                alt="hero_image"
              />
              <EditableField
                isTitle
                editable={editMode}
                onChange={(name) => setHeroName(name)}
              >
                {heroItem.name}
              </EditableField>
              <EditableField
                editable={editMode}
                onChange={(description) => setHeroDescription(description)}
              >
                {heroItem.description}
              </EditableField>
            </Card>
            <SeriesCard>
              <div>
                <h1>
                  Series ({heroItem.series.returned} of{' '}
                  {heroItem.series.available})
                </h1>
              </div>
              <SeriesList>
                {heroItem.series.items.map((serie) => (
                  <li key={serie.name}>
                    <span>{serie.name}</span>
                  </li>
                ))}
              </SeriesList>
            </SeriesCard>
          </>
        ) : (
          <h1 style={{ color: '#fff' }}>Loading ...</h1>
        )}

        <Notification
          isMounted={saveSuccess}
          unmount={() => setSaveSuccess(!saveSuccess)}
        />
      </Container>
    </>
  );
}
