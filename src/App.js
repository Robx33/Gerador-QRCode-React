// Biblioteca QRCode
import QRCode from 'react-qr-code' // Imagem do QRCode
import QRcodeLink from 'qrcode' // Link para baixar

import { useState } from 'react';

function App() {

const [link, setLink] = useState('') // Estado para armazenar o que o usuário digita e o valor do QRcode
const [qrcodeLink, setQrcodeLink] = useState('') // Estado que recebe o link qrcode digitado

// Função para baixar o QRCode
function handleGenerate(link_url){ // Espera o link que vai ser gerado
  QRcodeLink.toDataURL(link_url, { // Recebe o link
    width: 600,
    margin: 3,
  }, function(err, url){ // Função de callback
    setQrcodeLink(url)
  })
}

function handleQRcode(e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
}


  return (
    <div className="container">
      <h1>Gerenciador de QRCode</h1>
      <QRCode 
      value={link}
      />

      <input className="input" 
      placeholder="Digite a sua URL desejada..." 
      value={link}
      onChange={(e) => handleQRcode(e)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>Baixar QRCode</a> 

    </div>
  );
}

export default App;
