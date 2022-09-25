/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';

import { useTranslation } from 'next-i18next';

import cls from './productList.module.scss';

const ProductList = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <section className={cls.productList}>

      {/* <div className={`${cls.newBadge} ${cls[i18n.language]}`}>

        <span><i className="fa-regular fa-stars"></i> {t('product.new')}</span>

      </div>

      <div className={`${cls.saleBadge} ${cls[i18n.language]}`}>

        <span>{t('product.off')}</span>

        <p>10%</p>

      </div> */}

      <div className={cls.wishlistBadge}>

        <Tooltip title="Add to wishlist" placement="top">
          <i className="fa-light fa-heart"></i>
        </Tooltip>

      </div>

      <div className={cls.productList__details}>

        <img src="/imgs/products/laptop.png" alt="productImage" />

        <div className={cls.details}>

          <span className={cls.label}>Electronics</span>

          <h5 onClick={() => router.push('/product/123')}>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h5>

          <span><i className="fa-solid fa-star"></i> 4.5</span>

          <p>express</p>

        </div>

      </div>

      <div className={cls.productList__actions}>

        <div className={cls.price}>

          <span>$1800</span>
          <span className={cls.sale}>$2000</span>

        </div>

        <button className={cls.addBtn}>{t('product.addCart')}</button>

        {/* <div className={cls.productList__actions_extra}>

          <button><i className="fa-light fa-heart"></i> {t('product.wishlist')}</button>

          <button><i className="fa-light fa-code-compare"></i> {t('product.compare')}</button>

        </div> */}

      </div>

    </section>
  )
}

export default ProductList