// 사진에 mouseover, mouseout 하는 경우
// 투명한 검은색에 하얀글자가 뜨게 끔  
// const bImg = document.querySelector('.big_img')
// const text = document.querySelector('.text')
// const mImg = document.querySelector('.thum > *')
// console.log(bImg, mImg, text)

// bImg.addEventListener('mouseover',()=>{
//     console.log(bImg)
    
// })
// 탭에 mouseover 했을 때 탭 컨텐츠 나오게 하기 


// 1. 사진에 mouseover 했을때 검은색 나오게 
// 2. 사진에 mouseout 했을때 검은색 사라지게 하기 

// 1. 초기값으로 검은색과 글자 숨기기
const black = document.querySelectorAll('.big_pic span')
const bImg = document.querySelector ('.big_pic')
const sImg = document.querySelectorAll('.pic')
const black2 = document.querySelectorAll('.pic span, .pic .text')
// const black1 = document.querySelectorAll('.pic1 span, .pic1 .text')
// const black2 = document.querySelectorAll('.pic2 span, .pic2 .text')
// const black3 = document.querySelectorAll('.pic3 span, .pic3 .text')
// const black4 = document.querySelectorAll('.pic4 span, .pic4 .text')
// const black5 = document.querySelectorAll('.pic5 span, .pic5 .text')
// const black6 = document.querySelectorAll('.pic6 span, .pic6 .text')
// const small = document.querySelectorAll('.small')
console.log(black,bImg,black2,sImg)
// black.style.opacity = '0';

bImg.addEventListener('mouseover',()=>{
    console.log(bImg)
    black[0].style.opacity = '1'
    black[1].style.opacity = '1'
})

bImg.addEventListener('mouseout',()=>{
    console.log(bImg)
    black[0].style.opacity = '0'
    black[1].style.opacity = '0'
})

// 작은 사진 
// sImg[0].addEventListener('mouseover',()=>{
//     console.log(sImg[0])
//     black2[0].style.opacity = '1'
//     black2[1].style.opacity = '1'
// })

// sImg[0].addEventListener('mouseout',()=>{
//     console.log(sImg[0])
//     black2[0].style.opacity = '0'
//     black2[1].style.opacity = '0'
// })

// 작은 사진 반복문 
// black2[0].style.opacity = '0'
// black2[1].style.opacity = '0'
sImg.forEach((i,index)=>{
    // console.log(i,index)
    i.addEventListener('mouseover',()=>{
        console.log(i)
        black2[0].style.opacity = '1'
        black2[1].style.opacity = '1'
    })
    i.addEventListener('mouseout',()=>{
        console.log(i)
        black2[0].style.opacity = '0'
        black2[1].style.opacity = '0'
    })
})

// function s_text(){
//     black2[0].style.opacity = '1'
//     black2[1].style.opacity = '1'
// }




// 2. 탭에 mouseover 했을때 tab1, tab2 .. 나오게 하기 