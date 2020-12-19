//KaTeX
//https://github.com/KaTeX/KaTeX
//https://en.wikipedia.org/wiki/TeX



//https://katex.org/docs/options.html
//https://github.com/MatejBransky/react-katex
//This thing works

import React from 'react';
import ReactDOM from 'react-dom';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

/*
Place to call
<div>
      <FeMathText math_statement='2^3'>math component here</FeMathText>
      <FeMathText math_statement='\int_0^\infty x^2 dx'>math component here</FeMathText>
      <FeMathText math_statement='g(x) = \frac{2x-1}{5}'>math component here</FeMathText>
      <TeX>This    is    inline math \int_0^\infty x^2 dx</TeX>
      <FeMathText math_statement = 'g(x) = (\frac{2x-1}{5})^2'></FeMathText>
      <FeMathText math_statement = {varPiecewise}></FeMathText>
*/
class FeMathText extends React.Component 
{
    constructor() 
    {
        super();
    }
    
    render() 
    {
        return <TeX math= {this.props.math_statement} block /> ;
        //return (<TeX>This    is    inline math \int_0^\infty x^2 dx</TeX>) ;
    }
}


export default FeMathText;
