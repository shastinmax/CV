

// portfolio item filter
const filterContainer=document.querySelector('.portfolio-filter'),
lightboxClose=document.querySelector('.lightbox-close'),
filterBtns=filterContainer.children,
totalFilterBtn=filterBtns.length
portfolioItems=document.querySelectorAll('.portfolio-item')
totalPortfolioItem=portfolioItems.length

for(let i=0;i<totalFilterBtn;i++){
filterBtns[i].addEventListener('click',function(){
    filterContainer.querySelector('.active').classList.remove('active')
    this.classList.add('active')

    const filterValue=this.getAttribute('data-filter')
    for(let k=0;k<totalPortfolioItem;k++){
        if(filterValue===portfolioItems[k].getAttribute('data-category')){
            portfolioItems[k].classList.remove('hide')
            portfolioItems[k].classList.add('show')
        }else{
            portfolioItems[k].classList.remove('show')
            portfolioItems[k].classList.add('hide')
        }
        if(filterValue==='all'){
            portfolioItems[k].classList.remove('hide')
            portfolioItems[k].classList.add('show') 
        }
    }
})
}

// portfolio lightbox

const lightbox=document.querySelector('.lightbox'),
lightboxImg=lightbox.querySelector('.lightbox-img'),
lightboxText=lightbox.querySelector('.caption-text'),
lightboxCounter=lightbox.querySelector('.caption-counter')

let itemIndex=0

for(let i=0;i<totalPortfolioItem;i++){
    portfolioItems[i].addEventListener('click',function(){
        itemIndex=i
        changeItem()
        toggleLightBox()
    })
}

function nextItem(){
    itemIndex===totalPortfolioItem - 1 ? itemIndex = 0 : itemIndex++
    changeItem()  
}

function prevItem(){
    itemIndex===0 ? itemIndex=totalPortfolioItem - 1 : itemIndex--
    changeItem()  
}

function toggleLightBox(){
    lightbox.classList.toggle('open')
}

function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src')
    lightboxImg.src=imgSrc
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML
    lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalPortfolioItem
}

// close lightbox
lightbox.addEventListener('click',function(event){
if(event.target===lightboxClose || event.target===lightbox){
    toggleLightBox()
}
})
// Aside NavBar
const nav=document.querySelector('.nav'),
navList=nav.querySelectorAll('li'),
totalNavList=navList.length,
allSection=document.querySelectorAll('.section'),
totalSection=allSection.length

for(let i=0;i<totalNavList;i++){
    const a= navList[i].querySelector('a');
    a.addEventListener('click',function(){
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section')
        }
        for(let j=0;j<totalNavList;j++){
            if(navList[j].querySelector('a').classList.contains('active')){

    allSection[j].classList.add('back-section')
}
            navList[j].querySelector('a').classList.remove('active')

        }
       this.classList.add('active')
       showSection(this);

       if(window.innerWidth<1200){
           asideSectiontogglerBtn()
       }
    })
}
function showSection(element){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active')
    }
    const target=element.getAttribute('href').split('#')[1]
    document.querySelector('#'+target).classList.add('active')
    
}

const navTogglerBtn=document.querySelector('.nav-toggler'),
        aside=document.querySelector('.aside')

navTogglerBtn.addEventListener('click',asideSectiontogglerBtn)

function asideSectiontogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open')
    }
}