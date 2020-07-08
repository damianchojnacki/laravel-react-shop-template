import React from 'react';
import image from '../../../images/404.png';

export default function NotFound(){
    return (
        <div className="text-center py-4">
            <img className="w-50" src={image} alt="404" />
            <h1 className="mt-5">Page not found</h1>
        </div>
    );
}
