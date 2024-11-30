import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, Title } from "@angular/platform-browser";
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
@Component({
  selector: 'app-highlights',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {

  mediaData = [
    { url: 'https://www.youtube.com/watch?v=nznuwgq6YBg&t=10s', 
      platform: 'NBC ETHIOPIA',
      platformLogo: 'https://yt3.ggpht.com/oiEUuT5IejhMBOHgLCj-lSkgKIa5YRWTz5mF9hihot3q8Lm77t3aOvOcz8S3S5cQef3D3CAZ=s88-c-k-c0x00ffffff-no-rj',
      title: 'ተስፋ የተጣለባቸው የአብርሆት ቤተመጽሐፍት እና የA2SV ሰልጣኞች! ​',
      description: 'Largest 2024 Hackathon of Africa Closing Ceremony at Adwa Musem in Collaboration with A2SV and Abrehot Library',
      thumbnail: 'https://i.ytimg.com/vi/nznuwgq6YBg/maxresdefault.jpg',
      place: 'YouTube'
    },
    { url: 'https://www.facebook.com/100050530837350/posts/pfbid0KkjjEBMywAP3CheckR2qp5KUHLagLvghHaJx9jP4jMnucsj54gBsTanaAjrmNMWfl/', 
      platform: 'Ethiopian Service',
      platformLogo: 'https://z-p3-scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/468451669_1163170802043937_765273000251059893_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFg54phmq9epCeJkUFfEqe5dXMHsQDLmQd1cwexAMuZB1xYLl_Ntimdc0JKt3LnKCR8Tsr7zKloXtHJiHcpt0SB&_nc_ohc=CfZrDUWGOloQ7kNvgGEuaJC&_nc_zt=23&_nc_ht=z-p3-scontent.fadd1-1.fna&_nc_gid=APWhGYOOwnPnGoXwX9RGjvi&oh=00_AYA01Dkm2lOdMz3bnrXdqaq6wWB02veVV0lEIU5ExsnqQg&oe=6750DFF7',
      title: 'የአፍሪካ ትልቁ የቴክኖሎጂ ውድድር ነገ ጥቅምት 3 በአዲስ አበባ ይቀጥላል።',
      description: "Africa's biggest technology competition will continue tomorrow October 3 in Addis Ababa. Tomorrow we will see some of the brightest tech talent and amazing innovations across the continent.",
      thumbnail: 'https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/462364852_1132281505132867_2433822451256392985_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyBLD0-VBlnIM1uXpiuvkh4-cNq3NdsxLj5w2rc12zEiLPK4Gdn4pzX0X0WO_v1L82EWlH9Dff2kSYvuRBggYZ&_nc_ohc=5l6QdT2g4bcQ7kNvgEHMs-m&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=AnhvNf4EGc4UOQsC5XfrsPb&oh=00_AYAwVVOmKeZtjK6aApeOz5RhTLTPM7DLT94OcKcIbQNO3Q&oe=6750DB18',
      place: 'Facebook'
    },
    { url: 'https://www.fanabc.com/english/ethiopia-secures-3rd-place-at-a2sv-hackathon-2024/', 
      platform: 'Fana Broadcasting',
      platformLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEUUDwBHcEz3sBb+xhb+zRP+yxT/yxT+vxf+xhb9xhX9uhj8rRv8uBj8vxX5txf9vxT7uxf+xBf8qxz7oB3+zRL9uBn5phv5rxn/yxX6ox3+zw77tRnF8MIbAAAAHHRSTlMBAAZIiq7HJpkZN4/ID///7ntbptdt//9g2vrizsbiawAAAWBJREFUeAFl0oHKrCAQhuFeK81JLWvTdrv/+zyWK2fh/6BgevoAhulaQPXDqLWifeE/mVEPvTGGZwIw1F9Q42QpQ32UtVZmR6tZlLG+u2NdeCI8JgOdWGpMCMuyrJOvRROxAqht3vftdfRiFFQjYqTQnuac84Dpqzx4KtuDpJzjERzk5Brie85qYSZsnCHn91fp6S0q5RCKOIULRfcvCifs+UbFhA8lOcmj3toe/xQn1Igsj9aq5fRsN64wjHAMzq05cavnoJvvokE+HwAmxvTdbIS9oIDIXYVeuOQXZ568PnpdohAbKo4cPNuyKHTZayjD4SuegkkXXBWLXXDwXVGEdwYjUgYTQ4ioreDjE52kEaAD2IJH2rUgB8wpXJcDt66rg2ZFRwt7yvmCK4QcW6u+dAdbejDndHyxBqs9hXd4X7s0a+r1STvKX6tKfB2+CX+umlO/tB7o/oab8db/Vv8BsmoT+k3IDfYAAAAASUVORK5CYII=',
      title: 'Ethiopia secures 3rd place at A2SV Hackathon 2024',
      description: 'Addis Ababa, October 16, 2024 (FBC) – Ethiopian participants achieved notable success at the Africa to Silicon Valley (A2SV) Hackathon 2024, earning 3rd place in a competition themed “AI for Impact – Solving Africa’s Challenges.”...',
      thumbnail: 'https://www.fanabc.com/english/wp-content/uploads/2024/10/hackathon-750x419.jpg', 
      place: 'Web'
    },
    { url: 'https://www.facebook.com/100064953301340/posts/pfbid02d6ftCxy1Z7GFYD5tHjHinJ6zihhfFe85ChpX7MCGE3Zdgai1Ktzam8p4hJGp1oA9l/', 
      platform: 'DireTube',
      platformLogo: 'https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/352752323_6392605810808369_4942981623783015528_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFxFRmQKhVZATfUbPFLHnriZfnHxJnKJ4Rl-cfEmconhIONWTz32j2vYRpAv3HcAKW1tGqP4RbWWc33Y91Qd48P&_nc_ohc=OSm-rmpbxsAQ7kNvgEwRUzC&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=AkOEvDe3u-IxVmKpO-RRtOw&oh=00_AYA_Lfnes0XaxWdfXXeS2SzxgJHxjwumwhtcnsYvDzcjJA&oe=6750FFF9',
      title: "Africa's Largest Hackathon Continues Tomorrow!",
      description: "In this Hackathon Expo, we will see 8 final projects from Algeria, Ethiopia, Ghana, Nigeria, Tanzania and Tunisia, and 9 A2SV Core Development projects. Don't miss it!",
      thumbnail: 'https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/462691523_941159114725857_8301200319252052416_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGm8yWFA8HExKji_2kY9vTTttk0jhjolr622TSOGOiWvvj1iwAi2syTvj5sTOxTfOiv-EHRwEgxg7laaPA2-kSz&_nc_ohc=X5Lc91jbdFkQ7kNvgEna33m&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=ASsC5b2MESMWC4Remcp8-nA&oh=00_AYBOar7Dodys1Cg5PXDgkXxKUFwMPhLGN2WRmVjxhUfovA&oe=67510299',
      place: 'Facebook'
    },
    { url: 'https://www.facebook.com/100064875003264/posts/pfbid02KUgZvQA3sajLxZPVKHRzaSt185kaQ7zzx7kN4LdRibXwqvbLnhwfGjTELQMJDYmal/', 
      platform: 'FastMereja',
      platformLogo: 'https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-1/392793908_732169332288894_9116512957206549909_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHGQBwiwfdzCPSj5esFUC1FbO6S32Wwt01s7pLfZbC3TZ5TlWHBCNlwmLztBbkdJKXomWuYhqO1_ShxIlGA-08s&_nc_ohc=iN80SDwuDcsQ7kNvgFkTFs3&_nc_zt=24&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=AA6lsTiiEnMGFQ43ZZfI2N7&oh=00_AYAwxBk1F462ZK-yIQy-W2oVM3IXyvtxxgOUeFl1g2LNFg&oe=6750FC21',
      title: "Get Ready To See Africa's Brightest Minds' Creative Technology Solutions!",
      description: "If you love technology and innovation, don't miss this continental tech culture exchange! Know, save, learn, change various useful information and your tech life path.",
      thumbnail: 'https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/462790401_964524555720036_7590589992439271111_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHV_rDbWsqQxMDiw8i2ilRx8fjbZmeDrEjx-NtmZ4OsSFBpaZieFeAuYFAspGkKR8QKByFFlaLNT5f0Vg84PUGq&_nc_ohc=LCe0KR6BkY8Q7kNvgHW6jBb&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=Aoj04DBfKkaipxv0kmZH2Q7&oh=00_AYDGnYjRLcVMYgdo5i8v-du3Go71trLWw5fuSVndDIICmg&oe=6750EE44',
      place: 'Facebook' 
    },
    
    { url: 'https://www.tiktok.com/@joel_talargie/video/7426061995838901509?is_from_webapp=1&sender_device=pc', 
      platform: 'Joel Talargie',
      platformLogo: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c1d9174f28f303a673ac7d1fd80abb1b~c5_100x100.jpeg?lk3s=a5d48078&nonce=12497&refresh_token=c3391ef04760460125cbdcc1f5032ec4&x-expires=1733148000&x-signature=HKpJOFe66J7m5%2Fyk4wvpCXZbat4%3D&shp=a5d48078&shcp=81f88b70',
      title: 'Largest AI Hackathon in Africa at Science Museum, Addis Ababa',
      description: "From Africa to Silicon Valley! 🌍🚀 The largest AI Hackathon in Africa is happening at the Science Museum in Addis Ababa! Don't miss the closing ceremony on October 16, 2024! 🤖✨ #AIHackathon #AddisAbaba #TechInAfrica #SiliconValley #Innovation",
      thumbnail: 'https://res.cloudinary.com/eskalate/image/upload/v1731251689/Hackathon-2024/events/Science%20Museum/8.jpg', 
      place: 'TikTok'
    },
    // { url: 'https://www.facebook.com/100064749126436/posts/pfbid02X2goRmTPRG9W8Ga9buavffdH2WjtxeX13rWjXvYHuNZzzxYqBzyetC6EDvyxEQoEl/', 
    //   platform: 'Facebook',
    //   platformLogo: '',
    //   title: '',
    //   description: '',
    //   thumbnail: '', 
    //   place: 'Facebook'
    // },
  ];
  
  setActiveButton(link: string) {
    
    window.open(link, '_blank');
  }
}


