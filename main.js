const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const directoryPath = __dirname + '/.well-known/acme-challenge';

const multer = require('multer');
const nodemailer = require('nodemailer');










const storage = multer.diskStorage({ // Configurer le stockage et le nom de fichier
    
    destination: function(req, file, cb) {
        cb(null, 'documents/'); // Répertoire où les fichiers seront stockés
    },
    filename: function(req, file, cb) {
        const extname = path.extname(file.originalname);
        cb(null, Date.now() + extname); // Nom de fichier unique basé sur le timestamp
    }
});
const fileFilter = (req, file, cb) => { // Filtrer les fichiers pour n'accepter que les fichiers PDF
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Seuls les fichiers PDF sont autorisés.'), false);
    }
};
  // Limite de 10 Mo (en bytes)
const upload = multer({ storage: storage,limits: {fileSize: 10 * 1024 * 1024, }, fileFilter: fileFilter }).single('document');

const transporter = nodemailer.createTransport({  // Configurer nodemailer pour envoyer l'e-mail
    // code supprimer contien mdp
});


const certPath = __dirname + '\\cert\\';
const keyFile = certPath + 'developpeur-informatique-os.fr-key.pem'; 
const certFile = certPath + 'developpeur-informatique-os.fr-crt.pem'; 

const options = {
    key: fs.readFileSync(keyFile),
    cert: fs.readFileSync(certFile)
};
const PORT = process.env.PORT || 4100;
http.createServer(options, function (req, res) {

    switch(req.method)
    {
        case "POST":{
            let q = url.parse(req.url, true);
            let data = '';

            if (q.pathname == "/contact") {
                upload(req, res, (err) => {
                    if (err instanceof multer.MulterError) {
                        // Une erreur Multer s'est produite (fichier trop volumineux, etc.)
                        console.error(err);
                        res.send('Le fichier est trop volumineux. Veuillez choisir un fichier plus petit.');
                    } else if (err) {
                        console.error(err);
                        res.end('Une erreur s\'est produite lors de l\'envoi du fichier.');
                    } else {
                        const { nom, prenom, email, phone, message } = req.body;

                        const mailOptions = {
                            from: 'onur6se8@gmail.com', // Votre adresse e-mail
                            to: 'onur6se8@gmail.com', // Adresse e-mail de destination
                            subject: 'Nouveau formulaire de contact',
                            text: `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nNuméro: ${phone}\nMessage: ${message}`,
                            attachments: req.file ? [{ filename: req.file.filename, path: req.file.path }] : []
                        };

                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.error(error);
                                res.end('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
                            } else {
                                console.log('E-mail envoyé: ' + info.response);
                            }
                        });

                        page("Contact");

                        // fs.unlink(req.file.path, (err) => {
                        //     if (err) {
                        //         console.error('Erreur lors de la suppression du fichier :', err);
                        //     } else {
                        //         console.log('Fichier supprimé avec succès');
                        //     }
                        // });
                    }
                });
            } else {

                req.on('data', chunk => {

                    data += chunk.toString();
                });
                req.on('end', async() => {
    
                    const parsedData = new URLSearchParams(data);
                    let lien = parsedData.get('btnMenu');
                    
                    if (lien == "Contactez-moi") {
                        
                        lien = "Contact";
                    }

                    if ( lien != null){            //   menu 
    
                        page(lien);
    
                    } else {
                        res.writeHead(200); 
                        res.end(); 
                    }
                    return;
                });
            }
            break;
        }
        case "GET":{            
            
            let q = url.parse(req.url, true);
            let query = q.query;
                 console.log(req.url);                                    // renvoie tout les données publique 
            if ( req.url.startsWith('/page/video/') || req.url.startsWith('/page/imageContact/') || req.url.startsWith('/page/imageService/') || req.url.startsWith('/page/imageProjet/') ||  req.url.startsWith('/page/imageAccueil/') || req.url.startsWith('/page/imageSokoban/') || req.url.startsWith('/page/image/') || req.url.startsWith('/page/js/') || req.url.startsWith('/page/css/') || req.url.startsWith('/page/html/') ){        
                
                var ext = path.extname(req.url);
                var validExtensions = {
                    ".html" : "text/html; charset=utf-8",
                    ".js": "application/javascript; charset=utf-8",
                    ".css": "text/css; charset=utf-8",
                    ".txt": "text/plain",
                    ".jpg": "image/jpeg",
                    ".gif": "image/gif",
                    ".png": "image/png",
                    ".svg": "image/svg+xml",
                    ".woff": "application/font-woff",
                    ".woff2": "application/font-woff2",
                    ".mp4": "video/mp4"
                };
                var mimeType = validExtensions[ext];
                console.log(mimeType);  
                const imagePath = path.join(__dirname, req.url);
                fs.readFile(imagePath, (err, image) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                        res.end('Image non trouvée');
                    } else {
                        res.writeHead(200, { 'Content-Type': mimeType });
                        res.end(image);
                    }
                });

            } else if (req.url.startsWith('/.well-known/acme-challenge/')) {
                const fileName = req.url.split('/').pop();
                const fullPath = path.join(directoryPath, fileName);
        
                fs.readFile(fullPath, 'utf8', (err, data) => {
                    if (err) {
                        res.writeHead(404);
                        return res.end('404 Not Found');
                    }
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end(data);
                });
            } else if (req.url.startsWith('/google43d7702351050a5b.html')) {
    
                const chemin = __dirname + '/google43d7702351050a5b.html'
        
                fs.readFile(chemin, (err, content) => {
                    if (err) {
                        res.writeHead(404);
                        res.end("Fichier non trouvé");
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else if (req.url === '/page/3d/scene2.splinecode') {
                const scenePath = path.join(__dirname, 'page/3d/scene2.splinecode');
                fs.readFile(scenePath, (err, content) => {
                    if (err) {
                    res.writeHead(404);
                    res.end('Not found');
                    } else {
                    res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                    res.end(content);
                    }
                });
                return;
            } else if (req.url === '/page/3d/scenequelemonde.splinecode') {
                const scenePath = path.join(__dirname, 'page/3d/scenequelemonde.splinecode');
                fs.readFile(scenePath, (err, content) => {
                    if (err) {
                    res.writeHead(404);
                    res.end('Not found');
                    } else {
                    res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                    res.end(content);
                    }
                });
                return;
            } else if (req.url === '/page/3d/scenemontre.splinecode') {
                const scenePath = path.join(__dirname, 'page/3d/scenemontre.splinecode');
                fs.readFile(scenePath, (err, content) => {
                    if (err) {
                    res.writeHead(404);
                    res.end('Not found');
                    } else {
                    res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                    res.end(content);
                    }
                });
                return;
            } else if (req.url.startsWith('/mentionslegales')) {
    
                page("MentionsLegales");
            } else if (req.url.startsWith('/services')) {
    
                page("Services");
            } else if (req.url.startsWith('/projets')) {
    
                page("Projets");
            } else if (req.url.startsWith('/jobs')) {
    
                page("Jobs");
            }else if (req.url.startsWith('/contact')) {
    
                page("Contact");
            } else {
                  
                page("Accueil");

                const date = new Date(); 
                const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
                let jour = year + "-" + month + "-" + day;
                const [heure, min, sec] = [date.getHours(), date.getMinutes(), date.getSeconds()];
                let h = heure + "h" + min + "min" + sec +"sec";
            
                let fichier = fs.createWriteStream(path.join(__dirname, './log/' + jour + '.log'), { flags: 'a' });
                const fullUrl = req.protocol + '://' + req.originalUrl;
             
                fichier.write(fullUrl + " /-/ " + jour + "/" + h + " /-/ " + req.method + " /-/ " + req.url + " /-/ " + req.headers.host + " --*\n");
                fichier.end();
            }
            break;
        }
        default:break;
    }
    function page(nom) {    // Pour charger chaque page html 

        const fichier = fs.readFileSync('./page/html/' + nom + '.html',{encoding:'utf8', flag:'r'});
        res.write(fichier);
        res.end(); 
    };
    
}).listen(PORT, '0.0.0.0');


