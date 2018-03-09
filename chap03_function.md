* about function in javascript:

```javascript
   // expression
   let a = function(b) {
     console.log(b * 2);
   };

   // declaration (tradition way)
   function a(b) {
     console.log(b * 2);
   }

   // arrow (new from ES6)
   let a = b => b * 2;  
   let a = (b) => b * 2;
   let a = (b,c) => b * c;
   let a = () => console.log("arrow function");
```
