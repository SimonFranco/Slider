for (var i=27;i>0;i--){
    let slider = document.createElement('div');
    slider.setAttribute('class', 'slider animate');
    slider.setAttribute('id','slider'+i)
    document.getElementById('game').append(slider);
}
var win = document.getElementById('slider26');
win.classList.remove('animate')
var level = document.getElementById('slider27')
level.classList.remove('animate')
level.textContent = 0;

var aniWidth = 500;
    
    function stopSliding(slider){
        level.textContent = slider;
        // if players gets to level 25
        if (slider== 25){
           let h12 = document.getElementById('h12');
           let modal2 = document.getElementById('wonModal');
           modal2.style.display = 'block';
        //    level.style.visibility = 'hidden'
        }
        
        var sliderCurrent = document.getElementById('slider'.concat(slider))
        var sliderAbove = document.getElementById('slider'.concat(slider+1))
        if(slider ==1){
            var sliderBelow = sliderCurrent
            sliderBelow.style.visibility = 'visible'
        }else{
            var sliderBelow = document.getElementById('slider'+ (slider-1 ))
        }
        var left = window.getComputedStyle(sliderCurrent).getPropertyValue('left');
        sliderCurrent.classList.remove('animate');
        // Keeps slider where clicked
        sliderCurrent.style.left = left;
        var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue('width'));
        var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue('left'))
        left = parseInt(left);
        var difference = left - leftBelow;
        var absDifference = Math.abs(difference);


        //aligns sliders to the left
        if (difference <0 ){
            left = left + absDifference;
            sliderCurrent.style.left = left.toString().concat("px");
        }
        if(difference > 0 ){
            left = left - difference;
            sliderCurrent.style.left = left.toString().concat('px');
        }
        // if you lose
        if( difference>width || difference <-width){
            let h11 = document.getElementById('h11');
            h11.append(slider -1 )
            if(h11.textContent !==''){
                document.getElementById('btn').disabled = true;
            }
            let modal1 = document.getElementById('lostModal');
             modal1.style.display = 'block';
             sliderAbove.classList.remove('animate');
             sliderCurrent.style.visibility = 'hidden';
             level.textContent
        }
             // adjusts slider size
            sliderAbove.style.visibility = 'visible';
            var offset = (width - absDifference).toString().concat('px');
            sliderCurrent.style.width = offset;
            sliderAbove.style.width = offset;
        
        aniWidth = aniWidth + absDifference;
        document.documentElement.style.setProperty('--width', aniWidth + 'px')
        
        var onclick =  'stopSliding(' + (slider+1) + ')';
         if(difference<width || difference >-width){
             document.getElementById('btn').setAttribute('onclick', onclick);

         }

    }