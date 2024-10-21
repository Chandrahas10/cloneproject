let left = document.getElementById("slide-btn-left")
let right = document.getElementById("slide-btn-right")
let imgitem =document.querySelectorAll(".image-item")

console.log(imgitem.length-1)

let startslider = 0
let endslider = (imgitem.length-1) * 100 //700

left.addEventListener("click",()=>{
    // alert("left")
    if(startslider < 0){
        startslider = startslider +100;
    }
    imgitem.forEach(Element=>{
        Element.style.transform = `translateX(${startslider}%)`;
    })
})
right.addEventListener("click",()=>{
    if(startslider >= -endslider+100){
        startslider = startslider -100;
    }
    imgitem.forEach(Element=>{
        Element.style.transform = `translateX(${startslider}%)`;
    })
})
// sidebar navigation

const sidebarnavigation =document.getElementById("sidebar-container-navigation-id")
const sidebaropen = document.getElementById("open-slider")
const sidebarclose = document.getElementById("sidebar-close")
    
sidebaropen.addEventListener("click",()=>{
    sidebarnavigation.classList.toggle("sidebar-show")
})

sidebarclose.addEventListener("click",()=>{
    sidebarnavigation.classList.toggle("sidebar-show")
})

// sub-slider navigation
const echo = document.getElementById("echo-show")
const subbaropen = document.getElementById("digital")
const subbarclose = document.getElementById("sub-bar-close")

    subbaropen.addEventListener("click",()=>{
       echo.classList.toggle("show-echo")
    })

    subbarclose.addEventListener("click",()=>{
        echo.classList.toggle("show-echo")
    })
// fire-tv bar 
const firetv = document.getElementById("sub-fire-tv-id")
const subbar_fire_tvopen = document.getElementById("fire-tv")
const subbar_fire_tvclose = document.getElementById("firetv-close")

    subbar_fire_tvopen.addEventListener("click",()=>{
        firetv.classList.toggle("firetv-show")
    })
    subbar_fire_tvclose.addEventListener("click",()=>{
        firetv.classList.toggle("firetv-show")
    })
//kindle
    const kindle = document.getElementById("sub-kindle-id")
    const subkindle_open = document.getElementById("kindle")
    const subkindle_close = document.getElementById("subkindle_close")

   subkindle_open.addEventListener("click",()=>{
        kindle.classList.toggle("kindle-show")
    })
    subkindle_close.addEventListener("click",()=>{
        kindle.classList.toggle("kindle-show")
    })
//Audible
     const Audible1 = document.getElementById("sub_Audio_id")
     const subAudio_open = document.getElementById("Audible")
     const subAufio_close = document.getElementById("subAudio_close")
 
     subAudio_open.addEventListener("click",()=>{
        Audible1.classList.toggle("audio_show")
     })
     subAufio_close.addEventListener("click",()=>{
        Audible1.classList.toggle("audio_show")
     })
//prime_video
const primevideo = document.getElementById("prime-video_id")
const primevideo_open = document.getElementById("prime-video")
const primevideo_close = document.getElementById("m_close")

primevideo_open.addEventListener("click",()=>{
   primevideo.classList.toggle("prime_video-show")
})
primevideo_close.addEventListener("click",()=>{
    primevideo.classList.toggle("prime_video-show")
})
// // music
const music = document.getElementById("music_id")
const music_open = document.getElementById("music")
const music_close = document.getElementById("music_close")

music_open.addEventListener("click",()=>{
   music.classList.toggle("music-show")
})
music_close.addEventListener("click",()=>{
    music.classList.toggle("music-show")
})
