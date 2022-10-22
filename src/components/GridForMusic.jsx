import React, { Suspense, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './GridForMusic.css';

const CardMusic = React.lazy(() => import('./CardMusic'));

const GridForMusic = (props) => {
  const { data, country } = props;

  let dataSliced = [];

  const [page, setPage] = useState(1);
  const [slice, SetSlice] = useState({
    start: 0,
    end: 5,
  });

  const updateSlice = (newPage) => {
    setPage(newPage);
  };

  const pageToDisplay = () => {
    dataSliced = data.slice(slice.start, slice.end);
  };

  pageToDisplay();

  useEffect(() => {
    SetSlice(() => ({
      start: page * 5 - 5,
      end: page * 5,
    }));
  }, [page]);

  return (
    <div className="pagination-container">
      <Box
        mt={4}
        mb={4}
        sx={{
          backgroundColor: 'rgba(236, 242, 253, 1)',
          borderRadius: '40px',
          flexGrow: 1,
          padding: '10px',
          minWidth: '330px',
          margin: 'auto',
          color: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Top charts for {country || 'France'}</h1>
        <Grid container sx={{ display: 'flex' }}>
          <Grid
            item
            sx={{ display: 'flex',
              flexDirection: 'column',
              marginBottom: '3rem',
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              {dataSliced.map((countrymap, i) => <CardMusic key={i} data={dataSliced} country={countrymap.name} index={i} rank={slice} />)}
            </Suspense>
          </Grid>
        </Grid>
        <Stack spacing={2}>
          <Pagination count={data.length / 5} shape="rounded" onChange={(e, value) => { setPage(value); updateSlice(value); }} />
        </Stack>
      </Box>

    </div>
  );
};

export default GridForMusic;
