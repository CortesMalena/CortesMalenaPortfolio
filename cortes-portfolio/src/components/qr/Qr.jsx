import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import './Qr.css';
import logoPortfolio from '../../assets/logo-qr.png';

export default function Qr() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const portfolioURL = 'https://cortes-malena-portfolio.vercel.app';

    QRCode.toCanvas(
      canvasRef.current,
      portfolioURL,
      {
        width: 320,
        margin: 1,
        color: {
          dark: '#121011',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'Q',
      },
      (error) => {
        if (error) console.error(error);
      }
    );
  }, []);

  return (
    <section className="qr-section" id="qr">
      <div className="qr-grid-system">
        
        {/* Left panel: Content */}
        <div className="qr-meta-panel">
          <div className="qr-status-pill">
            <span className="pill-dot"></span>
            <span className="pill-text">Código Qr</span>
          </div>

          <h2 className="qr-main-heading">
            llevá la experiencia<br />
            <span className="qr-heading-stroke">al dispositivo</span>
            <span className="qr-heading-accent">móvil.</span>
          </h2>
        </div>

        {/* Right panel: Scanner interface */}
        <div className="qr-scanner-panel">
          
          {/* Identity Space */}
          <div className="qr-brand-header">
            <div className="logo-placeholder">
              <img src={logoPortfolio} alt="logo" className="logo-img" />
            </div>
          </div>

          <div className="scanner-frame-isolation">
            
            {/* Structural corner frames */}
            <div className="frame-corner top-left"></div>
            <div className="frame-corner top-right"></div>
            <div className="frame-corner bottom-left"></div>
            <div className="frame-corner bottom-right"></div>

            {/* Isolated bounding box container for laser execution */}
            <div className="scanner-laser-container">
              <div className="scanner-laser-line"></div>
            </div> 

            <div className="canvas-render-block">
              <canvas ref={canvasRef} className="qr-rendering-target" />
            </div>
          </div>

          <div className="scanner-action-footer">
            <div className="action-code-label">[ Portfolio de Malena Cortes ]</div>
            <div className="action-instruction-text">Apuntá con la cámara para escanear</div>
          </div>
        </div>

      </div>
    </section>
  );
}