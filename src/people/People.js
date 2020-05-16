import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchPeople } from '../redux/actions';
import Header from '../common/Header';
import Loader from '../common/Loader';
import Error from '../common/Error';
import Person from './Person';

const People = ({ byId, ids, loading, error, hasMore, fetchPeople }) => {
  return (
    <>
      <Header text='characters' />
      <InfiniteScroll loadMore={fetchPeople} hasMore={hasMore}>
        <Grid container spacing={2}>
          {ids.map((id) => (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
              <Person person={byId[id]} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
      {loading && <Loader />}
      {error && <Error error={error} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    byId: state.people.byId,
    ids: state.people.ids,
    loading: state.people.loading,
    error: state.people.error,
    hasMore:
      !state.people.loading && !!state.people.nextUrl && !state.people.error,
  };
};

export default connect(mapStateToProps, { fetchPeople })(People);
