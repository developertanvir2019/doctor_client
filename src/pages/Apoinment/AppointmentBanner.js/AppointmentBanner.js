import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selected, setSelected }) => {

    return (
        <div>
            <div className="hero banner-part mb-14">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between px-14">
                    <img src={chair} className="rounded-lg shadow-2xl w-1/2" alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selected}
                            onSelect={setSelected}
                        >
                        </DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;