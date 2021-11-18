const Header=document.querySelector('#header')
const title=document.querySelector('#title')
const paragraph=document.querySelector('#paragraph')
const profile_img=document.querySelector('#profile_img')
const name=document.querySelector('#name')
const date=document.querySelector('#date')

const animated_bg=document.querySelectorAll('.animated-bg')
const animated_bg_text=document.querySelectorAll('.animated-bg-text')


function getData(){

    Header.innerHTML='<img src="https://randomuser.me/api/portraits/men/22.jpg" alt="">'
title.innerHTML='hello this dawit'
paragraph.innerHTML='hello this dave welcome to the site thanks for visiting'
profile_img.innerHTML='<img src="https://randomuser.me/api/portraits/men/22.jpg" alt="">'
name.innerHTML='Dawit Mekonnen'
date.innerHTML='march 25 2022'
}