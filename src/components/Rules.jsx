import React from 'react';

export default function Rules() {
    return(
        <div className="rules">
            <ul>
                <li>The 'X' means a number is correct in value and position</li>
                <li>Underscore '_' means a number is correct in value but it is not in the right position</li>
                <li>The number must have 4 digits only. Numbers not allowed: 12345. Numbers allowed: 1234.</li>
                <li>Each digit must be different from the rest. Numbers not allowed 1223, 1788, etc</li>
            </ul>
        </div>
    )
}