// //using fetch api
// function mOver(object){
//     console.log("mouseover working");
//     fetch("mouseover.txt")
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error(`HTTP error:${response}`);
//         }
//         return response.text();
//     })
//     .then((data)=>{
//         object.previousElementSibling.innerHTML=data;

//     })
//     .catch((error)=>console.log(`error at ${error}`))
//     .finally((error)=>console.log(`finally executed`));
// };
// function mOut(object){
//     console.log("mouseout working");
//     fetch("mouseout.txt")
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error(`HTTP error:${response}`);
//         }
//         return response.text();
//     })
//     .then((data)=>{
//         object.previousElementSibling.innerHTML=data;

//     })
//     .catch((error)=>console.log(`error at ${error}`))
//     .finally((error)=>console.log(`finally:${error}`));
// };


// //xmlHTTPrequest
// (() => {
//     let httpRequest;
//     document
//       .getElementById("ajaxButton")
//       .addEventListener("click", makeRequest);

//     function makeRequest() {
//       httpRequest = new XMLHttpRequest();

//       if (!httpRequest) {
//         alert("Giving up :( Cannot create an XMLHTTP instance");
//         return false;
//       }
//       httpRequest.onreadystatechange = alertContents;
//       httpRequest.open("GET", "test.html");
//       httpRequest.send();
//     }

//     function alertContents() {
//       if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//           alert(httpRequest.responseText);
//         } else {
//           alert("There was a problem with the request.");
//         }
//       }
//     }
//   })();

//   /*Note: If the httpRequest variable is used globally,
//   competing functions calling makeRequest() can overwrite each other,
//   causing a race condition. Declaring the httpRequest variable local 
//   to a closure containing the AJAX functions avoids this.*/

//   //using xml file with try catch for error handling
//   let btn3=document.getElementById("ajaxButton_01");
//   btn3.addEventListener('click',requestxml);
//   function requestxml(){
//     let httpRequest=new XMLHttpRequest();
//     httpRequest.onreadystatechange=extractdata;
//     httpRequest.open("GET","test.xml",true);  //true for async function (default)
//     httpRequest.send();

//     function extractdata(){
//         try{
//             if(httpRequest.readyState===XMLHttpRequest.DONE){
//                 if(!httpRequest.ok){
//                     let doc_responce=httpRequest.responseXML;
//                     btn3.innerText=doc_responce.querySelector("root").firstChild.data;
//                 }
//                 else{
//                     alert("There was a problem with the request.");
//                 }
//             }
//         }
//         catch(error){
//             alert(`some error occured,${error}`);
//         }
//     }

//   };




  //sending data to server and getting response
  document.getElementById('ajaxButton03').onclick=()=>{
    //getting userinput data
    let userdata=document.getElementById("ajaxTextbox03").value;
    //invoking request
    makeRequest('text.php',userdata);

  };


  function makeRequest(url,userdata){
    let httprequest=new XMLHttpRequest();
    httprequest.onreadystatechange=extractdata01;
    httprequest.open('POST',url);
    httprequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded",
      );
    httprequest.send(`userName=${encodeURIComponent(userdata)}`);
  };


  function extractdata01(){
    try{
        alert("checking state");
        if(httprequest.readyState===XMLHttpRequest.DONE){
            alert("dataready");
            if(!httprequest.ok){
                let response = JSON.parse(httprequest.responseText);
                document.getElementById('responsedisplay').innerHTML=response.computedString;
            }
            else{
                alert("There was a problem with the request.");
            }
        }
    }
    catch(error){
        alert(`some error occured,${error}`);
    }
  
};
