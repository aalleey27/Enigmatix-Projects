// let pass = prompt('Enter Your pass')
// if (pass === '123') {
//     console.log('Ali this is a current password')
//     // history.pushState(null,null,'color.html')
// }
// let att = document.getElementsByClassName('container')[1].hasAttribute('class');
// console.log(att)



let jokes = document.getElementById('jokes')


// console.log(ab.attributes)

function makeid(length) {
    let result = '';
    const characters = [
        'Why did an old man fall in a well  Because he couldnt see that well','Hitler Says ,” There Iss No Word Like Impossible Un Maai Dictionary ” Sardar : Ab Bolnay Se Kya Faida ? ” Jab Khridi Thi Tab Hi Check Karna Tha Na ”','Pehla Sardar : Oye Agar Neend Na Aaye To Kya Kya Jaye ?  Dosra Sardar : Neend Ka Intzaar Karne Se Acha Hai Ki Bandah So Hi Jaye', 'Police : Tumhe Kal Subah 5 Bujey Phansi Di Jaye Gi .Sardar : Ha Ha Ha Ha ! Police : Kyun Hans Rahay Ho ? Sardar : Mein To Uthta Hi Subah 9 Bujey Ho','k Dafaa Pathan Aur Sardar Kisi Hotel Mein Sath Khana Khanay Gaye. .. .. .. Glass Ulta Parha Tha  Pathan : Yaar Glass Ka To Munh Hai Band Hai  Sardar : Aur Neechay Se V Toota Sun-hwa Hai'
    ]
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters[Math.floor((Math.random()*charactersLength))]
      
    //   charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    // console.log(result.toString())
    jokes.innerText=result
    copytext()
    return result;
    
}

 function copytext (){
    let text = jokes.innerText
    text.select();
    navigator.clipboard.writeText(text)
    alert('Copied The text',text)
    return text
 }


