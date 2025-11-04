/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import {useMemo} from 'react';
import React from 'react';

const UseEnv = (factory, deps) => {
    return useMemo(() => ({
        getForm:import.meta.env.VITE_GETFORM_URL
    }), deps)
};

export default UseEnv;