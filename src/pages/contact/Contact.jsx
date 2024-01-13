import React from "react"
import "../../assets/css/common.css"
import back from "../../assets/images/my-account.jpg";
export const Contact = () => {
  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>АДРЕСА</h3>
              <h1>ТА КОНТАКТНІ ДАНІ</h1>

                <div className='container grid2'>
                  <div>

                  </div>
                  <div className='whiteText'>
                    ​вул.Школьна 27 "А", с. Іллічанка, Ліманский р.,  Одеська обл., індекс 67560
                  </div>

                  <div>

                  </div>
                  <div className='whiteText'>
                   (048) 795-24-58
                  </div>
                </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
