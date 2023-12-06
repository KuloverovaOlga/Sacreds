import ribbonSwiper from "./ribbonSwiper";
import form from "./form";
import collectionsSwiper from "./collectionsSwiper";
import harmonySwiper from "./harmonySwiper";
import reviewsSwiper from "./reviewsSwiper";
import accordeon from "./accordeon";
import rangeSwiper from "./rangeSwiper";

document.addEventListener('DOMContentLoaded', () => {

    try{
        ribbonSwiper()
    } catch {}
    try{
        form()
    } catch {}
    try{
        collectionsSwiper()
    } catch {}
    
    try{
        harmonySwiper()
    } catch {}
    try{
        reviewsSwiper()
    } catch {}
    try{
        accordeon()
    } catch {}
    try{
        rangeSwiper()
    } catch {}
    
})


