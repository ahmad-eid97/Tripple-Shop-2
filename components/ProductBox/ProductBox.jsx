/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';

import { useTranslation } from 'next-i18next';

import cls from './productBox.module.scss';

const ProductBox = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.productBox}>

      <div className={cls.wishlistBadge}>

        <Tooltip title="Add to wishlist" placement="top">
          <i className="fa-light fa-heart"></i>
        </Tooltip>

      </div>

      {/* <div className={`${cls.newBadge} ${cls[i18n.language]}`}>

        <span><i className="fa-regular fa-stars"></i> {t('product.new')}</span>

      </div>

      <div className={`${cls.saleBadge} ${cls[i18n.language]}`}>

        <span>{t('product.off')}</span>

        <p>10%</p>

      </div> */}

      <img src="/imgs/products/laptop.png" alt="productImage" />

      <span className={cls.label}>Electronics</span>

      <h4 className={cls.title} onClick={() => router.push('/product/123')}>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h4>

      <div className={cls.cart}>

        <p>$350</p>
        
        <Tooltip title={t('product.addCart')} placement="top">
          <i className="fa-regular fa-cart-plus"></i>
        </Tooltip>

      </div>

      <div className={cls.priceOff}>

        <span>$380</span>

        <p>10% OFF</p>

      </div>

      <div className={cls.productFooter}>

        <p className={cls.label}>express</p>

        <span><i className="fa-solid fa-star"></i> 5.0</span>

      </div>

      

      {/* <div className={cls.rating}>

        <Rating name="read-only" value={4} readOnly />

      </div>

      <div className={cls.points}>

        <span>{t('product.points')}</span>

        <span>0</span>

      </div>

      <div className={cls.quantity}>

        <span>{t('product.quantity')}: <span>200</span></span>

        <span>{t('product.sold')}: <span>0</span></span>

      </div>

      <div className={cls.progress}></div> */}

      {/* <div className={cls.actions}>

        <button><i className="fa-light fa-code-compare"></i> {t('product.compare')}</button>

        <button><i className="fa-light fa-heart"></i> {t('product.wishlist')}</button>

      </div> */}

    </div>
  )
}

export default ProductBox