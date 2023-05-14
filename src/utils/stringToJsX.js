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

