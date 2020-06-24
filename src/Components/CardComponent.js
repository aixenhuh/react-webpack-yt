import React from 'react';
const CardComponent = (props) => {
    var playlist = props.playlist;

    if(typeof playlist == "undefined") return (<div>123</div>);
    var playlistcard = playlist.playlist;
    console.log(playlistcard)
    var PC_DISCOVER_BRUNCHBOOK = [];
    const PC_DISCOVER_B2 = [];
    var title = '';
    playlistcard.forEach(function (item, i) {
        if(i > 2) return;
        if(i == 0) {
            title = `${item.title}`;
            PC_DISCOVER_BRUNCHBOOK.push(
                <div className="item_pic item_pic_type1 #home_discover_brunchbook">
                    <a href={`https://www.youtube.com/watch?v=${item.videoId}`} className="link_item #new" target="_blank">
                        <span className="fade_cover1"></span>
                        <span className="book_cover"
                            style={{backgroundImage: `url(${item.thumbnails.high.url})`}}>
                            <span className="dimmed_book_type1"></span>
                            <span className="txt_publisher">{item.title}</span>
                            <span className="dimmed_cover"></span>
                        </span>
                        <span className="info_release">
                            <span className="inner-info">
                                <span className="txt_g">First Edition</span>
                                <span className="txt_g">Released date.Jun.18.2020</span>
                            </span>
                        </span>
                    </a>
                </div>
            )
        } else {
            PC_DISCOVER_BRUNCHBOOK.push(
                <div class={`item_pic item_pic_type${i+1}`}>
                    <a href={`https://www.youtube.com/watch?v=${item.videoId}`} class="link_item #home_discover" target="_blank">
                        <img src={item.thumbnails.high.url}
                            class="img_pic" alt="" />
                        <div class="append_info">
                            <div class="info_g">
                                <div class="inner_g">
                                    <em class="cate_pic"></em>
                                    <strong class="tit_pic">{item.title}<br/></strong>
                                    <span class="txt_pic"></span>
                                    <span class="info_by"><span
                                            class="ico_brunch ico_by">by {title}</span> </span>
                                </div>
                            </div>
                            <div class="align_g"></div>
                        </div>
                        <div class="mask"></div>
                    </a>
                </div>
            )
        }
    });

    playlistcard.forEach(function (item, i) {
        if(i > 2 && i < 6) {
            PC_DISCOVER_B2.push(
                    <div class="item_pic item_pic_type1 ">
                        <a href={`https://www.youtube.com/watch?v=${item.videoId}`} class="link_item #home_discover" target="_blank">
                        <img src={item.thumbnails.high.url}
                                class="img_pic" alt=""/>
                            <div class="append_info">
                                <div class="info_g">
                                    <div class="inner_g">
                                        <em class="cate_pic"></em>
                                        <strong class="tit_pic">{item.title}<br/></strong>
                                        <span class="txt_pic">{item.title}</span>
                                        <span class="info_by"><span class="ico_by">by</span> {title}
                                            yet</span>
                                    </div>
                                </div>
                                <div class="align_g"></div>
                            </div>
                            <div class="mask"></div>
                        </a>
                    </div>
            )
        }
    });

    return(
            <div className="wrap_slide">
                <div class="wrap_pic PC_DISCOVER_BRUNCHBOOK">{PC_DISCOVER_BRUNCHBOOK}</div>
                <div class="wrap_pic PC_DISCOVER_B2">{PC_DISCOVER_B2}</div>
            </div>
        )
}

export default CardComponent;