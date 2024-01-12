import React, { useState, useEffect } from 'react';
import "./blog.css"
import { AiOutlineClockCircle } from "react-icons/ai"
import { youtubeBaseFeedUrl,
    youtubeChannelId,
    youtubeVideoKeywordWorship,
    youtubeVideoKeywordBible,
    youtubeVideoKeywordOnline
} from '../../assets/data/constants';
import { t } from '../i18n/i18n';

export default function YoutubeNews({ newstype }) {

    console.log('>>> ' + newstype);

    const [videos, setVideos] = useState([]);
    const [videosLabel, setVideosLabel] = useState([]);


    useEffect(() => {
        (async () => {
            if (youtubeChannelId) {
                try {
                    const data = await fetch(`${youtubeBaseFeedUrl}${youtubeChannelId}`).then(response => response.json());
                    switch (newstype) {
                        case 'general':
                            setVideos(data.items.filter(item => item.title.startsWith(youtubeVideoKeywordWorship)).slice(0, 3));
                            setVideosLabel(t('youtubeVideosWorship'));
                            break;
                        case 'online':
                            setVideos(data.items.filter(item => item.title.startsWith(youtubeVideoKeywordOnline)).slice(0, 3));
                            setVideosLabel(t("youtubeVideosOnline"));
                            break;
                        case 'bible':
                            setVideos(data.items.filter(item => item.title.startsWith(youtubeVideoKeywordBible)).slice(0, 3));
                            setVideosLabel(t("youtubeVideosBible"));
                            break;
                        default:
                            setVideos(data.items.filter(item => item.title.startsWith(youtubeVideoKeywordWorship)).slice(0, 3));
                            setVideosLabel(t("youtubeVideosWorship"));
                            break;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        })();
    }, [newstype]);

    return (
        <>
            <section className='blog'>

                <div className='container grid3'>
                    {videos.map((item) => (
                        <div className='box boxItems' key={item.guid}>
                            <a href={item.link} className='link' target="_blank" rel="noreferrer">
                            <div className='img'>
                                <img src={item.thumbnail} alt='' />
                            </div>
                            <div className='details'>
                                <h3>{item.title}</h3>
                                <br/>
                                <div className='date'>
                                    <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.pubDate}</label>
                                </div>
                            </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="subtitle fancy"><span><div className='fancyHeader'>{videosLabel}</div></span></p>
                </div>

            </section>
        </>
    )
}
