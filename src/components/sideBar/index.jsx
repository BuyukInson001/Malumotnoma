import {
    AllSocialMediaWrapper,
    AvatarImage,
    NavbarWrapper,
    NavBox,
    NavIcon,
    NavText,
    SideBarWrapper,
    SocialMediaIcon, SocialMediaToggle,
    SocialMediaWrapper
} from "./styles";

//     images
import avatar from "../../assests/images/avatar.png"

//     icons
import {ReactComponent as UserIcon} from "../../assests/icons/User.svg"
import {ReactComponent as PortfolioIcon} from "../../assests/icons/Work.svg"
import {ReactComponent as ResumeIcon} from "../../assests/icons/Document.svg"
import {ReactComponent as ContactIcon} from "../../assests/icons/Phone.svg"
import {ReactComponent as FacebookIcon} from "../../assests/icons/facebook.svg"
import {ReactComponent as TelegramIcon} from "../../assests/icons/telegram.svg"
import {ReactComponent as InstagramIcon} from "../../assests/icons/instagram.svg"
import {ReactComponent as LinkedInIcon} from "../../assests/icons/linkedin.svg"
import {ReactComponent as GitHubIcon} from "../../assests/icons/github.svg"
import {ReactComponent as WebGlobe} from "../../assests/icons/web-globe.svg"
import {useLocation} from "react-router-dom";
import {useState} from "react";

function SideBar() {

    const [isOpenSM, setIsOpenSM] = useState(false)

    const navs = [
        {
            Icon: UserIcon,
            text: "About me",
            link: "/"
        }, {
            Icon: ResumeIcon,
            text: "Resume",
            link: "/resume"
        }, {
            Icon: PortfolioIcon,
            text: "portfolio",
            link: "/portfolio"
        }, {
            Icon: ContactIcon,
            text: "contact",
            link: "/contact"
        },
    ]

    const socialMedia = [
        {
            Icon: TelegramIcon,
            name: "Telegram",
            link: "https://t.me/THE_END_TUGADI"
        }, {
            Icon: InstagramIcon,
            name: "Instagram",
            link: "https://www.instagram.com"
        }, {
            Icon: FacebookIcon,
            name: "Facebook",
            link: "https://www.facebook.com/"
        }, {
            Icon: GitHubIcon,
            name: "GitHub",
            link: "https://github.com/BuyukInson001"
        }, {
            Icon: LinkedInIcon,
            name: "LinkedIn",
            link: ""
        },
    ]

    const location = useLocation();

    console.log(location)

    return (
        <SideBarWrapper>

            <AvatarImage>
                <div>
                    <img src={avatar} alt="avatar"/>
                </div>
            </AvatarImage>

            <AllSocialMediaWrapper>
                <SocialMediaWrapper isOpenSM={isOpenSM}>
                    {
                        socialMedia.map(({name, Icon, link}, index) => (
                            <SocialMediaIcon title={name} key={index} href={link} target="_blank">
                                <Icon/>
                            </SocialMediaIcon>
                        ))
                    }

                </SocialMediaWrapper>
            </AllSocialMediaWrapper>
            <NavbarWrapper>
                {navs.map(({Icon, text, link}, index) => (
                    <NavBox active={location.pathname === link} key={index} to={link}>
                        <NavIcon><Icon/></NavIcon>
                        <NavText>{text}</NavText>
                    </NavBox>
                ))}

            </NavbarWrapper>

            <SocialMediaToggle isOpenSM={isOpenSM} href={""} onClick={e => e.preventDefault()}
                               onFocus={() => setIsOpenSM(true)}
                               onBlur={() =>setTimeout(()=>setIsOpenSM(false),100)}>
                <WebGlobe/>
            </SocialMediaToggle>

        </SideBarWrapper>
    )
}

export default SideBar
