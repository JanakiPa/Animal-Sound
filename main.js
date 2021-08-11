function start(){
    navigator.mediaDevices.getUserMedia({ audio: true}); 
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LDI5eBrE3/model.json', modelReady);
    } 
    function modelReady(){ 
        classifier.classify( gotResults); 
       } 
        function gotResults(error, results) {

        }