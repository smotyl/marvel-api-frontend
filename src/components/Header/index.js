import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Container,
  SearchBar,
  Page,
  Icon,
  BackButton,
  SaveButton,
} from './styles';

// import logo from '~/assets/logo.png';
import logo from '../../assets/logo.png';
import history from '../../services/history';

export default function Header({
  onPageChange,
  onTextChange,
  onEditClick,
  onSaveClick,
  editMode,
  listPage,
}) {
  const listInfo = useSelector((state) => state.hero.list);

  const [page, setPage] = useState(1);
  const [text, setText] = useState('');

  const windowLocation =
    window.location.href.indexOf('/hero/') > -1 ? 'item' : 'list';

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  useEffect(() => {
    setPage(1);
    onTextChange(text);
  }, [text]);

  function handleEditClick() {
    onEditClick();
  }

  function handleSaveClick() {
    onSaveClick();
  }

  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: 5 }}>
      <Container listPage={listPage}>
        <img src={logo} alt="marvel_logo" />
      </Container>

      {windowLocation === 'list' ? (
        <>
          <Page>
            <h1>PAGE</h1>
            <span data-testid="page-number">{page}</span>
            <Icon
              type="button"
              data-testid="previous-page-button"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              PREVIOUS
            </Icon>
            <Icon
              type="button"
              data-testid="next-page-button"
              onClick={() => setPage(page + 1)}
              disabled={listInfo.count < listInfo.limit}
            >
              NEXT
            </Icon>
          </Page>

          <SearchBar>
            <input
              data-testid="search-text-input"
              type="text"
              placeholder="Search Hero..."
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </SearchBar>
        </>
      ) : null}

      {windowLocation === 'item' ? (
        <>
          <BackButton onClick={() => history.goBack()}>BACK</BackButton>
          <SaveButton>
            <button type="button" onClick={() => handleEditClick()}>
              EDIT
            </button>
            <button
              disabled={!editMode}
              type="button"
              onClick={() => handleSaveClick()}
            >
              SAVE
            </button>
          </SaveButton>
        </>
      ) : null}
    </div>
  );
}

Header.defaultProps = {
  onPageChange: () => {},
  onTextChange: () => {},
  onEditClick: () => {},
  onSaveClick: () => {},
  editMode: false,
  listPage: false,
};

Header.propTypes = {
  onPageChange: PropTypes.func,
  onTextChange: PropTypes.func,
  onEditClick: PropTypes.func,
  onSaveClick: PropTypes.func,
  editMode: PropTypes.bool,
  listPage: PropTypes.bool,
};
