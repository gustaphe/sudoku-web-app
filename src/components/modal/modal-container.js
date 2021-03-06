import React from 'react';

import ModalNoInitialDigits from './modal-no-initial-digits';
import ModalInvalidInitialDigits from './modal-invalid-initial-digits';
import ModalAbout from './modal-about';
import ModalConfirmRestart from './modal-confirm-restart';
import ModalConfirmClearColorHighlights from './modal-confirm-clear-color-highlights'
import ModalCheckResult from './modal-check-result';
import ModalPaused from './modal-paused';
import ModalPaste from './modal-paste';
import ModalShare from './modal-share';
import ModalSettings from './modal-settings';
import HelpPage from '../help/help';

import "./modal.css";

const stopPropagation = (e) => e.stopPropagation();

function ModalBackdrop() {
    return (
        <div className="modal-backdrop" />
    );
}

export default function ModalContainer({modalState, modalHandler}) {
    let content = null;
    if (!modalState) {
        return null;
    }
    if (modalState.modalType === 'no-initial-digits') {
        content = <ModalNoInitialDigits modalState={modalState} modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'invalid-initial-digits') {
        content = <ModalInvalidInitialDigits modalState={modalState} modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'paste') {
        content = <ModalPaste modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'about') {
        content = <ModalAbout modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'share') {
        content = <ModalShare modalState={modalState} modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'settings') {
        content = <ModalSettings modalState={modalState} modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'confirm-restart') {
        content = <ModalConfirmRestart modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'confirm-clear-color-highlights') {
        content = <ModalConfirmClearColorHighlights modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'check-result') {
        content = <ModalCheckResult modalState={modalState} modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'paused') {
        content = <ModalPaused modalState={modalState} modalHandler={modalHandler} />;
    }
    else if (modalState.modalType === 'help') {
        content = <HelpPage modalHandler={modalHandler} />;
    }
    else {
        console.log('<Modal />: Unhandled modalState:', modalState);
    }
    if (content) {
        return <>
            <ModalBackdrop />
            <div className="modal-container" onMouseDown={stopPropagation}>
                {content}
            </div>
        </>;
    };
    return null;
}
