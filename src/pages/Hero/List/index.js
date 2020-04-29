import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroList } from '../../../store/modules/hero/actions';

import { Container, Card } from './styles';
import Header from '../../../components/Header';

export default function SignIn() {
  const heroList = useSelector((state) => state.hero.list.results);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(
      getHeroList({
        limit: 20,
        offset: 20 * (page - 1),
        ...(text ? { nameStartsWith: text } : null),
      })
    );
  }, [page, text]);

  return (
    <>
      <Header
        listPage
        onTextChange={(headerText) => setText(headerText)}
        onPageChange={(headerPage) => setPage(headerPage)}
      />
      <Container data-testid="hero-list">
        {heroList.map((hero) => (
          <Link key={hero.id} to={`/hero/${hero.id}`}>
            <Card data-testid="hero-card">
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt="hero_image"
              />
              <div>
                <span>
                  {hero.name.indexOf('(') > -1
                    ? hero.name.substr(0, hero.name.indexOf('(')).toUpperCase()
                    : hero.name.toUpperCase()}
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </Container>
    </>
  );
}
