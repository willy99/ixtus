import React from "react"
import "../../assets/css/common.css"
import church_day from '../../assets/images/church_day.jpg';
import {t} from '../../components/i18n/i18n';

export const About = () => {
    function createSymbolMarkup() {
        return {__html: t("aboutSymbol")};
    }

    return (
        <>
            <section className='text_container_light'>
                <div className='container boxItems'>

                    <div className='article_grid'>
                        <div>
                            <h2>{t("aboutHeaderAbout")}</h2>
                            <h1>{t("aboutHeaderBelief")}</h1>
                            <img width='100%' src={church_day} alt=''/>
                            <h3>{t("aboutHeaderSymbol")}</h3>

                            <p>{t("aboutP1")}</p>
                            <p>{t("aboutP2")}</p>

                            <h2>{t("aboutHeaderBible")}</h2>

                            <p>{t("aboutP3")}</p>
                            <p>{t("aboutP4")}</p>
                            <p>{t("aboutP5")}</p>
                            <p>{t("aboutP6")}</p>

                        </div>
                        <div>
                            <p>{t("aboutP7")}</p>
                            <p>{t("aboutP8")}</p>
                            <p>{t("aboutP9")}</p>
                            <p>{t("aboutP10")}</p>
                            <p>{t("aboutP11")}</p>
                            <p>{t("aboutP12")}</p>
                            <p>{t("aboutP13")}</p>

                            <p><i><strong>
                                <div dangerouslySetInnerHTML={createSymbolMarkup()}/>
                            </strong></i></p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
