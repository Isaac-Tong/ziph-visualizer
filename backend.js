const extractor = require('unfluff');
const https = require('https');
const request = require('postman-request');
const express = require('express')
const bodyParser = require("body-parser");
const validator = require('validator');
var toArray = require('keywords-array');
var count = require('count-array-values')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res)=>{
    const websiteUrl = req.body.link;
    //CHECK VALIDITY OF WEBSITE LINK
    if(validator.isURL(websiteUrl) === true){
      //Check if http:// or https:// is appended to URL
      var httpArray = ['']


      //EXTRACT DATA
      request(websiteUrl, (error, response, body)=>{

          var extractedObject = extractor(body, 'en').text;
          var extractedArray = toArray(extractedObject);
          var countObject = count(extractedArray);

          //logic to check at least 18 words
          var i;
          for(i = 0; i < 18; i++){
            if(extractedArray[i] == undefined){
              return res.send("Please enter more than 18")
            }
          }
          res.render('chart',{
              //Render words
              one: countObject[0].value,
              two: countObject[1].value,
              three: countObject[2].value,
              four: countObject[3].value,
              five: countObject[4].value,
              six: countObject[5].value,
              seven: countObject[6].value,
              eight: countObject[7].value,
              nine: countObject[8].value,
              ten: countObject[9].value,
              eleven: countObject[10].value,
              twelve: countObject[11].value,
              thirteen: countObject[12].value,
              fourteen: countObject[13].value,
              fifteen: countObject[14].value,
              sixteen: countObject[15].value,
              seventeen: countObject[16].value,
              eighteen: countObject[17].value,

              //Render data
              oneData: countObject[0].count,
              twoData: countObject[1].count,
              threeData: countObject[2].count,
              fourData: countObject[3].count,
              fiveData: countObject[4].count,
              sixData: countObject[5].count,
              sevenData: countObject[6].count,
              eightData: countObject[7].count,
              nineData: countObject[8].count,
              tenData: countObject[9].count,
              elevenData: countObject[10].count,
              twelveData: countObject[11].count,
              thirteenData: countObject[12].count,
              fourteenData: countObject[13].count,
              fifteenData: countObject[14].count,
              sixteenData: countObject[15].count,
              seventeenData: countObject[16].count,
              eighteenData: countObject[17].count,

              //Render text counter
              text1: countObject[0].value,
              text2: countObject[1].value,
              text3: countObject[2].value,
              text4: countObject[3].value,
              text5: countObject[4].value,
              text6: countObject[5].value,
              text7: countObject[6].value,
              text8: countObject[7].value,

              //Render text values
              data1: countObject[0].count,
              data2: countObject[1].count,
              data3: countObject[2].count,
              data4: countObject[3].count,
              data5: countObject[4].count,
              data6: countObject[5].count,
              data7: countObject[6].count,
              data8: countObject[7].count,


          });






      })

    }

    else{
      console.log("this is a false URL");
    }

})

//FUNCTION RETURNS EXTRACTED ARRAY FROM WEBSITE



app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
})
