import React from 'react'

let getNodes = str =>
   new DOMParser().parseFromString(str, "text/html").body.childNodes;
let createJSX = nodeArray => {
   return nodeArray.map(node => {
      let attributeObj = {};
      const {
         attributes,
         localName,
         childNodes,
         nodeValue
      } = node;
      if (attributes) {
         Array.from(attributes).forEach(attribute => {
            if (attribute.name === "style") {
               let styleAttributes = attribute.nodeValue.split(";");
               let styleObj = {};
               styleAttributes.forEach(attribute => {
                  let [key, value] = attribute.split(":");
                  styleObj[key] = value;
               });
               attributeObj[attribute.name] = styleObj;
            } else if (attribute.name === 'strokelinejoin') {
               attributeObj['strokeLinejoin'] = attribute.nodeValue;
            }
            else if (attribute.name === 'strokelinecap') {
               attributeObj['strokeLinecap'] = attribute.nodeValue;
            } else if (attribute.name === 'strokewidth') {
               attributeObj['strokeWidth'] = attribute.nodeValue;
            }
            else {
               attributeObj[attribute.name] = attribute.nodeValue;
            }
         });
      }
      console.log(
         attributeObj
      );
      return localName ?
         React.createElement(
            localName,
            { ...attributeObj, className: 'w-6 h-6 stroke-current' },
            childNodes && Array.isArray(Array.from(childNodes)) ?
               createJSX(Array.from(childNodes)) :
               []
         ) :
         nodeValue;
   });
};

export const StringToJSX = props => {
   return createJSX(Array.from(getNodes(props.domString)))[0];
};

let x = "<svg className='w-6 h-6 stroke-current' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' /></svg>"

