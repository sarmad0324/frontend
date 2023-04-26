const m_open = document.getElementById("btn-open")
const m_head = document.getElementById("head")
const m_img = document.getElementById("img")
const m_nav = document.getElementById("nav")
const m_list = document.getElementById("ul-list")
const m_link = document.getElementById("links")

const m_close = document.getElementById("btn-close")


 
m_open.addEventListener("click", function(){
    m_head.style.cssText=`
    display: flex;
    justify-content: space-between;
    height: 500px;
    `
    m_open.style.display='none'
    m_img.style.display='none'
    m_close.style.display='block'
    m_nav.style.display='block'
    m_list.style.cssText=`
    display: block;
    padding:0px
    margin:0px
    `
    
})
m_close.addEventListener("click",function(){
    m_open.style.display='block'
    m_close.style.display='none'
    m_head.style.cssText=`
    display: flex;
    justify-content: space-between;
    height: 100px;
    `
    m_img.style.display='block'
    m_nav.style.display='none'
})