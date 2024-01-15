import React from "react"
import "../../assets/css/common.css"
import back from "../../assets/images/my-account.jpg";
import {icons, socialUrls, googleMapAddress} from "../../assets/data/constants"
import { t } from '../../components/i18n/i18n';

export const Contact = () => {
  return (
    <>
      <section className='common'>

        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text_container_dark'>
              <h3>{t("contactHeaderAddress")}</h3>
              <h1>{t("contactHeaderContacts")}</h1>
            </div>
          </div>

          <div className='container boxItems'>
                <div className='contact_grid'>
                  <div className='contact_grid_areaA'>
                    <img alt='' src={icons.address} className='icon32'/>
                  </div>
                  <div className='contact_grid_areaB'>
                    <a rel="noreferrer" target='_blank' href={googleMapAddress}>{t("contactAddress")}</a>
                  </div>

                  <div className='contact_grid_areaA'>
                    <img alt='' src={icons.phone} className='icon32'/>
                  </div>
                  <div className='contact_grid_areaB'>
                   + 38 (048) 795-24-58
                  </div>

                  <div className='contact_grid_areaA'>
                    <img alt='' src={icons.email} className='icon32'/>
                  </div>
                  <div className='contact_grid_areaB'>
                   <a rel="noreferrer" target='_blank' href={socialUrls.email.url}>{socialUrls.email_clean.url}</a>
                  </div>
                </div>
          </div>

        </div>


      </section>
    </>
  )
}
