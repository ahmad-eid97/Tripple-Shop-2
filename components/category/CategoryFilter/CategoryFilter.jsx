/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';

import { useTranslation } from 'next-i18next';

import cls from './categoryFilter.module.scss';

const CategoryFilter = () => {
  const [priceRange, setPriceRange] = useState([20, 37]);
  const { t } = useTranslation('common');

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <section className={cls.categoryfilter}>

      <div className={cls.categoriesList}>

        <h6>{t('category.categories')}</h6>

        <ul>

          <li>Electronics</li>
          <li>Fashion</li>
          <li>Electronics</li>
          <li>Clothes</li>
          <li>Electronics</li>
          <li>Accessories</li>
          <li>Electronics</li>
          <li>Gaming</li>

        </ul>

      </div>

      <div className={cls.priceFilter}>

        <h6>{t('category.price')}</h6>
      
        <div className={cls.slider}>

          <Slider
            getAriaLabel={() => 'Price range'}
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />

          <p>Price: {priceRange[0]} - {priceRange[1]}</p>

        </div>

      </div>

      <div className={cls.brandsList}>

        <h6>Brands</h6>

        <ul>

          <li><input type="checkbox" /> <span>Samsung</span></li>
          <li><input type="checkbox" /> <span>Dell</span></li>
          <li><input type="checkbox" /> <span>Acer</span></li>
          <li><input type="checkbox" /> <span>Lenovo</span></li>
          <li><input type="checkbox" /> <span>Panasonic</span></li>
          <li><input type="checkbox" /> <span>Apple</span></li>
          <li><input type="checkbox" /> <span>Shaumi</span></li>

        </ul>

      </div>

      <div className={cls.variantsList}>

        <h6>Variants</h6>

        <div className={cls.wrapper}>
          <span>xs</span>
          <span>sm</span>
          <span>md</span>
          <span>lg</span>
          <span>xl</span>
          <span>xxl</span>
          <span>xxxl</span>
          <span>4xl</span>
          <span>5xl</span>
        </div>

      </div>

      <div className={cls.colorList}>

        <h6>Colors</h6>

        <div className={cls.wrapper}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div className={cls.relatedProducts}>

        <h6>{t('category.related')}</h6>

        <div className={cls.relatedProducts__products}>

          <div className={cls.relatedProducts__products_product}>

            <img src="/imgs/products/laptop.png" alt="productImage" />

            <div>

              <h5>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h5>
                <Rating name="read-only" value={4} readOnly />
              <p>$300</p>

            </div>

          </div>

          <div className={cls.relatedProducts__products_product}>

            <img src="/imgs/products/laptop.png" alt="productImage" />

            <div>

              <h5>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h5>
                <Rating name="read-only" value={4} readOnly />
              <p>$300</p>

            </div>

          </div>

          <div className={cls.relatedProducts__products_product}>

            <img src="/imgs/products/laptop.png" alt="productImage" />

            <div>

              <h5>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h5>
                <Rating name="read-only" value={4} readOnly />
              <p>$300</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default CategoryFilter