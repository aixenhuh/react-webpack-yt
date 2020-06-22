import {useState, useRef} from 'react'
import React from'react'
import  { Input, ButtonToggle  } from 'reactstrap'
import  CardComponent from './CardComponent'
import  { useLazyQuery } from "@apollo/react-hooks"
import  { gql } from "apollo-boost"

const GET_PLAYLIST = gql`
    query getPlayList($title: String!) {
        playlist(title:$title) {
            channelId,
            title,
            description,
            thumbnails {
                high {
                    url
                }
            },
            videoId
        }

    }
`;

function SearchComponent () {
    const [title, setTitle] = useState("");
    const [getYoutube, {loading, data}] = useLazyQuery(GET_PLAYLIST, {
        variables : {title}
    });
    const titleForm = useRef(null);

    const searchYoutube = () => {
        const form = titleForm.current;
        setTitle(form['title'].value);
        getYoutube();
    }

    if(loading) return <p>Loading...</p>;
    return (
        <div>
            <div className="wrap_keyword_name ">
                <form ref={titleForm}>
                    <Input type="value" name='title' placeholder="place searchName" />
                </form>
                <ButtonToggle color="primary" onClick={(e)=>searchYoutube()}>primary</ButtonToggle>{' '}
            </div>
            <main>
                <div className="wrap_contents">
                    <div className="wrap_article">
                        <div className="wrap_article_list #keyword_related_contents">
                            <CardComponent playlist={data} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SearchComponent;