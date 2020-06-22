import React from 'react';
const CardComponent = (props) => {
    var playlist = props.playlist;

    if(typeof playlist == "undefined") return (<div>123</div>);
    var playlistcard = playlist.playlist;
    console.log(playlistcard);
    var cardlist = playlistcard.map((item) => {
        return(
            <li>
                <a href={`https://www.youtube.com/watch?v=${item.videoId}`} class="link_post">
                    <div class="post_title has_image">
                        <strong class="tit_subject">{item.title}</strong>
                        <div class="wrap_sub_content">
                            {/* <em class="tit_sub">{item.description}</em> <span class="ico_bar"></span> */}
                            <span class="article_content">{item.description}</span>
                        </div>
                        <span class="mobile_d_n post_append">
                            <span class="name_txt">공유</span>
                            <span class="num_txt">0</span>
                            <span class="ico_dot"></span>
                            <span class="name_txt">댓글</span>
                            <span class="num_txt">0</span>
                            <span class="ico_dot"></span>
                            <span class="publish_time">5분전</span>
                            <span class="ico_dot"></span>
                            <span class="ico_by">by</span>
                            <span class="name_txt">Alicia</span>
                        </span>
                    </div>
                    <div class="post_thumb">
                        <img src={item.thumbnails.high.url} width="120" height="120" class="img_thumb" alt="" />
                    </div>
                </a>
            </li>
        )
    })

    return (
        <ul class="list_article list_common">
            {cardlist}
        </ul>
    ) ;
}

export default CardComponent;