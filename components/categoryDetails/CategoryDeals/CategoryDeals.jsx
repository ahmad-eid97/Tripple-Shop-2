/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './categoryDeals.module.scss';

const CategoryDeals = () => {
  return (
    <div className={cls.categoryDeals}>

      <Container maxWidth="xxl">

        <h1>Mobiles & Accessories</h1>
        <h2>A variety of smartphones and accessories</h2>

        <div className={cls.btn}>

          <button>VIEW ALL</button>

        </div>

        <Grid container spacing={3}>

          <Grid item md={6}>

            <img className={cls.bigImage} src="/imgs/category/t1.png" alt="categoryImage" />

            <Grid container spacing={3}>

              <Grid item xs={6} sm={3}>

                <img src="/imgs/category/c1.avif" alt="" />

              </Grid>

              <Grid item xs={6} sm={3}>

                <img src="/imgs/category/c2.avif" alt="" />

              </Grid>

              <Grid item xs={6} sm={3}>

                <img src="/imgs/category/c3.avif" alt="" />

              </Grid>

              <Grid item xs={6} sm={3}>

                <img src="/imgs/category/c4.avif" alt="" />

              </Grid>

            </Grid>

          </Grid>

          <Grid item md={6}>

            <img className={cls.bigImage} src="/imgs/category/t2.png" alt="categoryImage" />

            <Grid container spacing={3}>

              <Grid item xs={6} sm={3}>

                <img src="/imgs/category/c5.avif" alt="" />

              </Grid>

              <Grid item xs={6} sm={3}>

                <img src="/imgs/category/c6.avif" alt="" />

              </Grid>

              <Grid item xs={6} sm={3}>

                <img src="/imgs/category/c7.avif" alt="" />

              </Grid>

              <Grid item xs={6} sm={3}>

                <img src="/imgs/category/c8.avif" alt="" />

              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default CategoryDeals