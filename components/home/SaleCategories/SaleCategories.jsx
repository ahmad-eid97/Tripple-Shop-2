/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import cls from './saleCategories.module.scss';

const SaleCategories = ({ categories }) => {
  return (
    <Container maxWidth="xxl">
    
      <div className={cls.saleCategories}>

        <div className={cls.saleCategories__header}>

          <h3>TV & appliances sale 20 - 22 september</h3>

          <button>Shop Now</button>

        </div>

        <Grid container>

          {categories.map((category, idx) => (

            <Grid key={idx} item xs={12} sm={6} md={4} lg={2}>

            <img src={category} alt="categoryImage" />
              
            </Grid>

          ))}

        </Grid>

      </div>

    </Container>
  )
}

export default SaleCategories