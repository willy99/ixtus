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
              <form>
                <div className="blacktext">Contact details...</div>
              </form>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
