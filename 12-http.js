const http=require('http');
//our last in built module of course

//badme express easy kr dega ye sab bhi


//BHAI KABHI BHI DO RESPONSE NHI BHEJTE 
//AGR RES BHEJNE KE BAAD/RES.END() BHI RES BHEJA THEN ERROR
//AS JS READS LINE BY LINE
//SO RES.END() KE BAAD RETURN LAGA DENA YA IF ELSE IF USE KRLE

const server=http.createServer((req,res)=>{
  // res.write('Bhai text dikh rha hai na');
  // res.end();

  if(req.url=='/')
  {
    res.end('Aur bhai home page pr aagya na')
    return
  }
  if(req.url==='/about')
  {
    res.end("About section pr ho na bhaya")
    return
  }

  res.end("<h1> Na Baap Bada na Bhaiya</h1>"+
  "<P>sabse bada rupaiya</p>"
  +"<a href='/'>Go back home</a>");
})

server.listen(5000);//jo server banya tha wo ispr listen

//ab ye file chalane pr tu bahr nhi jaega terminal se
//server running



//ISKE BAAD HAMNE PACKAGE.JSON BANAYA
//KYUKI USI KE ANDR HAMARI SAARI PROJECT INFO HOGI
//AUR NODE PTA KR PAEGA CHEEZE

//so use, npm init -y to make it and start doing things
