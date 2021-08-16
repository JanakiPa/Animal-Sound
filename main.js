function start(){
    navigator.mediaDevices.getUserMedia({ audio: true}); 
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LDI5eBrE3/model.json', modelReady);
    } 
    
function modelReady(){ 
    classifier.classify( gotResults); 
} 

    function gotResults(error, results) {
        if(error){console.log(error);}
        else{
            console.log(results);
            document.getElementById("noise").innerHTML='I can hear-'+results[0].label;
            document.getElementById("accuracy").innerHTML='Accuracy-'+results[0].confidence.toFixed(2)*100+"%";
            hearIMG=document.getElementById("hearing.png");
            if(results[0].label=="Meow"){hearIMG.src='cat.png';}
            else if(results[0].label=="Bark"){hearIMG.src='dog.png';}
            else if(results[0].label=="Chirp"){hearIMG.src='bird.png';}
            else{hearIMG.src='horse.png';}
        }
    }