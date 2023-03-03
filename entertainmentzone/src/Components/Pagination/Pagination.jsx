import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function PaginationButtons({setPage, pageNum}) {

    const pageChange = page => {
        setPage(page)
        window.scroll(0, 0);
    }

    const changeHandler = e => {
      pageChange(e.target.textContent)
    }


  return (
    <div className='page_container'>
      <ThemeProvider theme={darkTheme}>
      <Stack spacing={2}>
      <Pagination  onChange={changeHandler} color='primary' count={pageNum} hidePrevButton hideNextButton />
    </Stack>
      </ThemeProvider>
    </div>
  );
}
