import {useState, useRef} from 'react'
import React from'react'
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

    const inputcss = {
        position: "absolute", 
        zIndex : "10",
        backgroundColor: "transparent"
        ,borderColor: "transparent"
    }

    if(loading) return <p>Loading...</p>;
    return (
        <div>
            <div className="banner">
                <h3 className="banner__title">Spec for this Webpage!</h3>
                <p>
                I was just wondering what to make.<br/>
                I thought how good it would be to have something to search YouTube.<br/>
                Please search some Youtube videos!<br/>
                </p>
                    <form ref={titleForm}>
                    <div class="wrap_search_header">
                        <div class="wrap_search">
                            <h2 class="screen_out">검색 키워드 입력 창</h2>
                            <div class="search_form">
                                <div>
                                    <span class="placeholder-container" style={{position: "relative"}}>
                                        <input type="value" name='title' class="txt_search" id="txt_search" placeholder="검색어를 입력해 주세요." maxLength="20" autoComplete="off" style={{inputcss}} />
                                    </span>
                                    <input type="hidden" value="article" name="type" id="hdn_search_type" />
                                </div>
                                <button id="btnServiceMenuSearch" type="button" class="btn_search"><span class="ico_search" onClick={(e)=>searchYoutube()}>검색</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </form>
                <span> Find out more <a href="#">About us</a> </span>
            </div>
                <CardComponent playlist={data} />
        </div>
    )
}

export default SearchComponent;