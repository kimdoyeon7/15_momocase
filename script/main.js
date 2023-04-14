// 사진에 mouseover, mouseout 하는 경우
// 투명한 검은색에 하얀글자가 뜨게 끔  
const bImg = document.querySelector('.big_img')
const text = document.querySelector('.text')
const mImg = document.querySelector('.thum > *')
console.log(bImg, mImg, text)

bImg.addEventListener('mouseover',()=>{
    console.log(bImg)
    
})





// 탭에 mouseover 했을 때 탭 컨텐츠 나오게 하기 