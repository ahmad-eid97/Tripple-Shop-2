/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import AddAddress from '../../modals/AddAddress/AddAddress';

import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';

import { toast } from 'react-toastify';

import { useTranslation } from 'next-i18next';

import cls from './addressesTab.module.scss';

const AddressesTab = () => {
  const [selectedAddress, setselectedAddress] = useState('one');
  const [openAddAddress, setOpenAddAddress] = useState(false);
  const { t, i18n } = useTranslation('common')

  const setAddressActive = (address) => {
    setselectedAddress(address);
    successNotify('Address set to default successfully')
  }

  const successNotify = (msg) => toast.success(msg)

  return (
    <div className={cls.addressesTab}>

      <div className={cls.addressesTab__addBtn}>
        <button onClick={() => setOpenAddAddress(true)}><i className="fa-light fa-plus"></i> {t('account.addAddress')}</button>
      </div>

      <Grid container spacing={3}>

        <Grid item xs={12}>

          <div className={cls.address}>

            <Grid container>

              <Grid item xs={12} md={6}>

                <h4>Location details</h4>

                <div className={cls.location}>

                  <img src="/imgs/account/map.jpg" alt="mapImage" />

                  <div>

                    <h6>Sohag, Egypt sohag second - sohag governorate</h6>

                    <p>Sohag</p>
                    
                  </div>

                </div>

                <div className={cls.home}>

                  <h4>Address label</h4>

                  <div>
                    <input type="radio" name="address" />
                    <label htmlFor="">Home</label>
                  </div>

                  <div>
                    <input type="radio" name="address" />
                    <label htmlFor="">Work</label>
                  </div>

                </div>

                <div className={cls.defaultAddress}>

                  <Switch />

                  <p>Set as default address</p>

                </div>

              </Grid>

              <Grid item xs={12} md={6}>

                <h4>Your contact details</h4>

                <div className={cls.field}>

                  <label htmlFor="">Phone number</label>
                  <input type="number" placeholder='Phone number' />

                </div>

                <div className={cls.field}>

                  <label htmlFor="">First name</label>
                  <input type="text" placeholder='First name' />

                </div>

                <div className={cls.field}>

                  <label htmlFor="">Last name</label>
                  <input type="text" placeholder='Last name' />

                </div>

                <div className={cls.btn}>

                  <button>Save Address</button>

                </div>

              </Grid>

            </Grid>

          </div>

        </Grid>

      </Grid>

      {/* <div className='empty'>
        <img src="/imgs/account/noAddresses.png" alt="emptyImage" />
        <h6>You have no addresses</h6>
      </div> */}

      {openAddAddress && <AddAddress setOpenNewAddress={setOpenAddAddress} />}

    </div>
  )
}

export default AddressesTab