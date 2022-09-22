/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './sales.module.scss';

const Sales = ({ sales }) => {
  return (
    <div className={cls.sales}>

      <Container maxWidth="xxl">
 
        <Grid container spacing={3}>

          {sales.map((sale, idx) => (

            <Grid key={idx} item xs={12} sm={6} md={4}>

              <img src={sale} alt="saleImage" />

            </Grid>

          ))}


        </Grid>

      </Container>

    </div>
  )
}

export default Sales