import React from 'react';

const ConfirmModal = ({ title, message, closeModal, success, modalData }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => success(modalData)} htmlFor="confirmModal" className="btn">Yay!</label>
                        <label onClick={closeModal} htmlFor="confirmModal" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;