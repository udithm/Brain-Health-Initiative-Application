import React from "react";
import { useSelector } from "react-redux";

import { ReferedView } from "../views/ReferedView";

export const ReferedContainer = () => {
    //const authState = useSelector(state => state.AuthReducer);
    const appiData = [
            {
                "firstLogin": false,
                "hashedPassword": "4144a205c3453b00c1c26f69973a2317839e96abb4078ae811ea92e38704620e",
                "name": "aakas darsha",
                "orgName": "orga_me",
                "password": "aakas12345678",
                "role": "PHC",
                "userId": 0,
                "userName": "aakas@joan.com"
            },
            {
                "firstLogin": true,
                "hashedPassword": "6f2f88e8360990d204d512c881b1567c1bf945ba015399a05dfd70f6d604386d",
                "name": "aami darwi",
                "orgName": "orga_mega",
                "password": "aami12345678",
                "role": "TERTIARY",
                "userId": 1,
                "userName": "aami@joann.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "81478a620dbc3fd364e1520c837d11a8a1068a5cc28007c0287aba087a497ea2",
                "name": "aaro dary",
                "orgName": "orga_megh",
                "password": "aaro12345678",
                "role": "TERTIARY",
                "userId": 2,
                "userName": "aaro@joann.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "c2e09e9efa7212c3d17505611a49057021cb4713b3fc22c5f4aba60136572194",
                "name": "abba dav",
                "orgName": "orga_megha",
                "password": "abba12345678",
                "role": "TERTIARY",
                "userId": 3,
                "userName": "abba@joa.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "70b473521f152b81ed7b5963b8363594bec12691d17f93177abca3d608083189",
                "name": "abb davi",
                "orgName": "orga_mehd",
                "password": "abb12345678",
                "role": "ADMIN",
                "userId": 4,
                "userName": "abb@joaqui.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "fbb3b0e8ab6ca8ad08919d3f9ebd95c6090f6a64fd6e6fd0774e13503ffdf659",
                "name": "abdu david",
                "orgName": "orga_mehme",
                "password": "abdu12345678",
                "role": "PHC",
                "userId": 5,
                "userName": "abdu@jocely.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "977cb4c2bfde161697a6f9c0eaa653084bb0248df9914fa2f92a28d47279cee3",
                "name": "abdulla davi",
                "orgName": "orga_mehu",
                "password": "abdulla12345678",
                "role": "ADMIN",
                "userId": 6,
                "userName": "abdulla@jod.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "f92527c6ba31911eff405af78011b8a2ac76a37d61591dc3c6aeb0ec042dd360",
                "name": "ab daw",
                "orgName": "orga_me",
                "password": "ab12345678",
                "role": "ADMIN",
                "userId": 7,
                "userName": "ab@jodi.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "ca4a27b88075e4ce3bb18aeb4a9479b9d76f9bfb90e6b568cc0f778ec477e4a7",
                "name": "abe dea",
                "orgName": "orga_melani",
                "password": "abe12345678",
                "role": "TERTIARY",
                "userId": 8,
                "userName": "abe@jod.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "5212bb30f8ab5dcb4504406f8eeecc009fc6e39c02b1d5291eb3a6f05a46735e",
                "name": "abha deann",
                "orgName": "orga_melind",
                "password": "abha12345678",
                "role": "TERTIARY",
                "userId": 9,
                "userName": "abha@jo.com"
            },
            {
                "firstLogin": true,
                "hashedPassword": "3fd954d168215b37e3efb3e1a6db5aef335bddae7705686a2d401c7959fd0435",
                "name": "abhijee de",
                "orgName": "orga_meliss",
                "password": "abhijee12345678",
                "role": "ADMIN",
                "userId": 10,
                "userName": "abhijee@joe.com"
            },
            {
                "firstLogin": true,
                "hashedPassword": "9e10a33e6d217adcab0f5376b881764d9af1c55617811bea3c48d8fa93848278",
                "name": "abhiji debbi",
                "orgName": "orga_melod",
                "password": "abhiji12345678",
                "role": "TERTIARY",
                "userId": 11,
                "userName": "abhiji@joell.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "02ef22e750f8cab67549f364857654eeda20177011b88fe4470299b0125e04b9",
                "name": "abhilas debb",
                "orgName": "orga_melvi",
                "password": "abhilas12345678",
                "role": "TERTIARY",
                "userId": 12,
                "userName": "abhilas@joe.com"
            },
            {
                "firstLogin": true,
                "hashedPassword": "78c1d3db4738704f4b722345ab6a5fb2961a60dfb7fe4bd2c3141c07ebff0896",
                "name": "abhina deb",
                "orgName": "orga_mercede",
                "password": "abhina12345678",
                "role": "TERTIARY",
                "userId": 13,
                "userName": "abhina@joha.com"
            },
            {
                "firstLogin": true,
                "hashedPassword": "46957647b4b0b240743144b6dfdf85c173bc6fa82b1d9c9a083349775a095dd9",
                "name": "abhishe debora",
                "orgName": "orga_meredit",
                "password": "abhishe12345678",
                "role": "SECONDARY",
                "userId": 14,
                "userName": "abhishe@johan.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "da7f724b2ad494bfe48b42c35d99fcba52172f7c7f9a499221bee3767a5ac013",
                "name": "abigai debr",
                "orgName": "orga_mi",
                "password": "abigai12345678",
                "role": "ADMIN",
                "userId": 15,
                "userName": "abigai@johann.com"
            },
            {
                "firstLogin": true,
                "hashedPassword": "4afca638a6ee789f7abe93050507bdac7cdfbc307cc170fe0de63cef26f3070c",
                "name": "abraha de",
                "orgName": "orga_mica",
                "password": "abraha12345678",
                "role": "TERTIARY",
                "userId": 16,
                "userName": "abraha@joh.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "f92527c6ba31911eff405af78011b8a2ac76a37d61591dc3c6aeb0ec042dd360",
                "name": "ab dee",
                "orgName": "orga_michae",
                "password": "ab12345678",
                "role": "TERTIARY",
                "userId": 17,
                "userName": "ab@johnatha.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "81e8ad9208bc2495b6ef7b7e627c26fd1a260e461230a59c647b0662962ea34d",
                "name": "ac deep",
                "orgName": "orga_michael",
                "password": "ac12345678",
                "role": "ADMIN",
                "userId": 18,
                "userName": "ac@johnni.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "81c0f21c51ff43e6cdc3494ceb4d49ff79786e42c5383a8fe8bc65c36f56b9e5",
                "name": "ad deepa",
                "orgName": "orga_micha",
                "password": "ad12345678",
                "role": "PHC",
                "userId": 19,
                "userName": "ad@johnn.com"
            },
            {
                "firstLogin": true,
                "hashedPassword": "60fed5c1f646a86d4589d5f72de67c1ffc954e73f4bdc831d3011526d8d02fca",
                "name": "ada deirdr",
                "orgName": "orga_michea",
                "password": "ada12345678",
                "role": "TERTIARY",
                "userId": 20,
                "userName": "ada@johnso.com"
            },
            {
                "firstLogin": true,
                "hashedPassword": "3d82151e912b949dbc653f769818d1eb5b897bd83fa563295cc92e8b3db0cbef",
                "name": "adars deja",
                "orgName": "orga_miche",
                "password": "adars12345678",
                "role": "PHC",
                "userId": 21,
                "userName": "adars@joj.com"
            },
            {
                "firstLogin": false,
                "hashedPassword": "89d30bdcf3902ecc878e9bd1e4d69def88d62603ef2cb7f4935c73c850ac2ad4",
                "name": "adee deli",
                "orgName": "orga_michel",
                "password": "adee12345678",
                "role": "PHC",
                "userId": 22,
                "userName": "adee@jo.com"
            }
    ]
   return  <ReferedView apiData={appiData} ></ReferedView>
}