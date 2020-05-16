import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { extractId } from '../common/utils';
import Loader from '../common/Loader';
import Error from '../common/Error';
import Attribute from './Attribute';

const useStyles = makeStyles({
  container: {
    marginBottom: 20,
  },
});

const Content = ({ url, fields, byId, loading, error, fetch }) => {
  const classes = useStyles();

  const id = extractId(url);

  useEffect(() => {
    fetch(url, id);
  }, [fetch, url, id]);

  let content = (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
    </>
  );
  if (byId && byId[id]) {
    content = (
      <div className={classes.container}>
        {Object.keys(fields).map((key) => (
          <Attribute key={key} attr={fields[key]} value={byId[id][key]} />
        ))}
      </div>
    );
  }
  return content;
};

const mapStateToProps = (state, { domain }) => {
  return {
    byId: state[domain].byId,
    loading: state[domain].loading,
    error: state[domain].error,
  };
};

export default connect(mapStateToProps)(Content);
