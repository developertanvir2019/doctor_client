import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner.js/AppointmentBanner';
import Available from '../Available/Available';

const Apoinment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <Available selected={selected}></Available>
        </div>
    );
};

export default Apoinment;