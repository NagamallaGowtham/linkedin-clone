import styled from "styled-components";

const Main = (props) => {
    return (
        <Container>
            <ShareBox>Share
                <div>
                    <img src="/images/user.svg" alt="" />
                    <button>Start a post</button>
                </div>

                <div>
                    <button>
                        <img src="/images/photo-icon.svg" alt="" />
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src="/images/video-icon.svg" alt="" />
                        <span>Video</span>
                    </button>
                    <button>
                        <img src="/images/event-icon.svg" alt="" />
                        <span>Event</span>
                    </button>
                    <button>
                        <img src="/images/article-icon.svg" alt="" />
                        <span>write article</span>
                    </button>
                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a href="#!">
                            <img src="/images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="/images/ellipses.svg" alt="" />
                        </button>
                    </SharedActor>
                    <Description>
                        Description
                    </Description>
                    <SharedImg>
                        <a href="#!">
                            <img src="images/shared-image.jpg" alt="" />
                        </a>
                    </SharedImg>
                    <SocialCount>
                        <li>
                            <button>
                                <img src="/images/like-btn.svg" alt=""  />
                                <img src="/images/clap-btn.svg" alt="" />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a href="#!">
                                2 comments
                            </a>
                        </li>
                    </SocialCount>
                    <SocialActions>
                        <button>
                            <img src="/images/like-icon.svg" alt="" />
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="/images/comment-icon.svg" alt="" />
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="/images/share-icon.svg" alt="" />
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="/images/send-icon.svg" alt="" />
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
            </div>
        </Container>
    )
}

const Container = styled.div`
    grid-area: main;
`;
const CommonCard = styled.div`
    text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
	display: flex;
	flex-direction: column;
	margin: 0 0 8px;
	color: #958b7b;
    background: white;
	div {
		button {
			outline: none;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
			line-height: 1.5;
			min-height: 48px;
			display: flex;
			align-items: center;
			border: none;
			background-color: transparent;
			font-weight: 600;
		}
		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16px 0px 16px;
			img {
				width: 48px;
				border-radius: 50%;
				margin-right: 8px;
			}
			button {
				margin: 4px 0;
				flex-grow: 1;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				border-radius: 35px;
				text-align: left;
			}
		}
		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;
			button {
				img {
					margin: 0 4px 0 -2px;
				}
                span {
                    color: #70b5f9;
                }
			}
		}
	}
`;
const Article = styled(CommonCard)`
	padding: 0;
	margin: 0 0 8px;
	overflow: visible;
`;
const SharedActor = styled.div`
	padding-right: 40px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	a {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex;
        text-decoration: none;
		img {
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}
		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-basis: 0;
			margin-left: 8px;
			overflow: hidden;
			span {
				text-align: left;
				&:first-child {
					font-size: 14px;
					font-weight: 700;
					color: rgba(0, 0, 0, 1);
				}
				&:nth-child(n + 1) {
					font-size: 12px;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}
	button {
		position: absolute;
		top: 0;
		right: 12px;
		border: none;
		outline: none;
		background: transparent;
	}
`;
const Description = styled.div`
	padding: 0 16px;
	overflow: hidden;
	font-size: 14px;
	text-align: left;
    color: rgba(0, 0, 0, 0.9);
`;
const SharedImg = styled.div`
	margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
	background-color: #f9fafb;
	img {
        object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;
const SocialCount = styled.ul`
	line-height: 1.3;
	display: flex;
	align-items: flex-start;
	overflow: auto;
	margin: 0 16px;
	padding: 8px 0;
	border-bottom: 1px solid #e9efdf;
	color: rgba(0, 0, 0, 0.6);
	list-style: none;
	li {
		margin-right: 5px;
		font-size: 12px;
		button {
			display: flex;
			border: none;
			color: rgba(0, 0, 0, 0.6);
			background: transparent;
			span {
				padding-left: 5px;
			}
		}
	}
`;
const SocialActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
    margin: 0;
	padding: 4px 8px;
	min-height: 40px;
	button {
		display: inline-flex;
		align-items: center;
		padding: 8px;
		border: none;
        color: #0a66c2;
		background: transparent;
        @media (min-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
		span {
			margin-left: 4px;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
		}
	}
	button.active {
		span {
			color: #0a66c2;
			font-weight: 600;
		}
		svg {
			fill: #0a66c2;
		}
	}
`;

export default Main