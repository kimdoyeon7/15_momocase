// 탭 제목 마우스 올리는 이벤트 생성
// 마우스 올린 대상에 active 클래스 적용
// 그 외 나머지 초기화 active 클래스 제거 

const tab_a = document.querySelectorAll('.tab a')
const active = document.querySelector('.active')

// 내가 작성한 것 //
/* tab_a.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        tab_a[i].classList.add('active') // 클래스 적용
    })
    t.addEventListener('mouseout',()=>{
        tab_a[i].classList.remove('active') // 클래스 제거
    })
}) */

for(let i of tab_a){
    i.addEventListener('mouseover',()=>{
        for(let j of tab_a){
            j.classList.remove('active')
        } // active를 제거하고
        i.classList.add('active')//마우스 올린 i에 active에 추가하기 
    })
}

// 1. txt 모두 숨기기 display=none vs opacity =0
// 2. .tab a 에 올렸을때 
// 3. txt 올린대상만 서서히 보이기 opacity = 1
// 4. 마우스 나가면 사라지기

const tab_c_a = document.querySelectorAll('.tab_c a')
console.log(tab_c_a)
console.log(tab_c_a[0].children[0])

// tab_c_a[0].children[0].style.opacity = '0'
for(let i of tab_c_a){
    console.log(i, i.children[0])
    i.children[0].style.opacity = 0
    i.children[0].style.transition = 'all 0.5s'
    i.addEventListener('mouseover',()=>{
        i.children[0].style.opacity = 1
    })
    i.addEventListener('mouseout',()=>{
    i.children[0].style.opacity = 0
    })
}

// 각 탭 제목에 해당하는 내용만 출력하기 //
// 초기값 : 모든 내용 숨기기, 1번 내용 보이기
// 탭 제목에 마우스 올렸을 때 관련 내용 보이기 

const tab_c = document.querySelectorAll('.tab_c')
// console.log(tab_c)
// 초기값 
for(let i of tab_c){i.style.display = 'none'}
tab_c[0].style.display = 'flex'


tab_a.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        for(let i of tab_c){i.style.display = 'none'}
        console.log(t)
            tab_c [i].style.display = 'flex'
        // active[i].style.opacity = '1'
    })
})