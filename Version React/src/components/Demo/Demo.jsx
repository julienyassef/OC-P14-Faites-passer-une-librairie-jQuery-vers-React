// src/App.js
import React, { useState } from "react";

// Import components
import Modal from "jy-oc-p14-ma-bibliotheque-de-composants";

function Demo() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);

  const handleOpenFirstModal = () => setIsFirstModalOpen(true);
  const handleOpenSecondModal = () => setIsSecondModalOpen(true);
  const handleOpenThirdModal = () => setIsThirdModalOpen(true);

  const handleCloseFirstModal = () => setIsFirstModalOpen(false);
  const handleCloseSecondModal = () => setIsSecondModalOpen(false);
  const handleCloseThirdModal = () => setIsThirdModalOpen(false);

  return (
    <>
      <button onClick={handleOpenFirstModal}>Open First Modal</button>

      <Modal
        isOpen={isFirstModalOpen}
        closePreviousOnOpen={false}
        handleClose={handleCloseFirstModal}
        modalClasse={`modal`}
        escapeClose={true}
        enableCloseIconClick={true}
        closeOnClickOutside={true}
        title="Titre de la Modal"
        content={
          <p>
            Je suis la première modal.{" "}
            <button onClick={handleOpenSecondModal}>Open Second Modal</button>
          </p>
        }
        disableScroll={true}
        centeredModal={true}
        closeClass={`customClose`}
        fadeDurationOverlay={0}
        fadeDelayOverlay={0}
        fadeDurationModal={0}
        fadeDelayModal={0}
      />
      <Modal
        isOpen={isSecondModalOpen}
        closePreviousOnOpen={true}
        handleClose={handleCloseSecondModal}
        modalClasse={`modal`}
        escapeClose={true}
        enableCloseIconClick={true}
        closeOnClickOutside={true}
        title="Titre de la Modal"
        content={
          <p>
            Je suis la deuxième modal.{" "}
            <button onClick={handleOpenThirdModal}>Open Third Modal</button>
          </p>
        }
        disableScroll={true}
        centeredModal={false}
        closeClass={`customClose`}
        fadeDurationOverlay={0}
        fadeDelayOverlay={0}
        fadeDurationModal={0}
        fadeDelayModal={0}
      />
      <Modal
        isOpen={isThirdModalOpen}
        closePreviousOnOpen={true}
        handleClose={handleCloseThirdModal}
        modalClasse={`modal`}
        escapeClose={true}
        enableCloseIconClick={true}
        closeOnClickOutside={true}
        title="Titre de la Modal"
        content={<p>je suis la troisième et dernière modal !!! </p>}
        disableScroll={true}
        centeredModal={true}
        closeClass={`customClose`}
        fadeDurationOverlay={0}
        fadeDelayOverlay={0}
        fadeDurationModal={0}
        fadeDelayModal={0}
      />
    </>
  );
}

export default Demo;
