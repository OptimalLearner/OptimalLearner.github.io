import React from 'react';
import { LoaderContainer, SVG, TextCopy } from './Loader.elements';

const Loader = () => {
    return (
        <div>
            <LoaderContainer>
                <SVG viewBox="0 0 960 300">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="50%"> LOADING. </text>
                    </symbol>
                    <g>
                        <use xlinkHref="#s-text"></use>
                        <use xlinkHref="#s-text"></use>
                        <use xlinkHref="#s-text"></use>
                        <use xlinkHref="#s-text"></use>
                        <use xlinkHref="#s-text"></use>
                    </g>
                </SVG>
            </LoaderContainer>
        </div>
    )
}

export default Loader;