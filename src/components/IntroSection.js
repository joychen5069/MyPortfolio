import React from 'react';

function IntroSection(props) {
    return (
        <div className='row py-5 align-items-center intro-section' id={props.id}>
            <div className='col-8'>
                {props.children}
            </div>
            <div className='col-md-4'>
                <img 
                src='/images/headshot.jpg'
                alt='Headshot'
                className='img-fluid rounded-circle'
                style={{ maxWidth: '250px' }}
                />
            </div>
        </div>
    );
}

export default IntroSection;