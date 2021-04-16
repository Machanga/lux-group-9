new fullage("#fullpage", {
    
    autoScrolling: true,
    navigation:true,
    onLeave:(origin, destination,direction )=>{
    const section=destination.item;
    const title=section.querrySelector('h3');
    const tmline=new TimeLineMax();
    tmline.fromTo(title, .5,{y:'50',opacity:0}, {y:0, opacity:1});
    console.log("ok");
    if(destination.index===1){
        const pic2=document.querrySelector('.pic2');
        const description=document.querrySelector('.description2');

        tmline.fromTo(pic2, 0.7, {x:'100%'}, {x:"-30%"})

        //Add a text
        .fromTo(description, 0.5, {y:"50", opacity:0}, {y:0, opacity:1})
        //Adition of pictures ata time
        .fromTo(pic2[0 ],1, {opacity:1},{opacity:1});
      //  .fromTo(chairs[1 ],1, {opacity:0},{opacity:1})
        

    }
}}); 

