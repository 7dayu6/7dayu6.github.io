const backTop = document.querySelector('.backTop')
window.addEventListener('scroll', function(){
    const n = document.documentElement.scrollTop
    if(n >= 200){
        backTop.style.opacity = 1
    }
    else{
        backTop.style.opacity = 0
    }
})
backTop.addEventListener('click', function(){
    // document.documentElement.scrollTop = 0
    window.scrollTo(0, 0)//让页面滚动到坐标(x, y)
})
