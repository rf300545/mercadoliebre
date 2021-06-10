/* const express = require('express');
const path = require('path');

const app = express();

app.get('/mostrar_mensaje', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile((__dirname + '/views/index.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(__dirname +'/public'));  

app.use(express.static(__dirname +'/views'));  

app.listen(3004, () => {
    console.log("Servidor corriendo");
}); */

const express = require('express');
const path = require('path');
const app = express();
const publicFolderPath = path.resolve(__dirname, './public');
app.use ( express.static (publicFolderPath));
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
});
// app.listen (3060, () => {
//     console.log ("sercorriendo");
// });
app.get ("/", (req,res) => {
    res.sendFile (path.resolve (__dirname, "./views/index.html"));
})






