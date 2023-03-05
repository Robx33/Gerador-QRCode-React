import QRCode from 'react-qr-code'
import QRcodeLink from 'qrcode'

import { useState } from 'react';

function App() {

const [link, setLink] = useState('')
const [qrcodeLink, setQrcodeLink] = useState('')

function handleGenerate(link_url){
  QRcodeLink.toDataURL(link_url, {
    width: 600,
    margin: 3,
  }, function(err, url){
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
