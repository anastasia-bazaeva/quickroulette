import pic1 from '../ui/pics/austrian-national-library-WatsY4S9-nk-unsplash.jpg';
import pic2 from '../ui/pics/les-anderson-38xZxzYhm44-unsplash.jpg';
import pic3 from '../ui/pics/photo-1685704844897-d55bc3fbb92f.jpg';
import pic4 from '../ui/pics/photo-1689801464750-dc1a00b81fbc.jpg';
import pic5 from '../ui/pics/photo-1691339454060-6b1d026cfb7a.jpg';
import pic6 from '../ui/pics/photo-1693786229428-6167a59d554a.jpg';

import video1 from '../ui/pics/72f38ef3-234e-404f-8413-5f24dea154a0.mp4';
import wildWasteland from '../ui/pics/Perk_wild_wasteland.png';
import wildWastelandPale from '../ui/pics/Perk_wild_wasteland.webp';


export const pics = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6
];

export const pickRandPick = () => {
    return pics[Math.floor(Math.random()*pics.length)];
}

export const backVid = video1;
export const loaderPic = wildWasteland;

export const randomMovie = () => {
    let arr = [];
    const keys = 6;
    arr[0] = Math.floor((Math.random() * 3));
    for (let i = 0; i < keys; i++ ) {
        arr.push(Math.floor((Math.random() * 10)));
    }
    return `${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}`;
}

export const yearsOptions = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 
    2000, 1990, 1980, 1970, 1960, 1950, 1940, 1930, 1920, 1910, 1900, 1895
]