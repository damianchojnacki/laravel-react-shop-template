import React from 'react';
import LanguageService from '../utils/LanguageService';

function Text({id}) {
    return LanguageService.translate(id);
}

export default Text;
