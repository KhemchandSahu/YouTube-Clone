import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import './Feeds.css';
import { API_KEY, numToWords } from './Data';

const Feeds = ({ mclick, category }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoListUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
                console.log(videoListUrl);
                const response = await axios.get(videoListUrl);
                setData(response.data.items);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (API_KEY) {
            fetchData();
        }
    }, [category]);

    if (!API_KEY) {
        return <h1>API KEY IS EXPIRED</h1>;
    }

    return (
        <div className={mclick ? 'feeds-large' : 'feeds'}>
            {data && data.length > 0 ? (
                data.map((item) => (
                    <Link key={item.id} to={`videoPage/${item.snippet.categoryId}/${item.id}`} className='feed'>
                        <div className='thumbnail'>
                            <img
                                src={item.snippet.thumbnails?.standard?.url || item.snippet.thumbnails?.default?.url}
                                alt={item.snippet.title}
                            />
                        </div>
                        <div className='title'>
                            <div className='profilePic'></div>
                            <div className='info'>
                                <div className='titleDiv'>
                                    <h3>{item.snippet.title}</h3>
                                </div>
                                <p>{item.snippet.channelTitle}</p>
                                <p>
                                    {numToWords(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>This category is not available :)</p>
            )}
        </div>
    );
};

export default Feeds;
