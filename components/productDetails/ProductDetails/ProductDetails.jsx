import { useState } from 'react';

import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';

import { useTranslation } from 'next-i18next';

import cls from './productDetails.module.scss';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { t, i18n } = useTranslation('common')

  const changeQuantity = (type, value) => {
    if (type === 'plus') setQuantity(prev => (prev += 1))
    else {
      if (quantity > 1) {
        setQuantity(prev => (prev -= 1))
      }
    }
  } 

  return (
    <div className={cls.productDetails}>

      <span className={cls.productDetails__category}>Electronics</span>

      <h1>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h1>

      <div className={cls.productDetails_rating}>

        <Rating name="read-only" value={4} readOnly />

        <p>( 3 {t('product.customerReview')} )</p>

      </div>

      <p className={cls.productDetails_rating_availibility}>{t('product.availability')}: <span>420 in stock</span></p>

      <div className={cls.productDetails_specs}>

        <ul>
          <li>Intel® Core™ i5-5200U, 2,2 GHz</li>
          <li>1 TB HDD, 8 GB RAM</li>
          <li>NVIDIA® GeForce® 920M</li>
          <li>Windows 10 Home (64 Bit)</li>
        </ul>

      </div>

      <h2>$1,100.00</h2>

      <div className={cls.actions}>

        <div className={cls.quantity}>

          <div className='quantityArea'>
            <button onClick={() => changeQuantity('minus')}>-</button>
            <input type="number" className={i18n.language} value={quantity} onChange={() => {}} />
            <button onClick={() => changeQuantity('plus')}>+</button>
          </div>

          <button className={cls.addBtn}>{t('product.addCart')}</button>

          <Tooltip title="Add to wishlist" placement="top">
            <button className={cls.wishButton}><i className="fa-light fa-heart"></i></button>
          </Tooltip>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails